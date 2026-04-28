import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们 | 恒能数智",
  description:
    "恒能数智专注能源数字化与能碳协同管理，致力于通过物联网、大数据与人工智能技术，为企业、园区及公共机构提供一体化综合能碳管理平台与解决方案。",
};

const milestones = [
  {
    year: "2014",
    title: "公司成立",
    desc: "恒能数智在北京成立，专注能源物联网与数字化管理领域研发。",
  },
  {
    year: "2016",
    title: "首个能耗管理平台上线",
    desc: "成功为多家大型工业企业完成能耗管理平台部署，积累行业实践经验。",
  },
  {
    year: "2018",
    title: "布局综合能源管理",
    desc: "推出综合能源管理产品体系，扩展至园区、楼宇与新能源电站场景。",
  },
  {
    year: "2020",
    title: "能碳一体管理升级",
    desc: "双碳战略背景下，率先将碳管理深度融入能源管理体系，推出能碳一体平台。",
  },
  {
    year: "2022",
    title: "源网荷储协同平台发布",
    desc: "推出业内领先的源-网-荷-储协同优化平台，集成 AI 预测与多目标调度引擎。",
  },
  {
    year: "2024",
    title: "规模化商业落地",
    desc: "平台落地项目突破 500 个，覆盖新能源电站、工业园区、工业企业等核心场景。",
  },
];

const coreValues = [
  {
    emoji: "🎯",
    title: "专注",
    desc: "深耕能源数字化与能碳协同管理，持续专注做好一件事，成为行业最值得信赖的伙伴。",
  },
  {
    emoji: "🔬",
    title: "创新",
    desc: "以技术创新为驱动，持续探索 AI、物联网、大数据在能源领域的前沿应用与落地路径。",
  },
  {
    emoji: "🤝",
    title: "共赢",
    desc: "以客户价值为核心，构建开放合作生态，与客户、合作伙伴共同成长、共创价值。",
  },
  {
    emoji: "🌱",
    title: "绿色",
    desc: "以科技助力双碳目标，推动能源绿色转型，为建设美丽中国贡献数智力量。",
  },
];

const capabilities = [
  {
    icon: "🏆",
    title: "技术实力",
    items: [
      "拥有发明专利 50+ 项",
      "软件著作权 100+ 项",
      "国家高新技术企业认定",
      "ISO 9001 / ISO 27001 认证",
    ],
  },
  {
    icon: "👥",
    title: "团队构成",
    items: [
      "专业技术团队 200+ 人",
      "能源电力行业资深专家",
      "AI / 大数据核心技术团队",
      "物联网与边缘计算专家",
    ],
  },
  {
    icon: "🌐",
    title: "生态合作",
    items: [
      "与主流云平台深度合作",
      "多家能源集团战略合作",
      "国家电网生态合作伙伴",
      "行业头部设备商认证集成商",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-medium rounded-full mb-4 border border-white/20">
              关于我们
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              专注能源数字化，驱动低碳转型
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              恒能数智聚焦能源数字化与能碳协同管理，致力于通过物联网、大数据与人工智能技术，为企业、园区及公共机构提供一体化综合能碳管理平台与解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                公司简介
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                恒能数智是谁
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  恒能数智科技有限公司成立于 2014 年，是一家专注能源数字化与能碳协同管理的高新技术企业。公司以物联网、大数据与人工智能为核心技术底座，构建覆盖能源资产全生命周期的数字化管理体系。
                </p>
                <p>
                  经过十年深耕，公司形成了以"<strong className="text-gray-900">综合能碳管理平台</strong>"为核心，以"<strong className="text-gray-900">源-网-荷-储协同优化</strong>"为差异化能力的产品与服务体系，服务客户覆盖新能源电站、工业园区、工业企业、楼宇建筑等核心场景。
                </p>
                <p>
                  恒能数智秉持"以科技助力能源转型、以数智推进低碳发展"的使命，致力于成为中国能源数字化领域最值得信赖的创新平台服务商。
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "10+", label: "年行业深耕", icon: "📅" },
                { value: "500+", label: "成功落地项目", icon: "✅" },
                { value: "200+", label: "专业技术团队", icon: "👥" },
                { value: "50+", label: "发明专利", icon: "🏆" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">使命</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                以科技助力能源转型，以数智推进低碳发展，让每一度电都能被高效、清洁、智能地管理。
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-bold mb-3">愿景</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                成为中国能源数字化领域最值得信赖的综合能碳管理平台服务商，引领新型能源管理模式的变革与普及。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">价值观</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                专注 · 创新 · 共赢 · 绿色。以客户价值为核心，以技术创新为驱动，共建绿色能源生态。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              核心价值观
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              我们的经营理念
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-6 card-hover">
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              综合实力
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              为什么选择恒能数智
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                <ul className="space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4">
              发展历程
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              十年深耕，持续创新
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 transform -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex ${i % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
                >
                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full border-4 border-gray-900 z-10" />

                  <div className={`w-full lg:w-5/12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}`}>
                    <div className="text-2xl font-bold text-blue-400 font-mono mb-1">{m.year}</div>
                    <h3 className="text-lg font-bold text-white mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-400">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">与我们携手，共创能源数字化未来</h2>
          <p className="text-blue-100 mb-8">
            无论是产品合作、项目咨询还是人才加入，我们期待与您共同探索能源转型的无限可能。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors shadow-lg"
            >
              联系我们
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700/50 hover:bg-blue-700 border border-white/30 text-white font-semibold rounded-xl transition-colors"
            >
              了解平台产品
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
