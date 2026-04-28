import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "恒能数智 | 综合能碳管理平台 - 源网荷储协同优化",
  description:
    "恒能数智综合能碳管理平台，深度融合物联网、大数据与人工智能，实现源-网-荷-储协同优化与能碳一体化管理，助力企业绿色低碳转型。",
};

const coreModules = [
  {
    id: "monitoring",
    title: "智能监测",
    emoji: "📊",
    gradient: "from-blue-500 to-cyan-500",
    desc: "实时采集电站运行状态、设备健康度与能耗数据，多维可视化呈现，异常自动告警，支撑运维决策。",
  },
  {
    id: "generation",
    title: "发电管理",
    emoji: "☀️",
    gradient: "from-yellow-500 to-orange-500",
    desc: "覆盖风光等新能源发电全过程，监控发电效率、并网状态与出力曲线，优化发电资产运行策略。",
  },
  {
    id: "storage",
    title: "储能管理",
    emoji: "🔋",
    gradient: "from-green-500 to-teal-500",
    desc: "实现多元储能设备的统一接入与协同调度，动态管理充放电策略，最大化储能利用率与经济效益。",
  },
  {
    id: "load",
    title: "负荷管理",
    emoji: "⚡",
    gradient: "from-purple-500 to-indigo-500",
    desc: "构建用能画像，实现需求侧响应与柔性负荷精准调节，有效削峰填谷，降低综合用能成本。",
  },
];

const gridTechItems = [
  {
    key: "source",
    label: "源",
    sublabel: "Source",
    gradient: "from-yellow-400 to-orange-500",
    borderColor: "border-yellow-400/30",
    emoji: "☀️",
    title: "多能互补与友好并网",
    desc: "解决风、光等新能源出力的间歇性、波动性问题，通过多能互补与柔性并网控制，使新能源发电特性更“平滑”、更“可控”，提升系统消纳能力。",
  },
  {
    key: "grid",
    label: "网",
    sublabel: "Grid",
    gradient: "from-blue-400 to-blue-600",
    borderColor: "border-blue-400/30",
    emoji: "🔌",
    title: "智能柔性与数字电网",
    desc: "提升电网传输效率、感知能力和灵活调控能力，适应双向潮流变化，实现电力系统的数字化、智慧化升级，支撑高比例新能源接入。",
  },
  {
    key: "load",
    label: "荷",
    sublabel: "Load",
    gradient: "from-purple-400 to-purple-600",
    borderColor: "border-purple-400/30",
    emoji: "🏭",
    title: "需求侧响应与可调节负荷",
    desc: "将原本“刚性”的用电负荷转变为“柔性”可调节资源，通过精准预测与实时调度，实现削峰填谷、错峰用能，提升用能经济性。",
  },
  {
    key: "storage",
    label: "储",
    sublabel: "Storage",
    gradient: "from-green-400 to-teal-500",
    borderColor: "border-green-400/30",
    emoji: "🔋",
    title: "多元储能与协同调度",
    desc: "实现电池、液流、超级电容等多元储能的能量时空转移，提供快速功率支撑，是系统“稳定器”，有效平抑新能源波动与负荷突变。",
  },
];

const platformCapabilities = [
  {
    icon: "📡",
    title: "全域感知采集",
    desc: "支持电表、传感器、逆变器、边缘网关等多类型设备接入，实现能源数据全面采集。",
  },
  {
    icon: "🔮",
    title: "精准预测分析",
    desc: "融合气象数据、历史负荷与市场价格，提供发电量、负荷、电价的高精度预测。",
  },
  {
    icon: "🧠",
    title: "协同决策引擎",
    desc: "多目标协同优化算法，统筹考虑稳定性、经济性与绿电消纳，输出最优运行策略。",
  },
  {
    icon: "⚡",
    title: "调度执行优化",
    desc: "实时动态调度源网荷储各侧资源，自动优化运行策略，最大化经济效益与绿电消纳。",
  },
  {
    icon: "♻️",
    title: "能碳一体管理",
    desc: "打通能源流、数据流与碳流，支撑碳排核算、碳效分析与节能降碳全流程闭环管理。",
  },
  {
    icon: "📈",
    title: "可视化驾驶舱",
    desc: "多维度数据看板与报表，支持 PC 与大屏展示，为管理层提供实时决策支持。",
  },
];

