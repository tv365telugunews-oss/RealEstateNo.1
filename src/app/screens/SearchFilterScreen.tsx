import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Slider } from '../components/ui/slider';
import { Switch } from '../components/ui/switch';
import { Layout } from '../components/Layout';

const amenitiesList = [
  { id: 'parking', label: 'Parking', icon: '🅿️' },
  { id: 'gym', label: 'Gymnasium', icon: '🏋️' },
  { id: 'pool', label: 'Swimming Pool', icon: '🏊' },
  { id: 'security', label: '24/7 Security', icon: '🔒' },
  { id: 'power', label: 'Power Backup', icon: '⚡' },
  { id: 'garden', label: 'Garden', icon: '🌳' },
  { id: 'lift', label: 'Lift', icon: '🛗' },
  { id: 'clubhouse', label: 'Club House', icon: '🏢' },
];

export function SearchFilterScreen() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState([20, 200]);
  const [selectedBHK, setSelectedBHK] = useState<string[]>(['2', '3']);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(['parking', 'security']);
  const [reraVerified, setReraVerified] = useState(true);

  const bhkOptions = ['1', '2', '3', '4+'];

  const toggleBHK = (bhk: string) => {
    if (selectedBHK.includes(bhk)) {
      setSelectedBHK(selectedBHK.filter((b) => b !== bhk));
    } else {
      setSelectedBHK([...selectedBHK, bhk]);
    }
  };

  const toggleAmenity = (amenityId: string) => {
    if (selectedAmenities.includes(amenityId)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenityId));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityId]);
    }
  };

  const handleApplyFilters = () => {
    navigate('/properties');
  };

  const handleClearAll = () => {
    setBudget([20, 200]);
    setSelectedBHK([]);
    setSelectedAmenities([]);
    setReraVerified(false);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#4A47A3] pt-12 pb-4 px-4">
        <div className="max-w-[390px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)}>
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h1 className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Filters
              </h1>
            </div>
            <button
              onClick={handleClearAll}
              className="text-white font-semibold text-sm flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-[390px] mx-auto px-4 py-6 space-y-8 overflow-y-auto">
        {/* Budget Range */}
        <div>
          <h3 className="font-semibold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Budget Range (in Lakhs)
          </h3>
          <div className="px-2">
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={10}
              max={500}
              step={10}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm">
              <div className="bg-[#F8F9FA] px-4 py-2 rounded-lg">
                <span className="text-[#6B6B8A]">Min: </span>
                <span className="font-semibold text-[#1A1A2E]">₹{budget[0]}L</span>
              </div>
              <div className="w-8 h-px bg-[#4A47A3]/30"></div>
              <div className="bg-[#F8F9FA] px-4 py-2 rounded-lg">
                <span className="text-[#6B6B8A]">Max: </span>
                <span className="font-semibold text-[#1A1A2E]">₹{budget[1]}L</span>
              </div>
            </div>
          </div>
        </div>

        {/* BHK Selection */}
        <div>
          <h3 className="font-semibold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Property Type (BHK)
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {bhkOptions.map((bhk) => (
              <button
                key={bhk}
                onClick={() => toggleBHK(bhk)}
                className={`py-3 rounded-xl font-semibold transition-all ${
                  selectedBHK.includes(bhk)
                    ? 'bg-[#CC0000] text-white shadow-lg'
                    : 'bg-[#F8F9FA] text-[#1A1A2E] border border-[#4A47A3]/20'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {bhk} BHK
              </button>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="font-semibold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Amenities
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {amenitiesList.map((amenity) => (
              <button
                key={amenity.id}
                onClick={() => toggleAmenity(amenity.id)}
                className={`py-3 px-4 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  selectedAmenities.includes(amenity.id)
                    ? 'bg-[#D4A017]/10 border-2 border-[#D4A017] text-[#1A1A2E]'
                    : 'bg-[#F8F9FA] border border-[#4A47A3]/20 text-[#6B6B8A]'
                }`}
              >
                <span className={selectedAmenities.includes(amenity.id) ? 'grayscale-0' : 'grayscale opacity-50'}>
                  {amenity.icon}
                </span>
                <span className="text-sm">{amenity.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Property Status */}
        <div>
          <h3 className="font-semibold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Property Status
          </h3>
          <div className="space-y-3">
            <div className="bg-[#F8F9FA] rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#1A1A2E] mb-1">RERA Verified Only</p>
                <p className="text-xs text-[#6B6B8A]">Show only verified properties</p>
              </div>
              <Switch
                checked={reraVerified}
                onCheckedChange={setReraVerified}
                className="data-[state=checked]:bg-[#4A47A3]"
              />
            </div>
          </div>
        </div>

        {/* Furnishing */}
        <div>
          <h3 className="font-semibold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Furnishing
          </h3>
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-xl font-semibold bg-[#F8F9FA] text-[#1A1A2E] border border-[#4A47A3]/20">
              Furnished
            </button>
            <button className="flex-1 py-3 rounded-xl font-semibold bg-[#F8F9FA] text-[#1A1A2E] border border-[#4A47A3]/20">
              Semi-Furnished
            </button>
            <button className="flex-1 py-3 rounded-xl font-semibold bg-[#F8F9FA] text-[#1A1A2E] border border-[#4A47A3]/20">
              Unfurnished
            </button>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="max-w-[390px] mx-auto px-4 py-4 border-t border-[#4A47A3]/20">
        <button
          onClick={handleApplyFilters}
          className="w-full bg-[#CC0000] text-white rounded-xl py-4 font-semibold hover:bg-[#b30000] transition-colors shadow-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Apply Filters
        </button>
      </div>
    </Layout>
  );
}