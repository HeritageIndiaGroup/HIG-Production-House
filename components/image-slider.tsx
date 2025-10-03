// "use client";

// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface FeaturedItem {
//   id: number;
//   title: string;
//   image: string;
//   category: string;
// }

// const featuredItems: FeaturedItem[] = [
//   {
//     id: 1,
//     title: "Wedding Films & Pre Post Wedding Shoot",
//     image: "/Weeding films Pre Post wedding Shoot.jpg",
//     category: "Wedding",
//   },
//   {
//     id: 2,
//     title: "Music Videos",
//     image: "/music videos.jpg",
//     category: "Music",
//   },
//   {
//     id: 3,
//     title: "Film Shooting",
//     image: "/Film shooting.jpg",
//     category: "Film",
//   },
//   {
//     id: 4,
//     title: "Event Coverage",
//     image: "/event coverage.jpg",
//     category: "Event",
//   },
//   {
//     id: 5,
//     title: "Corporate Film and Documentaries",
//     image: "/corporate film and documentaries.jpg",
//     category: "Corporate",
//   },
//   {
//     id: 6,
//     title: "Commercial Product Shoot",
//     image: "/Commercial Product shoot.jpg",
//     category: "Commercial",
//   },
// ];

// export function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const touchData = useRef({
//     touchStartX: 0,
//     touchStartY: 0,
//     isSwiping: false,
//   });

//   // autoplay effect
//   useEffect(() => {
//     if (isPlaying) {
//       const autoScroll = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
//       }, 4000);
//       return () => clearInterval(autoScroll);
//     }
//   }, [isPlaying]);

//   // update coverflow
//   const updateCoverflow = () => {
//     if (isAnimating || !sliderRef.current) return;
//     setIsAnimating(true);

//     const items = sliderRef.current.querySelectorAll(".coverflow-item");
//     items.forEach((item, index) => {
//       let offset = index - currentIndex;
//       if (offset > featuredItems.length / 2) offset -= featuredItems.length;
//       else if (offset < -featuredItems.length / 2) offset += featuredItems.length;

//       const absOffset = Math.abs(offset);
//       const sign = Math.sign(offset);
//       let translateX = offset * 220;
//       let translateZ = -absOffset * 200;
//       let rotateY = -sign * Math.min(absOffset * 60, 60);
//       let opacity = 1 - absOffset * 0.2;
//       let scale = 1 - absOffset * 0.1;

//       if (absOffset > 3) {
//         opacity = 0;
//         translateX = sign * 800;
//       }

//       (item as HTMLElement).style.transform = `
//         translateX(${translateX}px)
//         translateZ(${translateZ}px)
//         rotateY(${rotateY}deg)
//         scale(${scale})
//       `;
//       (item as HTMLElement).style.opacity = opacity.toString();
//       (item as HTMLElement).style.zIndex = (100 - absOffset).toString();
//       item.classList.toggle("active", index === currentIndex);
//     });

//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const navigate = (direction: number) => {
//     if (isAnimating) return;
//     let newIndex = currentIndex + direction;
//     if (newIndex < 0) newIndex = featuredItems.length - 1;
//     if (newIndex >= featuredItems.length) newIndex = 0;
//     setCurrentIndex(newIndex);
//     setIsPlaying(false);
//   };

//   const goToIndex = (index: number) => {
//     if (isAnimating || index === currentIndex) return;
//     setCurrentIndex(index);
//     setIsPlaying(false);
//   };

//   const toggleAutoplay = () => setIsPlaying(!isPlaying);

//   useEffect(() => {
//     updateCoverflow();
//     containerRef.current?.focus();
//   }, [currentIndex]);

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "ArrowLeft") navigate(-1);
//     if (e.key === "ArrowRight") navigate(1);
//     if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsPlaying(false);
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     const touch = e.changedTouches[0];
//     touchData.current = {
//       touchStartX: touch.screenX,
//       touchStartY: touch.screenY,
//       isSwiping: true,
//     };
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!touchData.current.isSwiping) return;
//     const currentX = e.changedTouches[0].screenX;
//     const diff = currentX - touchData.current.touchStartX;
//     if (Math.abs(diff) > 10) e.preventDefault();
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (!touchData.current.isSwiping) return;
//     const touchEndX = e.changedTouches[0].screenX;
//     const touchEndY = e.changedTouches[0].screenY;
//     const diffX = touchData.current.touchStartX - touchEndX;
//     const diffY = touchData.current.touchStartY - touchEndY;
//     const swipeThreshold = 30;