const solutions = [
  {
    title: "新能源电站",
    icon: "🌞",
    desc: "风光储协同运营，提升绿电消纳率，优化并网策略",
    href: "/solutions#renewable",
  },
  {
    title: "工业园区",
    icon: "🏭",
    desc: "多能源统一管理，储能调度优化，降低综合用能成本",
    href: "/solutions#industrial",
  },
  {
    title: "工业企业",
    icon: "⚙️",
    desc: "能耗监测与柔性负荷调节，节能降本，支撑碳配额管理",
    href: "/solutions#enterprise",
  },
  {
    title: "楼宇建筑",
    icon: "🏢",
    desc: "分项计量与设备优化，实现建筑能效提升与低碳运营",
    href: "/solutions#building",
  },
];

const trustItems = [
  { value: "10+", label: "年能源数字化经验" },
  { value: "500+", label: "项目落地案例" },
  { value: "99.9%", label: "平台可用率" },
  { value: "20%+", label: "平均节能降本效果" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              源网荷储协同优化平台
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              恒能数智
              <br />
              <span className="text-gradient">综合能碳管理平台</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              深度融合物联网、大数据与人工智能技术，构建覆盖能源资产全生命周期的数字化管理体系，实现
              <strong className="text-white"> 源-网-荷-储 </strong>
              协同优化，最大化绿电消纳与经济效益。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                申请产品演示
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-200 text-base"
              >
                了解平台产品
              </Link>
            </div>
          </div>

          {/* Hero Metrics */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl p-4 lg:p-5"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-blue-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM CAPABILITIES ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              平台价值
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              能碳一体，协同优化
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从感知采集到协同决策，恒能数智构建能源管理全流程数字化闭环，让能源运营更透明、更高效、更低碳。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformCapabilities.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUR CORE MODULES ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              四大基础模块
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              全方位能源资产数字化管理
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              智能监测、发电管理、储能管理与负荷管理四大模块协同联动，为源网荷储运行提供数字化基础支撑。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreModules.map((mod) => (
              <div key={mod.id} className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mod.gradient} rounded-t-2xl`} />
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${mod.gradient} text-white mb-4 text-2xl`}>
                  {mod.emoji}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{mod.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{mod.desc}</p>
                <Link
                  href={`/platform#${mod.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  了解详情
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOURCE GRID LOAD STORAGE ===== */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4">
              核心技术
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              源 · 网 · 荷 · 储 协同优化
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              以"源-网-荷-储"协同为核心架构，融合四大技术方向，构建灵活、稳定、高效的新型能源管理体系。
            </p>
          </div>

          {/* Center Architecture */}
          <div className="flex justify-center mb-14">
            <div className="relative flex items-center justify-center">
              {/* Outer ring labels */}
              <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Center */}
                <div className="absolute inset-8 rounded-full bg-blue-900/80 border border-blue-500/40 flex flex-col items-center justify-center text-center p-4 z-10">
                  <div className="text-xs text-blue-300 font-medium">协同决策引擎</div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-1.5" />
                  <div className="text-xs text-blue-300 font-medium">调度优化系统</div>
                </div>

                {/* Four orbit nodes */}
                {[
                  { label: "源", color: "bg-yellow-500", top: "0%", left: "50%", transform: "translate(-50%, 0%)" },
                  { label: "网", color: "bg-blue-500", top: "50%", left: "100%", transform: "translate(-100%, -50%)" },
                  { label: "储", color: "bg-green-500", top: "100%", left: "50%", transform: "translate(-50%, -100%)" },
                  { label: "荷", color: "bg-purple-500", top: "50%", left: "0%", transform: "translate(0%, -50%)" },
                ].map((node) => (
                  <div
                    key={node.label}
                    className={`absolute w-14 h-14 ${node.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20`}
                    style={{ top: node.top, left: node.left, transform: node.transform }}
                  >
                    {node.label}
                  </div>
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 288">
                  <line x1="144" y1="28" x2="144" y2="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <line x1="260" y1="144" x2="198" y2="144" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <line x1="144" y1="260" x2="144" y2="198" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <line x1="28" y1="144" x2="90" y2="144" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Four technology cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridTechItems.map((item) => (
              <div key={item.key} className={`bg-gray-900/60 rounded-2xl p-6 border ${item.borderColor} card-hover`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 text-xl`}>
                  {item.emoji}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className={`text-3xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-400">{item.sublabel}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700/50 hover:bg-blue-700 border border-blue-500/50 text-white text-sm font-medium rounded-xl transition-all duration-200"
            >
              深入了解核心技术
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DECISION ENGINE ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                智能引擎
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                预测分析 · 协同决策 · 调度优化
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                基于气象数据、历史负荷与电力市场价格信号，平台协同决策引擎与调度决策引擎能够精准预测发电量、负荷曲线与电价走势，自动优化源荷储的运行策略，实现<strong>最大化绿电消纳与经济效益</strong>。
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "气象 + 负荷 + 市场三维预测",
                    desc: "融合多源数据，提供高精度短期与超短期预测",
                    color: "bg-blue-500",
                  },
                  {
                    title: "多目标协同优化算法",
                    desc: "同时满足系统稳定性、经济性与绿电消纳多目标",
                    color: "bg-green-500",
                  },
                  {
                    title: "实时动态调度执行",
                    desc: "秒级响应调整运行策略，适应快速变化的系统状态",
                    color: "bg-purple-500",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className={`w-2 h-2 rounded-full ${item.color} mt-2 shrink-0`} />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl p-8 shadow-xl">
              <div className="text-xs text-blue-400 mb-4 font-mono">// 决策引擎运行状态</div>
              <div className="space-y-4">
                {[
                  { label: "发电功率预测准确率", value: 96.8, color: "from-yellow-400 to-orange-400", max: 100 },
                  { label: "负荷预测准确率", value: 97.5, color: "from-blue-400 to-cyan-400", max: 100 },
                  { label: "储能充放电效率", value: 92.3, color: "from-green-400 to-teal-400", max: 100 },
                  { label: "绿电消纳提升率", value: 78.7, color: "from-purple-400 to-pink-400", max: 100 },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                      <span>{metric.label}</span>
                      <span className="text-white font-mono">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">系统实时运行中</span>
                <span className="ml-auto text-xs text-blue-400 font-mono">每 5 秒更新</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-4">
              应用场景
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              面向多种能源场景的行业解决方案
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              覆盖新能源电站、工业园区、工业企业与楼宇建筑等核心场景，提供开箱即用的行业解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  查看方案
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              查看全部解决方案
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔬", title: "技术驱动", desc: "深度融合 IoT、大数据与 AI 前沿技术" },
                { icon: "🌱", title: "绿色使命", desc: "助力企业实现节能降碳与双碳目标" },
                { icon: "🤝", title: "行业深耕", desc: "专注能源数字化领域超过 10 年" },
                { icon: "🚀", title: "快速落地", desc: "标准化产品与专业服务体系加速交付" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-4">
                关于恒能数智
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                专注能源数字化，驱动低碳转型
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                恒能数智聚焦能源数字化与能碳协同管理，致力于通过物联网、大数据与人工智能技术，为企业、园区及公共机构提供一体化综合能碳管理平台与解决方案。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                平台围绕能源资产全生命周期管理，打通采集、监测、分析、预警、优化与决策全流程，推动能源管理由粗放式向精细化、智能化转型，助力企业实现节能降本与低碳目标。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                了解更多关于我们
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            开启您的能源数字化之旅
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            填写申请表单，我们的解决方案专家将在 24 小时内与您联系，为您提供专属的产品演示与行业解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors text-base shadow-lg"
            >
              申请产品演示
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700/50 hover:bg-blue-700 border border-white/30 text-white font-semibold rounded-xl transition-colors text-base"
            >
              获取行业方案
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
