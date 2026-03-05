import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Textarea } from '../components/ui/textarea';

export function BuyFormScreen() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState([1000000, 10000000]);
  const [bhk, setBhk] = useState<string>('');
  const [areaUnit, setAreaUnit] = useState<'sqft' | 'sqyards' | 'acres'>('sqft');
  const [possession, setPossession] = useState<string>('');

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

  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
  const possessionOptions = ['Immediate', '3 months', '6 months', '1 year'];

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-8">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6 mb-6">
        <h1 className="text-lg font-bold text-white font-['Poppins']">
          Property Requirement — BUY
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

        {/* Location Preference */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Location Preference <span className="text-[#CC0000]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full border-2 border-[#4A47A3]">
              <SelectValue placeholder="Select area/mandal/district" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="rangareddy">Rangareddy</SelectItem>
              <SelectItem value="medchal">Medchal-Malkajigiri</SelectItem>
              <SelectItem value="sangareddy">Sangareddy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Budget Range <span className="text-[#CC0000]">*</span>
          </label>
          <div className="space-y-2">
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={500000}
              max={50000000}
              step={500000}
              className="[&_[role=slider]]:bg-[#CC0000] [&_[role=slider]]:border-[#CC0000]"
            />
            <div className="flex justify-between text-sm text-[#6B6B8A]">
              <span>₹{(budget[0] / 100000).toFixed(1)}L</span>
              <span>₹{(budget[1] / 100000).toFixed(1)}L</span>
            </div>
          </div>
        </div>

        {/* Area Required */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Area Required <span className="text-[#CC0000]">*</span>
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

        {/* BHK Preference */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            BHK Preference
          </label>
          <div className="flex flex-wrap gap-2">
            {bhkOptions.map((option) => (
              <button
                key={option}
                onClick={() => setBhk(option)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                  bhk === option
                    ? 'bg-[#CC0000] text-white border-[#CC0000]'
                    : 'bg-white text-[#1A1A2E] border-[#4A47A3]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Possession Timeline */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Possession Timeline
          </label>
          <div className="flex flex-wrap gap-2">
            {possessionOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPossession(option)}
                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                  possession === option
                    ? 'bg-[#4A47A3] text-white border-[#4A47A3]'
                    : 'bg-white text-[#1A1A2E] border-[#4A47A3]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Additional Notes
          </label>
          <Textarea
            placeholder="Any specific requirements or preferences..."
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3] resize-none"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate('/success')}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors"
        >
          Submit Requirement
        </button>
      </div>
    </div>
  );
}
