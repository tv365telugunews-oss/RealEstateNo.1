import { Home, Search, PlusCircle, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: PlusCircle, label: 'Post', path: '/post-property' },
    { icon: Bell, label: 'Alerts', path: '/notifications' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#0088CC]/20 z-50">
      <div className="max-w-[390px] mx-auto px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1 py-2 px-3 min-w-[60px]"
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? 'text-[#0088CC]' : 'text-[#6B6B8A]'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={`text-[10px] ${
                    isActive ? 'text-[#0088CC] font-semibold' : 'text-[#6B6B8A] font-medium'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}