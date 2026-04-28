import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "恒能数智 | 综合能碳管理平台",
    template: "%s | 恒能数智",
  },
  description:
    "恒能数智综合能碳管理平台，深度融合物联网、大数据与人工智能技术，构建覆盖能源资产全生命周期的数字化管理体系，实现源-网-荷-储协同优化与能碳一体化管理。",
  keywords:
    "综合能碳管理,源网荷储,智慧能源,能源数字化,碳管理,储能管理,发电管理,负荷管理,智能监测,恒能数智",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "恒能数智",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
