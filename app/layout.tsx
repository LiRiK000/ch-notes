import "./globals.css";

import { ConvexClientProvider } from "@/components/Providers/ConvexProvider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ModalProvider } from "@/components/Providers/ModalProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
  description:
    "A service for creating and maintaining your notes from CollaboraHub",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
  keywords: [
    "collaboration",
    "platform",
    "real-time",
    "document editing",
    "communication",
    "project management",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notes-theme"
            >
              <Toaster
                position="bottom-right"
                toastOptions={{
                  classNames: {
                    success:
                      "bg-green-500 dark:bg-green-500 text-black text-lg border-none",
                    error: "bg-red-500 text-white border-none text-lg",
                    loading:
                      "bg-[#eee] dark:bg-[#191919] text-black dark:text-white border-none text-lg",
                  },
                }}
              />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
