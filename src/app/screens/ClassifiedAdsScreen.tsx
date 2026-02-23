import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MapPin, Phone, MessageCircle, Plus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ClassifiedAdsScreen() {
  const navigate = useNavigate();

  const ads = [
    {
      id: 1,
      title: 'Spacious 3BHK Apartment - Gachibowli',
      location: 'Gachibowli, Hyderabad',
      price: '₹85 Lakhs',
      image: 'modern apartment building',
    },
    {
      id: 2,
      title: 'Commercial Space Available - HITEC City',
      location: 'HITEC City, Hyderabad',
      price: '₹2.5 Cr',
      image: 'commercial office space',
    },
    {
      id: 3,
      title: 'Independent Villa with Garden - Kondapur',
      location: 'Kondapur, Hyderabad',
      price: '₹1.2 Cr',
      image: 'luxury villa garden',
    },
    {
      id: 4,
      title: 'Plot for Sale - Financial District',
      location: 'Financial District, Hyderabad',
      price: '₹65 Lakhs',
      image: 'empty land plot',
    },
  ];

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-24">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6 mb-4">
        <h1 className="text-lg font-bold text-white font-['Poppins']">
          Classified Ads
        </h1>
      </div>

      {/* Ad Listings */}
      <div className="px-6 space-y-4">
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex">
              {/* Thumbnail */}
              <div className="w-28 h-28 flex-shrink-0 bg-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1515263487990-61b07816b324?w=200&h=200&fit=crop"
                  alt={ad.title}
                  className="w-full h-full object-cover"
                  fallbackText={ad.image}
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-3">
                <h3 className="font-bold text-[#1A1A2E] text-sm mb-2 line-clamp-2 font-['Poppins']">
                  {ad.title}
                </h3>
                <div className="flex items-center text-xs text-[#6B6B8A] mb-2">
                  <MapPin className="w-3 h-3 text-[#4A47A3] mr-1" />
                  <span className="line-clamp-1">{ad.location}</span>
                </div>
                <p className="text-[#CC0000] font-bold text-base mb-3 font-['Poppins']">
                  {ad.price}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex border-t border-gray-200">
              <button
                onClick={() => window.location.href = 'tel:9618404505'}
                className="flex-1 bg-[#CC0000] text-white py-3 flex items-center justify-center space-x-2 hover:bg-[#b30000] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm">Call Now</span>
              </button>
              <button
                onClick={() => window.open('https://wa.me/919618404505', '_blank')}
                className="flex-1 bg-[#4A47A3] text-white py-3 flex items-center justify-center space-x-2 hover:bg-[#3d3a8a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium text-sm">WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => navigate('/post-ad')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#D4A017] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#c49115] transition-colors"
        aria-label="Post New Ad"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}