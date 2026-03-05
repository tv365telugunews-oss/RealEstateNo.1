import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Camera, FileText } from 'lucide-react';
import { Input } from '../components/ui/input';

export function ServiceVendorScreen() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const serviceCategories = ['Construction', 'Interior', 'Legal', 'Loans', 'Vasthu'];
  const areas = ['Hyderabad', 'Rangareddy', 'Medchal-Malkajigiri', 'Sangareddy', 'Vikarabad'];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-8">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6 mb-6">
        <h1 className="text-lg font-bold text-white font-['Poppins']">
          Register as Service Vendor
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Vendor/Company Name */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Vendor/Company Name <span className="text-[#CC0000]">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter your business name"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Service Category */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Service Category <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-[#4A47A3] text-white border-[#4A47A3]'
                    : 'bg-white text-[#1A1A2E] border-[#4A47A3]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Years of Experience <span className="text-[#CC0000]">*</span>
          </label>
          <Input
            type="number"
            placeholder="Enter years of experience"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Service Areas */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Service Areas <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => toggleArea(area)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                  selectedAreas.includes(area)
                    ? 'bg-[#4A47A3] text-white border-[#4A47A3]'
                    : 'bg-white text-[#1A1A2E] border-[#4A47A3]'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Upload */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Portfolio Upload
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

        {/* License / Certificate Upload */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            License / Certificate Upload
          </label>
          <div className="border-2 border-dashed border-[#4A47A3] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FA] transition-colors">
            <FileText className="w-8 h-8 text-[#4A47A3] mb-2" />
            <span className="text-sm text-[#6B6B8A]">Upload License/Certificate</span>
          </div>
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            WhatsApp Number <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-[#F8F9FA] border-2 border-r-0 border-gray-300 rounded-l-lg text-[#1A1A2E]">
              +91
            </span>
            <Input
              type="tel"
              placeholder="Enter WhatsApp number"
              className="flex-1 border-2 border-gray-300 focus:border-[#4A47A3] rounded-r-lg"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Website (Optional)
          </label>
          <Input
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate('/success')}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors"
        >
          Register as Vendor
        </button>
      </div>
    </div>
  );
}
