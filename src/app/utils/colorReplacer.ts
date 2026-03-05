/**
 * Color Replacement Utility
 * 
 * OLD COLORS:
 * - Royal Blue: #4A47A3
 * - Hover state: #3a3782
 * 
 * NEW COLORS:
 * - Brand Blue: #0077BE
 * - Navy Blue (dark text): #003366
 * - Hover state: #005a94
 * 
 * CONTACT INFORMATION:
 * - Phone: 9618 404 505
 * - Address: Plot no.100, TNGO's Colony, Phase-II, Gachibowli, Financial District, Hyderabad - 500046
 * - Email: info@realestateno1.com
 * 
 * This file serves as a reference for color replacements throughout the app.
 */

export const COLORS = {
  // Old colors (deprecated)
  OLD_ROYAL_BLUE: '#4A47A3',
  OLD_HOVER: '#3a3782',
  
  // New brand colors
  BRAND_BLUE: '#0077BE',
  NAVY_BLUE: '#003366',
  HOVER_BLUE: '#005a94',
  BOLD_RED: '#CC0000',
  RICH_GOLD: '#D4A017',
} as const;

export const CONTACT = {
  PHONE: '9618 404 505',
  PHONE_HREF: 'tel:9618404505',
  ADDRESS: {
    LINE1: 'Plot no.100, TNGO\'s Colony, Phase-II',
    LINE2: 'Gachibowli, Financial District',
    LINE3: 'Hyderabad - 500046',
  },
  EMAIL: 'info@realestateno1.com',
} as const;
