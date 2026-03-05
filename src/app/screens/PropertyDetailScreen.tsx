import { useState } from 'react';
import { ArrowLeft, Share2, Heart, MapPin, Bed, Bath, Maximize, CheckCircle2, Phone, MessageCircle, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { BottomNav } from '../components/BottomNav';

const propertyImages = [
  'https://images.unsplash.com/photo-1758431145201-2846e60054b0?w=800',
  'https://images.unsplash.com/photo-1662454419736-de132ff75638?w=800',
  'https://images.unsplash.com/photo-1713359003488-53609bbd95c7?w=800',
  'https://images.unsplash.com/photo-1650838693474-756df587cc0e?w=800',
];

const amenities = [
  { icon: '🏊', name: 'Swimming Pool' },
  { icon: '🏋️', name: 'Gymnasium' },
  { icon: '🅿️', name: 'Parking' },
  { icon: '🔒', name: '24/7 Security' },
  { icon: '⚡', name: 'Power Backup' },
  { icon: '🌳', name: 'Garden' },
  { icon: '👶', name: "Kids' Play Area" },
  { icon: '🏢', name: 'Club House' },
];

export function PropertyDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'map' | 'reviews'>('overview');
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Image Gallery */}
      <div className="relative">
        <img
          src={propertyImages[currentImage]}
          alt="Property"
          className="w-full h-[280px] object-cover"
        />
        
        {/* Navigation Buttons */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A1A2E]" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-[#CC0000] text-[#CC0000]' : 'text-[#1A1A2E]'}`} />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
              <Share2 className="w-5 h-5 text-[#1A1A2E]" />
            </button>
          </div>
        </div>

        {/* Image Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImage ? 'w-8 bg-[#CC0000]' : 'w-2 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto px-4 py-4 space-y-4">
        {/* Verification Badges */}
        <div className="flex gap-2">
          <div className="bg-[#D4A017] text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>RERA Verified</span>
          </div>
          <div className="bg-[#D4A017] text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Documents Verified</span>
          </div>
        </div>

        {/* Title & Price */}
        <div>
          <h1 className="text-xl font-bold text-[#1A1A2E] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Luxury 3BHK Apartment in Gachibowli
          </h1>
          <div className="text-2xl font-bold text-[#CC0000] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            ₹1.2 Cr
          </div>
          <div className="flex items-center gap-1 text-[#6B6B8A]">
            <MapPin className="w-4 h-4 text-[#4A47A3]" />
            <span>Gachibowli, Hyderabad, Telangana</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-[#F8F9FA] rounded-xl p-4 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <Bed className="w-6 h-6 text-[#4A47A3] mb-1" />
            <span className="text-sm font-semibold text-[#1A1A2E]">3 BHK</span>
          </div>
          <div className="w-px h-10 bg-[#4A47A3]/20"></div>
          <div className="flex flex-col items-center">
            <Bath className="w-6 h-6 text-[#4A47A3] mb-1" />
            <span className="text-sm font-semibold text-[#1A1A2E]">3 Baths</span>
          </div>
          <div className="w-px h-10 bg-[#4A47A3]/20"></div>
          <div className="flex flex-col items-center">
            <Maximize className="w-6 h-6 text-[#4A47A3] mb-1" />
            <span className="text-sm font-semibold text-[#1A1A2E]">1850 sq.ft</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#4A47A3]/20">
          <div className="flex gap-6">
            {(['overview', 'amenities', 'map', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 relative font-semibold capitalize text-sm ${
                  activeTab === tab ? 'text-[#4A47A3]' : 'text-[#6B6B8A]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A47A3]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-2">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#1A1A2E] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  About Property
                </h3>
                <p className="text-[#6B6B8A] leading-relaxed">
                  Premium 3BHK apartment located in the heart of Gachibowli with modern amenities and excellent connectivity. 
                  The property features spacious rooms, high-quality fittings, and stunning city views. Close to IT hubs, 
                  schools, hospitals, and shopping centers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F8F9FA] rounded-lg p-3">
                  <p className="text-[#6B6B8A] text-xs mb-1">Carpet Area</p>
                  <p className="font-semibold text-[#1A1A2E]">1650 sq.ft</p>
                </div>
                <div className="bg-[#F8F9FA] rounded-lg p-3">
                  <p className="text-[#6B6B8A] text-xs mb-1">Floor</p>
                  <p className="font-semibold text-[#1A1A2E]">12th of 20</p>
                </div>
                <div className="bg-[#F8F9FA] rounded-lg p-3">
                  <p className="text-[#6B6B8A] text-xs mb-1">Facing</p>
                  <p className="font-semibold text-[#1A1A2E]">East</p>
                </div>
                <div className="bg-[#F8F9FA] rounded-lg p-3">
                  <p className="text-[#6B6B8A] text-xs mb-1">Age</p>
                  <p className="font-semibold text-[#1A1A2E]">2 Years</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'amenities' && (
            <div className="grid grid-cols-3 gap-3">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FA] rounded-lg p-3 flex flex-col items-center text-center gap-2"
                >
                  <span className="text-2xl">{amenity.icon}</span>
                  <span className="text-xs text-[#1A1A2E] font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'map' && (
            <div className="bg-[#F8F9FA] rounded-xl p-8 text-center">
              <MapPin className="w-12 h-12 text-[#4A47A3] mx-auto mb-3" />
              <p className="text-[#6B6B8A] font-semibold">Map View</p>
              <p className="text-[#6B6B8A] text-sm mt-1">Gachibowli, Hyderabad</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-3">
              <div className="bg-[#F8F9FA] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#4A47A3] flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1A1A2E] text-sm">Amit Kumar</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-[#D4A017] text-[#D4A017]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6B6B8A] text-sm">Great property with excellent amenities. The location is perfect!</p>
              </div>
            </div>
          )}
        </div>

        {/* EMI Calculator Button */}
        <button className="w-full border-2 border-[#D4A017] text-[#D4A017] rounded-xl py-3 font-semibold hover:bg-[#D4A017]/5 transition-colors">
          Calculate EMI
        </button>

        {/* Agent Contact Card */}
        <div className="bg-[#F8F9FA] rounded-xl p-4">
          <h3 className="font-semibold text-[#1A1A2E] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Contact Agent
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#4A47A3]">
              <img
                src="https://images.unsplash.com/photo-1770199105714-a5a349546346?w=400"
                alt="Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-[#1A1A2E]">Rajesh Kumar</p>
                <div className="bg-[#D4A017] rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
                <span className="text-sm font-semibold text-[#1A1A2E]">4.8</span>
                <span className="text-xs text-[#6B6B8A]">(127 reviews)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-[#4A47A3] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#3a3782] transition-colors">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex-1 bg-[#CC0000] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#b30000] transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
