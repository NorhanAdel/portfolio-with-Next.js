import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "./context/AppContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: "Nurhan Adel | Full Stack Developer",
  description: "Portfolio of Nurhan Adel Sayed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden relative min-h-screen`}>
        <AppProvider>
          <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/15 dark:bg-purple-950/20 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="fixed bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-violet-900/10 dark:bg-violet-950/15 rounded-full blur-[130px] pointer-events-none z-0" />
          <main className="relative z-10">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}