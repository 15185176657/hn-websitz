import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "核心技术 | 恒能数智",
  description:
    "恒能数智源网荷储核心技术体系：多能互补友好并网、智能柔性数字电网、需求侧响应可调节负荷、多元储能协同调度，融合AI预测与多目标优化算法。",
};

const techItems = [
  {
    key: "source",
    label: "源",
    labelEn: "Source",
    emoji: "☀️",
    gradient: "from-yellow-400 to-orange-500",
    borderColor: "border-yellow-400/40",
    bgLight: "bg-yellow-50",
    title: "多能互补与友好并网技术",
    summary:
      "解决新能源（风光）的间歇性、波动性问题，使其发电特性更“平滑”、更“可控”。",
    details: [
      {
        subtitle: "多能互补协调控制",
        desc: "通过风、光、储、火等多种能源的互补协调，平抑单一能源的出力波动，形成更稳定、可预测的发电曲线，大幅提升新能源在电网中的渗透率。",
      },
      {
        subtitle: "友好并网控制技术",
        desc: "采用虚拟同步机技术与柔性并网控制策略，使新能源发电单元具备与传统同步机相近的惯性响应特性，满足电网对并网设备的高标准要求。",
      },
      {
        subtitle: "发电功率精准预测",
        desc: "融合气象数值预报、卫星云图与历史数据，构建高精度光伏/风电功率预测模型，为调度决策提供准确的输入数据，减少偏差考核。",
      },
    ],
  },
  {
    key: "grid",
    label: "网",
    labelEn: "Grid",
    emoji: "🔌",
    gradient: "from-blue-400 to-blue-700",
    borderColor: "border-blue-400/40",
    bgLight: "bg-blue-50",
    title: "智能柔性与数字电网技术",
    summary:
      "提升电网传输效率、感知能力和灵活调控能力，适应双向潮流变化。",
    details: [
      {
        subtitle: "电网数字化感知",
        desc: "通过全面部署智能传感器、智能表计与数字孪生技术，实现对电网运行状态的全面感知与高保真建模，为调度决策提供精准数字基础。",
      },
      {
        subtitle: "柔性潮流控制",
        desc: "采用 STATCOM、SVC、UPFC 等柔性交流输电技术，支持分布式能源的双向潮流接入，优化线路负载分布，提升输电效率与系统稳定性。",
      },
      {
        subtitle: "电网弹性调度",
        desc: "构建自动电压控制（AVC）与自动发电控制（AGC）系统，实现电网无功电压与有功频率的闭环自动调节，提升系统调节响应速度。",
      },
    ],
  },
  {
    key: "load",
    label: "荷",
    labelEn: "Load",
    emoji: "🏭",
    gradient: "from-purple-400 to-purple-700",
    borderColor: "border-purple-400/40",
    bgLight: "bg-purple-50",
    title: "需求侧响应与可调节负荷技术",
    summary:
      "将原本“刚性”的用电负荷转变为“柔性”可调节资源，实现“削峰填谷”。",
    details: [
      {
        subtitle: "用能画像与行为分析",
        desc: "基于电力大数据与机器学习算法，构建工业用户、楼宇及园区的精细化用能画像，识别可调节负荷资源，量化响应能力与响应时效。",
      },
      {
        subtitle: "柔性负荷聚合调度",
        desc: "将分散的可调节负荷资源进行聚合管理，通过虚拟电厂（VPP）架构统一参与电网调峰、调频，实现负荷侧资源的规模化价值变现。",
      },
      {
        subtitle: "需求响应全流程管理",
        desc: "从响应邀约、策略制定、下发执行到效果核验，形成需求侧响应的完整闭环管理，支持与电网调度系统的标准接口对接。",
      },
    ],
  },
  {
    key: "storage",
    label: "储",
    labelEn: "Storage",
    emoji: "🔋",
    gradient: "from-green-400 to-teal-600",
    borderColor: "border-green-400/40",
    bgLight: "bg-green-50",
    title: "多元储能与协同调度技术",
    summary:
      "实现能量时空转移，提供快速功率支撑，是系统的“稳定器”。",
    details: [
      {
        subtitle: "多类型储能统一管理",
        desc: "支持锂离子电池、液流电池、超级电容、飞轮储能等多种储能形式的统一接入与管理，通过统一的 BMS/EMS 接口实现跨类型协同控制。",
      },
      {
        subtitle: "储能经济调度优化",
        desc: "以经济性最优为目标，结合电价预测与负荷预测，自动规划充放电时段与功率，支持峰谷套利、容量费管理与调频收益多场景策略。",
      },
      {
        subtitle: "储能安全与寿命管理",
        desc: "通过电化学模型与数据驱动融合的 SOH 估算方法，实时监控储能系统健康状态，主动预防过充过放，延长电池使用寿命，降低全生命周期成本。",
      },
    ],
  },
];

