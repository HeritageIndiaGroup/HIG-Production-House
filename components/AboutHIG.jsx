"use client"

import Image from "next/image"

export default function AboutHIG() {
  return (
    <section className="py-20 bg-[#f9fafb] text-[#374151]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#0891b2]">About HIG Film Production</h2>
          <p>
            HIG Film Production creates visually stunning films and videos that capture every special moment and tell powerful stories. 
            We specialize in:
          </p>
          <ul className="space-y-2 list-disc list-inside text-[#374151]">
            <li>✨ Cinematic Wedding Films – pre/post-wedding shoots, full-day coverage, and highlight videos</li>
            <li>✨ Music Videos – concept development, shooting, editing, and social media reels</li>
            <li>✨ Corporate & Promotional Videos – storytelling, product films, and event coverage</li>
            <li>✨ Creative Projects – commercials, short films, and visual storytelling for brands</li>
          </ul>
          <p>
            With state-of-the-art equipment, a skilled crew, and attention to detail, we transform ideas into professional, engaging, 
            and timeless visual experiences.
          </p>
        </div>

        {/* Image / Logo Section */}
        <div className="md:w-1/2 relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src="/logo.jpg"
            alt="HIG Film Production Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
