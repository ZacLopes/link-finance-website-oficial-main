-- Add tags column to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS tags text[];

-- Add some sample tags to existing events
UPDATE events SET tags = ARRAY['Mercado Financeiro', 'Networking', 'Educação'] WHERE category = 'evento';
UPDATE events SET tags = ARRAY['Investment Banking', 'Análise', 'Carreira'] WHERE category = 'projeto';

-- Update specific events with more relevant tags (you can customize these)
UPDATE events SET tags = ARRAY['Wall Street', 'Capacitação', 'Internacional'] WHERE title ILIKE '%wall street%';
UPDATE events SET tags = ARRAY['Private Equity', 'Venture Capital', 'Investimentos'] WHERE title ILIKE '%private equity%' OR title ILIKE '%venture capital%';
UPDATE events SET tags = ARRAY['Networking', 'Liderança', 'Mercado'] WHERE title ILIKE '%networking%' OR title ILIKE '%liderança%';
