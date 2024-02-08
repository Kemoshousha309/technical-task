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
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className}  mx-20 max-sm:mx-2`} >
        {children}
      </body>
    </html>
  );
}
