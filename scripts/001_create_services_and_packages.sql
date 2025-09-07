-- Create services table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- 'film', 'wedding', 'music_video', 'photography', 'commercial'
  base_price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create packages table
CREATE TABLE IF NOT EXISTS public.packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- 'Basic', 'Premium', 'Luxury'
  price DECIMAL(10,2) NOT NULL,
  features TEXT[] NOT NULL, -- Array of features
  duration_days INTEGER DEFAULT 1,
  max_locations INTEGER DEFAULT 1,
  includes_drone BOOLEAN DEFAULT false,
  includes_editing BOOLEAN DEFAULT true,
  deliverables TEXT[] NOT NULL, -- What client gets
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  service_id UUID REFERENCES public.services(id),
  package_id UUID REFERENCES public.packages(id),
  event_date DATE NOT NULL,
  event_location TEXT,
  special_requirements TEXT,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'completed', 'cancelled'
  payment_status TEXT DEFAULT 'pending', -- 'pending', 'partial', 'paid'
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create availability table for admin to manage available dates
CREATE TABLE IF NOT EXISTS public.availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL UNIQUE,
  is_available BOOLEAN DEFAULT true,
  max_bookings INTEGER DEFAULT 1,
  current_bookings INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create gallery table for media management
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL, -- Supabase storage URL
  media_type TEXT NOT NULL, -- 'image', 'video'
  category TEXT NOT NULL, -- 'wedding', 'music_video', 'film', 'commercial'
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to services, packages, and gallery
CREATE POLICY "Allow public read access to services" ON public.services FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to packages" ON public.packages FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to gallery" ON public.gallery FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to availability" ON public.availability FOR SELECT USING (true);

-- Create policies for bookings (customers can insert their own bookings)
CREATE POLICY "Allow public insert bookings" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow customers to view their own bookings" ON public.bookings FOR SELECT USING (customer_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Admin policies (will be implemented when auth is added)
-- For now, we'll allow all operations for authenticated users
CREATE POLICY "Allow authenticated users full access to services" ON public.services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access to packages" ON public.packages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access to bookings" ON public.bookings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access to availability" ON public.availability FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access to gallery" ON public.gallery FOR ALL USING (auth.role() = 'authenticated');
