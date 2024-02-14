import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// enhance the seo
export const metadata: Metadata = {
  title: "Technical Task",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-slate-800 dark:text-white">
      <body suppressHydrationWarning={true} className={`${inter.className}  px-20 max-sm:px-5 `} >
        {children}
      </body>
    </html>
  );
}
