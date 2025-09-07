"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ImageIcon, ExternalLink } from "lucide-react"
import { createBrowserClient } from "@supabase/ssr"

interface GalleryItem {
  id: string
  title: string
  category: string
  type: "video" | "image"
  file_url: string
  thumbnail_url?: string
  description: string
  created_at: string
  is_featured: boolean
}

const categories = [
  { id: "all", name: "All Work" },
  { id: "wedding", name: "Weddings" },
  { id: "music_video", name: "Music Videos" },
  { id: "corporate", name: "Corporate" },
  { id: "commercial", name: "Commercial" },
  { id: "film", name: "Films" },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("*")
          .eq("is_active", true)
          .order("is_featured", { ascending: false })
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching gallery items:", error)
          return
        }

        setGalleryItems(data || [])
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryItems()
  }, [])

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const openMediaModal = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const closeMediaModal = () => {
    setSelectedItem(null)
  }

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading our portfolio...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Explore our collection of stunning videos and photography that showcase our expertise across different
              genres and styles.
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
                      src={item.thumbnail_url || item.file_url || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        {item.type === "video" ? (
                          <>
                            <Play className="w-5 h-5 mr-2" />
                            Play Video
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-5 h-5 mr-2" />
                            View Image
                          </>
                        )}
                      </Button>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                    {item.is_featured && (
                      <Badge className="absolute top-3 left-3 bg-amber-500 text-white">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Full Portfolio
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

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

            {selectedItem.type === "video" ? (
              <video
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] rounded-lg"
                poster={selectedItem.thumbnail_url}
              >
                <source src={selectedItem.file_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedItem.file_url || "/placeholder.svg"}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}

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
