// "use client"

// import { Button } from "@/components/ui/button"
// import { Play, ChevronDown } from "lucide-react"
// import Link from "next/link"
// import { useState, useEffect } from "react"

// export function Hero() {
//   const [currentVideo, setCurrentVideo] = useState(0)

//   const heroVideos = [
//     {
//       title: "CINEMATIC WEDDINGS",
//       subtitle: "NOW BOOKING FOR 2025",
//       description: "Capture your love story with our premium wedding videography",
//       cta: "BOOK YOUR DATE",
//       video: "/cinematic-wedding-videography-with-bride-and-groom.jpg",
//     },
//     {
//       title: "MUSIC VIDEOS",
//       subtitle: "PROFESSIONAL PRODUCTION",
//       description: "Bring your music to life with stunning visuals",
//       cta: "START YOUR PROJECT",
//       video: "/music-video-production-with-artist-performing.jpg",
//     },
//     {
//       title: "COMMERCIAL FILMS",
//       subtitle: "BRAND STORYTELLING",
//       description: "Tell your brand's story with compelling video content",
//       cta: "DISCUSS YOUR VISION",
//       video: "/commercial-film-production-with-professional-crew.jpg",
//     },
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % heroVideos.length)
//     }, 8000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         {/* Video Background */}
//         <div className="relative w-full h-full">
//           <img
//             src={heroVideos[currentVideo].video || "/placeholder.svg"}
//             alt="HIG Production House"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           {/* Dark overlay for text readability */}
//           <div className="absolute inset-0 bg-black/50" />
//           {/* Gradient overlay for cinematic effect */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
//         <div className="space-y-8 max-w-3xl">
//           {/* Small subtitle */}
//           <div className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase">
//             {heroVideos[currentVideo].subtitle}
//           </div>

//           {/* Main title - large and bold */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
//             {heroVideos[currentVideo].title}
//           </h1>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
//             {heroVideos[currentVideo].description}
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
//             >
//               <Link href="/booking" className="flex items-center space-x-2">
//                 <span>{heroVideos[currentVideo].cta}</span>
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-4 text-lg font-semibold"
//             >
//               <Link href="#gallery" className="flex items-center space-x-2">
//                 <Play className="w-5 h-5" />
//                 <span>WATCH REEL</span>
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex space-x-2">
//           {heroVideos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentVideo(index)}
//               className={`w-12 h-1 transition-all duration-300 ${
//                 index === currentVideo ? "bg-primary" : "bg-white/30"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
//         <ChevronDown className="w-6 h-6 text-white/70" />
//       </div>
//     </section>
//   )
// }




















// "use client"

// import { Play, Pause, Volume2, VolumeX } from "lucide-react"
// import Link from "next/link"
// import { useState, useRef, useEffect } from "react"
// import { Button } from "@/components/ui/button"

// export function Hero() {
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [isMuted, setIsMuted] = useState(true)
//   const [isEnded, setIsEnded] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const togglePlay = () => {
//     if (!videoRef.current) return
//     if (isPlaying) {
//       videoRef.current.pause()
//       setIsPlaying(false)
//     } else {
//       videoRef.current.play()
//       setIsPlaying(true)
//       setIsEnded(false) // hide booking/explore when replay starts
//     }
//   }

//   const toggleMute = () => {
//     if (!videoRef.current) return
//     videoRef.current.muted = !isMuted
//     setIsMuted(!isMuted)
//   }

//   useEffect(() => {
//     if (!videoRef.current) return
//     const handleEnded = () => {
//       setIsEnded(true)
//       setIsPlaying(false)
//     }
//     videoRef.current.addEventListener("ended", handleEnded)
//     return () => {
//       videoRef.current?.removeEventListener("ended", handleEnded)
//     }
//   }, [])

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         src="/hero.mp4"
//         autoPlay
//         muted={isMuted}
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Play/Pause + Mute/Unmute Controls (bottom-left) */}
//       {!isEnded && (
//         <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
//           <button
//             onClick={togglePlay}
//             className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
//           >
//             {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
//           </button>
//           <button
//             onClick={toggleMute}
//             className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
//           >
//             {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
//           </button>
//         </div>
//       )}

