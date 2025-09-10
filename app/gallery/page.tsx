

// // app/gallery/page.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Play, ImageIcon } from "lucide-react"
// import { createBrowserClient } from "@supabase/ssr"

// interface GalleryItem {
//   id: string
//   title: string
//   category: string
//   type: "video" | "image"
//   file_url: string
//   thumbnail_url?: string
//   description: string
//   created_at: string
//   is_featured: boolean
// }

// const categories = [
//   { id: "film_shooting", name: "Film Shooting" },
//   { id: "short_films", name: "Short Films" },
//   { id: "wedding", name: "Wedding films & Pre/Post wedding Shoot" },
//   { id: "commercial", name: "Commercial Product Shoot" },
//   { id: "music_videos", name: "Music Videos" },
//   { id: "photography", name: "Photography and Event Coverage" },
//   { id: "ad_films", name: "Ad Films" },
//   { id: "corporate", name: "Corporate Films and Documentaries" },
// ]

// const GalleryPage = () => {
//   const [activeCategory, setActiveCategory] = useState("film_shooting")
//   const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
//   const [loading, setLoading] = useState(true)
//   const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
//   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey)
//   const supabase = isSupabaseConfigured ? createBrowserClient(supabaseUrl!, supabaseKey!) : null

//   useEffect(() => {
//     if (!supabase) {
//       setLoading(false)
//       return
//     }
//     async function fetchGalleryItems() {
//       try {
//         const { data, error } = await supabase
//           .from("gallery")
//           .select("*")
//           .eq("is_active", true)
//           .order("is_featured", { ascending: false })
//           .order("created_at", { ascending: false })

//         if (error) {
//           console.error("Error fetching gallery items:", error)
//           return
//         }

//         setGalleryItems(data || [])
//       } catch (error) {
//         console.error("Error:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchGalleryItems()
//   }, [supabase])

//   const filteredItems =
//     activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

//   const openMediaModal = (item: GalleryItem) => setSelectedItem(item)
//   const closeMediaModal = () => setSelectedItem(null)

//   if (loading) {
//     return (
//       <section id="gallery" className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
//             <p className="mt-4 text-muted-foreground">Loading our portfolio...</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <>
//       <section id="gallery" className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
//               Explore our collection of stunning videos and photography that showcase our expertise across different
//               genres and styles.
//             </p>
//           </div>

//           {/* Category Filter */}
//           <div className="flex gap-2 mb-12 overflow-x-auto py-2 px-4 whitespace-nowrap scrollbar-thin scrollbar-thumb-primary scrollbar-track-background">
//             {categories.map((category) => (
//               <Button
//                 key={category.id}
//                 variant={activeCategory === category.id ? "default" : "outline"}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={
//                   activeCategory === category.id
//                     ? "bg-primary hover:bg-primary/90 whitespace-nowrap"
//                     : "hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
//                 }
//               >
//                 {category.name}
//               </Button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           {filteredItems.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No items found in this category.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredItems.map((item) => (
//                 <Card
//                   key={item.id}
//                   className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
//                   onClick={() => openMediaModal(item)}
//                 >
//                   <div className="relative aspect-video overflow-hidden">
//                     <img
//                       src={item.thumbnail_url || item.file_url || "/placeholder.svg"}
//                       alt={item.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <Button size="lg" className="bg-primary hover:bg-primary/90">
//                         {item.type === "video" ? (
//                           <>
//                             <Play className="w-5 h-5 mr-2" />
//                             Play Video
//                           </>
//                         ) : (
//                           <>
//                             <ImageIcon className="w-5 h-5 mr-2" />
//                             View Image
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                     <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
//                       {item.type === "video" ? "Video" : "Photo"}
//                     </Badge>
//                     {item.is_featured && (
//                       <Badge className="absolute top-3 left-3 bg-amber-500 text-white">Featured</Badge>
//                     )}
//                   </div>
//                   <CardContent className="p-4">
//                     <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Media Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeMediaModal}>
//           <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="absolute -top-12 right-0 text-white hover:text-gray-300"
//               onClick={closeMediaModal}
//             >
//               ✕ Close
//             </Button>

