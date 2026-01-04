export default function GalleryPage() {
  const galleryItems = [
    { title: "Feeding Time", emoji: "🍖", description: "Daily feeding sessions with our campus friends" },
    { title: "Adoption Drive 2025", emoji: "🏠", description: "Successful adoption event in December" },
    { title: "Vaccination Camp", emoji: "💉", description: "Free vaccination drive for all campus animals" },
    { title: "Awareness Week", emoji: "📢", description: "Animal welfare awareness activities" },
    { title: "Beach Cleanup", emoji: "🌊", description: "Environmental initiative to protect wildlife" },
    { title: "Festival Celebrations", emoji: "🎊", description: "Celebrating with our furry friends" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">Gallery</h1>
      <p className="mb-12 text-lg text-amber-800">
        Moments captured from our events, activities, and daily interactions with 
        the animals we care for.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-white/60 shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
          >
            <div className="flex aspect-square items-center justify-center rounded-t-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-7xl transition-transform group-hover:scale-110">
              {item.emoji}
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-amber-900">
                {item.title}
              </h3>
              <p className="text-sm text-amber-800/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
        <h3 className="mb-3 text-xl font-semibold text-amber-900">
          Share Your Moments
        </h3>
        <p className="mb-6 text-amber-800">
          Have photos from our events or of campus animals? We'd love to feature them 
          in our gallery!
        </p>
        <a
          href="mailto:pawsitive@ashoka.edu.in"
          className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
        >
          Submit Photos
        </a>
      </div>
    </main>
  );
}
