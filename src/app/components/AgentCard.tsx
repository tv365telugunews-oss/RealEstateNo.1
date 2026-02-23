import { Star, Phone } from 'lucide-react';
import { Link } from 'react-router';

interface AgentCardProps {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviews: number;
  experience: number;
  isVerified?: boolean;
}

export function AgentCard({ id, name, photo, rating, reviews, experience, isVerified = false }: AgentCardProps) {
  return (
    <Link to={`/agent/${id}`}>
      <div className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(74,71,163,0.12)] hover:shadow-[0_6px_20px_rgba(74,71,163,0.18)] transition-shadow min-w-[140px]">
        <div className="flex flex-col items-center text-center">
          {/* Photo */}
          <div className="relative mb-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4A47A3]">
              <img src={photo} alt={name} className="w-full h-full object-cover" />
            </div>
            {isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-[#D4A017] rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                ✓
              </div>
            )}
          </div>
          
          {/* Name */}
          <h4 className="font-semibold text-[#1A1A2E] text-sm mb-1 line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {name}
          </h4>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
            <span className="text-sm font-semibold text-[#1A1A2E]">{rating.toFixed(1)}</span>
            <span className="text-xs text-[#6B6B8A]">({reviews})</span>
          </div>
          
          {/* Experience */}
          <p className="text-xs text-[#6B6B8A] mb-2">{experience}+ yrs exp</p>
          
          {/* Call Button */}
          <button className="w-full bg-[#4A47A3] text-white rounded-lg py-2 px-3 text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#3a3782] transition-colors">
            <Phone className="w-3 h-3" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Call</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
