import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare , Sparkles } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <div className="background_second_main w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden fonty">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 px-6 py-12 mt-20">
        <div className="mx-auto w-[80%] max-w-[800px]">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight fonty">
              Get in Touch
            </h1>
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2 fonty">
              with LUME
            </div>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed fonty">
              Ready to transform your development experience? Let's build something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 md:p-12 rounded-3xl border border-gray-700/50 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
            <div className="absolute top-6 right-6">
             
            </div>

            <div className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 fonty">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm fonty"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group relative">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 fonty">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm fonty"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="group relative">
                <label className="block text-sm font-semibold text-gray-300 mb-2 fonty">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm fonty"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div className="group relative">
                <label className="block text-sm font-semibold text-gray-300 mb-2 fonty">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm resize-none fonty"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  disabled={isSubmitting}
                  className="group relative px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed fonty"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Fast Response",
                desc: "We'll get back to you within 24 hours",
                icon: <Sparkles className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Expert Team",
                desc: "Connect with our skilled developers",
                icon: <User className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Custom Solutions",
                desc: "Tailored to your specific needs",
                icon: <MessageSquare className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4 shadow-lg`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 fonty">{item.title}</h3>
                <p className="text-gray-300 fonty">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;