//       {/* Booking + Explore Buttons after video ends */}
//       {isEnded && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-6 animate-fadeIn">
//           <Button
//             asChild
//             size="lg"
//             className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-xl font-semibold"
//           >
//             <Link href="/booking">BOOKING</Link>
//           </Button>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-10 py-5 text-xl font-semibold"
//           >
//             <Link href="/explore">EXPLORE</Link>
//           </Button>
//         </div>
//       )}
//     </section>
//   )
// }










// "use client"

// import { Button } from "@/components/ui/button"
// import { Play, Pause, ChevronDown, Volume2, VolumeX } from "lucide-react"
// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"

// export function Hero() {
//   const [currentVideo, setCurrentVideo] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [isMuted, setIsMuted] = useState(true)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const heroVideos = [
//     {
//       title: "CINEMATIC WEDDINGS",
//       subtitle: "NOW BOOKING FOR 2025",
//       description: "Capture your love story with our premium wedding videography",
//       cta: "BOOK YOUR DATE",
//     },
//     {
//       title: "MUSIC VIDEOS",
//       subtitle: "PROFESSIONAL PRODUCTION",
//       description: "Bring your music to life with stunning visuals",
//       cta: "START YOUR PROJECT",
//     },
//     {
//       title: "COMMERCIAL FILMS",
//       subtitle: "BRAND STORYTELLING",
//       description: "Tell your brand's story with compelling video content",
//       cta: "DISCUSS YOUR VISION",
//     },
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % heroVideos.length)
//     }, 8000)
//     return () => clearInterval(interval)
//   }, [])

//   const togglePlay = () => {
//     if (!videoRef.current) return
//     if (isPlaying) {
//       videoRef.current.pause()
//     } else {
//       videoRef.current.play()
//     }
//     setIsPlaying(!isPlaying)
//   }

//   const toggleMute = () => {
//     if (!videoRef.current) return
//     videoRef.current.muted = !isMuted
//     setIsMuted(!isMuted)
//   }

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         {/* Video Background */}
//         <video
//           ref={videoRef}
//           src="/hero.mp4"
//           autoPlay
//           loop
//           muted={isMuted}
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         {/* Dark overlay for text readability */}
//         <div className="absolute inset-0 bg-black/50" />
//         {/* Gradient overlay for cinematic effect */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
//         <div className="space-y-8 max-w-3xl">
//           {/* Small subtitle */}
//           <div className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase">
//             {heroVideos[currentVideo].subtitle}
//           </div>

//           {/* Main title - large and bold */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
//             {heroVideos[currentVideo].title}
//           </h1>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
//             {heroVideos[currentVideo].description}
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
//             >
//               <Link href="/booking" className="flex items-center space-x-2">
//                 <span>{heroVideos[currentVideo].cta}</span>
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-4 text-lg font-semibold"
//             >
//               <Link href="#gallery" className="flex items-center space-x-2">
//                 <Play className="w-5 h-5" />
//                 <span>WATCH REEL</span>
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex space-x-2">
//           {heroVideos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentVideo(index)}
//               className={`w-12 h-1 transition-all duration-300 ${
//                 index === currentVideo ? "bg-primary" : "bg-white/30"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
//         <ChevronDown className="w-6 h-6 text-white/70" />
//       </div>

//       {/* Play/Pause + Mute/Unmute Controls */}
//       <div className="absolute bottom-8 right-8 z-20 flex space-x-4">
//         <button
//           onClick={togglePlay}
//           className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
//         >
//           {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
//         </button>
//         <button
//           onClick={toggleMute}
//           className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
//         >
//           {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
//         </button>
//       </div>
//     </section>
//   )
// }












"use client"

import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react"
import { useState, useRef } from "react"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Play/Pause + Mute/Unmute Controls (bottom-left) */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
        <button
          onClick={togglePlay}
          className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>

      {/* Scroll Indicator (bottom-center) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  )
}
