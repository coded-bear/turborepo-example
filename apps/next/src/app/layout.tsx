import "@/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/configs/site-config";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pl-PL">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <header></header>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
