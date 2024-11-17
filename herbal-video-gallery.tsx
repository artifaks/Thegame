import { Card, CardContent } from "@/components/ui/card"
import { Leaf } from 'lucide-react'

export default function Component() {
  const herbVideos = [
    { id: "video1", title: "Chamomile: Nature's Calming Herb", youtubeId: "dQw4w9WgXcQ" },
    { id: "video2", title: "Echinacea: Boost Your Immune System", youtubeId: "dQw4w9WgXcQ" },
    { id: "video3", title: "Ginger: The Wonder Root", youtubeId: "dQw4w9WgXcQ" },
    { id: "video4", title: "Lavender: Relaxation in a Flower", youtubeId: "dQw4w9WgXcQ" },
    { id: "video5", title: "Turmeric: Golden Spice of Life", youtubeId: "dQw4w9WgXcQ" },
    { id: "video6", title: "Peppermint: Cool and Refreshing", youtubeId: "dQw4w9WgXcQ" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-green-600 text-white py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 mr-2" />
            <h1 className="text-3xl font-bold">Herbal Wisdom</h1>
          </div>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Discover the healing power of nature through our curated collection of herbal medicine videos.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {herbVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
                </div>
                <h2 className="text-lg font-semibold p-4">{video.title}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}