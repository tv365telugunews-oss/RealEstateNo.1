import { useNavigate } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="text-[#0077BE] text-8xl font-bold mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 font-['Poppins']">Page Not Found</h1>
        <p className="text-gray-600 mb-8 font-['Inter']">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center justify-center gap-2 bg-[#0077BE] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0066A3] transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
