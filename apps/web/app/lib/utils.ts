import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function ScrollToBottom() {
  window.scrollTo({
    top: GetScrollHeight(),
    behavior: "smooth"
  });
}

export function GetScrollHeight() {
  return document.body.scrollHeight;
}