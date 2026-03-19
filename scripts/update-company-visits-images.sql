-- Update image paths for company visit events
-- Adding correct image paths for Advisia, Fortezza, and FM/Derraik visits

-- Update Advisia visit image
UPDATE events 
SET image = '/images/visita-advisia.png'
WHERE title ILIKE '%Advisia%' 
   OR title ILIKE '%Alexandre Cracovsky%'
   OR title ILIKE '%Thiago Musman%'
   OR title ILIKE '%Fernando Cesar%';

-- Update Fortezza Partners visit image  
UPDATE events 
SET image = '/images/visita-fortezza.jpeg'
WHERE title ILIKE '%Fortezza%'
   OR title ILIKE '%Denis Morante%';

-- Update FM/Derraik visit image
UPDATE events 
SET image = '/images/visita-fm-derraik.jpeg'
WHERE title ILIKE '%FM/Derraik%'
   OR title ILIKE '%Vitor Pajaro%'
   OR title ILIKE '%Fabiana Fagundes%'
   OR title ILIKE '%Rodrigo Menezes%';

-- Verify the updates
SELECT title, image, event_date 
FROM events 
WHERE title ILIKE '%Advisia%' 
   OR title ILIKE '%Fortezza%' 
   OR title ILIKE '%FM/Derraik%'
ORDER BY event_date DESC;
