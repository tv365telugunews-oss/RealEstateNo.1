import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Link } from 'react-router';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  isVerified?: boolean;
  isFeatured?: boolean;
  variant?: 'default' | 'compact';
}

export function PropertyCard({
  id,
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  isVerified = false,
  isFeatured = false,
  variant = 'default'
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(74,71,163,0.12)] hover:shadow-[0_6px_20px_rgba(74,71,163,0.18)] transition-shadow">
        {/* Image */}
        <div className="relative h-[180px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          
          {/* Price Badge */}
          <div className="absolute top-3 left-3 bg-[#CC0000] text-white px-3 py-1.5 rounded-lg shadow-lg">
            <span className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ₹{price}
            </span>
          </div>
          
          {/* Verification Badge */}
          {isVerified && (
            <div className="absolute top-3 right-3 bg-[#D4A017] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
              <span>✓</span>
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Verified</span>
            </div>
          )}
          
          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#CC0000] to-[#D4A017] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Featured</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-[#1A1A2E] mb-2 line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {title}
          </h3>
          
          <div className="flex items-center gap-1 text-[#6B6B8A] text-sm mb-3">
            <MapPin className="w-4 h-4 text-[#4A47A3]" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-[#6B6B8A]">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{bedrooms} BHK</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="w-4 h-4" />
              <span>{area}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