const aiCapabilities = [
  {
    emoji: "🌦️",
    title: "气象预测融合",
    desc: "接入多源气象数值预报数据，结合 NWP 模型与历史气象统计，输出高精度光照与风速预测，支撑发电量精准预测。",
  },
  {
    emoji: "📈",
    title: "负荷预测引擎",
    desc: "采用深度学习（LSTM/Transformer）时间序列模型，融合气温、日历、行为特征，实现分钟级至月度负荷高精度预测。",
  },
  {
    emoji: "💰",
    title: "电价信号分析",
    desc: "实时解析现货市场、中长期合约与辅助服务电价信号，为储能套利与需求响应提供精准经济边界。",
  },
  {
    emoji: "🎯",
    title: "多目标优化算法",
    desc: "集成遗传算法、粒子群优化与强化学习，在复杂约束下求解源荷储协同运行的帕累托最优策略。",
  },
  {
    emoji: "🔄",
    title: "实时滚动优化",
    desc: "基于模型预测控制（MPC）框架，以 5 分钟为滚动周期动态刷新调度计划，适应预测偏差与实时扰动。",
  },
  {
    emoji: "🛡️",
    title: "故障预测与诊断",
    desc: "融合振动、温度、电气参数等多维数据，建立设备健康基线，提前识别潜在故障，实现从预防性维护向预测性运维的跨越。",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-medium rounded-full mb-4 border border-white/20">
              核心技术
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              源网荷储核心技术体系
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              围绕"源-网-荷-储"四大技术方向，融合人工智能与多目标优化算法，构建新型能源管理的技术底座，支撑电力系统的安全、高效与低碳运行。
            </p>
          </div>
        </div>
      </section>

      {/* Four Tech Areas */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              技术架构
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              四大技术方向，协同构建新型能源体系
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              每个技术方向既相对独立，又通过平台协同引擎深度融合，共同支撑能源系统的高效稳定运行。
            </p>
          </div>

          <div className="space-y-16">
            {techItems.map((tech, i) => (
              <div
                key={tech.key}
                id={tech.key}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Label Block */}
                <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`bg-gradient-to-br ${tech.gradient} rounded-2xl p-8 text-center text-white`}>
                    <div className="text-5xl mb-4">{tech.emoji}</div>
                    <div className="text-6xl font-bold opacity-90 mb-1">{tech.label}</div>
                    <div className="text-sm opacity-75 font-medium tracking-widest">{tech.labelEn}</div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-9 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-5">{tech.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tech.details.map((d) => (
                      <div key={d.subtitle} className={`${tech.bgLight} rounded-xl p-5 border ${tech.borderColor}`}>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">{d.subtitle}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4">
              AI 能力
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI 驱动的预测与优化能力
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              以深度学习、强化学习与多目标优化为核心，为平台决策提供智能化大脑。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-hover"
              >
                <div className="text-3xl mb-4">{cap.emoji}</div>
                <h3 className="text-base font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">了解技术如何落地</h2>
          <p className="text-blue-100 mb-8">
            探索恒能数智技术在不同行业场景中的落地案例与最佳实践
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors shadow-lg"
            >
              查看解决方案
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700/50 hover:bg-blue-700 border border-white/30 text-white font-semibold rounded-xl transition-colors"
            >
              联系技术团队
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
