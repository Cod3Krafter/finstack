import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, formatDistanceToNow } from "date-fns";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = "NGN"): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}


export const formatDate = (date: string) =>
  format(new Date(date), "dd MMM yyyy, h:mm a");

export const timeAgo = (date: string) =>
  formatDistanceToNow(new Date(date), { addSuffix: true });