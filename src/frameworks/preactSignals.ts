import { ReactiveFramework } from "../util/reactiveFramework";
import { batch, computed, effect, signal } from "@preact/signals";

export const preactSignalFramework: ReactiveFramework = {
  name: "Preact Signals",
  signal: (initialValue) => {
    const s = signal(initialValue);
    return {
      write: (v) => (s.value = v),
      read: () => s.value,
    };
  },
  computed: (fn) => {
    const c = computed(fn);
    return {
      read: () => c.value,
    };
  },
  run: () => {},
  effect,
  withBatch: batch,
  withBuild: (fn) => fn(),
};
