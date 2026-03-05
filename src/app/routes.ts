import { createHashRouter } from 'react-router';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { TermsScreen } from './screens/TermsScreen';
import { ProfileSetupScreen } from './screens/ProfileSetupScreen';
import { BuyFormScreen } from './screens/BuyFormScreen';
import { SellFormScreen } from './screens/SellFormScreen';
import { ServiceRequestScreen } from './screens/ServiceRequestScreen';
import { ServiceVendorScreen } from './screens/ServiceVendorScreen';
import { ClassifiedAdsScreen } from './screens/ClassifiedAdsScreen';
import { PostAdScreen } from './screens/PostAdScreen';
import { SuccessScreen } from './screens/SuccessScreen';
import { LoginScreen } from './screens/LoginScreen';
import { NewHomeScreen } from './screens/NewHomeScreen';
import { NewsScreen } from './screens/NewsScreen';
import { SavedScreen } from './screens/SavedScreen';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { PropertyListingScreen } from './screens/PropertyListingScreen';
import { PropertyDetailScreen } from './screens/PropertyDetailScreen';
import { SearchFilterScreen } from './screens/SearchFilterScreen';
import { AgentProfileScreen } from './screens/AgentProfileScreen';
import { PostPropertyScreen } from './screens/PostPropertyScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { SubscriptionPlansScreen } from './screens/SubscriptionPlansScreen';
import { EMICalculatorScreen } from './screens/EMICalculatorScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { VideosScreen } from './screens/VideosScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AdminLoginScreen } from './screens/admin/AdminLoginScreen';
import { AdminDashboard } from './screens/admin/AdminDashboard';

export const router = createHashRouter([
  {
    path: '/',
    Component: WelcomeScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/register',
    Component: RegisterScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/terms',
    Component: TermsScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/profile-setup',
    Component: ProfileSetupScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/buy-form',
    Component: BuyFormScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/sell-form',
    Component: SellFormScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/service-request',
    Component: ServiceRequestScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/service-vendor',
    Component: ServiceVendorScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/classified-ads',
    Component: ClassifiedAdsScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/post-ad',
    Component: PostAdScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/success',
    Component: SuccessScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/login',
    Component: LoginScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/home',
    Component: NewHomeScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/news',
    Component: NewsScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/saved',
    Component: SavedScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/onboarding',
    Component: OnboardingScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/properties',
    Component: PropertyListingScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/properties/:type',
    Component: PropertyListingScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/property/:id',
    Component: PropertyDetailScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/search',
    Component: SearchFilterScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/agent/:id',
    Component: AgentProfileScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/post-property',
    Component: PostPropertyScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/dashboard',
    Component: DashboardScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/plans',
    Component: SubscriptionPlansScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/emi-calculator',
    Component: EMICalculatorScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/notifications',
    Component: NotificationsScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/profile',
    Component: ProfileScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/videos',
    Component: VideosScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/admin/login',
    Component: AdminLoginScreen,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/admin/dashboard',
    Component: AdminDashboard,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '*',
    Component: NotFoundScreen,
    ErrorBoundary: ErrorBoundary,
  },
]);