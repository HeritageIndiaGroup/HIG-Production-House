// "use client"

// import { useState, useRef, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const featuredItems = [
//   {
//     id: 1,
//     title: "After The Hunt",
//     image: "/dark-thriller-movie-poster-with-elegant-typography.jpg",
//     category: "Thriller",
//   },
//   {
//     id: 2,
//     title: "Project Hail Mary",
//     image: "/sci-fi-space-movie-poster-with-astronaut-and-cosmi.jpg",
//     category: "Sci-Fi",
//   },
//   {
//     id: 3,
//     title: "The Accountant 2",
//     image: "/action-movie-poster-with-man-in-glasses-and-dramat.jpg",
//     category: "Action",
//   },
//   {
//     id: 4,
//     title: "A Working Man",
//     image: "/drama-movie-poster-with-orange-and-yellow-dramatic.jpg",
//     category: "Drama",
//   },
//   {
//     id: 5,
//     title: "Nickel Boys",
//     image: "/period-drama-movie-poster-with-vintage-aesthetic.jpg",
//     category: "Drama",
//   },
//   {
//     id: 6,
//     title: "The Matrix Resurrections",
//     image: "/cyberpunk-movie-poster-with-digital-rain-and-neon-.jpg",
//     category: "Sci-Fi",
//   },
//   {
//     id: 7,
//     title: "Dune: Part Two",
//     image: "/epic-sci-fi-movie-poster-with-desert-landscape-and.jpg",
//     category: "Sci-Fi",
//   },
//   {
//     id: 8,
//     title: "John Wick 4",
//     image: "/action-movie-poster-with-dark-suit-and-neon-city-l.jpg",
//     category: "Action",
//   },
// ]

// export function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const sliderRef = useRef<HTMLDivElement>(null)

//   const itemsPerView = 4
//   const totalSlides = featuredItems.length
//   const maxIndex = totalSlides - itemsPerView

//   useEffect(() => {
//     const autoScroll = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = prevIndex + 1
//         if (nextIndex > maxIndex) {
//           return 0
//         }
//         return nextIndex
//       })
//     }, 3000)

//     return () => clearInterval(autoScroll)
//   }, [maxIndex])

//   const scrollToIndex = (index: number) => {
//     if (sliderRef.current) {
//       const itemWidth = sliderRef.current.scrollWidth / featuredItems.length
//       sliderRef.current.scrollTo({
//         left: index * itemWidth,
//         behavior: "smooth",
//       })
//     }
//     setCurrentIndex(index)
//   }

//   const handlePrevious = () => {
//     const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1
//     scrollToIndex(newIndex)
//   }

//   const handleNext = () => {
//     const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
//     scrollToIndex(newIndex)
//   }

//   useEffect(() => {
//     scrollToIndex(currentIndex)
//   }, [currentIndex])

//   return (
//     <section className="w-full">
//       <div className="mb-8">
//         <h2 className="text-4xl font-bold text-foreground mb-2">Featured Movies</h2>
//         <div className="w-32 h-1 bg-primary rounded-full"></div>
//       </div>

//       <div className="relative group">
//         <Button
//           variant="outline"
//           size="icon"
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 opacity-0 group-hover:opacity-100"
//           onClick={handlePrevious}
//         >
//           <ChevronLeft className="h-5 w-5" />
//         </Button>

//         <Button
//           variant="outline"
//           size="icon"
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 opacity-0 group-hover:opacity-100"
//           onClick={handleNext}
//         >
//           <ChevronRight className="h-5 w-5" />
//         </Button>

//         <div
//           ref={sliderRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {featuredItems.map((item, index) => (
//             <div key={item.id} className="flex-none w-72 group/item cursor-pointer">
//               <div className="relative overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 group-hover/item:shadow-xl group-hover/item:scale-105">
//                 <img
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   className="w-full h-96 object-cover transition-transform duration-300 group-hover/item:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

//                 <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
//                   {item.category}
//                 </div>
//               </div>

//               <div className="mt-4 px-1">
//                 <h3 className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors duration-200 text-balance">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-6 gap-2">
//           {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                 index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }













// "use client"

