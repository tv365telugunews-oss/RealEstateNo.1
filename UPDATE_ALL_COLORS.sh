#!/bin/bash

# Real Estate No.1 Color Update Script
# This script replaces all instances of the old Royal Blue with the new Brand Blue

echo "🎨 Starting color update for Real Estate No.1..."
echo ""

# Define color mappings
OLD_BLUE="#4A47A3"
NEW_BLUE="#0077BE"
OLD_HOVER="#3a3782"
NEW_HOVER="#005a94"

# Find and count occurrences
echo "📊 Scanning for old color references..."
COUNT=$(find ./src/app -name "*.tsx" -type f -exec grep -l "$OLD_BLUE" {} \; | wc -l)
echo "Found $OLD_BLUE in $COUNT files"
echo ""

# List files that will be updated
echo "📝 Files to be updated:"
find ./src/app -name "*.tsx" -type f -exec grep -l "$OLD_BLUE" {} \;
echo ""

# Prompt for confirmation
read -p "Do you want to proceed with the update? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "🔄 Updating colors..."
    
    # Replace old blue with new blue
    find ./src/app -name "*.tsx" -type f -exec sed -i.bak "s/$OLD_BLUE/$NEW_BLUE/g" {} \;
    
    # Replace old hover with new hover
    find ./src/app -name "*.tsx" -type f -exec sed -i.bak "s/$OLD_HOVER/$NEW_HOVER/g" {} \;
    
    # Remove backup files
    find ./src/app -name "*.bak" -type f -delete
    
    echo "✅ Color update complete!"
    echo ""
    echo "Summary:"
    echo "  - $OLD_BLUE → $NEW_BLUE"
    echo "  - $OLD_HOVER → $NEW_HOVER"
    echo ""
    echo "Please review the changes and test the application."
else
    echo "❌ Update cancelled."
fi
