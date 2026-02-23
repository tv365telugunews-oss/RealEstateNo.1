import { ChevronRight, Heart, FileText, CreditCard, Globe, HelpCircle, LogOut, Key, Edit, Home, Mail, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ContactInfo } from '../components/ContactInfo';
import { Layout } from '../components/Layout';

const menuItems = [
  {
    icon: Edit,
    label: 'Edit Profile',
    path: '/profile-setup',
    color: 'text-[#0088CC]',
  },
  {
    icon: FileText,
    label: 'My Properties',
    path: '/dashboard',
    color: 'text-[#0088CC]',
  },
  {
    icon: FileText,
    label: 'My Enquiries',
    path: '/dashboard',
    color: 'text-[#0088CC]',
  },
  {
    icon: CreditCard,
    label: 'Subscription Plan',
    path: '/plans',
    color: 'text-[#D4A017]',
  },
  {
    icon: Key,
    label: 'Change Password',
    path: null,
    action: 'changePassword',
    color: 'text-[#0088CC]',
  },
  {
    icon: Globe,
    label: 'Language Settings',
    description: 'English',
    path: null,
    action: 'languageSettings',
    color: 'text-[#0088CC]',
  },
  {
    icon: HelpCircle,
    label: 'Help & Support',
    path: null,
    action: 'helpSupport',
    color: 'text-[#0088CC]',
  },
];

export function ProfileScreen() {
  const navigate = useNavigate();

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.action === 'changePassword') {
      alert('Change Password\n\nPlease enter your current password and new password to update.\n\nFor assistance, contact: 9618 404 505');
    } else if (item.action === 'languageSettings') {
      alert('Language Settings\n\nAvailable Languages:\n• English (Current)\n• తెలుగు (Telugu)\n• हिन्दी (Hindi)\n\nSelect your preferred language.');
    } else if (item.action === 'helpSupport') {
      alert('Help & Support\n\n📞 Call: 9618 404 505\n📧 Email: info@realestateno1.com\n🏢 Office: Plot no.100, TNGO\'s Colony, Phase-II, Gachibowli, Financial District, Hyderabad - 500046\n\nWorking Hours: 9 AM - 6 PM (Mon-Sat)');
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#0088CC] pt-6 pb-20 px-4">
        <h1 className="text-white font-bold text-lg text-center font-['Poppins']">
          My Profile
        </h1>
      </div>

      {/* Profile Card */}
      <div className="px-4 -mt-16 mb-6">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,136,204,0.15)] p-6">
          {/* Avatar & Info */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-[#0088CC] overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1770199105714-a5a349546346?w=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-1 font-['Poppins']">
              Rajesh Kumar
            </h2>
            <p className="text-[#6B6B8A] text-sm mb-3">rajesh.kumar@email.com</p>
            <div className="flex items-center gap-2">
              <span className="bg-[#D4A017] text-white px-3 py-1 rounded-full text-xs font-bold">
                Owner
              </span>
              <span className="bg-[#0088CC] text-white px-3 py-1 rounded-full text-xs font-bold">
                Agent
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
            <button onClick={() => navigate('/dashboard')}>
              <div className="bg-[#0088CC] rounded-xl p-4 text-center flex flex-col items-center justify-center min-h-[100px]">
                <Home className="w-8 h-8 text-white mb-2" />
                <p className="text-2xl font-bold text-white mb-1 font-['Poppins']">
                  5
                </p>
                <p className="text-white text-xs font-bold">My Posting</p>
              </div>
            </button>
            <button onClick={() => navigate('/dashboard')}>
              <div className="bg-[#CC0000] rounded-xl p-4 text-center flex flex-col items-center justify-center min-h-[100px]">
                <Mail className="w-8 h-8 text-white mb-2" />
                <p className="text-2xl font-bold text-white mb-1 font-['Poppins']">
                  12
                </p>
                <p className="text-white text-xs font-bold">Enquiries</p>
              </div>
            </button>
            <button onClick={() => navigate('/saved')}>
              <div className="bg-[#D4A017] rounded-xl p-4 text-center flex flex-col items-center justify-center min-h-[100px]">
                <Bookmark className="w-8 h-8 text-white mb-2" />
                <p className="text-2xl font-bold text-white mb-1 font-['Poppins']">
                  8
                </p>
                <p className="text-white text-xs font-bold">Saved</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4">
        <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,136,204,0.12)] overflow-hidden mb-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className={`w-full flex items-center gap-4 px-4 py-4 hover:bg-[#F8F9FA] transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-[#1A1A2E] font-['Poppins']">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-[#6B6B8A]">{item.description}</p>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-[#0088CC]" />
              </button>
            );
          })}
        </div>

        {/* Contact Us Section */}
        <ContactInfo className="mb-6 shadow-[0_4px_16px_rgba(0,136,204,0.12)]" />

        {/* Advertisement Banner */}
        <div className="border-2 border-dashed border-[#0088CC] rounded-lg p-8 text-center mb-6">
          <p className="text-[10px] text-[#6B6B8A] mb-2">Advertisement</p>
          <div className="flex items-center justify-center">
            <span className="text-[#0088CC] font-medium">Google AdSense Placeholder</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate('/login')}
          className="w-full mt-6 bg-white text-[#CC0000] rounded-xl py-4 font-['Poppins'] font-medium hover:bg-[#F8F9FA] transition-colors flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,136,204,0.12)]"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* App Info */}
      <div className="px-4 py-8 text-center">
        <p className="text-[#6B6B8A] text-sm mb-2 font-['Poppins']">Real Estate No.1.com</p>
        <p className="text-[#6B6B8A] text-xs">Version 1.0.0</p>
      </div>
    </Layout>
  );
}