// import { useState, useRef, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const featuredItems = [
//   {
//     id: 1,
//     title: "After The Hunt",
//     image: "/dark-thriller-movie-poster-with-elegant-typography.jpg",
//     category: "Thriller",
//   },
//   {
//     id: 2,
//     title: "Project Hail Mary",
//     image: "/sci-fi-space-movie-poster-with-astronaut-and-cosmi.jpg",
//     category: "Sci-Fi",
//   },
//   {
//     id: 3,
//     title: "The Accountant 2",
//     image: "/action-movie-poster-with-man-in-glasses-and-dramat.jpg",
//     category: "Action",
//   },
//   {
//     id: 4,
//     title: "A Working Man",
//     image: "/drama-movie-poster-with-orange-and-yellow-dramatic.jpg",
//     category: "Drama",
//   },
//   {
//     id: 5,
//     title: "Nickel Boys",
//     image: "/period-drama-movie-poster-with-vintage-aesthetic.jpg",
//     category: "Drama",
//   },
//   {
//     id: 6,
//     title: "The Matrix Resurrections",
//     image: "/cyberpunk-movie-poster-with-digital-rain-and-neon-.jpg",
//     category: "Sci-Fi",
//   },
//   {
//     id: 7,
//     title: "Dune: Part Two",
//     image: "/epic-sci-fi-movie-poster-with-desert-landscape-and.jpg",
//     category: "Sci-Fi",
//   },
//   {
//     id: 8,
//     title: "John Wick 4",
//     image: "/action-movie-poster-with-dark-suit-and-neon-city-l.jpg",
//     category: "Action",
//   },
// ]

// export function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const sliderRef = useRef<HTMLDivElement>(null)

//   const itemsPerView = 4
//   const totalSlides = featuredItems.length
//   const maxIndex = totalSlides - itemsPerView

//   useEffect(() => {
//     const autoScroll = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = prevIndex + 1
//         if (nextIndex > maxIndex) return 0
//         return nextIndex
//       })
//     }, 3000)
//     return () => clearInterval(autoScroll)
//   }, [maxIndex])

//   const scrollToIndex = (index: number) => {
//     if (sliderRef.current) {
//       const itemWidth = sliderRef.current.scrollWidth / featuredItems.length
//       sliderRef.current.scrollTo({
//         left: index * itemWidth,
//         behavior: "smooth",
//       })
//     }
//     setCurrentIndex(index)
//   }

//   const handlePrevious = () => {
//     const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1
//     scrollToIndex(newIndex)
//   }

//   const handleNext = () => {
//     const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
//     scrollToIndex(newIndex)
//   }

//   useEffect(() => {
//     scrollToIndex(currentIndex)
//   }, [currentIndex])

//   return (
//     <section className="w-full">
//       {/* Wrapper Box with Margin & Padding (No Border or Shadow) */}
//       <div className="mx-8 px-6 py-4">
//         <div className="mb-8">
//           <h2 className="text-4xl font-bold text-foreground mb-2">Featured Projects</h2>
//           <div className="w-32 h-1 bg-primary rounded-full"></div>
//         </div>

//         <div className="relative group">
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 opacity-0 group-hover:opacity-100"
//             onClick={handlePrevious}
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 opacity-0 group-hover:opacity-100"
//             onClick={handleNext}
//           >
//             <ChevronRight className="h-5 w-5" />
//           </Button>

//           <div
//             ref={sliderRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {featuredItems.map((item, index) => (
//               <div key={item.id} className="flex-none w-72 group/item cursor-pointer">
//                 <div className="relative overflow-hidden rounded-lg bg-card transition-all duration-300 group-hover/item:scale-105">
//                   <img
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.title}
//                     className="w-full h-96 object-cover transition-transform duration-300 group-hover/item:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

//                   <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
//                     {item.category}
//                   </div>
//                 </div>

//                 <div className="mt-4 px-1">
//                   <h3 className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors duration-200 text-balance">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-6 gap-2">
//             {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollToIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                   index === currentIndex
//                     ? "bg-primary w-8"
//                     : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }














"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredItems = [
  {
    id: 1,
    title: "Wedding Films & Pre Post Wedding Shoot",
    image: "/Weeding films Pre Post wedding Shoot.jpg",
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
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const itemsPerView = 4
  const totalSlides = featuredItems.length
  const maxIndex = totalSlides - itemsPerView

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        if (nextIndex > maxIndex) return 0
        return nextIndex
      })
    }, 3000)
    return () => clearInterval(autoScroll)
  }, [maxIndex])

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.scrollWidth / featuredItems.length
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      })
    }
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    scrollToIndex(currentIndex)
  }, [currentIndex])

  return (
    <section className="w-full">
      <div className="mx-8 px-6 py-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">Featured Projects</h2>
          <div className="w-32 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative group">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 opacity-0 group-hover:opacity-100"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200 opacity-0 group-hover:opacity-100"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredItems.map((item) => (
              <div key={item.id} className="flex-none w-72 group/item cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-card transition-all duration-300 group-hover/item:scale-105">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover/item:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="mt-4 px-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors duration-200 text-balance">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}







