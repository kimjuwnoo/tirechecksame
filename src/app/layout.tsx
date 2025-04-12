import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "타이어비즈 - 타이어 중개 플랫폼",
  description: "우리동네 타이어 중개 플랫폼 타이어비즈 한국타이어, 금호타이어, 넥센타이어 타이어 가격비교 최저가 검색",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
