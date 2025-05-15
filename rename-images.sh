#!/bin/bash
# SEO-friendly image renaming script for R3 Counseling
# This script renames images to be more SEO-friendly
# Usage: ./rename-images.sh

# Create a backup directory
mkdir -p image_backup

# Copy original images to backup
echo "Backing up original images..."
cp src/assets/images/*.png image_backup/
cp src/assets/images/*.jpg image_backup/
cp src/assets/images/*.jpeg image_backup/

# Rename images with SEO-friendly names
echo "Renaming images to be SEO-friendly..."

# Examples of renaming (uncomment and modify as needed)
# mv src/assets/images/tiff-swinging.jpeg src/assets/images/tiffany-luke-r3counseling-therapist.jpeg
# mv src/assets/images/girls-on-court.png src/assets/images/r3counseling-emdr-group-therapy.png
# mv src/assets/images/laughing-women.png src/assets/images/r3counseling-therapy-group-session.png
# mv src/assets/images/flower-women.png src/assets/images/r3counseling-wellness-retreat-women.png

# Note: After renaming, you'll need to update references in code
echo "Image files renamed. Remember to update references in the code!"

# Generates a list of images that need reference updates
echo "The following files may need reference updates:"
grep -r --include="*.tsx" --include="*.ts" --include="*.css" "tiff-swinging.jpeg\|girls-on-court.png\|laughing-women.png\|flower-women.png" src/