//             {selectedItem.type === "video" ? (
//               <video
//                 controls
//                 autoPlay
//                 className="w-full h-auto max-h-[80vh] rounded-lg"
//                 poster={selectedItem.thumbnail_url}
//               >
//                 <source src={selectedItem.file_url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img
//                 src={selectedItem.file_url || "/placeholder.svg"}
//                 alt={selectedItem.title}
//                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//               />
//             )}

//             <div className="mt-4 text-white">
//               <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
//               <p className="text-gray-300">{selectedItem.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default GalleryPage








// // app/gallery/page.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Play, ImageIcon } from "lucide-react"
// import { createBrowserClient } from "@supabase/ssr"

// interface GalleryItem {
//   id: string
//   title: string
//   category: string
//   type: "video" | "image"
//   file_url: string
//   thumbnail_url?: string
//   description: string
//   created_at: string
//   is_featured: boolean
// }

// const categories = [
//   { id: "film_shooting", name: "Film Shooting" },
//   { id: "short_films", name: "Short Films" },
//   { id: "wedding_films", name: "Wedding Films & Pre/Post Wedding Shoot" },
//   { id: "commercial_shoot", name: "Commercial Product Shoot" },
//   { id: "music_videos", name: "Music Videos" },
//   { id: "photography", name: "Photography and Event Coverage" },
//   { id: "ad_films", name: "Ad Films" },
//   { id: "corporate_films", name: "Corporate Films and Documentaries" },
// ]

// export default function GalleryPage() {
//   const [activeCategory, setActiveCategory] = useState("film_shooting")
//   const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
//   const [loading, setLoading] = useState(true)
//   const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
//   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   const supabase = supabaseUrl && supabaseKey ? createBrowserClient(supabaseUrl, supabaseKey) : null

//   useEffect(() => {
//     if (!supabase) {
//       setLoading(false)
//       return
//     }

//     async function fetchGalleryItems() {
//       try {
//         const { data, error } = await supabase
//           .from("gallery")
//           .select("*")
//           .eq("is_active", true)
//           .order("is_featured", { ascending: false })
//           .order("created_at", { ascending: false })

//         if (error) {
//           console.error("Error fetching gallery items:", error)
//           return
//         }

//         setGalleryItems(data || [])
//       } catch (error) {
//         console.error(error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchGalleryItems()
//   }, [supabase])

//   const filteredItems = galleryItems.filter((item) => item.category === activeCategory)

//   const openMediaModal = (item: GalleryItem) => setSelectedItem(item)
//   const closeMediaModal = () => setSelectedItem(null)

