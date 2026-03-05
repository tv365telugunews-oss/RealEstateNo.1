import { ArrowLeft, Star, Phone, Mail, MapPin, Award, Briefcase, TrendingUp } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { PropertyCard } from '../components/PropertyCard';

const agentProperties = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1758431145201-2846e60054b0?w=400',
    title: 'Luxury 3BHK in Gachibowli',
    price: '1.2 Cr',
    location: 'Gachibowli, Hyderabad',
    bedrooms: 3,
    bathrooms: 3,
    area: '1850 sq.ft',
    isVerified: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1711110065918-388182f86e00?w=400',
    title: 'Premium Villa in Kokapet',
    price: '2.8 Cr',
    location: 'Kokapet, Hyderabad',
    bedrooms: 4,
    bathrooms: 4,
    area: '3200 sq.ft',
    isVerified: true,
  },
];

export function AgentProfileScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header with Background */}
      <div className="bg-gradient-to-br from-[#4A47A3] to-[#6B6B8A] pt-12 pb-20 px-4">
        <div className="max-w-[390px] mx-auto">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6 text-white mb-6" />
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-[390px] mx-auto px-4 -mt-16 mb-6">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(74,71,163,0.15)] p-6">
          {/* Avatar & Basic Info */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1770199105714-a5a349546346?w=400"
                  alt="Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#D4A017] rounded-full w-7 h-7 flex items-center justify-center text-white">
                ✓
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-[#1A1A2E] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Rajesh Kumar
              </h1>
              <p className="text-[#6B6B8A] text-sm mb-2">Senior Property Consultant</p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-5 h-5 fill-[#D4A017] text-[#D4A017]" />
                <span className="font-bold text-[#1A1A2E]">4.8</span>
                <span className="text-[#6B6B8A] text-sm">(127 reviews)</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-[#4A47A3]/5 rounded-xl p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#4A47A3]/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-[#4A47A3]" />
              </div>
              <p className="font-bold text-[#1A1A2E] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>32</p>
              <p className="text-[#6B6B8A] text-xs">Listings</p>
            </div>
            <div className="bg-[#CC0000]/5 rounded-xl p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#CC0000]/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#CC0000]" />
              </div>
              <p className="font-bold text-[#1A1A2E] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>8 yrs</p>
              <p className="text-[#6B6B8A] text-xs">Experience</p>
            </div>
            <div className="bg-[#D4A017]/5 rounded-xl p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#D4A017]" />
              </div>
              <p className="font-bold text-[#1A1A2E] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>145</p>
              <p className="text-[#6B6B8A] text-xs">Deals Closed</p>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-2">
            <button className="w-full bg-[#4A47A3] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#3a3782] transition-colors">
              <Phone className="w-4 h-4" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Call Now</span>
            </button>
            <button className="w-full bg-white border-2 border-[#4A47A3] text-[#4A47A3] rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#4A47A3]/5 transition-colors">
              <Mail className="w-4 h-4" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Send Enquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-[390px] mx-auto px-4 mb-6">
        <h2 className="font-bold text-[#1A1A2E] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          About
        </h2>
        <div className="bg-[#F8F9FA] rounded-xl p-4">
          <p className="text-[#6B6B8A] leading-relaxed mb-4">
            Certified real estate consultant with 8+ years of experience in Hyderabad property market. 
            Specializing in residential properties in Gachibowli, Kondapur, and surrounding areas.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-[#4A47A3]" />
              <span className="text-[#6B6B8A]">Specializes in: Gachibowli, Kondapur, Kokapet</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-[#D4A017]" />
              <span className="text-[#6B6B8A]">RERA Certified | Top Performer 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Listed */}
      <div className="max-w-[390px] mx-auto px-4 pb-6">
        <h2 className="font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Properties Listed
        </h2>
        <div className="space-y-4">
          {agentProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
