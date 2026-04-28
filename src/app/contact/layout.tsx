import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 恒能数智",
  description:
    "联系恒能数智，申请综合能碳管理平台演示，获取行业定制解决方案。我们的专家团队将在24小时内与您联系。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
