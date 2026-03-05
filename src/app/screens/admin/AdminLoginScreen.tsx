import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import logo from '../../../../assets/7b347ed7d36bd5219e6162f4684766c4fc8bcfb9.png';

export function AdminLoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in production, use proper authentication)
    if (username === 'admin' && password === 'Hyd@4466') {
      localStorage.setItem('adminToken', 'authenticated');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Use: admin / Hyd@4466');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0088CC] to-[#0066AA] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
            <img src={logo} alt="Real Estate No.1" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-[#1A1A2E] mb-2 font-['Poppins']">
            Admin Panel
          </h1>
          <p className="text-gray-600">Real Estate No.1</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="pl-10 py-3 border-2 border-gray-300 focus:border-[#0088CC]"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="pl-10 pr-10 py-3 border-2 border-gray-300 focus:border-[#0088CC]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-[#0088CC] hover:bg-[#0077BB] text-white py-3 rounded-lg font-bold text-lg"
          >
            Login to Admin Panel
          </Button>

          {/* Demo Credentials - Only show username */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-bold text-blue-900 mb-2">Demo Credentials:</p>
            <p className="text-blue-800">Username: <span className="font-mono bg-white px-2 py-1 rounded">admin</span></p>
            <p className="text-blue-800 text-xs mt-2">Password is available from system administrator</p>
          </div>
        </form>

        {/* Back to App */}
        <button
          onClick={() => navigate('/home')}
          className="w-full mt-6 text-gray-600 hover:text-[#0088CC] text-sm font-medium"
        >
          ← Back to Main App
        </button>
      </div>
    </div>
  );
}