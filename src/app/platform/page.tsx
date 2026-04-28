import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "平台产品 | 恒能数智",
  description:
    "恒能数智综合能碳管理平台，集成智能监测、发电管理、储能管理、负荷管理四大基础模块及协同决策、调度优化两大智能引擎，实现能源全生命周期数字化管理。",
};

const modules = [
  {
    id: "monitoring",
    emoji: "📊",
    title: "智能监测",
    subtitle: "全域实时感知与可视化",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "多协议设备接入（Modbus、MQTT、IEC104、61850 等）",
      "实时采集电压、电流、功率、电量、温度等数百项参数",
      "设备健康度评估与寿命预测",
      "多维可视化驾驶舱与告警中心",
      "支持 PC、大屏、移动端多终端访问",
    ],
    value: "实现对电站运行状态、设备健康度及能耗数据的全面采集与实时可视化监控，帮助运维团队快速发现并处理异常，降低设备故障率，提升运维效率。",
  },
  {
    id: "generation",
    emoji: "☀️",
    title: "发电管理",
    subtitle: "新能源发电全过程优化",
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "风光发电单元实时监控与效率分析",
      "发电量统计、分析与考核",
      "并网状态监测与保护管理",
      "发电功率超短期与短期预测",
      "发电资产健康评估与运维工单",
    ],
    value: "覆盖风电、光伏等新能源发电资产全生命周期管理，有效监控发电效率与并网质量，通过精准预测辅助调度决策，提升绿电消纳率。",
  },
  {
    id: "storage",
    emoji: "🔋",
    title: "储能管理",
    subtitle: "多元储能协同调度",
    gradient: "from-green-500 to-teal-500",
    features: [
      "多类型储能（锂电、液流、超级电容等）统一接入",
      "SOC/SOH 实时监控与电池健康管理",
      "充放电策略动态优化（峰谷套利、平滑出力等）",
      "多储能系统协同调度",
      "储能经济性分析与收益核算",
    ],
    value: "实现多元储能设备的统一接入与智能调度，根据发电预测、负荷预测与电价信号动态调整充放电策略，最大化储能利用率与经济效益，提升系统稳定性。",
  },
  {
    id: "load",
    emoji: "⚡",
    title: "负荷管理",
    subtitle: "需求侧响应与柔性调节",
    gradient: "from-purple-500 to-indigo-500",
    features: [
      "用能画像构建与用电行为分析",
      "可调节负荷资源识别与注册",
      "需求侧响应策略制定与执行",
      "削峰填谷与错峰用能优化",
      "负荷预测与响应效果评估",
    ],
    value: "将原本“刚性”的用电负荷转变为“柔性”可调节资源，通过需求侧响应与精准调节实现削峰填谷，有效降低综合用能成本，提升系统调节能力。",
  },
];

const engines = [
  {
    id: "engine",
    emoji: "🧠",
    title: "协同决策引擎",
    gradient: "from-blue-600 to-indigo-700",
    desc: "采用多目标优化算法，综合考量系统稳定性、经济效益与绿电消纳等多维目标，在复杂约束条件下自动生成最优协同运行策略。支持多种优化模型切换，适应不同业务场景与市场规则。",
    points: [
      "多目标帕累托最优策略求解",
      "可配置优化目标权重与约束",
      "支持分钟级至日前策略生成",
      "策略回测与效果评估",
    ],
  },
  {
    id: "dispatch",
    emoji: "⚡",
    title: "调度决策引擎",
    gradient: "from-green-600 to-teal-700",
    desc: "基于气象预测、负荷预测与市场电价数据，实时动态调整源荷储各侧设备运行策略，秒级响应系统状态变化，实现从计划调度到实时控制的完整闭环。",
    points: [
      "气象 + 负荷 + 电价三维预测融合",
      "秒级实时调度指令下发",
      "异常状态自适应调整",
      "调度日志全程可追溯",
    ],
  },
];

const architecture = [
  { layer: "应用层", icon: "📱", items: ["发电管理", "储能管理", "负荷管理", "能碳管理", "决策驾驶舱"] },
  { layer: "引擎层", icon: "🧠", items: ["协同决策引擎", "调度决策引擎", "预测分析引擎", "告警诊断引擎"] },
  { layer: "平台层", icon: "☁️", items: ["数据治理", "实时计算", "历史存储", "碳数据管理"] },
  { layer: "接入层", icon: "🔌", items: ["IoT 接入", "协议适配", "边缘采集", "API 网关"] },
  { layer: "感知层", icon: "📡", items: ["电表", "传感器", "逆变器", "边缘网关", "储能设备"] },
];

export default function PlatformPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-medium rounded-full mb-4 border border-white/20">
              平台产品
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              综合能碳管理平台
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              以"源-网-荷-储"协同为核心，集成智能监测、发电管理、储能管理、负荷管理四大基础模块及协同决策、调度优化两大智能引擎，打造覆盖能源资产全生命周期的数字化管理体系。
            </p>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              平台架构
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              五层架构，全栈数字化
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从设备感知到业务应用，完整的五层架构体系确保数据采集、处理、分析与决策的高效流转。
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {[...architecture].reverse().map((layer, i) => (
              <div key={layer.layer} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 min-w-36">
                  <span className="text-2xl">{layer.icon}</span>
                  <span className="font-semibold text-gray-800 text-sm">{layer.layer}</span>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        i === 4
                          ? "bg-blue-100 text-blue-700"
                          : i === 3
                          ? "bg-green-100 text-green-700"
                          : i === 2
                          ? "bg-purple-100 text-purple-700"
                          : i === 1
                          ? "bg-orange-100 text-orange-700"
                          : "bg-teal-100 text-teal-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Core Modules */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              四大基础模块
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              覆盖能源管理全场景
            </h2>
          </div>

          <div className="space-y-12">
            {modules.map((mod, i) => (
              <div
                key={mod.id}
                id={mod.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${mod.gradient} text-white text-xs font-medium rounded-full mb-4`}>
                    <span>{mod.emoji}</span>
                    {mod.title}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{mod.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-4">{mod.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{mod.value}</p>
                  <ul className="space-y-2.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-10`} />
                  <div className="relative text-center">
                    <div className="text-7xl mb-6">{mod.emoji}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{mod.title}</h4>
                    <p className="text-gray-400 text-sm">{mod.subtitle}</p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[
                        { label: "实时数据点", value: "1000+" },
                        { label: "设备类型", value: "50+" },
                        { label: "响应时间", value: "<1s" },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Engines */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-4">
              智能引擎
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              两大决策引擎，驱动协同优化
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              协同决策引擎与调度决策引擎相辅相成，从策略规划到实时执行，构成平台智能调度的核心大脑。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engines.map((engine) => (
              <div
                key={engine.id}
                id={engine.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${engine.gradient} p-6 text-white`}>
                  <div className="text-3xl mb-3">{engine.emoji}</div>
                  <h3 className="text-xl font-bold">{engine.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-5">{engine.desc}</p>
                  <ul className="space-y-2.5">
                    {engine.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{p}</span>
                      </li>
                    ))}
                  </ul>
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
          <h2 className="text-3xl font-bold text-white mb-4">体验完整平台能力</h2>
          <p className="text-blue-100 mb-8">申请在线演示，了解平台如何为您的业务创造价值</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors shadow-lg"
          >
            申请产品演示
          </Link>
        </div>
      </section>
    </>
  );
}