//     if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
//       setIsPlaying(false);
//       if (diffX > 0) navigate(1);
//       else navigate(-1);
//     }
//     touchData.current.isSwiping = false;
//   };

//   return (
//     <div className="w-full">
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center bg-white">
//         <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-[#0891b2]">
//           Featured Projects
//         </h2>
//         <p className="text-xl sm:text-2xl text-black">Our Project Highlights</p>
//       </div>

//       <section className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#1a1a2e_0%,#0f0f0f_100%)]">
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="h-screen flex items-center justify-center pt-20 relative [perspective:1200px]"
//             ref={containerRef}
//             tabIndex={0}
//             onKeyDown={handleKeyDown}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {/* Title */}
//             <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center z-[200] w-full max-w-[600px] md:top-20 sm:top-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-[fadeIn_0.6s_forwards]">
//                 {featuredItems[currentIndex].title}
//               </h2>
//             </div>

//             {/* Slides */}
//             <div
//               className="flex items-center justify-center w-full h-[400px] [transform-style:preserve-3d] relative"
//               ref={sliderRef}
//             >
//               {featuredItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className={`coverflow-item absolute w-[300px] h-[300px] transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-pointer select-none will-change-transform ${index === currentIndex ? "active z-[100]" : ""}`}
//                   onClick={() => goToIndex(index)}
//                 >
//                   <div className="relative w-full h-full rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.8)] overflow-hidden bg-[#333]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                     <div className="absolute top-3 left-3 px-2 py-1 bg-[#0891b2] text-white text-xs font-medium rounded-full">
//                       {item.category}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Prev / Next buttons */}
//             <Button
//               className="absolute top-1/2 -translate-y-1/2 left-2.5 bg-white/10 text-white w-16 h-16 rounded-full z-[200]"
//               onClick={() => navigate(-1)}
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </Button>
//             <Button
//               className="absolute top-1/2 -translate-y-1/2 right-2.5 bg-white/10 text-white w-16 h-16 rounded-full z-[200]"
//               onClick={() => navigate(1)}
//             >
//               <ChevronRight className="h-6 w-6" />
//             </Button>

//             {/* Dots */}
//             <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2.5 z-[200]">
//               {featuredItems.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2.5 h-2.5 rounded-full bg-white/30 ${index === currentIndex ? "bg-white/80 scale-125" : ""}`}
//                   onClick={() => goToIndex(index)}
//                 />
//               ))}
//             </div>

//             {/* Play / Pause button */}
//             <button
//               className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-white/10 text-white w-12 h-12 rounded-full flex items-center justify-center z-[200]"
//               onClick={toggleAutoplay}
//             >
//               {isPlaying ? "❚❚" : "▶"}
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

















// "use client";

// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface FeaturedItem {
//   id: number;
//   title: string;
//   image: string;
//   category: string;
// }

// const featuredItems: FeaturedItem[] = [
//   {
//     id: 1,
//     title: "Wedding Films & Pre Post Wedding Shoot",
//     image: "/Weeding films Pre Post wedding Shoot.jpg",
//     category: "Wedding",
//   },
//   {
//     id: 2,
//     title: "Music Videos",
//     image: "/music videos.jpg",
//     category: "Music",
//   },
//   {
//     id: 3,
//     title: "Film Shooting",
//     image: "/Film shooting.jpg",
//     category: "Film",
//   },
//   {
//     id: 4,
//     title: "Event Coverage",
//     image: "/event coverage.jpg",
//     category: "Event",
//   },
//   {
//     id: 5,
//     title: "Corporate Film and Documentaries",
//     image: "/corporate film and documentaries.jpg",
//     category: "Corporate",
//   },
//   {
//     id: 6,
//     title: "Commercial Product Shoot",
//     image: "/Commercial Product shoot.jpg",
//     category: "Commercial",
//   },
// ];

