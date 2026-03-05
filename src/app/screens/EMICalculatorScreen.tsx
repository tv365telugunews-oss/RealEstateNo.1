import { useState } from 'react';
import { ArrowLeft, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { Slider } from '../components/ui/slider';

export function EMICalculatorScreen() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState([5000000]); // 50 Lakhs
  const [tenure, setTenure] = useState([20]); // 20 years
  const [interestRate, setInterestRate] = useState([8.5]);

  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount[0];
    const rate = interestRate[0] / 12 / 100; // Monthly interest rate
    const months = tenure[0] * 12;

    const emi =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure[0] * 12;
  const totalInterest = totalAmount - loanAmount[0];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-[#4A47A3] pt-12 pb-6 px-4">
        <div className="max-w-[390px] mx-auto">
          <button onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            EMI Calculator
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[390px] mx-auto px-4 py-6 space-y-6">
        {/* Loan Amount */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="font-semibold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Loan Amount
            </label>
            <div className="bg-[#F8F9FA] px-4 py-2 rounded-lg">
              <span className="font-bold text-[#4A47A3]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {formatCurrency(loanAmount[0])}
              </span>
            </div>
          </div>
          <Slider
            value={loanAmount}
            onValueChange={setLoanAmount}
            min={500000}
            max={50000000}
            step={100000}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-xs text-[#6B6B8A]">
            <span>₹5L</span>
            <span>₹5Cr</span>
          </div>
        </div>

        {/* Tenure */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="font-semibold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Loan Tenure
            </label>
            <div className="bg-[#F8F9FA] px-4 py-2 rounded-lg">
              <span className="font-bold text-[#4A47A3]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {tenure[0]} Years
              </span>
            </div>
          </div>
          <Slider
            value={tenure}
            onValueChange={setTenure}
            min={1}
            max={30}
            step={1}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-xs text-[#6B6B8A]">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="font-semibold text-[#1A1A2E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Interest Rate
            </label>
            <div className="bg-[#F8F9FA] px-4 py-2 rounded-lg">
              <span className="font-bold text-[#4A47A3]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {interestRate[0]}% p.a.
              </span>
            </div>
          </div>
          <Slider
            value={interestRate}
            onValueChange={setInterestRate}
            min={6}
            max={15}
            step={0.1}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-xs text-[#6B6B8A]">
            <span>6%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-gradient-to-br from-[#D4A017] to-[#b38814] rounded-2xl p-6 text-white shadow-lg">
          <p className="text-white/80 text-sm mb-2">Monthly EMI</p>
          <div className="flex items-baseline gap-2 mb-4">
            <IndianRupee className="w-8 h-8" />
            <span className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {formatCurrency(emi).replace('₹', '')}
            </span>
          </div>
          <div className="h-px bg-white/20 my-4"></div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">Principal Amount</span>
              <span className="font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {formatCurrency(loanAmount[0])}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">Total Interest</span>
              <span className="font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {formatCurrency(totalInterest)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">Total Amount Payable</span>
              <span className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {formatCurrency(totalAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-[#F8F9FA] rounded-xl p-4">
          <h3 className="font-semibold text-[#1A1A2E] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Payment Breakdown
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-[#6B6B8A]">Principal</span>
                <span className="font-semibold text-[#1A1A2E]">
                  {Math.round((loanAmount[0] / totalAmount) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4A47A3]"
                  style={{ width: `${(loanAmount[0] / totalAmount) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-[#6B6B8A]">Interest</span>
                <span className="font-semibold text-[#1A1A2E]">
                  {Math.round((totalInterest / totalAmount) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#CC0000]"
                  style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-[#CC0000] text-white rounded-xl py-4 font-semibold hover:bg-[#b30000] transition-colors shadow-lg">
          Apply for Home Loan
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
