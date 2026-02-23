import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, BadgeCheck, KeyRound } from 'lucide-react';

const slides = [
  {
    icon: Search,
    title: 'Search Smarter',
    description: 'Find your perfect property with advanced filters and AI-powered recommendations',
    color: '#0077BE',
  },
  {
    icon: BadgeCheck,
    title: '100% Verified Properties',
    description: 'Every listing is RERA verified and document checked for your peace of mind',
    color: '#D4A017',
  },
  {
    icon: KeyRound,
    title: 'Move In with Confidence',
    description: 'Connect with trusted agents and builders. Get expert guidance at every step',
    color: '#CC0000',
  },
];

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Skip Button */}
      <div className="p-6 flex justify-end">
        <button
          onClick={handleSkip}
          className="text-[#D4A017] font-semibold text-sm"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        {/* Icon */}
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center mb-12"
          style={{ backgroundColor: `${slide.color}15` }}
        >
          <Icon className="w-16 h-16" style={{ color: slide.color }} strokeWidth={2} />
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-[#1A1A2E] text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {slide.title}
        </h2>

        {/* Description */}
        <p className="text-[#6B6B8A] text-center leading-relaxed max-w-xs">
          {slide.description}
        </p>
      </div>

      {/* Progress Dots & Next Button */}
      <div className="px-8 pb-12 flex flex-col items-center gap-6">
        {/* Progress Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-[#0077BE]'
                  : 'w-2 bg-[#0077BE]/30'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-[#CC0000] text-white rounded-xl py-4 font-semibold hover:bg-[#b30000] transition-colors shadow-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
        </button>
      </div>
    </div>
  );
}