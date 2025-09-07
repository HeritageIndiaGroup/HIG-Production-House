-- Insert services
INSERT INTO public.services (name, description, category, base_price) VALUES
('Film Shooting', 'Professional film production services', 'film', 50000.00),
('Short Films', 'Creative short film production', 'film', 25000.00),
('Wedding Films & Pre/Post Wedding Shoot', 'Complete wedding videography and photography', 'wedding', 30000.00),
('Commercial Product Shoot', 'Professional product photography and videography', 'commercial', 20000.00),
('Music Videos', 'Creative music video production', 'music_video', 15000.00),
('Photography and Event Coverage', 'Professional photography services', 'photography', 10000.00),
('Ad Films', 'Commercial advertisement production', 'commercial', 40000.00),
('Corporate Films and Documentaries', 'Corporate video production', 'corporate', 35000.00);

-- Insert wedding packages
INSERT INTO public.packages (service_id, name, price, features, duration_days, deliverables) 
SELECT 
  s.id,
  'Basic Package',
  30000.00,
  ARRAY['1 Day Coverage (Wedding)', '1 Photographer + 1 Videographer', '200 Edited Photos', '5-7 min Highlight Film', 'Social Media Reels (2)'],
  1,
  ARRAY['200 Edited Photos', '5-7 min Highlight Film', '2 Social Media Reels']
FROM public.services s WHERE s.name = 'Wedding Films & Pre/Post Wedding Shoot';

INSERT INTO public.packages (service_id, name, price, features, duration_days, includes_drone, deliverables) 
SELECT 
  s.id,
  'Premium Package',
  60000.00,
  ARRAY['2 Days Coverage (Pre-Wedding + Wedding)', '2 Photographers + 2 Videographers', 'Drone Coverage', '400 Edited Photos', '10-12 min Cinematic Film', '5 Social Media Reels'],
  2,
  true,
  ARRAY['400 Edited Photos', '10-12 min Cinematic Film', '5 Social Media Reels']
FROM public.services s WHERE s.name = 'Wedding Films & Pre/Post Wedding Shoot';

INSERT INTO public.packages (service_id, name, price, features, duration_days, includes_drone, deliverables) 
SELECT 
  s.id,
  'Luxury Package',
  120000.00,
  ARRAY['3 Days Coverage (Pre-Wedding + Wedding + Reception)', '3-4 Photographers/Videographers', 'Drone + Gimbal + Cinematic Setup', 'Unlimited Edited Photos', '20+ min Cinematic Film', 'Album (30 Pages)', '8-10 Social Media Reels'],
  3,
  true,
  ARRAY['Unlimited Edited Photos', '20+ min Cinematic Film', '30 Page Album', '8-10 Social Media Reels']
FROM public.services s WHERE s.name = 'Wedding Films & Pre/Post Wedding Shoot';

-- Insert music video packages
INSERT INTO public.packages (service_id, name, price, features, duration_days, deliverables) 
SELECT 
  s.id,
  'Starter Package',
  15000.00,
  ARRAY['1 Day Shoot (Indoor/Outdoor)', 'HD Quality Video', 'Basic Editing + Color Grading', '1 Final Music Video (3-5 min)'],
  1,
  ARRAY['1 Final Music Video (3-5 min)']
FROM public.services s WHERE s.name = 'Music Videos';

INSERT INTO public.packages (service_id, name, price, features, duration_days, includes_drone, deliverables) 
SELECT 
  s.id,
  'Professional Package',
  35000.00,
  ARRAY['2 Day Shoot', '2 Locations + Drone Coverage', 'Advanced Editing + Color Grading', 'Cinematic Effects', '1 Final Music Video (4-6 min)', '2 Teaser Reels for Social Media'],
  2,
  true,
  ARRAY['1 Final Music Video (4-6 min)', '2 Teaser Reels for Social Media']
FROM public.services s WHERE s.name = 'Music Videos';

INSERT INTO public.packages (service_id, name, price, features, duration_days, includes_drone, deliverables) 
SELECT 
  s.id,
  'Premium Package',
  60000.00,
  ARRAY['3-4 Day Shoot', 'Multiple Locations', 'Full Crew (DOP, Lights, Drone, Set Design)', '4K Cinematic Output', '1 Final Music Video + 4 Social Media Reels', 'Behind The Scenes (BTS) Video'],
  4,
  true,
  ARRAY['1 Final Music Video', '4 Social Media Reels', 'Behind The Scenes Video']
FROM public.services s WHERE s.name = 'Music Videos';

-- Insert some sample availability (next 90 days as available)
INSERT INTO public.availability (date, is_available, max_bookings)
SELECT 
  CURRENT_DATE + INTERVAL '1 day' * generate_series(1, 90),
  true,
  2
WHERE NOT EXISTS (
  SELECT 1 FROM public.availability WHERE date = CURRENT_DATE + INTERVAL '1 day' * generate_series(1, 90)
);
