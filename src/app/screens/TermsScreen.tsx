import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '../components/ui/checkbox';

export function TermsScreen() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto flex flex-col">
      {/* Blue Header */}
      <div className="bg-[#4A47A3] py-6 px-6">
        <h1 className="text-lg font-bold text-white font-['Poppins'] text-center">
          Terms & Conditions & Privacy Policy
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-32">
        {/* Terms & Conditions Accordion */}
        <div className="mb-4 border border-[#4A47A3] rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection('terms')}
            className="w-full bg-[#4A47A3] text-white p-4 flex justify-between items-center font-['Poppins'] font-medium"
          >
            <span>Terms & Conditions</span>
            {expandedSection === 'terms' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {expandedSection === 'terms' && (
            <div className="p-4 bg-white text-sm text-[#1A1A2E] space-y-3">
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">1. Acceptance of Terms</h3>
              <p>By accessing and using Real Estate No.1.com, you accept and agree to be bound by these Terms and Conditions.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">2. User Responsibilities</h3>
              <p>Users must provide accurate information and maintain the confidentiality of their account credentials.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">3. Property Listings</h3>
              <p>All property listings must be genuine and accurate. False or misleading information is strictly prohibited.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">4. Payment Terms</h3>
              <p>Subscription fees are non-refundable except as required by law. Premium features require active subscription.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">5. Prohibited Activities</h3>
              <p>Users shall not engage in fraud, spam, or any illegal activities on the platform.</p>
            </div>
          )}
        </div>

        {/* Privacy Policy Accordion */}
        <div className="mb-4 border border-[#4A47A3] rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection('privacy')}
            className="w-full bg-[#4A47A3] text-white p-4 flex justify-between items-center font-['Poppins'] font-medium"
          >
            <span>Privacy Policy</span>
            {expandedSection === 'privacy' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {expandedSection === 'privacy' && (
            <div className="p-4 bg-white text-sm text-[#1A1A2E] space-y-3">
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">Information Collection</h3>
              <p>We collect personal information including name, contact details, and property preferences to provide our services.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">Data Usage</h3>
              <p>Your data is used to match you with relevant properties, connect you with agents, and improve our services.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">Data Security</h3>
              <p>We implement industry-standard security measures to protect your personal information.</p>
              
              <h3 className="font-bold text-[#4A47A3] font-['Poppins']">Third-Party Sharing</h3>
              <p>We do not sell your personal information. Data is shared only with relevant agents and service providers with your consent.</p>
            </div>
          )}
        </div>

        {/* Data Usage Policy Accordion */}
        <div className="mb-4 border border-[#4A47A3] rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection('data')}
            className="w-full bg-[#4A47A3] text-white p-4 flex justify-between items-center font-['Poppins'] font-medium"
          >
            <span>Data Usage Policy</span>
            {expandedSection === 'data' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {expandedSection === 'data' && (
            <div className="p-4 bg-white text-sm text-[#1A1A2E] space-y-3">
              <p>We use your data to personalize your experience, send relevant property notifications, and analyze platform usage to improve our services.</p>
            </div>
          )}
        </div>

        {/* Refund Policy Accordion */}
        <div className="mb-4 border border-[#4A47A3] rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection('refund')}
            className="w-full bg-[#4A47A3] text-white p-4 flex justify-between items-center font-['Poppins'] font-medium"
          >
            <span>Refund Policy</span>
            {expandedSection === 'refund' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {expandedSection === 'refund' && (
            <div className="p-4 bg-white text-sm text-[#1A1A2E] space-y-3">
              <p>Subscription fees are generally non-refundable. Refunds may be considered in cases of technical issues preventing service access, processed within 7-10 business days.</p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 max-w-[390px] mx-auto shadow-lg">
        <div className="flex items-start space-x-3 mb-4">
          <Checkbox
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="mt-1 border-[#4A47A3] data-[state=checked]:bg-[#4A47A3]"
          />
          <label className="text-sm text-[#1A1A2E] leading-tight">
            I have read and agree to all Terms & Conditions and Privacy Policy
          </label>
        </div>

        <button
          onClick={() => agreed && navigate('/profile-setup')}
          disabled={!agreed}
          className={`w-full py-4 rounded-[10px] font-['Poppins'] font-medium mb-2 transition-colors ${
            agreed
              ? 'bg-[#CC0000] text-white hover:bg-[#b30000]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          I Agree & Continue
        </button>

        <button
          onClick={() => navigate(-1)}
          className="w-full text-[#6B6B8A] font-medium text-sm hover:underline"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
