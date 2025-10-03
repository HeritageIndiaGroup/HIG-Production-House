// "use client"

// import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react"
// import { useState, useRef } from "react"

// export function Hero() {
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [isMuted, setIsMuted] = useState(true)
//   const videoRef = useRef<HTMLVideoElement>(null)

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
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         src="/hero.mp4"
//         autoPlay
//         loop
//         muted={isMuted}
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Play/Pause + Mute/Unmute Controls (bottom-left) */}
//       <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
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

//       {/* Scroll Indicator (bottom-center) */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
//         <ChevronDown className="w-6 h-6 text-white/70" />
//       </div>
//     </section>
//   )
// }










// "use client";

// import { useState, useCallback } from "react";
// import dynamic from "next/dynamic";
// import { Volume2, VolumeX, ChevronDown } from "lucide-react";
// import React from "react";
// import type { YouTubeProps, YouTubeEvent } from "react-youtube";

// // This two-part assertion fixes the type conflicts
// const YouTube = dynamic(() => import("react-youtube").then((mod) => mod.default as any), {
//   ssr: false,
// }) as React.ComponentType<YouTubeProps>;

// export function Hero() {
//   const [isMuted, setIsMuted] = useState(true);
//   const [player, setPlayer] = useState<YT.Player | null>(null);

//   const onReady = useCallback((event: YouTubeEvent) => {
//     const ytPlayer = event.target;
//     setPlayer(ytPlayer);
//     ytPlayer.mute();
//     ytPlayer.playVideo();
//   }, []);

//   const toggleMute = () => {
//     if (!player) return;
//     if (player.isMuted()) {
//       player.unMute();
//       setIsMuted(false);
//     } else {
//       player.mute();
//       setIsMuted(true);
//     }
//   };

//   const videoOptions: YouTubeProps["opts"] = {
//     playerVars: {
//       autoplay: 1,
//       mute: 1,
//       loop: 1,
//       playlist: "2ZvnQhPh3Ag",
//       controls: 0,
//       showinfo: 0,
//       rel: 0,
//       modestbranding: 1,
//       playsinline: 1,
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="relative w-full h-screen flex items-center justify-center overflow-hidden"
//     >
//       <div className="absolute inset-0 z-0">
//         <YouTube
//           videoId="2ZvnQhPh3Ag"
//           opts={videoOptions}
//           onReady={onReady}
//           className="w-full h-full"
//           // ✅ MODIFIED: This class now stretches the video to fill the screen
//           iframeClassName="absolute w-full h-full top-0 left-0 pointer-events-none"
//         />
//       </div>

//       <div className="absolute inset-0 bg-black/50 z-10" />

//       <div className="relative z-20 w-full h-full">
//         <div className="absolute bottom-8 left-8">
//           <button
//             onClick={toggleMute}
//             className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//             aria-label={isMuted ? "Unmute" : "Mute"}
//           >
//             {isMuted ? (
//               <VolumeX className="w-6 h-6" />
//             ) : (
//               <Volume2 className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-6 h-6 text-white/70" />
//         </div>
//       </div>
//     </section>
//   );
// }











// "use client";

// import { useState, useCallback } from "react";
// import dynamic from "next/dynamic";
// import { Volume2, VolumeX, ChevronDown } from "lucide-react";
// import type { YouTubeProps, YouTubeEvent } from "react-youtube";

// // Dynamic import with loading fallback
// const YouTube = dynamic(
//   () => import("react-youtube").then((mod) => mod.default as any),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
//         <div className="w-16 h-16 border-4 border-solar-orange/30 border-t-solar-orange rounded-full animate-spin"></div>
//       </div>
//     ),
//   }
// ) as React.ComponentType<YouTubeProps>;

// export function Hero() {
//   const [isMuted, setIsMuted] = useState(true);
//   const [player, setPlayer] = useState<YT.Player | null>(null);
//   const [videoError, setVideoError] = useState(false);

//   const onReady = useCallback((event: YouTubeEvent) => {
//     const ytPlayer = event.target;
//     setPlayer(ytPlayer);
//     ytPlayer.mute();
//     ytPlayer.playVideo();
//     setVideoError(false);
//   }, []);

//   const onError = useCallback((event: YouTubeEvent) => {
//     console.error("YouTube Player Error:", event.data);
//     setVideoError(true);
//     setPlayer(null);
//   }, []);

//   const toggleMute = useCallback(() => {
//     if (!player) return;
//     if (player.isMuted()) {
//       player.unMute();
//       setIsMuted(false);
//     } else {
//       player.mute();
//       setIsMuted(true);
//     }
//   }, [player]);

