import { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Layout } from '../components/Layout';
import { ContactButton } from '../components/ContactInfo';

export function SavedScreen() {
  const [activeTab, setActiveTab] = useState<'properties' | 'services' | 'ads'>('properties');
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      type: 'properties',
      title: 'Luxury 3BHK Apartment',
      location: 'Gachibowli, Hyderabad',
      price: '₹85 Lakhs',
      bhk: '3',
      bathrooms: '3',
      area: '1,850',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400',
    },
    {
      id: 2,
      type: 'properties',
      title: 'Independent Villa',
      location: 'Kondapur, Hyderabad',
      price: '₹1.2 Cr',
      bhk: '4',
      bathrooms: '4',
      area: '2,500',
      image: 'https://images.unsplash.com/photo-1762195804027-04a19d9d3ab6?w=400',
    },
    {
      id: 3,
      type: 'services',
      title: 'Interior Design Services',
      provider: 'Urban Interiors',
      category: 'Interior',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?w=400',
    },
    {
      id: 4,
      type: 'ads',
      title: 'Commercial Space Available',
      location: 'HITEC City, Hyderabad',
      price: '₹2.5 Cr',
      image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?w=400',
    },
  ]);

  const removeItem = (id: number) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const filteredItems = savedItems.filter(item => item.type === activeTab);

  return (
    <Layout title="Saved Properties & Services" showBack={true} showBottomNav={true}>
      {/* Tab Filter */}
      <div className="px-4 mb-4 mt-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('properties')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'properties'
                ? 'bg-[#0077BE] text-white'
                : 'bg-[#F8F9FA] text-[#6B6B8A] border-2 border-[#0077BE]'
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'services'
                ? 'bg-[#0077BE] text-white'
                : 'bg-[#F8F9FA] text-[#6B6B8A] border-2 border-[#0077BE]'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'ads'
                ? 'bg-[#0077BE] text-white'
                : 'bg-[#F8F9FA] text-[#6B6B8A] border-2 border-[#0077BE]'
            }`}
          >
            Ads
          </button>
        </div>
      </div>

      {/* Saved Items List */}
      <div className="px-4 space-y-4 pb-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-[#6B6B8A] text-sm">
              No saved {activeTab} yet
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md relative group"
            >
              {/* Remove button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-2 right-2 z-10 w-8 h-8 bg-[#CC0000] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>

              <div className="flex">
                {/* Image */}
                <div className="w-32 h-32 flex-shrink-0 bg-gray-200 relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    fallbackText="saved property"
                  />
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#CC0000] fill-[#CC0000]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-3">
                  <h3 className="font-bold text-[#1A1A2E] text-sm mb-1 font-['Poppins']">
                    {item.title}
                  </h3>
                  
                  {item.type === 'properties' && (
                    <>
                      <div className="flex items-center text-xs text-[#6B6B8A] mb-2">
                        <MapPin className="w-3 h-3 text-[#4A47A3] mr-1" />
                        <span className="line-clamp-1">{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 mb-2 text-xs text-[#6B6B8A]">
                        <div className="flex items-center">
                          <Bed className="w-3 h-3 mr-1" />
                          <span>{item.bhk} BHK</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-3 h-3 mr-1" />
                          <span>{item.bathrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-3 h-3 mr-1" />
                          <span>{item.area} sqft</span>
                        </div>
                      </div>
                      <p className="text-[#CC0000] font-bold text-base font-['Poppins']">
                        {item.price}
                      </p>
                    </>
                  )}

                  {item.type === 'services' && (
                    <>
                      <p className="text-xs text-[#6B6B8A] mb-1">{item.provider}</p>
                      <div className="flex items-center space-x-2">
                        <span className="bg-[#4A47A3] text-white text-xs px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-[#D4A017] font-bold">
                          ⭐ {item.rating}
                        </span>
                      </div>
                    </>
                  )}

                  {item.type === 'ads' && (
                    <>
                      <div className="flex items-center text-xs text-[#6B6B8A] mb-2">
                        <MapPin className="w-3 h-3 text-[#4A47A3] mr-1" />
                        <span className="line-clamp-1">{item.location}</span>
                      </div>
                      <p className="text-[#CC0000] font-bold text-base font-['Poppins']">
                        {item.price}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}

        {/* Advertisement Banner */}
        {filteredItems.length > 0 && (
          <div className="border-2 border-dashed border-[#0088CC] rounded-lg p-8 text-center mt-6">
            <p className="text-[10px] text-[#6B6B8A] mb-2">Advertisement</p>
            <div className="flex items-center justify-center">
              <span className="text-[#0088CC] font-medium">Google AdSense Placeholder</span>
            </div>
          </div>
        )}
      </div>
      <ContactButton />
    </Layout>
  );
}