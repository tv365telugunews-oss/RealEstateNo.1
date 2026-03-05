import { ArrowLeft, TrendingDown, Star, Phone, CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';

const notifications = [
  {
    id: '1',
    type: 'price-drop',
    title: 'Price Drop Alert!',
    message: 'Property in Gachibowli reduced by ₹10L',
    fullDetails: 'Great news! A 3BHK apartment in Gachibowli that you saved has reduced its price by ₹10 Lakhs. The property is now available at ₹85 Lakhs. This is a premium property with modern amenities including a gym, swimming pool, and 24/7 security. Contact us at 9618 404 505 to schedule a visit.',
    time: '2 hours ago',
    unread: true,
    color: 'border-l-[#CC0000]',
  },
  {
    id: '2',
    type: 'new-match',
    title: 'New Property Match',
    message: '3BHK apartment matching your criteria in Kondapur',
    fullDetails: 'We found a new 3BHK apartment in Kondapur that matches your search criteria! The property features 1850 sq.ft., modular kitchen, and is located near IT hubs. Price: ₹95 Lakhs. For more details and to schedule a visit, call 9618 404 505.',
    time: '5 hours ago',
    unread: true,
    color: 'border-l-[#D4A017]',
  },
  {
    id: '3',
    type: 'lead',
    title: 'New Lead Received',
    message: 'Someone is interested in your property listing',
    fullDetails: 'You have received a new inquiry for your property listing "Modern 2BHK in Hitech City". The potential buyer has requested more information and would like to schedule a site visit. Login to your dashboard to view contact details and respond to this lead.',
    time: '1 day ago',
    unread: false,
    color: 'border-l-[#0088CC]',
  },
  {
    id: '4',
    type: 'review',
    title: 'New Review',
    message: 'You received a 5-star review from a client',
    fullDetails: 'Congratulations! A client has left you a 5-star review: "Excellent service! Very professional and helped us find our dream home. Highly recommended!" Your rating is now 4.8/5.0 based on 24 reviews. Keep up the great work!',
    time: '2 days ago',
    unread: false,
    color: 'border-l-[#D4A017]',
  },
  {
    id: '5',
    type: 'verification',
    title: 'Property Verified',
    message: 'Your property listing has been RERA verified',
    fullDetails: 'Your property listing "Luxury Villa in Kokapet" has been successfully verified by RERA authorities. This verification badge will increase buyer confidence and visibility of your listing. Your property is now marked as "RERA Verified" and will appear higher in search results.',
    time: '3 days ago',
    unread: false,
    color: 'border-l-[#D4A017]',
  },
  {
    id: '6',
    type: 'price-drop',
    title: 'Price Drop Alert',
    message: 'Villa in Kokapet now available at ₹2.5Cr',
    fullDetails: 'A luxury 4BHK villa in Kokapet that matches your preferences has reduced its price to ₹2.5 Crores (previously ₹2.8 Cr). The villa features 3500 sq.ft., private garden, and premium finishes. This is an excellent investment opportunity. Contact Real Estate No.1 at 9618 404 505 for immediate viewing.',
    time: '4 days ago',
    unread: false,
    color: 'border-l-[#CC0000]',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'price-drop':
      return <TrendingDown className="w-5 h-5 text-[#CC0000]" />;
    case 'new-match':
      return <Star className="w-5 h-5 text-[#D4A017]" />;
    case 'lead':
      return <Phone className="w-5 h-5 text-[#4A47A3]" />;
    case 'review':
      return <Star className="w-5 h-5 text-[#D4A017]" />;
    case 'verification':
      return <CheckCircle2 className="w-5 h-5 text-[#D4A017]" />;
    default:
      return <Star className="w-5 h-5 text-[#4A47A3]" />;
  }
};

export function NotificationsScreen() {
  const navigate = useNavigate();
  const [selectedNotification, setSelectedNotification] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-[#0088CC] pt-12 pb-4 px-4 sticky top-0 z-10">
        <div className="max-w-[390px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)}>
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h1 className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Alerts & Notifications
              </h1>
            </div>
            <button 
              onClick={() => alert('All notifications marked as read!')}
              className="text-white text-sm font-semibold hover:underline"
            >
              Mark all read
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto">
        {notifications.length > 0 ? (
          <div className="divide-y divide-[#4A47A3]/10">
            {notifications.map((notification) => (
              <button
                key={notification.id}
                className={`w-full px-4 py-4 flex gap-3 hover:bg-[#F8F9FA] transition-colors border-l-4 ${notification.color} ${
                  notification.unread ? 'bg-[#4A47A3]/5' : ''
                }`}
                onClick={() => setSelectedNotification(notification.id)}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0">
                  {getIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-[#1A1A2E] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {notification.title}
                    </h3>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-[#CC0000] rounded-full flex-shrink-0 mt-1"></div>
                    )}
                  </div>
                  <p className="text-[#6B6B8A] text-sm mb-1">{notification.message}</p>
                  <p className="text-[#6B6B8A] text-xs">{notification.time}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="px-4 py-16 text-center">
            <div className="w-20 h-20 bg-[#F8F9FA] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-[#6B6B8A]" />
            </div>
            <h3 className="font-semibold text-[#1A1A2E] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              No Notifications
            </h3>
            <p className="text-[#6B6B8A] text-sm">
              You're all caught up! We'll notify you about important updates.
            </p>
          </div>
        )}
      </div>

      {/* Notification Details Modal */}
      {selectedNotification && (() => {
        const notification = notifications.find((n) => n.id === selectedNotification);
        if (!notification) return null;

        return (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center">
            <div className="bg-white w-full max-w-[390px] sm:max-w-2xl max-h-[80vh] rounded-t-3xl sm:rounded-2xl overflow-hidden animate-slide-up">
              {/* Modal Header */}
              <div className="bg-[#0088CC] px-6 py-4 flex items-center justify-between sticky top-0">
                <h2 className="font-bold text-white text-lg font-['Poppins']">
                  Notification Details
                </h2>
                <button 
                  onClick={() => setSelectedNotification(null)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(80vh-64px)] px-6 py-4 pb-24">
                <div className="space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0088CC]/10 flex items-center justify-center flex-shrink-0">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1A1A2E] text-xl font-['Poppins'] mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-[#6B6B8A] text-sm">{notification.time}</p>
                    </div>
                  </div>

                  {/* Short Message */}
                  <div className="bg-[#0088CC]/5 border-l-4 border-[#0088CC] rounded-r-lg p-4">
                    <p className="text-sm text-[#1A1A2E] font-medium">
                      {notification.message}
                    </p>
                  </div>

                  {/* Full Details */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#1A1A2E] font-['Poppins']">
                      Full Details
                    </h4>
                    <p className="text-sm text-[#1A1A2E] leading-relaxed">
                      {notification.fullDetails}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t-2 border-gray-200 pt-4 mt-6 space-y-3">
                    <a
                      href="tel:9618404505"
                      className="block w-full bg-[#0088CC] text-white py-3 rounded-xl font-medium text-center hover:bg-[#0077BE] transition-colors"
                    >
                      Contact Real Estate No.1
                    </a>
                    <button
                      onClick={() => setSelectedNotification(null)}
                      className="block w-full bg-white border-2 border-[#0088CC] text-[#0088CC] py-3 rounded-xl font-medium text-center hover:bg-[#0088CC]/5 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      <BottomNav />
    </div>
  );
}