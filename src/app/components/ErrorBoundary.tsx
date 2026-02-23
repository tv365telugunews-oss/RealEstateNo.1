import { useRouteError, useNavigate } from 'react-router';
import { Home, RefreshCw } from 'lucide-react';

export function ErrorBoundary() {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="text-[#0077BE] text-6xl font-bold mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 font-['Poppins']">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-8 font-['Inter']">
          {error?.statusText || error?.message || 'An unexpected error occurred'}
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
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}
