"use client";

import SideBar from "@/src/ui/components/SideBar";
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

        {/* Sidebar */}
        <SideBar />
      </body>
    </html>
  );
}
