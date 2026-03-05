import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Textarea } from '../components/ui/textarea';

export function ServiceRequestScreen() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState([100000]);
  const [contactMethod, setContactMethod] = useState<string[]>([]);

  const serviceTypes = ['Construction', 'Interior', 'Legal', 'Loans', 'Vasthu'];
  const contactMethods = ['Call', 'WhatsApp', 'Email'];

  // Location data
  const telanganaDistricts = [
    'Hyderabad', 'Rangareddy', 'Medchal-Malkajigiri', 'Sangareddy', 'Vikarabad',
    'Yadadri Bhuvanagiri', 'Nalgonda', 'Suryapet', 'Khammam', 'Bhadradri Kothagudem',
    'Warangal Urban', 'Warangal Rural', 'Hanamkonda', 'Jangaon', 'Mahabubabad',
    'Mulugu', 'Jayashankar Bhupalpally', 'Rajanna Sircilla', 'Karimnagar', 'Peddapalli',
    'Mancherial', 'Nirmal', 'Adilabad', 'Kumuram Bheem', 'Nizamabad',
    'Kamareddy', 'Siddipet', 'Medak', 'Narayanpet', 'Nagarkurnool',
    'Wanaparthy', 'Gadwal', 'Jogulamba Gadwal'
  ];

  const andhraDistricts = [
    'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Kurnool',
    'Kadapa', 'Nellore', 'Anantapur', 'Chittoor', 'Krishna',
    'West Godavari', 'East Godavari', 'Srikakulam', 'Vizianagaram', 'Prakasam',
    'Eluru', 'NTR District', 'Bapatla', 'Palnadu', 'Sri Sathya Sai',
    'Anakapalli', 'Kakinada', 'Alluri Sitharama Raju', 'Parvathipuram Manyam', 'Nandyal',
    'Sri Balaji'
  ];

  const ghmcAreas = [
    'Gachibowli', 'HITEC City', 'Kondapur', 'Madhapur', 'Kukatpally',
    'Miyapur', 'Ameerpet', 'Begumpet', 'Secunderabad', 'Banjara Hills',
    'Jubilee Hills', 'Financial District', 'Manikonda', 'Tolichowki', 'Mehdipatnam'
  ];

  const toggleContactMethod = (method: string) => {
    setContactMethod(prev =>
      prev.includes(method)
        ? prev.filter(m => m !== method)
        : [...prev, method]
    );
  };

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-8">
      {/* Blue Header */}
      <div className="bg-[#0088CC] py-6 px-6 mb-6">
        <h1 className="text-lg font-bold text-white font-['Poppins']">
          Request a Service
        </h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Service Type <span className="text-[#CC0000]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full border-2 border-[#4A47A3]">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Description of Requirement <span className="text-[#CC0000]">*</span>
          </label>
          <Textarea
            placeholder="Describe your service requirement in detail..."
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3] resize-none"
            rows={5}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Location <span className="text-[#CC0000]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full border-2 border-[#0088CC]">
              <SelectValue placeholder="Select area/district" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {/* GHMC Areas */}
              <div className="px-2 py-1.5 text-xs font-bold text-[#0088CC] bg-[#F0F8FF]">
                GHMC AREAS - HYDERABAD
              </div>
              {ghmcAreas.map((area) => (
                <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                  {area}
                </SelectItem>
              ))}
              
              {/* Telangana Districts */}
              <div className="px-2 py-1.5 text-xs font-bold text-[#0088CC] bg-[#F0F8FF] mt-2">
                TELANGANA DISTRICTS
              </div>
              {telanganaDistricts.map((district) => (
                <SelectItem key={district} value={district.toLowerCase().replace(/\s+/g, '-')}>
                  {district}
                </SelectItem>
              ))}
              
              {/* Andhra Pradesh Districts */}
              <div className="px-2 py-1.5 text-xs font-bold text-[#0088CC] bg-[#F0F8FF] mt-2">
                ANDHRA PRADESH DISTRICTS
              </div>
              {andhraDistricts.map((district) => (
                <SelectItem key={district} value={district.toLowerCase().replace(/\s+/g, '-')}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Budget (Optional)
          </label>
          <div className="space-y-2">
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={10000}
              max={5000000}
              step={10000}
              className="[&_[role=slider]]:bg-[#CC0000] [&_[role=slider]]:border-[#CC0000]"
            />
            <div className="text-center text-sm text-[#6B6B8A]">
              ₹{(budget[0] / 100000).toFixed(1)}L
            </div>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Preferred Contact Method <span className="text-[#CC0000]">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {contactMethods.map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => toggleContactMethod(method)}
                className={`px-6 py-2 rounded-full border-2 text-sm font-medium transition-colors ${
                  contactMethod.includes(method)
                    ? 'bg-[#0088CC] text-white border-[#0088CC]'
                    : 'bg-white text-[#1A1A2E] border-[#0088CC]'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Date & Time */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Preferred Date & Time
          </label>
          <Input
            type="datetime-local"
            className="w-full border-2 border-gray-300 focus:border-[#4A47A3]"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate('/success')}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors"
        >
          Submit Service Request
        </button>
      </div>
    </div>
  );
}