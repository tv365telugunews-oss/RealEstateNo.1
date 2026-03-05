import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Filter, MapPin, Bed, Bath, Square, Phone, Heart, Share2, IndianRupee, Home } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type PropertyType = 'house' | 'apartment' | 'villa' | 'plot' | 'farmhouse' | 'commercial' | 'industrial' | 'acres' | 'development';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  beds?: number;
  baths?: number;
  image: string;
  featured?: boolean;
  description: string;
  type: string;
}

export function PropertyListingScreen() {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();
  const [showFilters, setShowFilters] = useState(false);
  const [savedProperties, setSavedProperties] = useState<number[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [sharePropertyId, setSharePropertyId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'featured'>('featured');

  const propertyConfig = {
    house: {
      title: 'INDEPENDENT HOUSES',
      icon: '🏠',
      color: '#0088CC',
      description: 'Find your perfect independent house with complete privacy and freedom',
    },
    apartment: {
      title: 'APARTMENTS',
      icon: '🏢',
      color: '#0088CC',
      description: 'Discover modern apartments with world-class amenities',
    },
    villa: {
      title: 'LUXURY VILLAS',
      icon: '🏡',
      color: '#0088CC',
      description: 'Explore premium villas with exclusive features and elegant designs',
    },
    plot: {
      title: 'OPEN PLOTS',
      icon: '🌿',
      color: '#0088CC',
      description: 'Build your dream home on these prime residential plots',
    },
    farmhouse: {
      title: 'FARM HOUSES',
      icon: '🌾',
      color: '#0088CC',
      description: 'Escape to serene farm houses with vast green spaces',
    },
    commercial: {
      title: 'COMMERCIAL PROPERTIES',
      icon: '🏪',
      color: '#0088CC',
      description: 'Invest in prime commercial spaces for your business',
    },
    industrial: {
      title: 'INDUSTRIAL PROPERTIES',
      icon: '🏭',
      color: '#0088CC',
      description: 'Strategic industrial spaces with excellent connectivity',
    },
    acres: {
      title: 'ACRES & LARGE LANDS',
      icon: '🌍',
      color: '#0088CC',
      description: 'Vast land parcels perfect for large-scale projects',
    },
    development: {
      title: 'LAND DEVELOPMENT PROJECTS',
      icon: '🏗',
      color: '#0088CC',
      description: 'HMDA approved plotted developments with infrastructure',
    },
  };

  const propertyData: Record<PropertyType, Property[]> = {
    house: [
      {
        id: 1,
        title: '3BHK Independent House',
        location: 'Gachibowli, Hyderabad',
        price: '₹1.2 Cr',
        area: '2400 sq.ft',
        beds: 3,
        baths: 3,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        featured: true,
        description: 'Spacious 3BHK house with car parking, modular kitchen, and gated community',
        type: 'Independent House'
      },
      {
        id: 2,
        title: '4BHK Duplex House',
        location: 'Kondapur, Hyderabad',
        price: '₹1.8 Cr',
        area: '3200 sq.ft',
        beds: 4,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
        description: 'Luxury duplex with terrace garden, home theater room, and premium interiors',
        type: 'Independent House'
      },
      {
        id: 3,
        title: '2BHK Independent House',
        location: 'Miyapur, Hyderabad',
        price: '₹85 Lac',
        area: '1800 sq.ft',
        beds: 2,
        baths: 2,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        description: 'Affordable independent house near metro station with good ventilation',
        type: 'Independent House'
      },
      {
        id: 4,
        title: '5BHK Villa Type House',
        location: 'Jubilee Hills, Hyderabad',
        price: '₹3.5 Cr',
        area: '4500 sq.ft',
        beds: 5,
        baths: 5,
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
        featured: true,
        description: 'Ultra-luxury house with swimming pool, gym, and smart home features',
        type: 'Independent House'
      },
    ],
    apartment: [
      {
        id: 11,
        title: '2BHK Premium Apartment',
        location: 'HITEC City, Hyderabad',
        price: '₹95 Lac',
        area: '1250 sq.ft',
        beds: 2,
        baths: 2,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        featured: true,
        description: 'Modern apartment with club house, swimming pool, and 24/7 security',
        type: 'Apartment'
      },
      {
        id: 12,
        title: '3BHK Luxury Apartment',
        location: 'Financial District, Hyderabad',
        price: '₹1.4 Cr',
        area: '1850 sq.ft',
        beds: 3,
        baths: 3,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        description: 'High-rise apartment with gym, kids play area, and vastu compliant',
        type: 'Apartment'
      },
      {
        id: 13,
        title: '1BHK Compact Apartment',
        location: 'Kukatpally, Hyderabad',
        price: '₹45 Lac',
        area: '650 sq.ft',
        beds: 1,
        baths: 1,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        description: 'Affordable apartment near schools, hospitals, and shopping centers',
        type: 'Apartment'
      },
      {
        id: 14,
        title: '4BHK Penthouse',
        location: 'Banjara Hills, Hyderabad',
        price: '₹2.8 Cr',
        area: '3200 sq.ft',
        beds: 4,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        featured: true,
        description: 'Premium penthouse with private terrace, home automation, and city views',
        type: 'Apartment'
      },
    ],
    villa: [
      {
        id: 21,
        title: 'Luxury Villa with Pool',
        location: 'Nanakramguda, Hyderabad',
        price: '₹4.5 Cr',
        area: '5000 sq.ft',
        beds: 4,
        baths: 5,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        featured: true,
        description: 'Ultra-luxury villa with private pool, landscaped garden, and designer interiors',
        type: 'Villa'
      },
      {
        id: 22,
        title: 'Modern Villa',
        location: 'Kokapet, Hyderabad',
        price: '₹3.2 Cr',
        area: '4200 sq.ft',
        beds: 4,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
        description: 'Contemporary design villa with Italian marble flooring and modular kitchen',
        type: 'Villa'
      },
      {
        id: 23,
        title: 'Villa in Gated Community',
        location: 'Kollur, Hyderabad',
        price: '₹2.5 Cr',
        area: '3500 sq.ft',
        beds: 3,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        description: 'Premium villa with club house facilities and 24/7 security',
        type: 'Villa'
      },
      {
        id: 24,
        title: 'Duplex Villa',
        location: 'Gopanpally, Hyderabad',
        price: '₹2.8 Cr',
        area: '3800 sq.ft',
        beds: 4,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
        featured: true,
        description: 'Spacious duplex villa near international schools and IT hubs',
        type: 'Villa'
      },
    ],
    plot: [
      {
        id: 31,
        title: 'HMDA Approved Plot',
        location: 'Bachupally, Hyderabad',
        price: '₹65 Lac',
        area: '200 sq.yds',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        featured: true,
        description: 'Clear title HMDA approved plot in prime location with all utilities',
        type: 'Open Plot'
      },
      {
        id: 32,
        title: 'Corner Plot for Sale',
        location: 'Kompally, Hyderabad',
        price: '₹85 Lac',
        area: '250 sq.yds',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
        description: 'East facing corner plot in developed layout with 40ft road',
        type: 'Open Plot'
      },
      {
        id: 33,
        title: 'Residential Plot',
        location: 'Tukkuguda, Hyderabad',
        price: '₹45 Lac',
        area: '167 sq.yds',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800',
        description: 'Affordable plot near upcoming airport metro with clear documentation',
        type: 'Open Plot'
      },
      {
        id: 34,
        title: 'Premium Plot',
        location: 'Gachibowli, Hyderabad',
        price: '₹1.2 Cr',
        area: '300 sq.yds',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        featured: true,
        description: 'Premium location plot surrounded by IT companies and residential projects',
        type: 'Open Plot'
      },
    ],
    farmhouse: [
      {
        id: 41,
        title: 'Luxury Farm House',
        location: 'Chevella, Hyderabad',
        price: '₹2.5 Cr',
        area: '5 Acres',
        beds: 3,
        baths: 3,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
        featured: true,
        description: 'Fully developed farm house with mango plantation, well water, and cottage',
        type: 'Farm House'
      },
      {
        id: 42,
        title: 'Weekend Farm House',
        location: 'Shadnagar, Hyderabad',
        price: '₹1.8 Cr',
        area: '3 Acres',
        beds: 2,
        baths: 2,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
        description: 'Serene farm house with fruit trees, fish pond, and caretaker room',
        type: 'Farm House'
      },
      {
        id: 43,
        title: 'Farm House with Villa',
        location: 'Shankarpally, Hyderabad',
        price: '₹3.2 Cr',
        area: '7 Acres',
        beds: 4,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
        description: 'Premium farm house with luxury villa, swimming pool, and organic farming',
        type: 'Farm House'
      },
      {
        id: 44,
        title: 'Agricultural Farm House',
        location: 'Vikarabad, Telangana',
        price: '₹95 Lac',
        area: '2 Acres',
        beds: 2,
        baths: 1,
        image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
        featured: true,
        description: 'Affordable farm house with fertile soil and bore well water',
        type: 'Farm House'
      },
    ],
    commercial: [
      {
        id: 51,
        title: 'Commercial Space in Mall',
        location: 'HITEC City, Hyderabad',
        price: '₹2.5 Cr',
        area: '2000 sq.ft',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        featured: true,
        description: 'Prime retail space in popular mall with high footfall',
        type: 'Commercial'
      },
      {
        id: 52,
        title: 'Office Space',
        location: 'Financial District, Hyderabad',
        price: '₹1.8 Cr',
        area: '1500 sq.ft',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        description: 'Furnished office space in Grade A building with lift and parking',
        type: 'Commercial'
      },
      {
        id: 53,
        title: 'Showroom Space',
        location: 'Banjara Hills, Hyderabad',
        price: '₹3.5 Cr',
        area: '3000 sq.ft',
        image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800',
        description: 'Premium showroom with glass facade on main road',
        type: 'Commercial'
      },
      {
        id: 54,
        title: 'Restaurant Space',
        location: 'Madhapur, Hyderabad',
        price: '₹1.2 Cr',
        area: '2500 sq.ft',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
        featured: true,
        description: 'Ready-to-move restaurant space with commercial kitchen setup',
        type: 'Commercial'
      },
    ],
    industrial: [
      {
        id: 61,
        title: 'Warehouse Space',
        location: 'Jeedimetla, Hyderabad',
        price: '₹3.5 Cr',
        area: '15000 sq.ft',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
        featured: true,
        description: 'Large warehouse with loading dock, office space, and 24/7 security',
        type: 'Industrial'
      },
      {
        id: 62,
        title: 'Manufacturing Unit',
        location: 'Patancheru, Hyderabad',
        price: '₹5.2 Cr',
        area: '25000 sq.ft',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
        description: 'Fully equipped manufacturing unit with power backup and water supply',
        type: 'Industrial'
      },
      {
        id: 63,
        title: 'Industrial Shed',
        location: 'Balanagar, Hyderabad',
        price: '₹2.8 Cr',
        area: '12000 sq.ft',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
        description: 'Industrial shed with crane facility and easy truck access',
        type: 'Industrial'
      },
      {
        id: 64,
        title: 'Logistics Park Space',
        location: 'Shamshabad, Hyderabad',
        price: '₹4.5 Cr',
        area: '20000 sq.ft',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
        featured: true,
        description: 'Strategic logistics space near airport with modern infrastructure',
        type: 'Industrial'
      },
    ],
    acres: [
      {
        id: 71,
        title: 'Agricultural Land',
        location: 'Sangareddy, Telangana',
        price: '₹1.2 Cr',
        area: '10 Acres',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
        featured: true,
        description: 'Fertile agricultural land with irrigation facility and road access',
        type: 'Acres'
      },
      {
        id: 72,
        title: 'Investment Land',
        location: 'Yadadri, Telangana',
        price: '₹2.5 Cr',
        area: '25 Acres',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        description: 'Large land parcel near upcoming industrial corridor',
        type: 'Acres'
      },
      {
        id: 73,
        title: 'Land for Resort',
        location: 'Ananthagiri Hills, Vikarabad',
        price: '₹3.8 Cr',
        area: '15 Acres',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
        description: 'Scenic hill land perfect for resort or eco-tourism project',
        type: 'Acres'
      },
      {
        id: 74,
        title: 'Industrial Land',
        location: 'Zaheerabad, Telangana',
        price: '₹4.5 Cr',
        area: '30 Acres',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800',
        featured: true,
        description: 'Industrial zoned land with highway connectivity and power supply',
        type: 'Acres'
      },
    ],
    development: [
      {
        id: 81,
        title: 'HMDA Plotted Layout',
        location: 'Shankarpally, Hyderabad',
        price: '₹8.5 Cr',
        area: '5 Acres - 50 Plots',
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
        featured: true,
        description: 'HMDA approved plotted layout with roads, drainage, and electricity',
        type: 'Land Development'
      },
      {
        id: 82,
        title: 'Residential Layout',
        location: 'Adibatla, Hyderabad',
        price: '₹12 Cr',
        area: '8 Acres - 80 Plots',
        image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800',
        description: 'Fully developed gated layout with club house and park',
        type: 'Land Development'
      },
      {
        id: 83,
        title: 'Villa Project Land',
        location: 'Kollur, Hyderabad',
        price: '₹25 Cr',
        area: '12 Acres - Villa Project',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        description: 'Premium land parcel for luxury villa development with all approvals',
        type: 'Land Development'
      },
      {
        id: 84,
        title: 'Township Project Land',
        location: 'Chevella, Hyderabad',
        price: '₹45 Cr',
        area: '25 Acres - Township',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        featured: true,
        description: 'Large land parcel for integrated township development',
        type: 'Land Development'
      },
    ],
  };

  const currentType = (type || 'house') as PropertyType;
  const config = propertyConfig[currentType];
  const properties = propertyData[currentType];

  const toggleSave = (id: number) => {
    setSavedProperties(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  const handleShare = (id: number) => {
    setSharePropertyId(id);
    setShowShareModal(true);
  };

  const sortedProperties = properties.sort((a, b) => {
    if (sortBy === 'price-low') {
      return parseFloat(a.price.replace(/[^\d.-]/g, '')) - parseFloat(b.price.replace(/[^\d.-]/g, ''));
    } else if (sortBy === 'price-high') {
      return parseFloat(b.price.replace(/[^\d.-]/g, '')) - parseFloat(a.price.replace(/[^\d.-]/g, ''));
    } else if (sortBy === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-20">
      {/* Header */}
      <div className="bg-[#0088CC] py-4 px-4 flex items-center justify-between shadow-lg sticky top-0 z-30">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{config.icon}</span>
          <h1 className="text-white font-bold text-sm font-['Poppins']">
            {config.title}
          </h1>
        </div>
        <button onClick={() => setShowFilters(true)} className="text-white">
          <Filter className="w-6 h-6" />
        </button>
      </div>

      {/* Description Banner */}
      <div className="bg-gradient-to-r from-[#0088CC] to-[#0066AA] px-4 py-4">
        <p className="text-white text-sm text-center font-['Poppins']">
          {config.description}
        </p>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#F8F9FA] px-4 py-3 flex justify-between items-center border-b">
        <span className="text-sm text-[#1A1A2E] font-medium">
          {properties.length} Properties Found
        </span>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price-low' | 'price-high' | 'featured')}
            className="text-sm text-[#0088CC] font-medium bg-transparent border-none cursor-pointer"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Sort by: Price (Low to High)</option>
            <option value="price-high">Sort by: Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Property Listings */}
      <div className="p-4 space-y-4">
        {sortedProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            {/* Property Image */}
            <div className="relative">
              <ImageWithFallback
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
                fallbackText={property.type}
              />
              {property.featured && (
                <div className="absolute top-2 left-2 bg-[#D4A017] text-white text-xs px-3 py-1 rounded-full font-bold">
                  Featured
                </div>
              )}
              <button
                onClick={() => toggleSave(property.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <Heart
                  className={`w-5 h-5 ${
                    savedProperties.includes(property.id)
                      ? 'fill-[#CC0000] text-[#CC0000]'
                      : 'text-gray-600'
                  }`}
                />
              </button>
            </div>

            {/* Property Details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-[#1A1A2E] text-lg font-['Poppins']">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-sm text-[#6B6B8A] mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#CC0000] font-['Poppins']">
                    {property.price}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#6B6B8A] mb-3">
                {property.description}
              </p>

              {/* Property Specs */}
              <div className="flex items-center space-x-4 mb-3 pb-3 border-b border-gray-200">
                {property.beds && (
                  <div className="flex items-center text-sm text-[#1A1A2E]">
                    <Bed className="w-4 h-4 mr-1 text-[#0088CC]" />
                    {property.beds} Beds
                  </div>
                )}
                {property.baths && (
                  <div className="flex items-center text-sm text-[#1A1A2E]">
                    <Bath className="w-4 h-4 mr-1 text-[#0088CC]" />
                    {property.baths} Baths
                  </div>
                )}
                <div className="flex items-center text-sm text-[#1A1A2E]">
                  <Square className="w-4 h-4 mr-1 text-[#0088CC]" />
                  {property.area}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <a
                  href="tel:9618404505"
                  className="flex-1 bg-[#CC0000] text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#b30000] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">Call: 9618 404 505</span>
                </a>
                <button
                  onClick={() => handleShare(property.id)}
                  className="w-10 h-10 border-2 border-[#0088CC] rounded-lg flex items-center justify-center hover:bg-[#0088CC] hover:text-white transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Banner */}
      <div className="bg-[#0088CC] p-4 mx-4 mb-4 rounded-xl text-white">
        <h3 className="font-bold text-center mb-2 font-['Poppins']">
          Need Help Finding the Perfect Property?
        </h3>
        <p className="text-sm text-center mb-3">
          Talk to our property experts for personalized assistance
        </p>
        <button className="w-full bg-white text-[#0088CC] py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
          Contact Us: 9618 404 505
        </button>
        <p className="text-xs text-center mt-2">
          Plot no.100, TNGO's Colony, Phase-II, Gachibowli, Financial District, Hyderabad - 500046
        </p>
      </div>

      {/* Advertisement Banner */}
      <div className="border-2 border-dashed border-[#0088CC] rounded-lg p-8 text-center mx-4 mb-4">
        <p className="text-[10px] text-[#6B6B8A] mb-2">Advertisement</p>
        <div className="flex items-center justify-center">
          <span className="text-[#0088CC] font-medium">Google AdSense Placeholder</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0088CC] max-w-[390px] mx-auto shadow-lg z-20">
        <div className="flex items-center justify-around py-3 px-2">
          <button
            onClick={() => navigate('/home')}
            className="flex flex-col items-center space-y-1"
          >
            <Home className="w-6 h-6 text-white" />
            <span className="text-[10px] text-white">HOME</span>
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end max-w-[390px] mx-auto">
          <div className="bg-white w-full rounded-t-2xl p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#1A1A2E] font-['Poppins']">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-[#6B6B8A]">
                ✕
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Price Range</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="flex-1 border-2 border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Max"
                  className="flex-1 border-2 border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            {(currentType === 'house' || currentType === 'apartment' || currentType === 'villa') && (
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Bedrooms</label>
                <div className="flex space-x-2">
                  {['1', '2', '3', '4', '5+'].map((bed) => (
                    <button
                      key={bed}
                      className="flex-1 border-2 border-[#0088CC] text-[#0088CC] py-2 rounded-lg hover:bg-[#0088CC] hover:text-white transition-colors"
                    >
                      {bed}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex space-x-2 pt-4">
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 border-2 border-[#0088CC] text-[#0088CC] py-3 rounded-lg font-bold"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 bg-[#0088CC] text-white py-3 rounded-lg font-bold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center max-w-[390px] mx-auto p-4">
          <div className="bg-white w-full rounded-2xl p-6 max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#1A1A2E] font-['Poppins']">Share Property</h3>
              <button onClick={() => setShowShareModal(false)} className="text-[#6B6B8A]">
                ✕
              </button>
            </div>

            <p className="text-sm text-[#6B6B8A] mb-4">
              Share this property with your friends and family
            </p>

            {/* Social Media Share Options */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=Check out this property on RealEstate No.1%0A%0AContact: 9618 404 505`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">WhatsApp</span>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">Facebook</span>
              </a>

              {/* Twitter/X */}
              <a
                href={`https://twitter.com/intent/tweet?text=Check out this property!&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#000000] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">Twitter</span>
              </a>

              {/* Instagram */}
              <button className="flex flex-col items-center space-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">Instagram</span>
              </button>

              {/* Email */}
              <a
                href={`mailto:?subject=Property from RealEstate No.1&body=Check out this property!%0A%0AContact: 9618 404 505`}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#0088CC] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">Email</span>
              </a>

              {/* SMS */}
              <a
                href={`sms:?body=Check out this property on RealEstate No.1! Contact: 9618 404 505`}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#34B7F1] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">SMS</span>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#0077B5] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">LinkedIn</span>
              </a>

              {/* Copy Link */}
              <button
                onClick={() => {
                  // Fallback method for copying text
                  const textArea = document.createElement('textarea');
                  textArea.value = window.location.href;
                  textArea.style.position = 'fixed';
                  textArea.style.left = '-999999px';
                  document.body.appendChild(textArea);
                  textArea.select();
                  try {
                    document.execCommand('copy');
                    alert('Link copied to clipboard!');
                  } catch (err) {
                    console.error('Failed to copy:', err);
                    alert('Failed to copy link');
                  }
                  document.body.removeChild(textArea);
                }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-14 h-14 bg-[#6B6B8A] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs text-[#1A1A2E]">Copy Link</span>
              </button>
            </div>

            {/* Call Button */}
            <div className="border-t border-gray-200 pt-4">
              <a
                href="tel:9618404505"
                className="w-full bg-[#CC0000] text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#b30000] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">Call: 9618 404 505</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}