// export function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const touchData = useRef({
//     touchStartX: 0,
//     touchStartY: 0,
//     isSwiping: false,
//   });

//   // autoplay effect
//   useEffect(() => {
//     if (isPlaying) {
//       const autoScroll = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
//       }, 4000);
//       return () => clearInterval(autoScroll);
//     }
//   }, [isPlaying]);

//   // update coverflow
//   const updateCoverflow = () => {
//     if (isAnimating || !sliderRef.current) return;
//     setIsAnimating(true);

//     const items = sliderRef.current.querySelectorAll(".coverflow-item");
//     items.forEach((item, index) => {
//       let offset = index - currentIndex;
//       if (offset > featuredItems.length / 2) offset -= featuredItems.length;
//       else if (offset < -featuredItems.length / 2) offset += featuredItems.length;

//       const absOffset = Math.abs(offset);
//       const sign = Math.sign(offset);
//       let translateX = offset * 220;
//       let translateZ = -absOffset * 200;
//       let rotateY = -sign * Math.min(absOffset * 60, 60);
//       let opacity = 1 - absOffset * 0.2;
//       let scale = 1 - absOffset * 0.1;

//       if (absOffset > 3) {
//         opacity = 0;
//         translateX = sign * 800;
//       }

//       (item as HTMLElement).style.transform = `
//         translateX(${translateX}px)
//         translateZ(${translateZ}px)
//         rotateY(${rotateY}deg)
//         scale(${scale})
//       `;
//       (item as HTMLElement).style.opacity = opacity.toString();
//       (item as HTMLElement).style.zIndex = (100 - absOffset).toString();
//       item.classList.toggle("active", index === currentIndex);
//     });

//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const navigate = (direction: number) => {
//     if (isAnimating) return;
//     let newIndex = currentIndex + direction;
//     if (newIndex < 0) newIndex = featuredItems.length - 1;
//     if (newIndex >= featuredItems.length) newIndex = 0;
//     setCurrentIndex(newIndex);
//     setIsPlaying(false);
//   };

//   const goToIndex = (index: number) => {
//     if (isAnimating || index === currentIndex) return;
//     setCurrentIndex(index);
//     setIsPlaying(false);
//   };

//   const toggleAutoplay = () => setIsPlaying(!isPlaying);

//   useEffect(() => {
//     updateCoverflow();
//     containerRef.current?.focus();
//   }, [currentIndex]);

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "ArrowLeft") navigate(-1);
//     if (e.key === "ArrowRight") navigate(1);
//     if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsPlaying(false);
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     const touch = e.changedTouches[0];
//     touchData.current = {
//       touchStartX: touch.screenX,
//       touchStartY: touch.screenY,
//       isSwiping: true,
//     };
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!touchData.current.isSwiping) return;
//     const currentX = e.changedTouches[0].screenX;
//     const diff = currentX - touchData.current.touchStartX;
//     if (Math.abs(diff) > 10) e.preventDefault();
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (!touchData.current.isSwiping) return;
//     const touchEndX = e.changedTouches[0].screenX;
//     const touchEndY = e.changedTouches[0].screenY;
//     const diffX = touchData.current.touchStartX - touchEndX;
//     const diffY = touchData.current.touchStartY - touchEndY;
//     const swipeThreshold = 30;

//     if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
//       setIsPlaying(false);
//       if (diffX > 0) navigate(1);
//       else navigate(-1);
//     }
//     touchData.current.isSwiping = false;
//   };

//   return (
//     <div className="w-full">
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center bg-white">
//         <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-[#0891b2]">
//           Featured Projects
//         </h2>
//         <p className="text-xl sm:text-2xl text-black">Our Project Highlights</p>
//       </div>

