import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/7b347ed7d36bd5219e6162f4684766c4fc8bcfb9.png';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8 animate-fade-in">
        <div className="w-48 h-32 mb-6">
          <img src={logo} alt="Real Estate No.1" className="w-full h-full object-contain" />
        </div>
        
        <h1 className="text-2xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Real Estate No.1.com
        </h1>
        
        <p className="text-[#0077BE] text-center font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Hyderabad's Most Trusted<br />Property Platform
        </p>
      </div>

      {/* Property Skyline Illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 390 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="20" y="50" width="40" height="78" fill="#0077BE" />
          <rect x="70" y="70" width="35" height="58" fill="#0077BE" />
          <rect x="115" y="40" width="45" height="88" fill="#0077BE" />
          <rect x="170" y="60" width="38" height="68" fill="#0077BE" />
          <rect x="218" y="35" width="42" height="93" fill="#0077BE" />
          <rect x="270" y="55" width="36" height="73" fill="#0077BE" />
          <rect x="316" y="45" width="40" height="83" fill="#0077BE" />
        </svg>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-[#0077BE] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}