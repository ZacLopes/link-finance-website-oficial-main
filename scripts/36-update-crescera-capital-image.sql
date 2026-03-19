-- Update Crescera Capital event image from blob storage to local path
-- This script fixes the image URL to use the local optimized asset

UPDATE events
SET image = '/images/cresceracapital.png'
WHERE 
  title ILIKE '%Crescera Capital%' 
  OR title ILIKE '%Alexandre Leao%'
  OR image LIKE '%image-yROBPySvdK9yoKE8nWssMSCM35kmV1%';

-- Verify the update
SELECT id, title, image, created_at
FROM events
WHERE image = '/images/cresceracapital.png';
