import { useNavigate } from 'react-router';
import { Phone, Home, Mail } from 'lucide-react';

export function RegisterScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto">
      {/* Blue Header */}
      <div className="bg-[#0088CC] py-6 flex justify-center items-center shadow-lg">
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-2xl font-bold text-[#CC0000] bg-white w-12 h-12 rounded-full flex items-center justify-center">
            1
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 font-['Poppins']">
          Choose Login Method
        </h2>

        <div className="space-y-4">
          {/* Phone Number Option */}
          <button
            onClick={() => navigate('/profile-setup')}
            className="w-full bg-white border-2 border-[#0088CC] rounded-xl p-5 flex items-center space-x-4 hover:bg-[#F8F9FA] transition-colors shadow-md"
          >
            <div className="w-12 h-12 bg-[#CC0000] rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#1A1A2E] font-medium font-['Poppins']">
              Enter with Phone Number
            </span>
          </button>

          {/* Address Option */}
          <button
            onClick={() => navigate('/profile-setup')}
            className="w-full bg-white border-2 border-[#0088CC] rounded-xl p-5 flex items-center space-x-4 hover:bg-[#F8F9FA] transition-colors shadow-md"
          >
            <div className="w-12 h-12 bg-[#D4A017] rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#1A1A2E] font-medium font-['Poppins']">
              Enter with Address
            </span>
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

          {/* Google Option */}
          <button
            onClick={() => navigate('/profile-setup')}
            className="w-full bg-white border-2 border-gray-300 rounded-xl p-5 flex items-center space-x-4 hover:bg-[#F8F9FA] transition-colors shadow-md"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span className="text-[#1A1A2E] font-medium font-['Poppins']">
              Continue with Google
            </span>
          </button>

          {/* Email Option */}
          <button
            onClick={() => navigate('/profile-setup')}
            className="w-full bg-white border-2 border-gray-300 rounded-xl p-5 flex items-center space-x-4 hover:bg-[#F8F9FA] transition-colors shadow-md"
          >
            <div className="w-12 h-12 bg-[#0088CC] rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#1A1A2E] font-medium font-['Poppins']">
              Continue with Email
            </span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm text-[#6B6B8A]">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-[#CC0000] font-medium cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}