//   if (loading) {
//     return (
//       <section id="gallery" className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
//           <p className="mt-4 text-muted-foreground">Loading our portfolio...</p>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <>
//       <section id="gallery" className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
//               Explore our collection of stunning videos and photography categorized by our services.
//             </p>
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {categories.map((category) => (
//               <Button
//                 key={category.id}
//                 variant={activeCategory === category.id ? "default" : "outline"}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={
//                   activeCategory === category.id
//                     ? "bg-primary hover:bg-primary/90"
//                     : "hover:bg-primary hover:text-primary-foreground"
//                 }
//               >
//                 {category.name}
//               </Button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           {filteredItems.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No items found in this category.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredItems.map((item) => (
//                 <Card
//                   key={item.id}
//                   className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
//                   onClick={() => openMediaModal(item)}
//                 >
//                   <div className="relative aspect-video overflow-hidden">
//                     <img
//                       src={item.thumbnail_url || item.file_url || "/placeholder.svg"}
//                       alt={item.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <Button size="lg" className="bg-primary hover:bg-primary/90">
//                         {item.type === "video" ? (
//                           <>
//                             <Play className="w-5 h-5 mr-2" />
//                             Play Video
//                           </>
//                         ) : (
//                           <>
//                             <ImageIcon className="w-5 h-5 mr-2" />
//                             View Image
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                     <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
//                       {item.type === "video" ? "Video" : "Photo"}
//                     </Badge>
//                     {item.is_featured && (
//                       <Badge className="absolute top-3 left-3 bg-amber-500 text-white">Featured</Badge>
//                     )}
//                   </div>
//                   <CardContent className="p-4">
//                     <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Media Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeMediaModal}>
//           <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="absolute -top-12 right-0 text-white hover:text-gray-300"
//               onClick={closeMediaModal}
//             >
//               ✕ Close
//             </Button>

//             {selectedItem.type === "video" ? (
//               <video
//                 controls
//                 autoPlay
//                 className="w-full h-auto max-h-[80vh] rounded-lg"
//                 poster={selectedItem.thumbnail_url}
//               >
//                 <source src={selectedItem.file_url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img
//                 src={selectedItem.file_url || "/placeholder.svg"}
//                 alt={selectedItem.title}
//                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//               />
//             )}

//             <div className="mt-4 text-white">
//               <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
//               <p className="text-gray-300">{selectedItem.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }









"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ImageIcon } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  category: string
  type: "video" | "image"
  file_url: string
  thumbnail_url?: string
  description: string
  is_featured: boolean
}

const categories = [
  { id: "film_shooting", name: "Film Shooting" },
  { id: "short_films", name: "Short Films" },
  { id: "wedding_films", name: "Wedding Films & Pre/Post Wedding Shoot" },
  { id: "commercial_shoot", name: "Commercial Product Shoot" },
  { id: "music_videos", name: "Music Videos" },
  { id: "photography", name: "Photography and Event Coverage" },
  { id: "ad_films", name: "Ad Films" },
  { id: "corporate_films", name: "Corporate Films and Documentaries" },
]

// Hardcoded gallery items from public folder
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Wedding Films",
    category: "wedding_films",
    type: "image",
    file_url: "/Weeding films Pre Post wedding Shoot.jpg",
    description: "Capturing beautiful wedding moments.",
    is_featured: true,
  },
  {
    id: "2",
    title: "Music Videos",
    category: "music_videos",
    type: "image",
    file_url: "/music videos.jpg",
    description: "Professional music video shoots.",
    is_featured: false,
  },
  {
    id: "3",
    title: "Film Shooting",
    category: "film_shooting",
    type: "image",
    file_url: "/Film shooting.jpg",
    description: "High-quality film production.",
    is_featured: false,
  },
  {
    id: "4",
    title: "Event Coverage",
    category: "photography",
    type: "image",
    file_url: "/event coverage.jpg",
    description: "Memorable event photography.",
    is_featured: false,
  },
  {
    id: "5",
    title: "Corporate & Documentary Films",
    category: "corporate_films",
    type: "image",
    file_url: "/corporate film and documentaries.jpg",
    description: "Corporate and documentary productions.",
    is_featured: false,
  },
  {
    id: "6",
    title: "Commercial Product Shoot",
    category: "commercial_shoot",
    type: "image",
    file_url: "/Commercial Product shoot.jpg",
    description: "Product photography and videos.",
    is_featured: false,
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("film_shooting")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = galleryItems.filter((item) => item.category === activeCategory)

  const openMediaModal = (item: GalleryItem) => setSelectedItem(item)
  const closeMediaModal = () => setSelectedItem(null)

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Explore our collection of stunning videos and photography categorized by our services.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-primary hover:bg-primary/90"
                    : "hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openMediaModal(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.file_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        <ImageIcon className="w-5 h-5 mr-2" />
                        View Image
                      </Button>
                    </div>
                    {item.is_featured && (
                      <Badge className="absolute top-3 left-3 bg-amber-500 text-white">Featured</Badge>
                    )}
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      Photo
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Media Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeMediaModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={closeMediaModal}
            >
              ✕ Close
            </Button>

            <img
              src={selectedItem.file_url}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-300">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

