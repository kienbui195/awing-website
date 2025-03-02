import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSectionName = (componentName: string) => {
  const sectionName = componentName.split(".")[1];

  const formattedName = sectionName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return [sectionName, formattedName];
};