//   const videoOptions: YouTubeProps["opts"] = {
//     playerVars: {
//       autoplay: 1,
//       mute: 1,
//       loop: 1,
//       playlist: "2ZvnQhPh3Ag", // Loops the video
//       controls: 0, // Hide all controls
//       rel: 0, // No related videos
//       fs: 0, // Disable fullscreen
//       disablekb: 1, // Disable keyboard controls
//       iv_load_policy: 3, // Hide annotations
//       modestbranding: 1, // Minimal branding (hides logo from control bar)
//       origin: window.location.origin, // Dynamically set to your site domain
//       playsinline: 1, // Inline on mobile
//     },
//   };

//   return (
//     <section
//       id="home"
//       role="banner"
//       className="relative w-full h-screen flex items-center justify-center overflow-hidden"
//       aria-label="Hero section with promotional video"
//     >
//       {/* Background Video or Fallback */}
//       <div className="absolute inset-0 z-0">
//         {!videoError ? (
//           <YouTube
//             videoId="2ZvnQhPh3Ag"
//             opts={videoOptions}
//             onReady={onReady}
//             onError={onError}
//             className="w-full h-full"
//             iframeClassName="absolute inset-0 w-full h-full pointer-events-none object-cover scale-125 md:scale-110 !border-0" // Full cover with zoom, force no border
//           />
//         ) : (
//           <img
//             src="/enhance-quality.png" // Your fallback solar image
//             alt="Solar energy promotional background"
//             className="w-full h-full object-cover"
//             loading="eager" // Prioritize for hero
//           />
//         )}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

//       {/* Controls */}
//       <div className="relative z-20 w-full h-full flex flex-col justify-end p-4">
//         {/* Mute Toggle */}
//         <div className="absolute bottom-4 left-4">
//           <button
//             onClick={toggleMute}
//             className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-solar-orange"
//             aria-label={isMuted ? "Unmute video" : "Mute video"}
//             disabled={!player}
//           >
//             {isMuted ? (
//               <VolumeX className="w-6 h-6" aria-hidden="true" />
//             ) : (
//               <Volume2 className="w-6 h-6" aria-hidden="true" />
//             )}
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
//           <ChevronDown className="w-6 h-6 text-white/70" aria-hidden="true" />
//         </div>
//       </div>

//       {/* Hide any remaining YouTube UI with CSS (applied to iframe) */}
//       <style jsx>{`
//         iframe {
//           border: none !important;
//         }
//         iframe::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: transparent;
//           z-index: 1;
//         }
//       `}</style>
//     </section>
//   );
// }













"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import type { YouTubeProps, YouTubeEvent } from "react-youtube";

// Dynamic import with loading fallback
const YouTube = dynamic(
  () => import("react-youtube").then((mod) => mod.default as any),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-solar-orange/30 border-t-solar-orange rounded-full animate-spin"></div>
      </div>
    ),
  }
) as React.ComponentType<YouTubeProps>;

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [videoError, setVideoError] = useState(false);

  const onReady = useCallback((event: YouTubeEvent) => {
    const ytPlayer = event.target;
    setPlayer(ytPlayer);
    ytPlayer.mute();
    ytPlayer.playVideo();
    setVideoError(false);
  }, []);

  const onError = useCallback((event: YouTubeEvent) => {
    console.error("YouTube Player Error:", event.data);
    setVideoError(true);
    setPlayer(null);
  }, []);

  const toggleMute = useCallback(() => {
    if (!player) return;
    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }, [player]);

  const videoOptions: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: "2ZvnQhPh3Ag", // Loops the video
      controls: 0, // Hide all controls
      rel: 0, // No related videos
      fs: 0, // Disable fullscreen
      disablekb: 1, // Disable keyboard controls
      iv_load_policy: 3, // Hide annotations
      modestbranding: 1, // Minimal branding (hides logo from control bar)
      origin: typeof window !== "undefined" ? window.location.origin : "https://localhost:3000", // Client-side origin with SSR fallback
      playsinline: 1, // Inline on mobile
    },
  };

  return (
    <section
      id="home"
      role="banner"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section with promotional video"
    >
      {/* Background Video or Fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <YouTube
            videoId="2ZvnQhPh3Ag"
            opts={videoOptions}
            onReady={onReady}
            onError={onError}
            className="w-full h-full"
            iframeClassName="absolute inset-0 w-full h-full pointer-events-none object-cover scale-135 md:scale-125 transform-origin-center !border-0" // Increased scale to crop out side bars
          />
        ) : (
          <img
            src="/enhance-quality.png" // Your fallback solar image
            alt="Solar energy promotional background"
            className="w-full h-full object-cover"
            loading="eager" // Prioritize for hero
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

      {/* Controls */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end p-4">
        {/* Mute Toggle */}
        <div className="absolute bottom-4 left-4">
          <button
            onClick={toggleMute}
            className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-solar-orange"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            disabled={!player}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Volume2 className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-6 h-6 text-white/70" aria-hidden="true" />
        </div>
      </div>

      {/* Hide any remaining YouTube UI with CSS (applied to iframe) */}
      <style jsx>{`
        iframe {
          border: none !important;
          background: transparent !important;
        }
        iframe::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}