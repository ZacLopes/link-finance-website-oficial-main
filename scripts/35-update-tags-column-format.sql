-- Update tags column to use JSON array format and populate existing events
-- Script: 35-update-tags-column-format.sql

-- First, let's update the column type to text[] (array of text) if supported, or keep as text with JSON format
-- For now, we'll update existing records to use JSON array format in the text column

-- Update existing events with proper JSON array format for tags
UPDATE events 
SET tags = CASE 
  WHEN category ILIKE '%evento%' THEN '["Networking", "Mercado", "Educação"]'
  WHEN category ILIKE '%projeto%' THEN '["Análise", "Valuation", "Estratégia"]'
  ELSE '["Finanças", "Investimentos", "Mercado"]'
END
WHERE tags IS NULL OR tags = '';

-- Add some specific tags based on event titles for better categorization
UPDATE events 
SET tags = '["Wall Street Prep", "Modelagem", "Valuation"]'
WHERE title ILIKE '%wall street%' OR title ILIKE '%modelagem%' OR title ILIKE '%valuation%';

UPDATE events 
SET tags = '["Networking", "Liderança", "Carreira"]'
WHERE title ILIKE '%networking%' OR title ILIKE '%carreira%' OR title ILIKE '%liderança%';

UPDATE events 
SET tags = '["Investment Banking", "M&A", "Finanças Corporativas"]'
WHERE title ILIKE '%investment banking%' OR title ILIKE '%m&a%' OR title ILIKE '%fusões%';

UPDATE events 
SET tags = '["Private Equity", "Venture Capital", "Investimentos"]'
WHERE title ILIKE '%private equity%' OR title ILIKE '%venture capital%' OR title ILIKE '%vc%';

-- Verify the update
SELECT id, title, category, tags FROM events WHERE tags IS NOT NULL;
