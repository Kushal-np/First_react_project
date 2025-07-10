import { useState } from "react";

const Data = [
  {
    id: 1,
    Question: "What kind of software does LUME build?",
    Answer:
      "LUME specializes in intelligent software platforms including AI-driven applications, cloud-native tools, automation systems, and developer-first APIs designed to scale with modern business needs.",
  },
  {
    id: 2,
    Question: "Is LUME suitable for startups or just enterprises?",
    Answer:
      "LUME is built for both. Our modular architecture and scalable design make it ideal for early-stage startups and large enterprises alike.",
  },
  {
    id: 3,
    Question: "Can I integrate LUME with existing systems?",
    Answer:
      "Yes. LUME's platforms offer flexible APIs and robust documentation, allowing seamless integration with existing software, tools, and workflows.",
  },
  {
    id: 4,
    Question: "Does LUME support AI and machine learning capabilities?",
    Answer:
      "Absolutely. LUME integrates AI/ML models into its platforms to enable smarter automation, better analytics, and personalized user experiences.",
  },
];

function Accordion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full relative bottom-15 background_second_main l max-w-4xl mx-auto mt-16 px-4">
      <div className="glass-card rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.1)] divide-y divide-white/10 overflow-hidden">
        {Data.map((data, index) => (
          <div key={data.id}>
            <div
              className="flex justify-between items-center px-6 py-5 cursor-pointer transition-colors hover:bg-white/5"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <h3 className="text-lg font-medium text-white fonty">
                {data.Question}
              </h3>
              <span className="text-[#38BDF8] text-xl font-bold">
                {selected === index ? "−" : "+"}
              </span>
            </div>

            {selected === index && (
              <div className="px-6 pb-6 text-[#CBD5E1] text-base fonty leading-relaxed transition-all duration-300">
                {data.Answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
