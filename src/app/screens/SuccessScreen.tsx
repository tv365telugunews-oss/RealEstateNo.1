import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Input } from '../components/ui/input';

export function SuccessScreen() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { label: '', color: '' };
    if (pwd.length < 6) return { label: 'Weak', color: 'text-[#CC0000]' };
    if (pwd.length < 10) return { label: 'Medium', color: 'text-[#D4A017]' };
    return { label: 'Strong', color: 'text-[#4A47A3]' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 max-w-[390px] mx-auto">
      {/* Success Animation */}
      <div className="mb-8 relative">
        <div className="w-32 h-32 rounded-full border-4 border-[#D4A017] flex items-center justify-center animate-[bounce_1s_ease-in-out]">
          <Check className="w-16 h-16 text-[#D4A017]" strokeWidth={3} />
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-2xl font-bold text-[#1A1A2E] mb-2 font-['Poppins'] text-center">
        Profile Created Successfully! 🎉
      </h1>
      <p className="text-sm text-[#6B6B8A] mb-8 text-center">
        Now set up your login password to continue
      </p>

      {/* Password Setup Card */}
      <div className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg space-y-6">
        <h2 className="text-lg font-bold text-[#1A1A2E] font-['Poppins']">
          Create Your Login Password
        </h2>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Password <span className="text-[#CC0000]">*</span>
          </label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] pr-10"
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A47A3]"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
            Confirm Password <span className="text-[#CC0000]">*</span>
          </label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-[#4A47A3] pr-10"
              placeholder="Re-enter password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A47A3]"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Password Strength Indicator */}
        {password && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B6B8A]">Password Strength:</span>
              <span className={`text-sm font-bold ${strength.color}`}>
                {strength.label}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  strength.label === 'Weak'
                    ? 'bg-[#CC0000] w-1/3'
                    : strength.label === 'Medium'
                    ? 'bg-[#D4A017] w-2/3'
                    : 'bg-[#4A47A3] w-full'
                }`}
              ></div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!password || !confirmPassword}
          className={`w-full py-4 rounded-[10px] font-['Poppins'] font-medium transition-colors ${
            password && confirmPassword
              ? 'bg-[#CC0000] text-white hover:bg-[#b30000]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Set Password & Continue
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-[#6B6B8A]">
          Already set?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-[#4A47A3] font-medium cursor-pointer hover:underline"
          >
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
}
