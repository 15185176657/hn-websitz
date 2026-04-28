"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    scene: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-medium rounded-full mb-4 border border-white/20">
              联系我们
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              开启您的能源数字化之旅
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              填写以下表单，我们的解决方案专家将在
              <strong className="text-white"> 24 小时内</strong>
              与您联系，为您提供专属的产品演示与定制化解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  联系方式
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: "📞",
                      label: "销售热线",
                      value: "400-XXX-XXXX",
                      sub: "周一至周五 09:00 - 18:00",
                    },
                    {
                      icon: "📧",
                      label: "邮箱",
                      value: "contact@hengnengdz.com",
                      sub: "一般 24 小时内回复",
                    },
                    {
                      icon: "📍",
                      label: "总部地址",
                      value: "北京市海淀区中关村科技创新园",
                      sub: "欢迎预约到访",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">
                          {item.label}
                        </div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-500">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why contact */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">联系我们，您将获得</h3>
                <ul className="space-y-2.5">
                  {[
                    "1对1 产品演示（30-60 分钟）",
                    "行业定制解决方案",
                    "ROI 分析与价值评估报告",
                    "成功案例与参考资料",
                    "技术可行性评估",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                      <svg
                        className="w-4 h-4 text-green-400 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    提交成功！
                  </h3>
                  <p className="text-gray-600 mb-6">
                    感谢您的关注，我们的解决方案专家将在 24
                    小时内与您取得联系。
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        industry: "",
                        scene: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  >
                    再次提交
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    申请产品演示 / 获取解决方案
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="name"
                      >
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="您的姓名"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="company"
                      >
                        公司名称 <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="您的公司全称"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="phone"
                      >
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="手机号码"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="email"
                      >
                        邮箱地址
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="industry"
                      >
                        所属行业
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formState.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors bg-white"
                      >
                        <option value="">请选择行业</option>
                        <option>新能源电站</option>
                        <option>工业园区</option>
                        <option>制造企业</option>
                        <option>楼宇物业</option>
                        <option>政府/公共机构</option>
                        <option>综合能源服务商</option>
                        <option>其他</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="scene"
                      >
                        需求类型
                      </label>
                      <select
                        id="scene"
                        name="scene"
                        value={formState.scene}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors bg-white"
                      >
                        <option value="">请选择需求类型</option>
                        <option>申请产品演示</option>
                        <option>获取解决方案</option>
                        <option>商务合作</option>
                        <option>技术咨询</option>
                        <option>其他</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                      htmlFor="message"
                    >
                      需求描述
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="请简要描述您的业务场景与需求（选填）"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        提交中...
                      </span>
                    ) : (
                      "提交申请"
                    )}
                  </button>

                  <p className="text-xs text-gray-400 mt-3 text-center">
                    提交即代表您同意我们的隐私政策。您的信息将严格保密，仅用于本次业务咨询。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
