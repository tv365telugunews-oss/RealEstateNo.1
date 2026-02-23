import { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { Link } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { PropertyCard } from '../components/PropertyCard';
import { AgentCard } from '../components/AgentCard';
import logo from 'figma:asset/a44ae93df5d1802e40d530aabb1d17debb0fea83.png';

const featuredProperties = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1758431145201-2846e60054b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGh5ZGVyYWJhZHxlbnwxfHx8fDE3NzE4MTY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury 3BHK in Gachibowli',
    price: '1.2 Cr',
    location: 'Gachibowli, Hyderabad',
    bedrooms: 3,
    bathrooms: 3,
    area: '1850 sq.ft',
    isVerified: true,
    isFeatured: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1711110065918-388182f86e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwaW5kaWF8ZW58MXx8fHwxNzcxODE2NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Premium Villa in Kokapet',
    price: '2.8 Cr',
    location: 'Kokapet, Hyderabad',
    bedrooms: 4,
    bathrooms: 4,
    area: '3200 sq.ft',
    isVerified: true,
    isFeatured: true,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1762172418909-4c3fb73a7720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MTgxNjU1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern 2BHK in Kondapur',
    price: '85 Lac',
    location: 'Kondapur, Hyderabad',
    bedrooms: 2,
    bathrooms: 2,
    area: '1200 sq.ft',
    isVerified: true,
    isFeatured: false,
  },
];

const topAgents = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    photo: 'https://images.unsplash.com/photo-1770199105714-a5a349546346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNzI3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 127,
    experience: 8,
    isVerified: true,
  },
  {
    id: '2',
    name: 'Priya Reddy',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    rating: 4.9,
    reviews: 89,
    experience: 6,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Anil Sharma',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    rating: 4.7,
    reviews: 104,
    experience: 10,
    isVerified: true,
  },
];

const localities = ['Gachibowli', 'Kondapur', 'Kokapet', 'Tellapur', 'Financial District', 'Madhapur'];

export function HomeScreen() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'lease'>('buy');

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-[#4A47A3] pt-12 pb-6 px-4">
        <div className="max-w-[390px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12">
              <img src={logo} alt="Real Estate No.1" className="w-full h-full object-contain" />
            </div>
            <Link to="/notifications">
              <div className="relative">
                <Bell className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#CC0000] rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">3</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <Link to="/search">
            <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <Search className="w-5 h-5 text-[#4A47A3]" />
              <input
                type="text"
                placeholder="Search for properties, localities..."
                className="flex-1 outline-none text-[#1A1A2E] placeholder:text-[#6B6B8A]"
                readOnly
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#4A47A3]/20 sticky top-0 z-10">
        <div className="max-w-[390px] mx-auto px-4 flex gap-8">
          {(['buy', 'rent', 'lease'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 relative font-semibold capitalize ${
                activeTab === tab ? 'text-[#CC0000]' : 'text-[#6B6B8A]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC0000]"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto px-4 py-6 space-y-8">
        {/* Featured Properties */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Featured Properties
            </h2>
            <Link to="/search" className="text-[#4A47A3] text-sm font-semibold">
              View All
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {featuredProperties.map((property) => (
              <div key={property.id} className="min-w-[280px]">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Localities */}
        <section>
          <h2 className="text-lg font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Popular Localities
          </h2>
          <div className="flex flex-wrap gap-2">
            {localities.map((locality) => (
              <Link key={locality} to="/search">
                <button className="px-4 py-2 rounded-full border-2 border-[#4A47A3] text-[#4A47A3] font-semibold text-sm hover:bg-[#4A47A3] hover:text-white transition-colors">
                  {locality}
                </button>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Agents */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Top Agents
            </h2>
            <Link to="/search" className="text-[#4A47A3] text-sm font-semibold">
              View All
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {topAgents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section>
          <div className="bg-gradient-to-r from-[#CC0000] to-[#D4A017] rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Want to Sell or Rent?
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              Post your property for FREE and reach millions of buyers
            </p>
            <Link to="/post-property">
              <button className="bg-white text-[#CC0000] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Post Property Free
              </button>
            </Link>
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
