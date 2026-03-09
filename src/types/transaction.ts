export type TransactionType = "credit" | "debit";
export type TransactionCategory = "transfer" | "bills" | "airtime" | "salary" | "withdrawal";
export type TransactionStatus = "successful" | "pending" | "failed";

export interface Transaction {
  id: string;
  reference: string;
  type: TransactionType;
  category: TransactionCategory;
  amount: number;
  currency: "NGN";
  description: string;
  counterparty: string;
  balanceAfter: number;
  createdAt: string;
  status: TransactionStatus;
}

export interface BankAccount {
  id: string;
  accountNumber: string;
  accountName: string;
  balance: number;
  currency: "NGN";
  bank: string;
}