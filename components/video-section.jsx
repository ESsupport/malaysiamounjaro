export function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "Tutorial - English",
      description: "Step-by-step guide on properly using your Mounjaro injection pen",
      url: "https://www.youtube.com/embed/MR8xH_Y0bt4"
    },
    {
      id: 2,
      title: "自行施打教学 - 中文",
      description: "详细的 Mounjaro 注射笔使用指南",
      url: "https://www.youtube.com/embed/2hCXSP7dZ3I"
    }
  ]

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tutorial Videos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch our comprehensive guides to learn more about Mounjaro and how it can help you achieve your weight loss goals
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Player */}
              <div className="aspect-video bg-black relative group">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
