import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Camera, Check, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

type Role = 'owner' | 'agent' | 'buy' | 'sell' | 'service' | 'vendor' | 'classified';

export function ProfileSetupScreen() {
  const navigate = useNavigate();
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
  });

  const roles = [
    { id: 'owner' as Role, label: 'OWNER', icon: '🏠', color: 'bg-[#4A47A3]' },
    { id: 'agent' as Role, label: 'AGENT', icon: '🤝', color: 'bg-[#4A47A3]' },
    { id: 'buy' as Role, label: 'BUY', icon: '🛒', color: 'bg-[#4A47A3]' },
    { id: 'sell' as Role, label: 'SELL', icon: '💰', color: 'bg-[#4A47A3]' },
    { id: 'service' as Role, label: 'GO FOR SERVICE', icon: '🔧', color: 'bg-[#4A47A3]' },
    { id: 'vendor' as Role, label: 'SERVICE VENDOR', icon: '🛠', color: 'bg-[#4A47A3]' },
    { id: 'classified' as Role, label: 'CLASSIFIED ADS', icon: '📢', color: 'bg-[#4A47A3]' },
  ];

  const toggleRole = (roleId: Role) => {
    setSelectedRoles(prev =>
      prev.includes(roleId)
        ? prev.filter(r => r !== roleId)
        : [...prev, roleId]
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
  };

  const handleSubmit = () => {
    if (selectedRoles.length === 0) {
      alert('Please select at least one role');
      return;
    }
    
    // Navigate based on first selected role
    const firstRole = selectedRoles[0];
    if (firstRole === 'buy') {
      navigate('/buy-form');
    } else if (firstRole === 'sell') {
      navigate('/sell-form');
    } else if (firstRole === 'service') {
      navigate('/service-request');
    } else if (firstRole === 'vendor') {
      navigate('/service-vendor');
    } else if (firstRole === 'classified') {
      navigate('/classified-ads');
    } else {
      navigate('/success');
    }
  };

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-24">
      {/* Progress Bar */}
      <div className="bg-[#F8F9FA] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#4A47A3] font-medium">Step 1 of 3</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-[#4A47A3] h-2 rounded-full" style={{ width: '33%' }}></div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 font-['Poppins']">
          Complete Your Profile
        </h2>

        {/* Section A - Basic Details */}
        <div className="space-y-4 mb-8">
          <h3 className="text-base font-bold text-[#1A1A2E] font-['Poppins'] mb-4">
            Basic Details
          </h3>

          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Full Name <span className="text-[#CC0000]">*</span>
            </label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] rounded-lg"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Address <span className="text-[#CC0000]">*</span>
            </label>
            <Textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] rounded-lg resize-none"
              placeholder="Enter your complete address"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Phone Number <span className="text-[#CC0000]">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-[#F8F9FA] border-2 border-r-0 border-gray-300 rounded-l-lg text-[#1A1A2E]">
                +91
              </span>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 border-2 border-gray-300 focus:border-[#4A47A3] rounded-r-lg"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* Profile Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Profile Photo
            </label>
            {profilePhoto ? (
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#4A47A3]">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleRemovePhoto}
                  className="absolute top-1 right-1 w-6 h-6 bg-[#CC0000] rounded-full flex items-center justify-center hover:bg-[#b30000] transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ) : (
              <label className="w-32 h-32 border-2 border-dashed border-[#4A47A3] rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FA] transition-colors">
                <Camera className="w-8 h-8 text-[#D4A017] mb-2" />
                <span className="text-xs text-[#6B6B8A]">Upload Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
              Email Address <span className="text-[#CC0000]">*</span>
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] rounded-lg"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Section B - Choose Your Role */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-[#1A1A2E] font-['Poppins'] mb-2">
            Choose Your Role
          </h3>
          <p className="text-sm text-[#CC0000] mb-4">
            * You must choose at least one role to continue
          </p>

          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => toggleRole(role.id)}
                className={`relative p-4 rounded-xl border-2 transition-all ${
                  selectedRoles.includes(role.id)
                    ? 'border-[#D4A017] bg-[#4A47A3] text-white'
                    : 'border-[#4A47A3] bg-white text-[#1A1A2E]'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-3xl">{role.icon}</span>
                  <span className="text-xs font-bold font-['Poppins'] text-center">
                    {role.label}
                  </span>
                </div>
                {selectedRoles.includes(role.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#D4A017] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#CC0000] text-white py-4 rounded-[10px] font-['Poppins'] font-medium hover:bg-[#b30000] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}