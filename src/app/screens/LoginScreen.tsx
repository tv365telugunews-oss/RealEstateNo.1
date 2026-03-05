import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '../components/ui/input';
import logo from '../../../assets/7b347ed7d36bd5219e6162f4684766c4fc8bcfb9.png';

export function LoginScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - go to home
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[390px] mx-auto">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6 mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 flex items-center justify-center">
            <img src={logo} alt="Real Estate No.1" className="w-full h-full object-contain" />
          </div>
        </div>
        <h1 className="text-white text-center text-xl font-bold font-['Poppins']">
          Welcome Back!
        </h1>
        <p className="text-white/80 text-center text-sm mt-2">
          Login to Real Estate No.1
        </p>
      </div>

      {/* Form */}
      <div className="px-6 flex-1">
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email/Phone Input */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Email or Phone Number <span className="text-[#CC0000]">*</span>
            </label>
            <Input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter email or phone"
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] rounded-lg"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Password <span className="text-[#CC0000]">*</span>
            </label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter password"
                className="w-full border-2 border-gray-300 focus:border-[#4A47A3] rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A47A3]"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-[#4A47A3] text-sm font-medium hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors shadow-lg"
          >
            Login
          </button>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#6B6B8A] opacity-30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#6B6B8A] font-medium">OR</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="w-full bg-white border-2 border-[#4A47A3] text-[#4A47A3] rounded-[10px] py-4 font-['Poppins'] font-medium hover:bg-[#4A47A3]/5 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-[#6B6B8A] mt-6">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-[#CC0000] font-medium hover:underline"
            >
              Register Now
            </button>
          </p>
        </form>
      </div>

      {/* Bottom Info */}
      <div className="px-6 py-6 text-center">
        <p className="text-[#6B6B8A] text-xs">
          By continuing, you agree to our{' '}
          <span className="text-[#4A47A3] font-medium hover:underline cursor-pointer">Terms of Service</span> and{' '}
          <span className="text-[#4A47A3] font-medium hover:underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}