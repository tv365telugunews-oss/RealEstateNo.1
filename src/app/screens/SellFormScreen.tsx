import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Camera, Video, FileText, Sparkles } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';

export function SellFormScreen() {
  const navigate = useNavigate();
  const [facing, setFacing] = useState<string>('');
  const [areaUnit, setAreaUnit] = useState<'sqft' | 'sqyards' | 'acres'>('sqft');

  const propertyTypes = [
    'Independent House',
    'Apartment',
    'Villa',
    'Plot',
    'Farm House',
    'Commercial',
    'Industrial',
    'Acres',
    'Land Development',
  ];

  const facingOptions = ['East', 'West', 'North', 'South'];

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-8">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6 mb-6">
        <h1 className="text-lg font-bold text-white font-['Poppins']">
          Post Your Property — SELL
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Property Type <span className="text-[#CC0000]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full border-2 border-[#4A47A3]">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Title */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Property Title <span className="text-[#CC0000]">*</span>
          </label>
          <Input
            type="text"
            placeholder="e.g., Spacious 3BHK in Gachibowli"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Full Address */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Full Address + Pincode <span className="text-[#CC0000]">*</span>
          </label>
          <Textarea
            placeholder="Enter complete property address with pincode"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3] resize-none"
            rows={3}
          />
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Area <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Enter area"
              className="flex-1 border-2 border-gray-300 focus:border-[#4A47A3]"
            />
            <div className="flex bg-[#F8F9FA] rounded-lg border-2 border-[#4A47A3] p-1">
              {(['sqft', 'sqyards', 'acres'] as const).map((unit) => (
                <button
                  key={unit}
                  onClick={() => setAreaUnit(unit)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    areaUnit === unit
                      ? 'bg-[#4A47A3] text-white'
                      : 'text-[#6B6B8A]'
                  }`}
                >
                  {unit === 'sqft' ? 'sq.ft' : unit === 'sqyards' ? 'sq.yards' : 'acres'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Price <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B8A]">₹</span>
              <Input
                type="number"
                placeholder="Enter price"
                className="w-full border-2 border-gray-300 focus:border-[#4A47A3] pl-8"
              />
            </div>
            <button className="px-4 py-2 bg-[#D4A017] text-white rounded-lg flex items-center space-x-2 hover:bg-[#c49115] transition-colors">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">AI Suggest</span>
            </button>
          </div>
        </div>

        {/* Property Age */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Property Age <span className="text-[#CC0000]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full border-2 border-[#4A47A3]">
              <SelectValue placeholder="Select property age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New Construction</SelectItem>
              <SelectItem value="1-2">1-2 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="6-10">6-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Facing Direction */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Facing Direction
          </label>
          <div className="flex flex-wrap gap-2">
            {facingOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFacing(option)}
                className={`px-6 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                  facing === option
                    ? 'bg-[#4A47A3] text-white border-[#4A47A3]'
                    : 'bg-white text-[#1A1A2E] border-[#4A47A3]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Upload */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Photos <span className="text-[#CC0000]">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square border-2 border-dashed border-[#D4A017] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FA] transition-colors"
              >
                <Camera className="w-6 h-6 text-[#D4A017] mb-1" />
                <span className="text-[10px] text-[#6B6B8A]">Upload</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Upload */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Video (Optional)
          </label>
          <div className="border-2 border-dashed border-[#CC0000] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FA] transition-colors">
            <Video className="w-8 h-8 text-[#CC0000] mb-2" />
            <span className="text-sm text-[#6B6B8A]">Upload Property Video</span>
          </div>
        </div>

        {/* RERA Number */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            RERA Number (Optional)
          </label>
          <Input
            type="text"
            placeholder="Enter RERA registration number"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
          <p className="text-xs text-[#D4A017] mt-1 flex items-center">
            <Sparkles className="w-3 h-3 mr-1" />
            RERA Verified properties get priority listing
          </p>
        </div>

        {/* Legal Document Upload */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Legal Documents (Optional)
          </label>
          <div className="border-2 border-dashed border-[#4A47A3] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FA] transition-colors">
            <FileText className="w-8 h-8 text-[#4A47A3] mb-2" />
            <span className="text-sm text-[#6B6B8A]">Upload PDF documents</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate('/success')}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors"
        >
          Post Property
        </button>
      </div>
    </div>
  );
}