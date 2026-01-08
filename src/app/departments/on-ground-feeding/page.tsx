"use client";

import { useState } from "react";

export default function OnGroundFeedingPage() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const drives = [
    {
      title: "Drive 1",
      image: "/drives/drive1.jpg", // Placeholder - add actual image
      description: "Description of this on-ground activity or feeding drive will be added here. Include details about what happened, when it took place, and its impact on the campus animals.",
    },
    {
      title: "Drive 2",
      image: "/drives/drive2.jpg", // Placeholder - add actual image
      description: "Description of this on-ground activity or feeding drive will be added here. Include details about what happened, when it took place, and its impact on the campus animals.",
    },
    {
      title: "Drive 3",
      image: "/drives/drive3.jpg", // Placeholder - add actual image
      description: "Description of this on-ground activity or feeding drive will be added here. Include details about what happened, when it took place, and its impact on the campus animals.",
    },
    // Add more drives as needed
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">
        On-Ground and Feeding
      </h1>
      <p className="mb-12 text-lg text-amber-800">
        {/* Department description will be added here */}
        Short description of the On-Ground and Feeding department will be added here.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {drives.map((drive, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/60 shadow-sm backdrop-blur-sm overflow-hidden transition-all hover:shadow-lg"
          >
            {/* Drive Image */}
            <div
              className="relative h-48 w-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <span className="text-6xl">🍖</span>
              {/* Replace with actual image when available:
              <Image 
                src={drive.image} 
                alt={drive.title}
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Drive Title and Description */}
            <div className="p-6">
              <h2
                className="mb-3 text-xl font-bold text-amber-900 cursor-pointer hover:text-amber-700"
                onClick={() => toggleExpand(index)}
              >
                {drive.title}
              </h2>

              {/* Expandable Description */}
              {expandedItem === index && (
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-sm text-amber-800/90">{drive.description}</p>
                </div>
              )}

              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 text-sm font-semibold text-amber-900 hover:text-amber-700"
              >
                {expandedItem === index ? "Show Less ▲" : "Learn More ▼"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
