import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../../assets/7b347ed7d36bd5219e6162f4684766c4fc8bcfb9.png';
import { 
  LayoutDashboard, 
  Home, 
  Users, 
  Image, 
  Newspaper, 
  Settings, 
  LogOut,
  TrendingUp,
  FileText,
  UserCheck,
  Package,
  Eye,
  Edit,
  Trash2,
  Plus,
  X,
  Save,
  Search,
  Filter,
  Download,
  Upload,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Building,
  Menu
} from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: string;
  area: string;
  bedrooms: string;
  status: 'Active' | 'Pending' | 'Sold';
  date: string;
  owner: string;
  phone: string;
  image: string;
}

interface User {
  id: number;
  name: string;
  role: 'Buyer' | 'Seller' | 'Agent' | 'Builder';
  phone: string;
  email: string;
  joined: string;
  status: 'Active' | 'Inactive';
  properties: number;
}

interface Advertisement {
  id: number;
  title: string;
  image: string;
  position: number;
  status: 'Active' | 'Inactive';
  clicks: number;
  dateAdded: string;
}

interface NewsArticle {
  id: number;
  title: string;
  source: string;
  date: string;
  image: string;
  content: string;
  views: number;
  status: 'Published' | 'Draft';
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Properties State
  const [properties, setProperties] = useState<Property[]>([
    { id: 1, title: '3BHK Luxury Apartment', type: 'Apartment', location: 'Gachibowli', price: '₹1.2 Cr', area: '1850 sq.ft', bedrooms: '3', status: 'Active', date: '2026-02-23', owner: 'Rajesh Kumar', phone: '9618404505', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400' },
    { id: 2, title: '4BHK Villa', type: 'Villa', location: 'Jubilee Hills', price: '₹2.5 Cr', area: '3200 sq.ft', bedrooms: '4', status: 'Active', date: '2026-02-22', owner: 'Priya Sharma', phone: '9618404505', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400' },
    { id: 3, title: 'Open Plot', type: 'Plot', location: 'Kokapet', price: '₹85 L', area: '300 sq.yards', bedrooms: '-', status: 'Pending', date: '2026-02-22', owner: 'Amit Patel', phone: '9618404505', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400' },
    { id: 4, title: 'Commercial Space', type: 'Commercial', location: 'Hitech City', price: '₹5 Cr', area: '5000 sq.ft', bedrooms: '-', status: 'Active', date: '2026-02-21', owner: 'Sneha Reddy', phone: '9618404505', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400' },
  ]);

  // Users State
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Rajesh Kumar', role: 'Buyer', phone: '9876543210', email: 'rajesh@email.com', joined: '2026-02-20', status: 'Active', properties: 3 },
    { id: 2, name: 'Priya Sharma', role: 'Seller', phone: '9876543211', email: 'priya@email.com', joined: '2026-02-21', status: 'Active', properties: 5 },
    { id: 3, name: 'Amit Patel', role: 'Agent', phone: '9876543212', email: 'amit@email.com', joined: '2026-02-22', status: 'Active', properties: 12 },
    { id: 4, name: 'Sneha Reddy', role: 'Builder', phone: '9876543213', email: 'sneha@email.com', joined: '2026-02-23', status: 'Active', properties: 8 },
  ]);

  // Advertisements State
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([
    { id: 1, title: 'Luxury Properties', image: 'https://images.unsplash.com/photo-1763479169474-728a7de108c3?w=800', position: 1, status: 'Active', clicks: 245, dateAdded: '2026-02-15' },
    { id: 2, title: 'Modern Apartments', image: 'https://images.unsplash.com/photo-1761877676991-3009fb952540?w=800', position: 2, status: 'Active', clicks: 189, dateAdded: '2026-02-16' },
    { id: 3, title: 'Villa Collection', image: 'https://images.unsplash.com/photo-1750248064630-7f799c94dc93?w=800', position: 3, status: 'Active', clicks: 156, dateAdded: '2026-02-17' },
    { id: 4, title: 'New Developments', image: 'https://images.unsplash.com/photo-1764118811041-712974fea74c?w=800', position: 4, status: 'Active', clicks: 198, dateAdded: '2026-02-18' },
    { id: 5, title: 'Premium Interiors', image: 'https://images.unsplash.com/photo-1758298030677-93e545d69a64?w=800', position: 5, status: 'Active', clicks: 134, dateAdded: '2026-02-19' },
    { id: 6, title: 'Gated Communities', image: 'https://images.unsplash.com/photo-1705237557548-bfb1597caca4?w=800', position: 6, status: 'Active', clicks: 167, dateAdded: '2026-02-20' },
    { id: 7, title: 'Expert Agents', image: 'https://images.unsplash.com/photo-1647043773089-30a8bb2be269?w=800', position: 7, status: 'Active', clicks: 178, dateAdded: '2026-02-21' },
    { id: 8, title: 'Investment Opportunities', image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800', position: 8, status: 'Active', clicks: 211, dateAdded: '2026-02-22' },
  ]);

  // News State
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([
    { id: 1, title: 'Hyderabad Property Market Sees 15% Growth in Q1 2026', source: 'Times of India', date: '2026-02-20', image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400', content: 'The Hyderabad real estate market continues to show strong growth...', views: 1250, status: 'Published' },
    { id: 2, title: 'New RERA Guidelines for Real Estate Developers', source: 'Economic Times', date: '2026-02-18', image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?w=400', content: 'RERA announces new guidelines to protect homebuyers...', views: 980, status: 'Published' },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  // Check authentication
  const isAuthenticated = localStorage.getItem('adminToken') === 'authenticated';
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  // CRUD Operations for Properties
  const handleAddProperty = (propertyData: Partial<Property>) => {
    const newProperty: Property = {
      id: properties.length + 1,
      title: propertyData.title || '',
      type: propertyData.type || '',
      location: propertyData.location || '',
      price: propertyData.price || '',
      area: propertyData.area || '',
      bedrooms: propertyData.bedrooms || '',
      status: 'Active',
      date: new Date().toISOString().split('T')[0],
      owner: propertyData.owner || '',
      phone: '9618404505',
      image: propertyData.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    };
    setProperties([...properties, newProperty]);
    setShowModal(false);
  };

  const handleEditProperty = (id: number, updatedData: Partial<Property>) => {
    setProperties(properties.map(prop => 
      prop.id === id ? { ...prop, ...updatedData } : prop
    ));
    setShowModal(false);
  };

  const handleDeleteProperty = (id: number) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(prop => prop.id !== id));
    }
  };

  // CRUD Operations for Users
  const handleAddUser = (userData: Partial<User>) => {
    const newUser: User = {
      id: users.length + 1,
      name: userData.name || '',
      role: userData.role || 'Buyer',
      phone: userData.phone || '',
      email: userData.email || '',
      joined: new Date().toISOString().split('T')[0],
      status: 'Active',
      properties: 0,
    };
    setUsers([...users, newUser]);
    setShowModal(false);
  };

  const handleEditUser = (id: number, updatedData: Partial<User>) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...updatedData } : user
    ));
    setShowModal(false);
  };