//       <section className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#1a1a2e_0%,#0f0f0f_100%)]">
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="h-screen flex items-center justify-center pt-20 relative [perspective:1200px]"
//             ref={containerRef}
//             tabIndex={0}
//             onKeyDown={handleKeyDown}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {/* Title */}
//             <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center z-[200] w-full max-w-[600px] md:top-20 sm:top-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-[fadeIn_0.6s_forwards]">
//                 {featuredItems[currentIndex].title}
//               </h2>
//             </div>

//             {/* Slides */}
//             <div
//               className="flex items-center justify-center w-full h-[400px] [transform-style:preserve-3d] relative"
//               ref={sliderRef}
//             >
//               {featuredItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className={`coverflow-item absolute w-[300px] h-[300px] transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-pointer select-none will-change-transform ${index === currentIndex ? "active z-[100]" : ""}`}
//                   onClick={() => goToIndex(index)}
//                 >
//                   <div className="relative w-full h-full rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.8)] overflow-hidden bg-[#333]">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                     <div className="absolute top-3 left-3 px-2 py-1 bg-[#0891b2] text-white text-xs font-medium rounded-full">
//                       {item.category}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Prev / Next buttons */}
//             <Button
//               className="absolute top-1/2 -translate-y-1/2 left-2.5 bg-white/10 text-white w-16 h-16 rounded-full z-[200] focus:outline-none focus:ring-0"
//               onClick={() => navigate(-1)}
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </Button>
//             <Button
//               className="absolute top-1/2 -translate-y-1/2 right-2.5 bg-white/10 text-white w-16 h-16 rounded-full z-[200] focus:outline-none focus:ring-0"
//               onClick={() => navigate(1)}
//             >
//               <ChevronRight className="h-6 w-6" />
//             </Button>

//             {/* Dots */}
//             <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2.5 z-[200]">
//               {featuredItems.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2.5 h-2.5 rounded-full bg-white/30 ${index === currentIndex ? "bg-white/80 scale-125" : ""} focus:outline-none focus:ring-0`}
//                   onClick={() => goToIndex(index)}
//                 />
//               ))}
//             </div>

//             {/* Play / Pause button */}
//             <button
//               className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-white/10 text-white w-12 h-12 rounded-full flex items-center justify-center z-[200] focus:outline-none focus:ring-0"
//               onClick={toggleAutoplay}
//             >
//               {isPlaying ? "❚❚" : "▶"}
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }








"use client";

