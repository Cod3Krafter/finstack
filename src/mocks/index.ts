import { setupWorker } from "msw/browser";
import { authHandlers } from "./handlers/auth";
import { transactionHandlers } from "./handlers/transactions";

export const worker = setupWorker(...authHandlers, ...transactionHandlers);