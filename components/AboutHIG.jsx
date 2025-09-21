// "use client"

// import Image from "next/image"

// export default function AboutHIG() {
//   return (
//     <section className="py-20 bg-[#f9fafb] text-[#374151]">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
//         {/* Text Section */}
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-4xl font-bold text-[#0891b2]">About HIG Film Production</h2>
//           <p>
//             HIG Film Production creates visually stunning films and videos that capture every special moment and tell powerful stories. 
//             We specialize in:
//           </p>
//           <ul className="space-y-2 list-disc list-inside text-[#374151]">
//             <li>✨ Cinematic Wedding Films – pre/post-wedding shoots, full-day coverage, and highlight videos</li>
//             <li>✨ Music Videos – concept development, shooting, editing, and social media reels</li>
//             <li>✨ Corporate & Promotional Videos – storytelling, product films, and event coverage</li>
//             <li>✨ Creative Projects – commercials, short films, and visual storytelling for brands</li>
//           </ul>
//           <p>
//             With state-of-the-art equipment, a skilled crew, and attention to detail, we transform ideas into professional, engaging, 
//             and timeless visual experiences.
//           </p>
//         </div>

//         {/* Image / Logo Section */}
//         <div className="md:w-1/2 relative w-full h-64 md:h-80 lg:h-96">
//           <Image
//             src="/logo.png"
//             alt="HIG Film Production Logo"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }







"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Film, Music, Briefcase, Palette } from "lucide-react"

export default function AboutHIG() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fafb] to-white text-[#374151]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0891b2] leading-tight">
            About <span className="text-[#0e7490]">HIG Film Production</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#4b5563]">
            HIG Film Production creates visually stunning films and videos that capture every special moment 
            and tell powerful stories.
          </p>

          {/* Expandable Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden space-y-4"
              >
                <div className="space-y-4">
                  <FeatureItem icon={<Film className="text-[#0891b2]" />} text="Cinematic Wedding Films – pre/post-wedding shoots, full-day coverage, and highlight videos" />
                  <FeatureItem icon={<Music className="text-[#0891b2]" />} text="Music Videos – concept development, shooting, editing, and social media reels" />
                  <FeatureItem icon={<Briefcase className="text-[#0891b2]" />} text="Corporate & Promotional Videos – storytelling, product films, and event coverage" />
                  <FeatureItem icon={<Palette className="text-[#0891b2]" />} text="Creative Projects – commercials, short films, and visual storytelling for brands" />
                </div>

                <p className="text-lg text-[#4b5563]">
                  With state-of-the-art equipment, a skilled crew, and attention to detail, 
                  we transform ideas into professional, engaging, and timeless visual experiences.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Read More / Read Less Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#0891b2] font-semibold hover:underline focus:outline-none"
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl bg-white"
        >
          <Image
            src="/logo.png"
            alt="HIG Film Production Logo"
            fill
            className="object-contain p-6"
          />
        </motion.div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0">{icon}</span>
      <p className="text-base text-[#374151]">{text}</p>
    </div>
  )
}