import { useState, useRef, useEffect, useCallback } from "react"; // Import useCallback
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const featuredItems: FeaturedItem[] = [
  // ... your items array remains the same
  {
    id: 1,
    title: "Wedding Films & Pre Post Wedding Shoot",
    image: "/Weeding films Pre Post wedding Shoot.jpg",
    category: "Wedding",
  },
  {
    id: 2,
    title: "Music Videos",
    image: "/music videos.jpg",
    category: "Music",
  },
  {
    id: 3,
    title: "Film Shooting",
    image: "/Film shooting.jpg",
    category: "Film",
  },
  {
    id: 4,
    title: "Event Coverage",
    image: "/event coverage.jpg",
    category: "Event",
  },
  {
    id: 5,
    title: "Corporate Film and Documentaries",
    image: "/corporate film and documentaries.jpg",
    category: "Corporate",
  },
  {
    id: 6,
    title: "Commercial Product Shoot",
    image: "/Commercial Product shoot.jpg",
    category: "Commercial",
  },
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchData = useRef({
    touchStartX: 0,
    touchStartY: 0,
    isSwiping: false,
  });

  // autoplay effect
  useEffect(() => {
    if (isPlaying) {
      const autoScroll = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
      }, 4000);
      return () => clearInterval(autoScroll);
    }
  }, [isPlaying]);

  const updateCoverflow = useCallback(() => {
    if (isAnimating || !sliderRef.current) return;
    setIsAnimating(true);

    const items = sliderRef.current.querySelectorAll(".coverflow-item");
    items.forEach((item, index) => {
      let offset = index - currentIndex;
      if (offset > featuredItems.length / 2) offset -= featuredItems.length;
      else if (offset < -featuredItems.length / 2)
        offset += featuredItems.length;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);
      let translateX = offset * 220;
      let translateZ = -absOffset * 200;
      let rotateY = -sign * Math.min(absOffset * 60, 60);
      let opacity = 1 - absOffset * 0.2;
      let scale = 1 - absOffset * 0.1;

      if (absOffset > 3) {
        opacity = 0;
        translateX = sign * 800;
      }

      (item as HTMLElement).style.transform = `
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
      (item as HTMLElement).style.opacity = opacity.toString();
      (item as HTMLElement).style.zIndex = (100 - absOffset).toString();
      item.classList.toggle("active", index === currentIndex);
    });

    setTimeout(() => setIsAnimating(false), 600);
  }, [currentIndex, isAnimating]);


  const navigate = useCallback((direction: number) => {
      if (isAnimating) return;
      setCurrentIndex((prevIndex) => {
          let newIndex = prevIndex + direction;
          if (newIndex < 0) return featuredItems.length - 1;
          if (newIndex >= featuredItems.length) return 0;
          return newIndex;
      });
      setIsPlaying(false);
  }, [isAnimating]);


  const goToIndex = useCallback((index: number) => {
      if (isAnimating || index === currentIndex) return;
      setCurrentIndex(index);
      setIsPlaying(false);
  }, [isAnimating, currentIndex]);

  const toggleAutoplay = () => setIsPlaying(!isPlaying);

  // This is the corrected useEffect hook 👍
  useEffect(() => {
    updateCoverflow();
  }, [updateCoverflow]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsPlaying(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    touchData.current = {
      touchStartX: touch.screenX,
      touchStartY: touch.screenY,
      isSwiping: true,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchData.current.isSwiping) return;
    const currentX = e.changedTouches[0].screenX;
    const diff = currentX - touchData.current.touchStartX;
    if (Math.abs(diff) > 10) e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchData.current.isSwiping) return;
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchData.current.touchStartX - touchEndX;
    const diffY = touchData.current.touchStartY - touchEndY;
    const swipeThreshold = 30;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
      setIsPlaying(false);
      if (diffX > 0) navigate(1);
      else navigate(-1);
    }
    touchData.current.isSwiping = false;
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center bg-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-[#0891b2]">
          Featured Projects
        </h2>
        <p className="text-xl sm:text-2xl text-black">Our Project Highlights</p>
      </div>

      <section className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#1a1a2e_0%,#0f0f0f_100%)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="h-screen flex items-center justify-center pt-20 relative [perspective:1200px]"
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Title */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center z-[200] w-full max-w-[600px] md:top-20 sm:top-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-[fadeIn_0.6s_forwards]">
                {featuredItems[currentIndex].title}
              </h2>
            </div>

            {/* Slides */}
            <div
              className="flex items-center justify-center w-full h-[400px] [transform-style:preserve-3d] relative"
              ref={sliderRef}
            >
              {featuredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`coverflow-item absolute w-[300px] h-[300px] transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-pointer select-none will-change-transform ${
                    index === currentIndex ? "active z-[100]" : ""
                  }`}
                  onClick={() => goToIndex(index)}
                >
                  <div className="relative w-full h-full rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.8)] overflow-hidden bg-[#333]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#0891b2] text-white text-xs font-medium rounded-full">
                      {item.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next buttons */}
            <Button
              className="absolute top-1/2 -translate-y-1/2 left-2.5 bg-white/10 text-white w-16 h-16 rounded-full z-[200] focus:outline-none focus:ring-0"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              className="absolute top-1/2 -translate-y-1/2 right-2.5 bg-white/10 text-white w-16 h-16 rounded-full z-[200] focus:outline-none focus:ring-0"
              onClick={() => navigate(1)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2.5 z-[200]">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full bg-white/30 ${
                    index === currentIndex ? "bg-white/80 scale-125" : ""
                  } focus:outline-none focus:ring-0`}
                  onClick={() => goToIndex(index)}
                />
              ))}
            </div>

            {/* Play / Pause button */}
            <button
              className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-white/10 text-white w-12 h-12 rounded-full flex items-center justify-center z-[200] focus:outline-none focus:ring-0"
              onClick={toggleAutoplay}
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}