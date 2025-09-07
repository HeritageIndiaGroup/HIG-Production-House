-- Create gallery table for media management
CREATE TABLE IF NOT EXISTS gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('wedding', 'music_video', 'corporate', 'commercial', 'film')),
    type VARCHAR(10) NOT NULL CHECK (type IN ('image', 'video')),
    file_url TEXT NOT NULL,
    thumbnail_url TEXT,
    description TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Set up RLS policies for gallery table
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active gallery items
CREATE POLICY "Public can view active gallery items" ON gallery
    FOR SELECT USING (is_active = true);

-- Allow authenticated users (admin) full access
CREATE POLICY "Admin can manage gallery" ON gallery
    FOR ALL USING (auth.role() = 'authenticated');

-- Set up storage policies
CREATE POLICY "Public can view media files" ON storage.objects
    FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "Authenticated users can upload media files" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update media files" ON storage.objects
    FOR UPDATE USING (bucket_id = 'media' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete media files" ON storage.objects
    FOR DELETE USING (bucket_id = 'media' AND auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_gallery_category ON gallery(category);
CREATE INDEX idx_gallery_type ON gallery(type);
CREATE INDEX idx_gallery_featured ON gallery(is_featured);
CREATE INDEX idx_gallery_active ON gallery(is_active);
CREATE INDEX idx_gallery_created_at ON gallery(created_at);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_gallery_updated_at 
    BEFORE UPDATE ON gallery 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
