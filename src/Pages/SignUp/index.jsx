import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
import Navbar from "../../components/Navbar";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setIsLoading(false);
      return;
    }
    
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully!');
    }, 1000);
  };

  return (
    <div className="background_second_main">
        <Navbar />
    <div className=" top-[10vh] background_second_main relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 fonty">
      <div className="w-full max-w-sm">
        {/* Simple header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-1 fonty">Create account</h1>
          <p className="text-gray-400 text-sm fonty">Join us today</p>
        </div>

        {/* Signup card */}
        <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
          <div className="space-y-4">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-300 mb-1 fonty">First name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors fonty"
                    placeholder="your name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1 fonty">Last name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors fonty"
                    placeholder="your lastname"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 fonty">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors fonty"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 fonty">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-9 pr-10 py-2.5 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors fonty"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 fonty">Confirm password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-9 pr-10 py-2.5 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors fonty"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input 
                type="checkbox" 
                className="w-3 h-3 rounded mt-1 flex-shrink-0" 
                required
              />
              <label className="text-gray-400 fonty">
                I agree to the <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a> and <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
              </label>
            </div>

            {/* Signup button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 fonty"
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-800 px-2 text-xs text-gray-500 fonty">or</span>
              </div>
            </div>

            {/* Social buttons */}
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/30 transition-colors text-sm fonty">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/30 transition-colors text-sm fonty">
                <div className="w-4 h-4 bg-gray-700 rounded-sm"></div>
                Continue with GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Sign in link */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm fonty">
            Already have an account? <Link to="/login" className="text-purple-400 hover:text-purple-300 fonty">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUpForm;