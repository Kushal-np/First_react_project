function AboutBody() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center background_second_main px-6 sm:px-10 lg:px-20 py-20">
      <div className="glass-card max-w-6xl mx-auto rounded-3xl p-10 sm:p-14 md:p-16 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.15)]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <span className="fonty text-sm sm:text-base px-4 py-2 bg-[#1E293B] text-[#38BDF8] rounded-full inline-block mb-4 shadow-inner">
              About LUME
            </span>

            <h2 className="fonty text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building the Future of Intelligent Software
            </h2>

            <p className="text-[#94A3B8] fonty text-base sm:text-lg mb-6 leading-relaxed">
              At LUME, we craft cutting-edge software solutions that transform how businesses operate, scale, and connect with users. From AI-powered platforms to intelligent automation systems, we turn complex challenges into intuitive digital experiences.
            </p>

            <p className="text-[#94A3B8] fonty text-base sm:text-lg mb-6 leading-relaxed">
              Whether you're a startup or an enterprise, our tools help you move faster, think smarter, and deliver better. We believe software should be smart, scalable, and human-centric.
            </p>

            <ul className="text-[#CBD5E1] fonty text-sm sm:text-base pl-5 list-disc space-y-2 mb-6">
              <li>Cloud-native platforms with built-in scalability</li>
              <li>AI/ML integration for smarter decision-making</li>
              <li>Developer-first APIs and seamless UX</li>
            </ul>

            <p className="text-[#38BDF8] fonty font-semibold text-base sm:text-lg">
              We don't just write code — we engineer digital evolution.
            </p>
          </div>

          {/* Illustration / Graphic */}
          <div className="flex-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1661320891334-e46de87e8467?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About LUME"
              className="w-full max-w-md mx-auto drop-shadow-lg rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
