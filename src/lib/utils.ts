import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export function toSnakeCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "_");
}
