import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "解决方案 | 恒能数智",
  description:
    "恒能数智提供新能源电站协同运营、工业园区源网荷储一体化、工业企业综合能碳管理、楼宇建筑智慧能碳等行业解决方案。",
};

const solutions = [
  {
    id: "renewable",
    emoji: "🌞",
    title: "新能源电站协同运营方案",
    label: "新能源电站",
    gradient: "from-yellow-500 to-orange-500",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
    painPoints: [
      "风光出力波动大，难以精准预测，频繁偏差考核影响收益",
      "发电、储能、负荷各系统独立运行，缺乏协同优化能力",
      "绿电消纳率低，大量弃风弃光造成收益损失",
      "设备运维依赖人工巡检，故障响应滞后，运维成本高",
    ],
    solution:
      "围绕新能源电站全生命周期，集成发电管理、储能管理与调度优化，形成源荷储协同的一体化运营体系，实现绿电消纳最大化与收益最优化。",
    capabilities: [
      "高精度风光发电功率超短期/短期预测",
      "风光储协同调度策略自动优化",
      "电站运行状态全天候实时监控",
      "设备预测性运维与健康管理",
      "发电量统计考核与收益分析",
    ],
    value: [
      { metric: "绿电消纳率", result: "提升 15-25%" },
      { metric: "运维人力成本", result: "降低 30%+" },
      { metric: "发电预测误差", result: "控制在 5% 以内" },
      { metric: "设备利用率", result: "提升 10%+" },
    ],
  },
  {
    id: "industrial",
    emoji: "🏭",
    title: "工业园区源网荷储一体化方案",
    label: "工业园区",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    painPoints: [
      "园区内多种能源（电、气、热、冷）独立管理，缺乏整体优化",
      "储能系统利用率低，峰谷套利收益未得到充分挖掘",
      "用电高峰超容量，需量电费居高不下",
      "碳排数据统计难，碳配额管理缺乏系统化工具",
    ],
    solution:
      "构建园区级源网荷储一体化数字化管理平台，实现多能互补协同、储能经济调度与园区碳管理，全面提升园区综合能效与低碳运营水平。",
    capabilities: [
      "园区多能源统一监测与管理",
      "光储联合调度与峰谷套利优化",
      "需量管理与需求侧响应",
      "综合能耗与碳排放实时核算",
      "零碳/低碳园区认证数据支撑",
    ],
    value: [
      { metric: "综合用能成本", result: "降低 15-20%" },
      { metric: "储能套利收益", result: "提升 25%+" },
      { metric: "峰值需量费用", result: "减少 20%+" },
      { metric: "碳排核算效率", result: "提升 80%" },
    ],
  },
  {
    id: "enterprise",
    emoji: "⚙️",
    title: "工业企业综合能碳管理方案",
    label: "工业企业",
    gradient: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    painPoints: [
      "能耗数据分散，缺乏统一管理平台，数据难以追溯和利用",
      "重点设备能耗不透明，节能潜力难以量化识别",
      "碳排放统计依赖人工，数据质量差，难以支撑 ESG 报告",
      "负荷刚性大，无法参与需求响应，缺乏灵活降费手段",
    ],
    solution:
      "以能耗监测为基础，构建工业企业能碳管理全链路数字化体系，实现从能源采集、分析、预警到节能优化的闭环管理，支撑双碳目标达成。",
    capabilities: [
      "分车间/工段/设备级能耗分项计量",
      "重点用能设备效率诊断与优化建议",
      "柔性负荷识别与需求响应策略",
      "碳排放实时核算与 MRV 管理",
      "节能目标分解与考核管理体系",
    ],
    value: [
      { metric: "综合能耗", result: "降低 10-15%" },
      { metric: "节能项目识别", result: "精准度提升 60%" },
      { metric: "碳核算工时", result: "减少 70%+" },
      { metric: "能源管理人效", result: "提升 3 倍+" },
    ],
  },
  {
    id: "building",
    emoji: "🏢",
    title: "楼宇建筑智慧能碳方案",
    label: "楼宇建筑",
    gradient: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-200",
    painPoints: [
      "空调、照明、电梯等系统各自独立，整体能效低下",
      "能耗数据无法分项计量，节能改造缺乏数据支撑",
      "楼宇物业对碳排核算能力薄弱，难以应对绿色建筑认证",
      "大型楼宇配备储能或光伏，但缺乏智能运营手段",
    ],
    solution:
      "构建楼宇级综合能碳管理系统，实现暖通空调、照明、电梯等系统的协同优化，结合光储一体化调度，全面提升楼宇能效与绿色运营水平。",
    capabilities: [
      "楼宇能源分项计量与可视化",
      "暖通空调智能节能控制",
      "光储系统协同调度优化",
      "绿色建筑与碳中和认证数据支撑",
      "租户分摊计费与能耗报告",
    ],
    value: [
      { metric: "楼宇综合能耗", result: "降低 15-25%" },
      { metric: "暖通空调费用", result: "节省 20%+" },
      { metric: "物业运维效率", result: "提升 40%" },
      { metric: "绿色认证达标", result: "周期缩短 50%" },
    ],
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "需求诊断",
    desc: "专业团队深入现场，全面了解您的能源管理现状、痛点与目标，输出定制化诊断报告。",
  },
  {
    step: "02",
    title: "方案设计",
    desc: "基于诊断结果，量身定制系统架构、功能配置与实施路径，明确价值交付目标。",
  },
  {
    step: "03",
    title: "部署实施",
    desc: "快速完成设备接入、系统部署与数据调试，标准化项目确保高效交付。",
  },
  {
    step: "04",
    title: "优化运营",
    desc: "持续优化算法与策略，定期提供运营分析报告，帮助持续挖掘节能与收益潜力。",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-medium rounded-full mb-4 border border-white/20">
              解决方案
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              面向多行业的能源数字化解决方案
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              基于恒能数智综合能碳管理平台，针对新能源电站、工业园区、工业企业与楼宇建筑等核心场景，提供经过验证的行业解决方案，快速实现降本增效与低碳目标。
            </p>
          </div>

          {/* Quick Nav */}
          <div className="mt-10 flex flex-wrap gap-3">
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium rounded-full transition-colors"
              >
                {s.emoji} {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <div className="bg-white">
        {solutions.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`section-padding ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
                <div
                  className={`inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r ${s.gradient} text-white rounded-xl text-lg font-bold`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  {s.label}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{s.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pain Points */}
                <div className={`${s.bgLight} rounded-2xl p-6 border ${s.borderColor}`}>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-red-500">🔴</span>
                    行业痛点
                  </h3>
                  <ul className="space-y-3">
                    {s.painPoints.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-400 mt-0.5">✕</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution & Capabilities */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span>💡</span>
                      解决方案
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.solution}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">核心功能</h3>
                    <ul className="space-y-2">
                      {s.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Value */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>📈</span>
                    应用价值
                  </h3>
                  <div className="space-y-4">
                    {s.value.map((v) => (
                      <div key={v.metric} className={`${s.bgLight} rounded-xl p-4 border ${s.borderColor}`}>
                        <div className="text-xs text-gray-500 mb-1">{v.metric}</div>
                        <div className="text-lg font-bold text-gray-900">{v.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Implementation Process */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4">
              实施路径
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              四步落地，快速见效
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              标准化的实施方法论与专业的项目管理体系，确保项目高效交付与价值快速兑现。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-hover">
                  <div className="text-4xl font-bold text-blue-500/30 mb-3 font-mono">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">获取专属解决方案</h2>
          <p className="text-blue-100 mb-8">
            告诉我们您的业务场景，我们的行业专家将为您量身定制最优方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors shadow-lg"
          >
            联系解决方案专家
          </Link>
        </div>
      </section>
    </>
  );
}
