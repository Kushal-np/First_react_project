import { useState } from "react";
import { ChevronDown, Zap, Code, Brain, Rocket, Users, Building, Sparkles, Star } from "lucide-react";

const tabs = ["Core", "Developer", "AI"];
const features = {
  Core: [
    { title: "Cloud Sync", desc: "Seamlessly sync data between cloud and edge with lightning-fast performance.", icon: <Zap className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { title: "Real-Time Logic", desc: "Immediate control flow changes with zero-latency response times.", icon: <Sparkles className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
  ],
  Developer: [
    { title: "API Toolkit", desc: "Fully documented developer APIs with interactive playground.", icon: <Code className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { title: "Quickstart CLI", desc: "Spin up production-ready projects in seconds, not hours.", icon: <Rocket className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
  ],
  AI: [
    { title: "Smart Orchestration", desc: "AI-powered workflows with intelligent auto-tuning capabilities.", icon: <Brain className="w-6 h-6" />, color: "from-violet-500 to-purple-500" },
    { title: "Predictive Logic", desc: "Forecast performance bottlenecks and optimize runtime automatically.", icon: <Star className="w-6 h-6" />, color: "from-pink-500 to-rose-500" },
  ],
};

const useCases = ["Startups", "SaaS Teams", "Enterprise"];
const useCaseFeatures = {
  Startups: "Fast launch tools with minimal cost and maximum impact for rapid growth.",
  "SaaS Teams": "Scalable APIs and analytics integration for seamless user experiences.",
  Enterprise: "Enterprise-grade security, authentication, and cloud control solutions."
};

const modularFAQs = [
  { id: 1, Question: "What does modular mean in LUME?", Answer: "It means you use only what you need — nothing extra. Our modular architecture lets you pick and choose components that fit your specific use case, reducing bloat and maximizing performance." },
  { id: 2, Question: "Can I add modules later?", Answer: "Absolutely! Our plug-and-play architecture lets you scale effortlessly. Add new modules, integrate third-party services, or build custom extensions without breaking existing functionality." },
  { id: 3, Question: "How does LUME compare to other platforms?", Answer: "LUME combines the best of all worlds: the simplicity of no-code platforms, the power of full-stack frameworks, and the intelligence of AI-driven optimization." }
];

function FeaturesTab() {
  const [activeTab, setActiveTab] = useState("Core");
  const [useCase, setUseCase] = useState("Startups");
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="background_second_main min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden fonty">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 px-6 py-12 mt-20 fonty">
        <div className="mx-auto w-[80%] max-w-[1340px]">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight fonty">
              Unlock the Power of
            </h1>
            <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2 fonty">
              Smart Software
            </div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fonty">
              Everything you need to build faster, smarter, and infinitely scalable applications. Experience the future of development with LUME.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg fonty transition-all duration-500 hover:scale-105 ${activeTab === tab ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-2 border-purple-500/50 shadow-lg shadow-purple-500/25" : "text-gray-300 border-2 border-gray-700 hover:border-gray-500 hover:bg-gray-800/30"}`}
              >
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            {features[activeTab].map((feat, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feat.color} mb-6 shadow-lg`}>
                    <div className="text-white">{feat.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 fonty">
                    {feat.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg fonty">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

<div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-8 fonty">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect for Every Team
              </span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              {useCases.map((uc) => (
                <button
                  key={uc}
                  onClick={() => setUseCase(uc)}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg fonty transition-all duration-500 hover:scale-105 ${useCase === uc ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border-2 border-blue-500/50 shadow-lg shadow-blue-500/25" : "text-gray-300 border-2 border-gray-700 hover:border-gray-500 hover:bg-transparent"}`}
                >
                  <span className="relative z-10 flex items-center gap-2 fonty">
                    {uc === "Startups" && <Rocket className="w-5 h-5" />}
                    {uc === "SaaS Teams" && <Users className="w-5 h-5" />}
                    {uc === "Enterprise" && <Building className="w-5 h-5" />}
                    {uc}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative max-w-4xl mx-auto">
              <p className="text-gray-200 text-xl leading-relaxed bg-transparent p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm fonty">
                {useCaseFeatures[useCase]}
              </p>
            </div>
          </div>

<div className="relative bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-3xl p-8 max-w-6xl mx-auto mb-20 border border-gray-700/30 backdrop-blur-md">
  <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent fonty">
    Powered by Modern Tech Stack
  </h3>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "UI Layer",
        desc: "React + Tailwind + Framer Motion",
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Cloud & AI",
        desc: "Node.js, Python, TensorFlow",
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "API & Infra",
        desc: "REST, GraphQL, Docker, Kubernetes",
        color: "from-purple-500 to-pink-500",
      },
    ].map((tech, idx) => (
      <div
        key={idx}
        className="group text-center p-6 rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-700/20 to-gray-600/10 backdrop-blur-sm"
      >
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.color} bg-opacity-30 mb-4`}>
          <div className="w-6 h-6 bg-white/10 rounded" />
        </div>
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 fonty">
          {tech.title}
        </h4>
        <p className="text-gray-300 fonty">{tech.desc}</p>
      </div>
    ))}
  </div>
</div>




          <div className="text-center mt-20">
            <div className="relative inline-block">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-xl text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 fonty">
                <span className="relative z-10">Get Started with LUME</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesTab;
