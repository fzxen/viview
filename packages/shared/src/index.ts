import type { App } from "vue";

export type EnrichedSFC<T, U> = T & U & { install(app: App): void };

export * from "./options";
