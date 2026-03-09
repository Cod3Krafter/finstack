// File: src/mocks/handlers/transactions.ts
import { http, HttpResponse } from "msw";
import { mockTransactions } from "../data/transactions";

interface TransferBody {
  amount: number;
  recipient: string;
  note?: string;
}

export const transactionHandlers = [
  http.get("/api/transactions", () => {
    return HttpResponse.json({ data: mockTransactions, total: mockTransactions.length });
  }),

  http.post("/api/transfer", async ({ request }) => {
    const body = await request.json() as TransferBody;
    return HttpResponse.json({ success: true, reference: `FST${Date.now()}`, ...body });
  }),
];