  const handleDeleteUser = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // CRUD Operations for Advertisements
  const handleAddAd = (adData: Partial<Advertisement>) => {
    const newAd: Advertisement = {
      id: advertisements.length + 1,
      title: adData.title || '',
      image: adData.image || '',
      position: advertisements.length + 1,
      status: 'Active',
      clicks: 0,
      dateAdded: new Date().toISOString().split('T')[0],
    };
    setAdvertisements([...advertisements, newAd]);
    setShowModal(false);
  };

  const handleEditAd = (id: number, updatedData: Partial<Advertisement>) => {
    setAdvertisements(advertisements.map(ad => 
      ad.id === id ? { ...ad, ...updatedData } : ad
    ));
    setShowModal(false);
  };

  const handleDeleteAd = (id: number) => {
    if (window.confirm('Are you sure you want to delete this advertisement?')) {
      setAdvertisements(advertisements.filter(ad => ad.id !== id));
    }
  };

  // CRUD Operations for News
  const handleAddNews = (newsData: Partial<NewsArticle>) => {
    const newNews: NewsArticle = {
      id: newsArticles.length + 1,
      title: newsData.title || '',
      source: newsData.source || '',
      date: new Date().toISOString().split('T')[0],
      image: newsData.image || '',
      content: newsData.content || '',
      views: 0,
      status: 'Published',
    };
    setNewsArticles([...newsArticles, newNews]);
    setShowModal(false);
  };

