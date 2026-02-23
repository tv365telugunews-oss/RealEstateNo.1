import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import logoImage from '../../assets/2648b6fe6cd2f73ea10b492b1cbb1db7e3fa0e8c.png';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  showBottomNav?: boolean;
}

export function Layout({ children, title, showBack = true, showBottomNav = true }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto flex flex-col">
      {/* Header with Back Navigation */}
      {showBack && (
        <div className="bg-[#0088CC] py-4 px-4 flex items-center gap-3 sticky top-0 z-50">
          <button
            onClick={() => navigate(-1)}
            className="text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          {title ? (
            <h1 className="text-lg font-bold text-white font-['Poppins']">{title}</h1>
          ) : (
            <img src={logoImage} alt="Real Estate No.1" className="h-8" />
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 pb-20">
        {children}
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0088CC] border-t border-[#0088CC] z-50 max-w-[390px] mx-auto">
          <div className="flex justify-around items-center py-2">
            <button
              onClick={() => navigate('/home')}
              className={`flex flex-col items-center gap-1 px-4 py-2 ${
                isActive('/home') ? 'text-white' : 'text-white/60'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-['Inter']">Home</span>
            </button>
            <button
              onClick={() => navigate('/search')}
              className={`flex flex-col items-center gap-1 px-4 py-2 ${
                isActive('/search') ? 'text-white' : 'text-white/60'
              }`}
            >
              <Search className="w-6 h-6" />
              <span className="text-xs font-['Inter']">Search</span>
            </button>
            <button
              onClick={() => navigate('/post-property')}
              className={`flex flex-col items-center gap-1 px-4 py-2 ${
                isActive('/post-property') ? 'text-white' : 'text-white/60'
              }`}
            >
              <PlusSquare className="w-6 h-6" />
              <span className="text-xs font-['Inter']">Post</span>
            </button>
            <button
              onClick={() => navigate('/saved')}
              className={`flex flex-col items-center gap-1 px-4 py-2 ${
                isActive('/saved') ? 'text-white' : 'text-white/60'
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="text-xs font-['Inter']">Saved</span>
            </button>
            <button
              onClick={() => navigate('/profile')}
              className={`flex flex-col items-center gap-1 px-4 py-2 ${
                isActive('/profile') ? 'text-white' : 'text-white/60'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-['Inter']">Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}