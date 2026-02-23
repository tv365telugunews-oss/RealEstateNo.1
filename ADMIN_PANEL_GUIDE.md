# Real Estate No.1 - Admin Panel Guide

## 🔐 Access Admin Panel

### Method 1: Direct URL
Navigate to: `/#/admin/login`

### Method 2: From Main App
1. Open the app home screen
2. Click the **Settings** icon (top-right)
3. Scroll to the bottom of the settings panel
4. Click **"Admin Panel"** (red text)

## 🔑 Login Credentials

**Username:** `admin`  
**Password:** `Hyd@4466`

## 📊 Admin Dashboard Features

### 1. **Dashboard Overview**
- Real-time statistics for:
  - Total Properties
  - Active Users
  - Total Advertisements
  - News Articles
- Recent properties list
- Recent users list
- Growth metrics and trends

### 2. **Properties Management** 🏠
Full CRUD (Create, Read, Update, Delete) operations:

#### Features:
- ✅ View all properties in a detailed table
- ✅ Search properties by title or location
- ✅ Filter properties by type, status
- ✅ Add new property with form:
  - Title, Type, Location
  - Price, Area, Bedrooms
  - Owner information
  - Property image URL
- ✅ Edit existing properties
- ✅ Delete properties (with confirmation)
- ✅ View property status (Active/Pending/Sold)
- ✅ Contact information display

#### Property Types:
- Apartment
- Villa
- Plot
- Commercial
- Farmhouse

### 3. **Users Management** 👥
Complete user management system:

#### Features:
- ✅ View all users in card grid layout
- ✅ Search users by name or email
- ✅ Filter by user role
- ✅ Add new users with:
  - Full name
  - Role selection
  - Phone and email
- ✅ Edit user details
- ✅ Delete users (with confirmation)
- ✅ View user statistics:
  - Total properties owned
  - Join date
  - Active/Inactive status

#### User Roles:
- Buyer
- Seller
- Agent
- Builder

### 4. **Advertisements Management** 📢
Manage home screen carousel ads:

#### Features:
- ✅ View all 8 advertisement slots
- ✅ Visual grid with image previews
- ✅ Add new advertisements:
  - Title
  - Image URL
  - Auto-assigned position
- ✅ Edit existing ads
- ✅ Delete ads
- ✅ Track click statistics
- ✅ View ad status (Active/Inactive)
- ✅ Date added tracking

#### Current Ads:
1. Luxury Properties
2. Modern Apartments
3. Villa Collection
4. New Developments
5. Premium Interiors
6. Gated Communities
7. Expert Agents
8. Investment Opportunities

### 5. **News Management** 📰
Content management for news section:

#### Features:
- ✅ View all news articles with preview
- ✅ Search news by title or source
- ✅ Add new articles:
  - Article title
  - Source name
  - Image URL
  - Full content
- ✅ Edit existing articles
- ✅ Delete articles
- ✅ View article statistics:
  - Total views
  - Publication date
  - Status (Published/Draft)

### 6. **Services Management** 🛠️
Manage service categories:

#### Service Types:
- Construction
- Interior
- Legal
- Loans
- Vasthu

#### Features:
- ✅ View all service categories
- ✅ Manage service requests
- ✅ Track service providers

### 7. **Settings** ⚙️
App configuration and settings:

#### Features:
- ✅ Contact information display:
  - Phone: 9618 404 505
  - Email: info@realestateno1.com
  - Address: Plot no.100, TNGO's Colony, Phase-II, Gachibowli
- ✅ App configuration toggles:
  - User registration enable/disable
  - Property moderation
  - Advertisement auto-play
- ✅ Cache management
- ✅ System settings

## 🎨 Design Features

### Color Scheme:
- **Primary Blue:** #0088CC (brand color)
- **Dark Background:** #1A1A2E (sidebar)
- **Success Green:** Various shades
- **Warning Yellow:** For pending items
- **Danger Red:** For delete actions

### UI Components:
- ✅ **Responsive sidebar navigation**
- ✅ **Sticky header with quick actions**
- ✅ **Modal forms for add/edit operations**
- ✅ **Data tables with hover effects**
- ✅ **Card-based layouts for better visualization**
- ✅ **Status badges with color coding**
- ✅ **Action buttons with icons**
- ✅ **Search and filter functionality**
- ✅ **Smooth animations and transitions**

## 🔒 Security Features

- ✅ **Authentication required** for all admin routes
- ✅ **Session-based login** using localStorage
- ✅ **Confirmation dialogs** for delete operations
- ✅ **Logout functionality** with token cleanup
- ✅ **Auto-redirect** to login if not authenticated

## 📱 Navigation

### Sidebar Menu:
1. **Dashboard** - Overview and statistics
2. **Properties** - Property management
3. **Users** - User management
4. **Advertisements** - Ad management
5. **News** - News article management
6. **Services** - Service management
7. **Settings** - App settings
8. **Logout** - Sign out

### Quick Actions:
- **View Main App** - Jump to user-facing app
- **Contact Support** - Quick access to support number
- **Search & Filter** - Find items quickly

## 💡 Tips for Admin Users

1. **Regular Backups**: Export data regularly
2. **Property Moderation**: Review new properties before approval
3. **Ad Management**: Keep ads fresh by updating regularly
4. **User Engagement**: Monitor user activity and statistics
5. **Content Updates**: Keep news section updated with latest market trends
6. **Contact Info**: Ensure contact information is always up-to-date

## 🚀 Key Features

✅ **Real-time Updates** - Changes reflect immediately  
✅ **User-Friendly Interface** - Intuitive design  
✅ **Full CRUD Operations** - Complete control over data  
✅ **Search & Filter** - Find anything quickly  
✅ **Responsive Design** - Works on all screen sizes  
✅ **Visual Feedback** - Clear status indicators  
✅ **Confirmation Dialogs** - Prevent accidental deletions  
✅ **Professional Layout** - Clean and modern design  

## 📞 Support

**Contact Number:** 9618 404 505  
**Office Address:** Plot no.100, TNGO's Colony, Phase-II, Gachibowli, Financial District, Hyderabad - 500046

---

## 🔄 Data Flow

```
Main App (User Interface)
        ↓
Admin Panel (Management)
        ↓
Local State (In-memory storage)
        ↓
User Interface Updates
```

**Note:** This admin panel uses local state management. In production, integrate with a backend API for persistent data storage.

---

**Version:** 1.0.0  
**Last Updated:** February 23, 2026  
**Built for:** Real Estate No.1 - Hyderabad's #1 Property Platform