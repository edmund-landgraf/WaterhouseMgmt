import { useEffect, useState } from "react";
import type { WaterhouseModel } from "@/lib/types";

type LoadState =
  | { status: "loading"; data: null; error: null }
  | { status: "ready"; data: WaterhouseModel; error: null }
  | { status: "error"; data: null; error: string };

export function useWaterhouse() {
  const [state, setState] = useState<LoadState>({ status: "loading", data: null, error: null });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch("/api/waterhouse", { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }
        const data = (await response.json()) as WaterhouseModel;
        setState({ status: "ready", data, error: null });
      } catch (error) {
        if (controller.signal.aborted) return;
        setState({
          status: "error",
          data: null,
          error: error instanceof Error ? error.message : "Unable to load Waterhouse data",
        });
      }
    }

    load();

    return () => controller.abort();
  }, []);

  return state;
}
