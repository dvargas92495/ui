export type InnerPromise<T extends Promise<unknown>> = T extends Promise<
  infer R
>
  ? R
  : unknown;