  const handleEditNews = (id: number, updatedData: Partial<NewsArticle>) => {
    setNewsArticles(newsArticles.map(news => 
      news.id === id ? { ...news, ...updatedData } : news
    ));
    setShowModal(false);
  };

  const handleDeleteNews = (id: number) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      setNewsArticles(newsArticles.filter(news => news.id !== id));
    }
  };

  const stats = [
    { label: 'Total Properties', value: properties.length.toString(), icon: Home, color: 'bg-blue-500', change: '+12.5%' },
    { label: 'Active Users', value: users.length.toString(), icon: Users, color: 'bg-green-500', change: '+8.2%' },
    { label: 'Total Ads', value: advertisements.length.toString(), icon: Image, color: 'bg-purple-500', change: '0%' },
    { label: 'News Articles', value: newsArticles.length.toString(), icon: Newspaper, color: 'bg-orange-500', change: '+2' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 h-screen w-64 bg-[#1A1A2E] text-white flex flex-col z-50
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={logo} alt="Real Estate No.1" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="font-bold text-sm font-['Poppins']">REALESTATE NO.1</h2>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-700 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => { setActiveTab('dashboard'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => { setActiveTab('properties'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'properties' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Properties</span>
          </button>

          <button
            onClick={() => { setActiveTab('users'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'users' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Users</span>
          </button>

          <button
            onClick={() => { setActiveTab('advertisements'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'advertisements' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <Image className="w-5 h-5" />
            <span className="font-medium">Advertisements</span>
          </button>

          <button
            onClick={() => { setActiveTab('news'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'news' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <Newspaper className="w-5 h-5" />
            <span className="font-medium">News</span>
          </button>

          <button
            onClick={() => { setActiveTab('services'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'services' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="font-medium">Services</span>
          </button>

          <button
            onClick={() => { setActiveTab('settings'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'settings' ? 'bg-[#0088CC]' : 'hover:bg-gray-800'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6 text-[#1A1A2E]" />
              </button>
              
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-[#1A1A2E] font-['Poppins']">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>
                <p className="text-gray-600 text-xs lg:text-sm">Welcome back, Admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button
                onClick={() => navigate('/home')}
                className="px-2 lg:px-4 py-2 bg-[#0088CC] text-white rounded-lg hover:bg-[#0077BB] transition-colors font-medium text-xs lg:text-sm"
              >
                View App
              </button>
              <div className="text-right hidden lg:block">
                <p className="text-sm font-bold text-[#1A1A2E]">9618 404 505</p>
                <p className="text-xs text-gray-600">Contact Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-8">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-green-600 text-sm font-bold">{stat.change}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#1A1A2E]">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Recent Properties */}
              <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg lg:text-xl font-bold text-[#1A1A2E] font-['Poppins']">Recent Properties</h2>
                  <button
                    onClick={() => setActiveTab('properties')}
                    className="text-[#0088CC] hover:underline text-sm font-medium"
                  >
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto -mx-4 lg:mx-0">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Property</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Location</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Price</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties.slice(0, 4).map((property) => (
                        <tr key={property.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium">{property.title}</td>
                          <td className="py-3 px-4 text-sm">{property.location}</td>
                          <td className="py-3 px-4 text-sm font-bold text-[#0088CC]">{property.price}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              property.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : property.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {property.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{property.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Users */}
              <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg lg:text-xl font-bold text-[#1A1A2E] font-['Poppins']">Recent Users</h2>
                  <button
                    onClick={() => setActiveTab('users')}
                    className="text-[#0088CC] hover:underline text-sm font-medium"
                  >
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto -mx-4 lg:mx-0">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Name</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Role</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Phone</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.slice(0, 4).map((user) => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium">{user.name}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm">{user.phone}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{user.joined}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PROPERTIES TAB */}
          {activeTab === 'properties' && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-1 sm:flex-initial">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search properties..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full sm:w-80"
                    />
                  </div>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Button 
                  onClick={() => {
                    setModalType('add');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="bg-[#0088CC] hover:bg-[#0077BB] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Property
                </Button>
              </div>

              {/* Properties List */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Image</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Property</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Type</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Location</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Price</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Status</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Owner</th>
                        <th className="text-left py-4 px-6 text-sm font-bold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties
                        .filter(prop => 
                          prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prop.location.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((property) => (
                        <tr key={property.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-6">
                            <ImageWithFallback
                              src={property.image}
                              alt={property.title}
                              className="w-16 h-16 object-cover rounded-lg"
                              fallbackText={property.title}
                            />
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm font-bold text-[#1A1A2E]">{property.title}</p>
                            <p className="text-xs text-gray-600">{property.area} • {property.bedrooms} BHK</p>
                          </td>
                          <td className="py-4 px-6 text-sm">{property.type}</td>
                          <td className="py-4 px-6 text-sm">{property.location}</td>
                          <td className="py-4 px-6 text-sm font-bold text-[#0088CC]">{property.price}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              property.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : property.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {property.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-sm font-medium">{property.owner}</p>
                            <p className="text-xs text-gray-600">{property.phone}</p>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button 
                                onClick={() => {
                                  setModalType('edit');
                                  setSelectedItem(property);
                                  setShowModal(true);
                                }}
                                className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteProperty(property.id)}
                                className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* USERS TAB */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-1 sm:flex-initial">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full sm:w-80"
                    />
                  </div>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Button 
                  onClick={() => {
                    setModalType('add');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="bg-[#0088CC] hover:bg-[#0077BB] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>

              {/* Users Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {users
                  .filter(user => 
                    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((user) => (
                  <div key={user.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#0088CC] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A1A2E]">{user.name}</h3>
                          <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                            {user.role}
                          </span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        {user.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        {user.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Joined: {user.joined}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Building className="w-4 h-4 mr-2" />
                        {user.properties} Properties
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4 border-t border-gray-200">
                      <Button 
                        onClick={() => {
                          setModalType('edit');
                          setSelectedItem(user);
                          setShowModal(true);
                        }}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDeleteUser(user.id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADVERTISEMENTS TAB */}
          {activeTab === 'advertisements' && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg lg:text-xl font-bold text-[#1A1A2E] font-['Poppins']">
                    Private Advertisements Management
                  </h2>
                  <p className="text-xs lg:text-sm text-gray-600">Manage ads displayed on the home screen carousel</p>
                </div>
                <Button 
                  onClick={() => {
                    setModalType('add');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="bg-[#0088CC] hover:bg-[#0077BB] text-white w-full lg:w-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Advertisement
                </Button>
              </div>

              {/* Ads Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {advertisements.map((ad) => (
                  <div key={ad.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <ImageWithFallback
                        src={ad.image}
                        alt={ad.title}
                        className="w-full h-40 object-cover"
                        fallbackText={ad.title}
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          ad.status === 'Active' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-500 text-white'
                        }`}>
                          {ad.status}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">
                        Position #{ad.position}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-[#1A1A2E] mb-2">{ad.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>{ad.clicks} clicks</span>
                        <span>{ad.dateAdded}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => {
                            setModalType('edit');
                            setSelectedItem(ad);
                            setShowModal(true);
                          }}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          onClick={() => handleDeleteAd(ad.id)}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-2"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEWS TAB */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              {/* Actions Bar */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 flex-1">
                  <div className="relative flex-1 sm:flex-initial">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full sm:w-80"
                    />
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    setModalType('add');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="bg-[#0088CC] hover:bg-[#0077BB] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add News Article
                </Button>
              </div>

              {/* News List */}
              <div className="space-y-4">
                {newsArticles
                  .filter(news => 
                    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    news.source.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((news) => (
                  <div key={news.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-6">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
                        fallbackText={news.title}
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{news.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="font-medium">{news.source}</span>
                              <span>{news.date}</span>
                              <span>{news.views} views</span>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            news.status === 'Published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {news.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {news.content}
                        </p>
                        
                        <div className="flex space-x-2">
                          <Button 
                            onClick={() => {
                              setModalType('edit');
                              setSelectedItem(news);
                              setShowModal(true);
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            onClick={() => handleDeleteNews(news.id)}
                            className="bg-red-500 hover:bg-red-600 text-white text-sm"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-bold text-[#1A1A2E] mb-4 font-['Poppins']">Service Management</h2>
              <p className="text-sm lg:text-base text-gray-600 mb-6">Manage service providers and service requests.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Construction', 'Interior', 'Legal', 'Loans', 'Vasthu'].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                    <Package className="w-12 h-12 mx-auto mb-3 text-[#0088CC]" />
                    <h3 className="font-bold text-lg mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm mb-4">Manage {service.toLowerCase()} services</p>
                    <Button className="w-full bg-[#0088CC] hover:bg-[#0077BB] text-white">
                      View Requests
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl shadow-md p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-bold text-[#1A1A2E] mb-6 font-['Poppins']">App Settings</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Contact Number</label>
                      <Input value="9618 404 505" readOnly className="bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <Input value="info@realestateno1.com" readOnly className="bg-gray-50" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Address</label>
                      <Input 
                        value="Plot no.100, TNGO's Colony, Phase-II, Gachibowli, Financial District, Hyderabad - 500046" 
                        readOnly 
                        className="bg-gray-50" 
                      />
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-lg mb-4">App Configuration</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Enable User Registration</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Property Moderation</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Advertisement Auto-Play</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Danger Zone</h3>
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Clear All Cache
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 lg:p-4">
          <div className="bg-white rounded-lg lg:rounded-xl shadow-2xl max-w-2xl w-full max-h-[95vh] lg:max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between">
              <h2 className="text-lg lg:text-xl font-bold text-[#1A1A2E] font-['Poppins']">
                {modalType === 'add' ? 'Add' : 'Edit'} {activeTab === 'properties' ? 'Property' : activeTab === 'users' ? 'User' : activeTab === 'advertisements' ? 'Advertisement' : 'News Article'}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
            
            <div className="p-4 lg:p-6">
              {activeTab === 'properties' && (
                <PropertyForm 
                  property={selectedItem}
                  onSave={modalType === 'add' ? handleAddProperty : (data) => handleEditProperty(selectedItem.id, data)}
                  onCancel={() => setShowModal(false)}
                />
              )}
              
              {activeTab === 'users' && (
                <UserForm 
                  user={selectedItem}
                  onSave={modalType === 'add' ? handleAddUser : (data) => handleEditUser(selectedItem.id, data)}
                  onCancel={() => setShowModal(false)}
                />
              )}
              
              {activeTab === 'advertisements' && (
                <AdForm 
                  ad={selectedItem}
                  onSave={modalType === 'add' ? handleAddAd : (data) => handleEditAd(selectedItem.id, data)}
                  onCancel={() => setShowModal(false)}
                />
              )}
              
              {activeTab === 'news' && (
                <NewsForm 
                  news={selectedItem}
                  onSave={modalType === 'add' ? handleAddNews : (data) => handleEditNews(selectedItem.id, data)}
                  onCancel={() => setShowModal(false)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Property Form Component
function PropertyForm({ property, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    type: property?.type || 'Apartment',
    location: property?.location || '',
    price: property?.price || '',
    area: property?.area || '',
    bedrooms: property?.bedrooms || '',
    owner: property?.owner || '',
    image: property?.image || '',
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Property Title</label>
        <Input 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., 3BHK Luxury Apartment"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
          <select 
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          >
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Commercial</option>
            <option>Farmhouse</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
          <Input 
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            placeholder="e.g., Gachibowli"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Price</label>
          <Input 
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            placeholder="e.g., ₹1.2 Cr"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Area</label>
          <Input 
            value={formData.area}
            onChange={(e) => setFormData({...formData, area: e.target.value})}
            placeholder="e.g., 1850 sq.ft"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Bedrooms</label>
          <Input 
            value={formData.bedrooms}
            onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
            placeholder="e.g., 3"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Owner Name</label>
        <Input 
          value={formData.owner}
          onChange={(e) => setFormData({...formData, owner: e.target.value})}
          placeholder="e.g., Rajesh Kumar"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
        <Input 
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
          placeholder="https://..."
        />
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
        <Button type="submit" className="flex-1 bg-[#0088CC] hover:bg-[#0077BB] text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Property
        </Button>
        <Button type="button" onClick={onCancel} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700">
          Cancel
        </Button>
      </div>
    </form>
  );
}

// User Form Component
function UserForm({ user, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    role: user?.role || 'Buyer',
    phone: user?.phone || '',
    email: user?.email || '',
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
        <Input 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="e.g., Rajesh Kumar"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
        <select 
          value={formData.role}
          onChange={(e) => setFormData({...formData, role: e.target.value as any})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        >
          <option>Buyer</option>
          <option>Seller</option>
          <option>Agent</option>
          <option>Builder</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
          <Input 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="9876543210"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
          <Input 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="user@email.com"
            required
          />
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
        <Button type="submit" className="flex-1 bg-[#0088CC] hover:bg-[#0077BB] text-white">
          <Save className="w-4 h-4 mr-2" />
          Save User
        </Button>
        <Button type="button" onClick={onCancel} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700">
          Cancel
        </Button>
      </div>
    </form>
  );
}

// Advertisement Form Component
function AdForm({ ad, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    title: ad?.title || '',
    image: ad?.image || '',
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Advertisement Title</label>
        <Input 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., Luxury Properties"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
        <Input 
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
          placeholder="https://..."
          required
        />
      </div>
      
      {formData.image && (
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Preview</label>
          <ImageWithFallback
            src={formData.image}
            alt={formData.title}
            className="w-full h-40 object-cover rounded-lg"
            fallbackText={formData.title}
          />
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
        <Button type="submit" className="flex-1 bg-[#0088CC] hover:bg-[#0077BB] text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Advertisement
        </Button>
        <Button type="button" onClick={onCancel} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700">
          Cancel
        </Button>
      </div>
    </form>
  );
}

// News Form Component
function NewsForm({ news, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    title: news?.title || '',
    source: news?.source || '',
    image: news?.image || '',
    content: news?.content || '',
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Article Title</label>
        <Input 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="e.g., Hyderabad Property Market Sees Growth"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Source</label>
          <Input 
            value={formData.source}
            onChange={(e) => setFormData({...formData, source: e.target.value})}
            placeholder="e.g., Times of India"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
          <Input 
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            placeholder="https://..."
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Article Content</label>
        <textarea 
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          placeholder="Write the news article content here..."
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
        <Button type="submit" className="flex-1 bg-[#0088CC] hover:bg-[#0077BB] text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Article
        </Button>
        <Button type="button" onClick={onCancel} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700">
          Cancel
        </Button>
      </div>
    </form>
  );
}
