import { ArrowLeft, TrendingUp, Eye, Phone, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { day: 'Mon', leads: 12 },
  { day: 'Tue', leads: 15 },
  { day: 'Wed', leads: 25 },
  { day: 'Thu', leads: 18 },
  { day: 'Fri', leads: 22 },
  { day: 'Sat', leads: 30 },
  { day: 'Sun', leads: 16 },
];

const activeListings = [
  {
    id: '1',
    title: 'Luxury 3BHK in Gachibowli',
    image: 'https://images.unsplash.com/photo-1758431145201-2846e60054b0?w=200',
    views: 234,
    leads: 12,
    status: 'active',
  },
  {
    id: '2',
    title: 'Premium Villa in Kokapet',
    image: 'https://images.unsplash.com/photo-1711110065918-388182f86e00?w=200',
    views: 189,
    leads: 8,
    status: 'active',
  },
];

export function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-[#0088CC] pt-12 pb-6 px-4">
        <div className="max-w-[390px] mx-auto">
          <button onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome back, Rajesh!
          </h1>
          <p className="text-white/80 text-sm">Here's your property performance</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto px-4 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-[#4A47A3] to-[#6B6B8A] rounded-xl p-4 text-white">
            <TrendingUp className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>28</p>
            <p className="text-xs text-white/80">Leads Today</p>
          </div>
          <div className="bg-gradient-to-br from-[#CC0000] to-[#a30000] rounded-xl p-4 text-white">
            <Eye className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>5</p>
            <p className="text-xs text-white/80">Active Listings</p>
          </div>
          <div className="bg-gradient-to-br from-[#D4A017] to-[#b38814] rounded-xl p-4 text-white">
            <Phone className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>423</p>
            <p className="text-xs text-white/80">Profile Views</p>
          </div>
        </div>

        {/* Weekly Leads Chart */}
        <div className="bg-[#F8F9FA] rounded-xl p-4">
          <h3 className="font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Weekly Leads Overview
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A47A3" opacity={0.1} />
              <XAxis 
                dataKey="day" 
                tick={{ fill: '#6B6B8A', fontSize: 12 }}
                axisLine={{ stroke: '#4A47A3', opacity: 0.2 }}
              />
              <YAxis 
                tick={{ fill: '#6B6B8A', fontSize: 12 }}
                axisLine={{ stroke: '#4A47A3', opacity: 0.2 }}
              />
              <Bar dataKey="leads" fill="#4A47A3" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Active Listings */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Active Listings
            </h3>
            <button 
              onClick={() => navigate('/properties')}
              className="text-[#4A47A3] text-sm font-semibold hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {activeListings.map((listing) => (
              <div key={listing.id} className="bg-white border border-[#4A47A3]/20 rounded-xl p-3 flex gap-3">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#1A1A2E] text-sm mb-2 line-clamp-1">
                    {listing.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-[#6B6B8A] mb-2">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{listing.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{listing.leads} leads</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate('/plans')}
                    className="bg-[#CC0000] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#b30000] transition-colors"
                  >
                    Boost Listing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade Plan Banner */}
        <div className="bg-gradient-to-r from-[#D4A017] to-[#b38814] rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Upgrade to Gold Plan
              </h3>
              <p className="text-white/90 text-sm mb-4">Get 5x more leads and premium features</p>
              <button
                onClick={() => navigate('/plans')}
                className="bg-white text-[#D4A017] px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Upgrade Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="text-4xl">👑</div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}