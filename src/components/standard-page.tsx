import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, CheckCircle2, ClipboardList, Home, MapPinned } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { StandardPage } from "@/lib/page-content";

export function StandardPageContent({ page }: { page: StandardPage }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        icon={page.icon}
        sourceUrl={page.sourceUrl}
        summary={page.summary}
        title={page.title}
      />
      <section className="container grid gap-8 py-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ClipboardList className="h-4 w-4" />
                Primary Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {page.primaryActions.map((action) => (
                <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm" key={action}>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {action}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Page Standard</CardTitle>
              <CardDescription>Every rebuilt page begins with the same structure so content can be compared across business lines.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>1. Hero and source link</p>
              <p>2. Operating sections</p>
              <p>3. SaaS/app module map</p>
              <p>4. Contact CTA</p>
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Operating Structure</CardTitle>
              <CardDescription>Public page content normalized into repeatable operating blocks.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {page.sections.map((section) => (
                <div className="rounded-lg border border-border p-4" key={section.title}>
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{section.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Badge className="bg-background" key={item}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SaaS / Web App Components</CardTitle>
              <CardDescription>Functional systems that would support this page's real-world operation.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {page.appModules.map((module) => (
                <div className="rounded-lg border border-border p-4" key={module.name}>
                  <h3 className="font-semibold">{module.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{module.purpose}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {module.providers.map((provider) => (
                      <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground" key={provider}>
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function PageHero({
  eyebrow,
  icon: Icon,
  sourceUrl,
  summary,
  title,
}: {
  eyebrow: string;
  icon: LucideIcon;
  sourceUrl: string;
  summary: string;
  title: string;
}) {
  return (
    <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.14),transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <div className="max-w-4xl space-y-5">
          <Badge className="w-fit bg-white/80">{eyebrow}</Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-normal text-slate-950 md:text-6xl">{title}</h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg">{summary}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={sourceUrl} rel="noreferrer" target="_blank">
                Original Page
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
        <Card className="self-end bg-white/90">
          <CardHeader>
            <span className="grid h-12 w-12 place-items-center rounded-md bg-primary text-primary-foreground">
              <Icon className="h-6 w-6" />
            </span>
            <CardTitle>Identical Page Frame</CardTitle>
            <CardDescription>Same layout, different content. This keeps every Waterhouse service comparable.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="border-t border-border bg-muted/45">
      <div className="container grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-xl font-semibold">Contact Waterhouse Management Corp.</h2>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPinned className="h-4 w-4" />
              500 Giuseppe Ct Suite 2, Roseville CA 95678
            </span>
            <span>info@waterhousemgmt.com</span>
            <span>(916) 772-4918</span>
          </div>
        </div>
        <Button asChild variant="outline">
          <Link to="/contact">Contact Page</Link>
        </Button>
      </div>
    </section>
  );
}
