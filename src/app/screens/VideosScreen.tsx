import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Layout } from '../components/Layout';
import { Play, Eye } from 'lucide-react';

export function VideosScreen() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'house', label: 'Houses' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'villa', label: 'Villas' },
    { id: 'plot', label: 'Plots' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const videoData = [
    {
      id: 1,
      title: 'Luxury Villa Tour - Gachibowli',
      description: '4 BHK Independent Villa with Modern Amenities',
      category: 'villa',
      location: 'Gachibowli',
      price: '₹2.5 Cr',
      views: '12.5K',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600',
      featured: true,
    },
    {
      id: 2,
      title: '3 BHK Apartment - HITEC City',
      description: 'Premium Apartment with Skyline View',
      category: 'apartment',
      location: 'HITEC City',
      price: '₹1.2 Cr',
      views: '8.3K',
      duration: '2:30',
      thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
    },
    {
      id: 3,
      title: 'Open Plot - Financial District',
      description: '300 Sq Yards Corner Plot',
      category: 'plot',
      location: 'Financial District',
      price: '₹95 Lakhs',
      views: '6.7K',
      duration: '1:55',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600',
    },
    {
      id: 4,
      title: 'Duplex House - Kondapur',
      description: '4 BHK Duplex with Garden',
      category: 'house',
      location: 'Kondapur',
      price: '₹1.8 Cr',
      views: '9.1K',
      duration: '4:12',
      thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
    },
    {
      id: 5,
      title: 'Commercial Space - Madhapur',
      description: 'Prime Office Space 5000 Sq Ft',
      category: 'commercial',
      location: 'Madhapur',
      price: '₹3.5 Cr',
      views: '5.2K',
      duration: '3:20',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
    },
    {
      id: 6,
      title: 'Penthouse - Jubilee Hills',
      description: 'Luxurious 5 BHK Penthouse',
      category: 'apartment',
      location: 'Jubilee Hills',
      price: '₹4.2 Cr',
      views: '15.8K',
      duration: '5:00',
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
      featured: true,
    },
    {
      id: 7,
      title: 'Farm House - Shamshabad',
      description: '2 Acre Farm House with Pool',
      category: 'villa',
      location: 'Shamshabad',
      price: '₹1.5 Cr',
      views: '7.4K',
      duration: '4:30',
      thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
    },
    {
      id: 8,
      title: 'Independent House - Kukatpally',
      description: '3 BHK Ground Floor House',
      category: 'house',
      location: 'Kukatpally',
      price: '₹75 Lakhs',
      views: '4.9K',
      duration: '2:45',
      thumbnail: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
    },
    {
      id: 9,
      title: 'Residential Plot - Miyapur',
      description: '200 Sq Yards Gated Community Plot',
      category: 'plot',
      location: 'Miyapur',
      price: '₹55 Lakhs',
      views: '5.8K',
      duration: '1:40',
      thumbnail: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=600',
    },
    {
      id: 10,
      title: 'Premium Villa - Banjara Hills',
      description: '6 BHK Ultra-Luxury Villa',
      category: 'villa',
      location: 'Banjara Hills',
      price: '₹8.5 Cr',
      views: '22.3K',
      duration: '6:15',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      featured: true,
    },
    {
      id: 11,
      title: 'Office Space - Begumpet',
      description: 'Fully Furnished Office 3000 Sq Ft',
      category: 'commercial',
      location: 'Begumpet',
      price: '₹2.2 Cr',
      views: '3.7K',
      duration: '2:55',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
    },
    {
      id: 12,
      title: 'Luxury Apartment - Manikonda',
      description: '4 BHK with Premium Finishes',
      category: 'apartment',
      location: 'Manikonda',
      price: '₹1.6 Cr',
      views: '10.2K',
      duration: '3:35',
      thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
    },
  ];

  const filteredVideos = activeCategory === 'all'
    ? videoData
    : videoData.filter(video => video.category === activeCategory);

  return (
    <Layout title="Property Videos" showBack={true} showBottomNav={true}>
      {/* Category Filter */}
      <div className="px-4 mb-4 mt-4">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#0088CC] text-white'
                  : 'bg-[#F8F9FA] text-[#6B6B8A] border-2 border-[#0088CC]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  fallbackText="property video"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#CC0000] rounded-full flex items-center justify-center hover:bg-[#b30000] transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded font-medium">
                  {video.duration}
                </div>

                {/* Featured Badge */}
                {video.featured && (
                  <div className="absolute top-3 left-3 bg-[#D4A017] text-white text-xs px-3 py-1 rounded-full font-bold">
                    Featured
                  </div>
                )}

                {/* Views Count */}
                <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {video.views}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-bold text-[#1A1A2E] text-base mb-1 font-['Poppins']">
                  {video.title}
                </h3>
                <p className="text-sm text-[#6B6B8A] mb-2">
                  {video.description}
                </p>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-[#6B6B8A]">📍 {video.location}</span>
                  <span className="text-base font-bold text-[#0088CC]">{video.price}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href="tel:9618404505"
                    className="flex-1 bg-[#0088CC] text-white py-2 rounded-lg text-sm font-medium text-center hover:bg-[#0077BE] transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919618404505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-2 rounded-lg text-sm font-medium text-center hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advertisement Banner */}
        <div className="border-2 border-dashed border-[#0088CC] rounded-lg p-8 text-center mt-6">
          <p className="text-[10px] text-[#6B6B8A] mb-2">Advertisement</p>
          <div className="flex items-center justify-center">
            <span className="text-[#0088CC] font-medium">Google AdSense Placeholder</span>
          </div>
        </div>
      </div>

      {/* No Results Message */}
      {filteredVideos.length === 0 && (
        <div className="px-4 py-12 text-center">
          <p className="text-[#6B6B8A] mb-2">No videos found in this category</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="text-[#0088CC] font-medium hover:underline"
          >
            View All Videos
          </button>
        </div>
      )}
    </Layout>
  );
}