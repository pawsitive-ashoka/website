"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // TODO: Download images from Google Drive 'Miscellaneous' folder
  // and place them in /public/gallery/ folder
  // Then update the image paths below
  const galleryItems = [
    {
      image: "/gallery/misc1.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 1",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc2.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 2",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc3.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 3",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc4.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 4",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc5.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 5",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc6.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 6",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc7.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 7",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc8.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 8",
      caption: "Add caption here",
    },
    {
      image: "/gallery/misc9.jpg", // Replace with actual image filename
      alt: "Pawsitive moment 9",
      caption: "Add caption here",
    },
    // Add more images as needed from the Miscellaneous folder
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold text-amber-900">Gallery</h1>
        <p className="mb-12 text-lg text-amber-800">
          Moments captured from our events, activities, and daily interactions with
          the animals we care for.
        </p>

        {/* Masonry-style Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/60 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Placeholder - will be replaced with actual images */}
              <div className="relative aspect-square w-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-6xl">📷</span>
                {/* Uncomment when images are added:
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                */}
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-amber-900">
            Share Your Moments
          </h3>
          <p className="mb-6 text-amber-800">
            Have photos from our events or of campus animals? We&apos;d love to feature
            them in our gallery!
          </p>
          <a
            href="mailto:pawsitive@ashoka.edu.in"
            className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
          >
            Submit Photos
          </a>
        </div>
      </main>

      {/* Lightbox Modal for Full Image View */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Placeholder - will show actual image */}
            <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-9xl">📷</span>
              {/* Uncomment when images are added:
              <Image
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              */}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg inline-block">
                {galleryItems[selectedImage].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
