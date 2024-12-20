import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const font = Hanken_Grotesk({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMS",
  description: "A Comprenhensive Healthcare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
