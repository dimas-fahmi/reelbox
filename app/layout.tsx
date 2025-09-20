"use client";

import "@/src/ui/css/globals.tailwind.css";
import { interFont, poppinFont } from "@/src/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${poppinFont.variable} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
