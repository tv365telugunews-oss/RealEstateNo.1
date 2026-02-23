import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Camera } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';

export function PostAdScreen() {
  const navigate = useNavigate();

  const categories = ['Properties', 'Services', 'Construction', 'Interior', 'Legal'];

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-8">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6 mb-6">
        <h1 className="text-lg font-bold text-white font-['Poppins']">
          Post New Classified Ad
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Category <span className="text-[#CC0000]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full border-2 border-[#4A47A3]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Ad Title */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Ad Title <span className="text-[#CC0000]">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter ad title"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Description <span className="text-[#CC0000]">*</span>
          </label>
          <Textarea
            placeholder="Describe your ad in detail..."
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3] resize-none"
            rows={5}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Location <span className="text-[#CC0000]">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter location"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Price <span className="text-[#CC0000]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B8A]">₹</span>
            <Input
              type="number"
              placeholder="Enter price"
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] pl-8"
            />
          </div>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Contact Number <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-[#F8F9FA] border-2 border-r-0 border-gray-300 rounded-l-lg text-[#1A1A2E]">
              +91
            </span>
            <Input
              type="tel"
              placeholder="Enter contact number"
              className="flex-1 border-2 border-gray-300 focus:border-[#4A47A3] rounded-r-lg"
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Ad Photo
          </label>
          <div className="border-2 border-dashed border-[#D4A017] rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FA] transition-colors">
            <Camera className="w-8 h-8 text-[#D4A017] mb-2" />
            <span className="text-sm text-[#6B6B8A]">Upload Ad Photo</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate('/classified-ads')}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors"
        >
          Post Ad
        </button>
      </div>
    </div>
  );
}
