import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-5 h-5 text-white"
                >
                  <path
                    d="M6 22 L12 10 L18 16 L24 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="26" cy="6" r="3" fill="#00b894" />
                  <path
                    d="M4 26 h24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white">恒能数智</span>
                <span className="block text-xs text-blue-400">
                  综合能碳管理平台
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              深度融合物联网、大数据与人工智能技术，构建覆盖能源资产全生命周期的数字化管理体系，实现源-网-荷-储协同优化与能碳一体化管理。
            </p>
            <div className="flex gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900/50 rounded-full text-xs text-blue-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                物联网融合
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900/50 rounded-full text-xs text-blue-300">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                AI 驱动
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              平台产品
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "智能监测", href: "/platform#monitoring" },
                { label: "发电管理", href: "/platform#generation" },
                { label: "储能管理", href: "/platform#storage" },
                { label: "负荷管理", href: "/platform#load" },
                { label: "协同决策引擎", href: "/platform#engine" },
                { label: "调度优化系统", href: "/platform#dispatch" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              解决方案
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "新能源电站", href: "/solutions#renewable" },
                { label: "工业园区", href: "/solutions#industrial" },
                { label: "工业企业", href: "/solutions#enterprise" },
                { label: "楼宇建筑", href: "/solutions#building" },
                { label: "核心技术", href: "/technology" },
                { label: "关于我们", href: "/about" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              联系我们
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-gray-400">400-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-400">
                  contact@hengnengdz.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-gray-400">
                  北京市海淀区科技创新园
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              申请演示
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} 恒能数智科技有限公司 版权所有
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              隐私政策
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
