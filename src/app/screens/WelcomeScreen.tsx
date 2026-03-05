import { useNavigate } from 'react-router';
import logo from '../../../assets/7b347ed7d36bd5219e6162f4684766c4fc8bcfb9.png';

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-8 max-w-[390px] mx-auto">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Logo Image */}
        <div className="w-48 h-48 flex items-center justify-center mb-6">
          <img src={logo} alt="Real Estate No.1" className="w-full h-full object-contain" />
        </div>
        
        {/* Tagline */}
        <p className="text-sm text-[#6B6B8A] text-center">
          Hyderabad's Most Trusted Property Platform
        </p>
      </div>

      {/* Hyderabad Skyline Illustration */}
      <div className="w-full mb-12">
        <svg viewBox="0 0 390 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* HITEC City Buildings */}
          <rect x="20" y="40" width="30" height="80" fill="#4A47A3" opacity="0.3" rx="2"/>
          <rect x="55" y="25" width="25" height="95" fill="#4A47A3" opacity="0.4" rx="2"/>
          <rect x="85" y="50" width="35" height="70" fill="#4A47A3" opacity="0.3" rx="2"/>
          
          {/* Charminar Silhouette */}
          <g transform="translate(180, 30)">
            <rect x="0" y="50" width="50" height="70" fill="#D4A017" opacity="0.4" rx="2"/>
            <polygon points="5,50 15,30 25,50" fill="#D4A017" opacity="0.6"/>
            <polygon points="25,50 35,30 45,50" fill="#D4A017" opacity="0.6"/>
            <rect x="8" y="25" width="8" height="30" fill="#D4A017" opacity="0.5"/>
            <rect x="34" y="25" width="8" height="30" fill="#D4A017" opacity="0.5"/>
          </g>
          
          {/* More Buildings */}
          <rect x="260" y="35" width="30" height="85" fill="#4A47A3" opacity="0.35" rx="2"/>
          <rect x="295" y="55" width="25" height="65" fill="#4A47A3" opacity="0.3" rx="2"/>
          <rect x="325" y="45" width="35" height="75" fill="#4A47A3" opacity="0.4" rx="2"/>
        </svg>
      </div>

      {/* Buttons */}
      <div className="w-full space-y-4 mb-8">
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium shadow-lg hover:bg-[#b30000] transition-colors"
        >
          Login
        </button>
        
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-white text-[#4A47A3] py-4 rounded-[10px] border-2 border-[#4A47A3] font-['Poppins'] font-medium hover:bg-[#4A47A3] hover:text-white transition-colors"
        >
          Register
        </button>
      </div>

      {/* Terms Text */}
      <p className="text-[11px] text-[#6B6B8A] text-center px-4">
        By continuing you agree to our{' '}
        <span className="text-[#4A47A3] underline cursor-pointer" onClick={() => navigate('/terms')}>
          Terms & Conditions
        </span>{' '}
        and{' '}
        <span className="text-[#4A47A3] underline cursor-pointer" onClick={() => navigate('/terms')}>
          Privacy Policy
        </span>
      </p>
    </div>
  );
}
