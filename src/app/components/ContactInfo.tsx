import { Phone, MapPin, Mail } from 'lucide-react';

interface ContactInfoProps {
  showTitle?: boolean;
  className?: string;
}

export function ContactInfo({ showTitle = true, className = '' }: ContactInfoProps) {
  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      {showTitle && (
        <h3 className="text-lg font-bold text-[#003366] mb-4 font-['Poppins']">Contact Us</h3>
      )}
      
      <div className="space-y-3">
        {/* Phone */}
        <a
          href="tel:9618404505"
          className="flex items-start gap-3 text-gray-700 hover:text-[#0077BE] transition-colors"
        >
          <Phone className="w-5 h-5 text-[#0077BE] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold font-['Inter']">Phone</p>
            <p className="text-sm">9618 404 505</p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-start gap-3 text-gray-700">
          <MapPin className="w-5 h-5 text-[#0077BE] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold font-['Inter']">Address</p>
            <p className="text-sm">
              Plot no.100, TNGO's Colony, Phase-II,<br />
              Gachibowli, Financial District,<br />
              Hyderabad - 500046
            </p>
          </div>
        </div>

        {/* Email */}
        <a
          href="mailto:info@realestateno1.com"
          className="flex items-start gap-3 text-gray-700 hover:text-[#0077BE] transition-colors"
        >
          <Mail className="w-5 h-5 text-[#0077BE] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold font-['Inter']">Email</p>
            <p className="text-sm">info@realestateno1.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="tel:9618404505"
      className={`flex items-center justify-center gap-2 bg-[#0077BE] text-white py-3 px-6 rounded-lg font-semibold font-['Poppins'] hover:bg-[#005a94] transition-colors ${className}`}
    >
      <Phone className="w-5 h-5" />
      <span>Call: 9618 404 505</span>
    </a>
  );
}
