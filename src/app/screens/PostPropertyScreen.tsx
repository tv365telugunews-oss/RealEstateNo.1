import { useState } from 'react';
import { ArrowLeft, Home, Building, Hotel, Upload, MapPin, IndianRupee, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';

const steps = [
  'Property Type',
  'Location',
  'Details',
  'Photos',
  'Price',
  'Documents'
];

export function PostPropertyScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [propertyType, setPropertyType] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPhotos.push(reader.result as string);
          if (newPhotos.length === files.length) {
            setUploadedPhotos([...uploadedPhotos, ...newPhotos]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(uploadedPhotos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-[#0088CC] pt-12 pb-4 px-4 sticky top-0 z-10">
        <div className="max-w-[390px] mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={handleBack}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-white font-bold text-lg flex-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Post Property
            </h1>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-1 mb-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full ${
                  index === currentStep
                    ? 'bg-[#D4A017]'
                    : index < currentStep
                    ? 'bg-white'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <p className="text-white/80 text-sm">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto px-4 py-6">
        {/* Step 1: Property Type */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Select Property Type
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => setPropertyType('sell')}
                className={`w-full rounded-xl p-4 border-2 transition-all ${
                  propertyType === 'sell'
                    ? 'border-[#CC0000] bg-[#CC0000]/5'
                    : 'border-[#4A47A3]/20 bg-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    propertyType === 'sell' ? 'bg-[#CC0000]' : 'bg-[#4A47A3]/10'
                  }`}>
                    <Home className={`w-6 h-6 ${propertyType === 'sell' ? 'text-white' : 'text-[#4A47A3]'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Sell Property
                    </h3>
                    <p className="text-sm text-[#6B6B8A]">List your property for sale</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPropertyType('rent')}
                className={`w-full rounded-xl p-4 border-2 transition-all ${
                  propertyType === 'rent'
                    ? 'border-[#CC0000] bg-[#CC0000]/5'
                    : 'border-[#4A47A3]/20 bg-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    propertyType === 'rent' ? 'bg-[#CC0000]' : 'bg-[#4A47A3]/10'
                  }`}>
                    <Building className={`w-6 h-6 ${propertyType === 'rent' ? 'text-white' : 'text-[#4A47A3]'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Rent/Lease Property
                    </h3>
                    <p className="text-sm text-[#6B6B8A]">List your property for rent</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPropertyType('pg')}
                className={`w-full rounded-xl p-4 border-2 transition-all ${
                  propertyType === 'pg'
                    ? 'border-[#CC0000] bg-[#CC0000]/5'
                    : 'border-[#4A47A3]/20 bg-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    propertyType === 'pg' ? 'bg-[#CC0000]' : 'bg-[#4A47A3]/10'
                  }`}>
                    <Hotel className={`w-6 h-6 ${propertyType === 'pg' ? 'text-white' : 'text-[#4A47A3]'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      PG/Hostel
                    </h3>
                    <p className="text-sm text-[#6B6B8A]">List your PG or hostel</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Property Location
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#1A1A2E] mb-2 font-semibold text-sm">City</label>
                <input
                  type="text"
                  placeholder="Hyderabad"
                  className="w-full bg-white border border-[#4A47A3]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A47A3] focus:ring-2 focus:ring-[#4A47A3]/20"
                />
              </div>
              <div>
                <label className="block text-[#1A1A2E] mb-2 font-semibold text-sm">Locality</label>
                <input
                  type="text"
                  placeholder="e.g., Gachibowli, Kondapur"
                  className="w-full bg-white border border-[#4A47A3]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A47A3] focus:ring-2 focus:ring-[#4A47A3]/20"
                />
              </div>
              <button className="w-full bg-[#4A47A3]/10 border-2 border-dashed border-[#4A47A3] text-[#4A47A3] rounded-xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#4A47A3]/20 transition-colors">
                <MapPin className="w-5 h-5" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Use Current Location</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Property Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#1A1A2E] mb-2 font-semibold text-sm">BHK Type</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1', '2', '3', '4+'].map((bhk) => (
                    <button
                      key={bhk}
                      className="py-3 rounded-lg border-2 border-[#4A47A3]/20 text-[#1A1A2E] font-semibold hover:border-[#4A47A3] hover:bg-[#4A47A3]/5 transition-all"
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[#1A1A2E] mb-2 font-semibold text-sm">Carpet Area (sq.ft)</label>
                <input
                  type="number"
                  placeholder="e.g., 1200"
                  className="w-full bg-white border border-[#4A47A3]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A47A3] focus:ring-2 focus:ring-[#4A47A3]/20"
                />
              </div>
              <div>
                <label className="block text-[#1A1A2E] mb-2 font-semibold text-sm">Floor Number</label>
                <input
                  type="text"
                  placeholder="e.g., 12th Floor"
                  className="w-full bg-white border border-[#4A47A3]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#4A47A3] focus:ring-2 focus:ring-[#4A47A3]/20"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Photos */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Upload Photos
            </h2>
            
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            
            {/* Upload button label */}
            <label
              htmlFor="photo-upload"
              className="w-full aspect-video bg-[#0088CC]/5 border-2 border-dashed border-[#0088CC] rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-[#0088CC]/10 transition-colors cursor-pointer"
            >
              <Upload className="w-12 h-12 text-[#0088CC]" />
              <div className="text-center">
                <p className="font-semibold text-[#0088CC]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Upload Property Photos
                </p>
                <p className="text-sm text-[#6B6B8A] mt-1">Add at least 3 photos for better visibility</p>
              </div>
            </label>

            {/* Uploaded photos grid */}
            {uploadedPhotos.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {uploadedPhotos.map((photo, index) => (
                  <div key={index} className="relative aspect-square">
                    <img
                      src={photo}
                      alt={`Uploaded ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-[#CC0000] rounded-full p-1 shadow-lg hover:bg-[#b30000] transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Photo count indicator */}
            {uploadedPhotos.length > 0 && (
              <p className="text-sm text-center text-[#6B6B8A]">
                {uploadedPhotos.length} photo{uploadedPhotos.length !== 1 ? 's' : ''} uploaded
                {uploadedPhotos.length < 3 && (
                  <span className="text-[#CC0000] ml-1">
                    (Add {3 - uploadedPhotos.length} more for best results)
                  </span>
                )}
              </p>
            )}
          </div>
        )}

        {/* Step 5: Price */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Set Price
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#1A1A2E] mb-2 font-semibold text-sm">Expected Price</label>
                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B6B8A]" />
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="w-full bg-white border border-[#4A47A3]/20 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-[#4A47A3] focus:ring-2 focus:ring-[#4A47A3]/20"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  alert('AI Price Suggestion:\n\nBased on your property details:\n• Location: Premium area\n• Size: As specified\n• Amenities: Modern features\n\nSuggested Price Range:\n₹XX Lakhs - ₹XX Lakhs\n\nContact 9618 404 505 for detailed valuation.');
                }}
                className="w-full bg-[#D4A017]/10 border border-[#D4A017] text-[#D4A017] rounded-xl py-3 font-semibold hover:bg-[#D4A017]/20 transition-colors"
              >
                Get AI Price Suggestion
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Documents */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Upload Documents
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.pdf,.jpg,.jpeg,.png';
                  input.onchange = () => alert('RERA Certificate uploaded successfully!');
                  input.click();
                }}
                className="w-full bg-white border-2 border-[#4A47A3]/20 rounded-xl p-4 flex items-center justify-between hover:border-[#4A47A3] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 flex items-center justify-center">
                    <Upload className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#1A1A2E] text-sm">RERA Certificate</p>
                    <p className="text-xs text-[#6B6B8A]">Optional but recommended</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.pdf,.jpg,.jpeg,.png';
                  input.multiple = true;
                  input.onchange = () => alert('Property Papers uploaded successfully!');
                  input.click();
                }}
                className="w-full bg-white border-2 border-[#4A47A3]/20 rounded-xl p-4 flex items-center justify-between hover:border-[#4A47A3] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 flex items-center justify-center">
                    <Upload className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#1A1A2E] text-sm">Property Papers</p>
                    <p className="text-xs text-[#6B6B8A]">Upload ownership documents</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-20 left-0 right-0 px-4 py-4 bg-white border-t border-[#4A47A3]/20">
        <div className="max-w-[390px] mx-auto">
          <button
            onClick={handleNext}
            className="w-full bg-[#CC0000] text-white rounded-xl py-4 font-semibold hover:bg-[#b30000] transition-colors shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {currentStep === steps.length - 1 ? 'Submit for Verification' : 'Continue'}
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}