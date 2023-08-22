import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@twitter/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@twitter/api";
