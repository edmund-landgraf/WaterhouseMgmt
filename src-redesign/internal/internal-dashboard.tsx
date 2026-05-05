import { FormEvent, ReactNode, useMemo, useState } from "react";
import { BookOpen, FileText, LogIn, LogOut, Search, ShieldCheck } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const INTERNAL_SESSION_KEY = "waterhouse-internal-session";
const ADMIN_PASSWORD = "waterhouse-admin";

type InternalDoc = {
  id: string;
  title: string;
  filename: string;
  content: string;
};

const docsByPath = import.meta.glob<string>("../../docs/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const internalDocs: InternalDoc[] = Object.entries(docsByPath)
  .map(([path, content]) => {
    const filename = path.split("/").pop() ?? path;
    return {
      id: filename.replace(/\.md$/i, "").toLowerCase(),
      title: getDocTitle(filename, content),
      filename,
      content,
    };
  })
  .sort((first, second) => {
    if (first.filename === "README.md") return -1;
    if (second.filename === "README.md") return 1;
    return first.title.localeCompare(second.title);
  });

function getDocTitle(filename: string, content: string) {
  const heading = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (heading) return heading;
  return filename
    .replace(/\.md$/i, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function hasInternalSession() {
  return window.localStorage.getItem(INTERNAL_SESSION_KEY) === "active";
}

function setInternalSession() {
  window.localStorage.setItem(INTERNAL_SESSION_KEY, "active");
}

function clearInternalSession() {
  window.localStorage.removeItem(INTERNAL_SESSION_KEY);
}

export function InternalLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (hasInternalSession()) {
    return <Navigate to="/internal" replace />;
  }

  function enterDashboard() {
    setInternalSession();
    navigate("/internal", { replace: true });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.trim() === ADMIN_PASSWORD) {
      enterDashboard();
      return;
    }
    setError("Password not recognized.");
  }

  return (
    <section className="internal-login">
      <div className="internal-login-card">
        <div className="internal-login-mark">
          <ShieldCheck size={28} />
        </div>
        <p className="portal-kicker">Waterhouse Internal</p>
        <h1>Admin access</h1>
        <p>Managers and IT admins can review private implementation notes and operating documentation.</p>

        <form className="portal-form" onSubmit={handleSubmit}>
          <label>
            Password
            <span>
              <ShieldCheck size={18} />
              <input
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                placeholder="Internal password"
                type="password"
                value={password}
              />
            </span>
          </label>
          <button className="portal-primary-action" type="submit">
            <LogIn size={18} />
            Sign in
          </button>
          <button className="internal-test-action" onClick={enterDashboard} type="button">
            Use test user
          </button>
        </form>

        {error && <p className="internal-login-error">{error}</p>}
      </div>
    </section>
  );
}

export function InternalDashboard() {
  const navigate = useNavigate();
  const [selectedDocId, setSelectedDocId] = useState(internalDocs[0].id);
  const [query, setQuery] = useState("");

  if (!hasInternalSession()) {
    return <Navigate to="/internal/login" replace />;
  }

  const selectedDoc = internalDocs.find((doc) => doc.id === selectedDocId) ?? internalDocs[0];
  const visibleDocs = internalDocs.filter((doc) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return true;
    return `${doc.title} ${doc.filename}`.toLowerCase().includes(normalizedQuery);
  });

  function signOut() {
    clearInternalSession();
    navigate("/internal/login", { replace: true });
  }

  return (
    <section className="internal-dashboard">
      <aside className="internal-nav">
        <div>
          <p className="portal-kicker">Waterhouse Internal</p>
          <h1>Admin Dashboard</h1>
          <p>Docs</p>
        </div>

        <div className="internal-module-list">
          <button className="is-active" type="button">
            <BookOpen size={18} />
            Docs
          </button>
        </div>

        <button className="internal-signout" onClick={signOut} type="button">
          <LogOut size={17} />
          Sign out
        </button>
      </aside>

      <div className="internal-docs-shell">
        <header className="internal-docs-header">
          <div>
            <p className="portal-kicker">Internal Markdown Viewer</p>
            <h2>Docs</h2>
          </div>
          <div className="internal-doc-search">
            <Search size={18} />
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search docs"
              type="search"
              value={query}
            />
          </div>
        </header>

        <div className="internal-docs-grid">
          <nav className="internal-doc-list" aria-label="Internal documents">
            {visibleDocs.map((doc) => (
              <button
                className={doc.id === selectedDoc.id ? "is-active" : ""}
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                type="button"
              >
                <FileText size={17} />
                <span>
                  <strong>{doc.title}</strong>
                  <em>{doc.filename}</em>
                </span>
              </button>
            ))}
          </nav>

          <article className="markdown-viewer">
            <div className="markdown-viewer-title">
              <span>{selectedDoc.filename}</span>
            </div>
            <MarkdownContent content={selectedDoc.content} />
          </article>
        </div>
      </div>
    </section>
  );
}

function MarkdownContent({ content }: { content: string }) {
  const blocks = useMemo(() => renderMarkdown(content), [content]);
  return <div className="markdown-content">{blocks}</div>;
}

function renderMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let code: string[] = [];
  let inCode = false;

  function flushParagraph() {
    if (!paragraph.length) return;
    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(paragraph.join(" "))}</p>);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`}>
        {list.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    list = [];
  }

  function flushCode() {
    if (!code.length) return;
    blocks.push(<pre key={`code-${blocks.length}`}>{code.join("\n")}</pre>);
    code = [];
  }

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        inCode = true;
      }
      return;
    }

    if (inCode) {
      code.push(line);
      return;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const text = renderInline(heading[2]);
      if (level === 1) blocks.push(<h1 key={`h-${blocks.length}`}>{text}</h1>);
      if (level === 2) blocks.push(<h2 key={`h-${blocks.length}`}>{text}</h2>);
      if (level === 3) blocks.push(<h3 key={`h-${blocks.length}`}>{text}</h3>);
      if (level >= 4) blocks.push(<h4 key={`h-${blocks.length}`}>{text}</h4>);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      return;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^\d+\.\s+/, ""));
      return;
    }

    if (/^---+$/.test(trimmed)) {
      flushParagraph();
      flushList();
      blocks.push(<hr key={`hr-${blocks.length}`} />);
      return;
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  flushCode();

  return blocks;
}

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      return (
        <a href={link[2]} key={`${part}-${index}`} rel="noreferrer" target="_blank">
          {link[1]}
        </a>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}
