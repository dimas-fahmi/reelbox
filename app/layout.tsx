"use client";

import SideBar from "@/src/ui/components/SideBar";
import "@/src/ui/css/globals.tailwind.css";
import { interFont, poppinFont } from "@/src/ui/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        className={`dark ${poppinFont.variable} ${interFont.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          {children}

          {/* Sidebar */}
          <SideBar />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
