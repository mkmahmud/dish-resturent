import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dish Restaurant",
  description: "Dish Restaurant is a place to discover the best Food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en" >
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
