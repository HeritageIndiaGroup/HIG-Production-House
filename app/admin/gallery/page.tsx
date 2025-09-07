"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trash2, Eye, Star } from "lucide-react"
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
  is_active: boolean
}

export default function AdminGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    type: "image" as "video" | "image",
    description: "",
    is_featured: false,
  })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    fetchGalleryItems()
  }, [])

  async function fetchGalleryItems() {
    try {
      const { data, error } = await supabase.from("gallery").select("*").order("created_at", { ascending: false })

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

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `gallery/${fileName}`

      const { error: uploadError } = await supabase.storage.from("media").upload(filePath, file)

      if (uploadError) {
        console.error("Upload error:", uploadError)
        return
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("media").getPublicUrl(filePath)

      // Insert into database
      const { error: dbError } = await supabase.from("gallery").insert({
        title: newItem.title,
        category: newItem.category,
        type: newItem.type,
        file_url: publicUrl,
        description: newItem.description,
        is_featured: newItem.is_featured,
        is_active: true,
      })

      if (dbError) {
        console.error("Database error:", dbError)
        return
      }

      // Reset form and refresh
      setNewItem({
        title: "",
        category: "",
        type: "image",
        description: "",
        is_featured: false,
      })
      fetchGalleryItems()
    } catch (error) {
      console.error("Error uploading file:", error)
    } finally {
      setUploading(false)
    }
  }

  async function toggleFeatured(id: string, currentStatus: boolean) {
    const { error } = await supabase.from("gallery").update({ is_featured: !currentStatus }).eq("id", id)

    if (!error) {
      fetchGalleryItems()
    }
  }

  async function toggleActive(id: string, currentStatus: boolean) {
    const { error } = await supabase.from("gallery").update({ is_active: !currentStatus }).eq("id", id)

    if (!error) {
      fetchGalleryItems()
    }
  }

  async function deleteItem(id: string) {
    if (!confirm("Are you sure you want to delete this item?")) return

    const { error } = await supabase.from("gallery").delete().eq("id", id)

    if (!error) {
      fetchGalleryItems()
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Gallery Management</h1>
          <p className="text-muted-foreground">Upload and manage portfolio items</p>
        </div>

        {/* Upload Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="Enter title"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={newItem.category} onValueChange={(value) => setNewItem({ ...newItem, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="music_video">Music Video</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="film">Film</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <Select
                  value={newItem.type}
                  onValueChange={(value: "video" | "image") => setNewItem({ ...newItem, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 pt-6">
                <input
                  type="checkbox"
                  id="featured"
                  checked={newItem.is_featured}
                  onChange={(e) => setNewItem({ ...newItem, is_featured: e.target.checked })}
                />
                <Label htmlFor="featured">Featured Item</Label>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                placeholder="Enter description"
              />
            </div>

            <div>
              <Label htmlFor="file">Upload File</Label>
              <Input
                id="file"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                disabled={uploading || !newItem.title || !newItem.category}
              />
            </div>

            {uploading && (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span>Uploading...</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Gallery Items */}
        <Card>
          <CardHeader>
            <CardTitle>Gallery Items ({galleryItems.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2">Loading gallery items...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={item.thumbnail_url || item.file_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {item.is_featured && <Badge className="bg-amber-500">Featured</Badge>}
                        <Badge variant={item.is_active ? "default" : "secondary"}>
                          {item.is_active ? "Active" : "Hidden"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold truncate">{item.title}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                      <div className="flex gap-1 mt-2">
                        <Button size="sm" variant="outline" onClick={() => toggleFeatured(item.id, item.is_featured)}>
                          <Star className={`w-3 h-3 ${item.is_featured ? "fill-current" : ""}`} />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => toggleActive(item.id, item.is_active)}>
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => deleteItem(item.id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
