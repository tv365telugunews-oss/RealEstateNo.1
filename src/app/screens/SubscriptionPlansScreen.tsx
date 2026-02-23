import { ArrowLeft, Check, Crown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    period: 'Forever',
    color: 'border-[#4A47A3]',
    bgColor: 'bg-white',
    textColor: 'text-[#1A1A2E]',
    features: [
      { text: '1 Property Listing', included: true },
      { text: 'Basic Support', included: true },
      { text: 'Limited Visibility', included: true },
      { text: 'Advanced Analytics', included: false },
      { text: 'Priority Leads', included: false },
      { text: 'Featured Badge', included: false },
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '499',
    period: 'per month',
    color: 'border-[#4A47A3]',
    bgColor: 'bg-[#4A47A3]/5',
    textColor: 'text-[#1A1A2E]',
    badge: { text: 'Popular', color: 'bg-[#4A47A3]' },
    features: [
      { text: '5 Property Listings', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Enhanced Visibility', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Priority Leads', included: false },
      { text: 'Featured Badge', included: false },
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '999',
    period: 'per month',
    color: 'border-[#D4A017]',
    bgColor: 'bg-gradient-to-br from-[#D4A017] to-[#b38814]',
    textColor: 'text-white',
    badge: { text: 'Most Popular', color: 'bg-[#CC0000]' },
    features: [
      { text: '15 Property Listings', included: true },
      { text: 'Dedicated Support', included: true },
      { text: 'Maximum Visibility', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Leads', included: true },
      { text: 'Gold Verified Badge', included: true },
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '2499',
    period: 'per month',
    color: 'border-[#4A47A3]',
    bgColor: 'bg-gradient-to-br from-[#4A47A3] to-[#1A1A2E]',
    textColor: 'text-white',
    features: [
      { text: 'Unlimited Listings', included: true },
      { text: 'VIP Support 24/7', included: true },
      { text: 'Top Search Ranking', included: true },
      { text: 'Real-time Analytics', included: true },
      { text: 'Exclusive Leads', included: true },
      { text: 'Platinum Badge + Crown', included: true },
    ],
  },
];

export function SubscriptionPlansScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-[#4A47A3] pt-12 pb-6 px-4 sticky top-0 z-10">
        <div className="max-w-[390px] mx-auto">
          <button onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Subscription Plans
          </h1>
          <p className="text-white/80 text-sm">Choose the perfect plan for your needs</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto px-4 py-6 space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl overflow-hidden border-2 ${plan.color} ${plan.bgColor} shadow-[0_4px_16px_rgba(74,71,163,0.12)]`}
          >
            <div className="p-6">
              {/* Badge */}
              {plan.badge && (
                <div className="mb-4">
                  <span className={`${plan.badge.color} text-white px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1`}>
                    {plan.id === 'gold' && <Crown className="w-3 h-3" />}
                    {plan.badge.text}
                  </span>
                </div>
              )}

              {/* Plan Name & Price */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.textColor}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {plan.name}
                  {plan.id === 'platinum' && <Crown className="inline-block w-6 h-6 ml-2 text-[#D4A017]" />}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${plan.textColor}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-sm ${plan.id === 'gold' || plan.id === 'platinum' ? 'text-white/80' : 'text-[#6B6B8A]'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      feature.included
                        ? plan.id === 'gold' || plan.id === 'platinum'
                          ? 'bg-white/20'
                          : 'bg-[#D4A017]/10'
                        : 'bg-[#6B6B8A]/10'
                    }`}>
                      {feature.included ? (
                        <Check className={`w-3 h-3 ${plan.id === 'gold' || plan.id === 'platinum' ? 'text-white' : 'text-[#D4A017]'}`} strokeWidth={3} />
                      ) : (
                        <span className="text-[#6B6B8A] text-xs">✕</span>
                      )}
                    </div>
                    <span className={`text-sm ${
                      feature.included
                        ? plan.textColor
                        : plan.id === 'gold' || plan.id === 'platinum'
                        ? 'text-white/50 line-through'
                        : 'text-[#6B6B8A] line-through'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.id === 'gold' || plan.id === 'platinum'
                    ? 'bg-white text-[#1A1A2E] hover:bg-white/90'
                    : plan.id === 'silver'
                    ? 'bg-[#4A47A3] text-white hover:bg-[#3a3782]'
                    : 'bg-[#CC0000] text-white hover:bg-[#b30000]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {plan.id === 'free' ? 'Current Plan' : 'Upgrade Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="max-w-[390px] mx-auto px-4 pb-6">
        <div className="bg-[#F8F9FA] rounded-xl p-4">
          <p className="text-[#6B6B8A] text-sm text-center">
            All plans include GST. Cancel anytime. Money-back guarantee within 7 days.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
