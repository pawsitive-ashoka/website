export default function DogsPage() {
  const dogs = [
    {
      name: "Toofan",
      gender: "Male",
      breed: "Indie",
      age: "TBD",
      appearance: "TBD",
      personality: "TBD",
      image: "/dogs/toofan.jpg", // Placeholder - add actual image path
      isCat: true,
    },
    {
      name: "Max",
      gender: "Male",
      breed: "Indie",
      age: "TBD",
      appearance: "TBD",
      personality: "Friendly and loves belly rubs and treats",
      image: "/dogs/max.jpg", // Placeholder - add actual image path
    },
    {
      name: "Bella",
      gender: "Female",
      breed: "Indie",
      age: "TBD",
      appearance: "TBD",
      personality: "Gentle senior dog who enjoys peaceful naps in the sun",
      image: "/dogs/bella.jpg", // Placeholder - add actual image path
    },
    {
      name: "Rocky",
      gender: "Male",
      breed: "Indie",
      age: "TBD",
      appearance: "TBD",
      personality: "Energetic pup always ready to play and make new friends",
      image: "/dogs/rocky.jpg", // Placeholder - add actual image path
    },
    {
      name: "Luna",
      gender: "Female",
      breed: "Indie",
      age: "TBD",
      appearance: "TBD",
      personality: "Sweet and shy, loves gentle pets and quiet company",
      image: "/dogs/luna.jpg", // Placeholder - add actual image path
    },
    // Placeholder entries for remaining 35 dogs - update with actual information
    ...Array.from({ length: 35 }, (_, i) => ({
      name: `Dog ${i + 6}`,
      gender: "TBD",
      breed: "Indie",
      age: "TBD",
      appearance: "TBD",
      personality: "TBD",
      image: `/dogs/dog${i + 6}.jpg`, // Placeholder - add actual image path
    })),
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">Our Dogs & Cats</h1>
      <p className="mb-12 text-lg text-amber-800">
        Meet the wonderful dogs and cats that call Ashoka University home. These furry friends 
        are an important part of our campus community.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dogs.map((dog, index) => (
          <div
            key={index}
            className="rounded-xl bg-white/60 shadow-sm backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg overflow-hidden"
          >
            {/* Animal Image Placeholder */}
            <div className="relative h-40 w-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <span className="text-6xl">{dog.isCat ? '🐱' : '🐕'}</span>
              {/* Replace with actual image when available:
              <Image 
                src={dog.image} 
                alt={dog.name}
                fill
                className="object-cover"
              /> */}
            </div>
            
            {/* Animal Information */}
            <div className="p-4">
              <h2 className="mb-3 text-xl font-bold text-amber-900">{dog.name}</h2>
              
              <div className="space-y-1.5 text-xs">
                <div className="flex items-start">
                  <span className="font-semibold text-amber-900 w-20 flex-shrink-0">Gender:</span>
                  <span className="text-amber-800">{dog.gender}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-amber-900 w-20 flex-shrink-0">Breed:</span>
                  <span className="text-amber-800">{dog.breed}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-amber-900 w-20 flex-shrink-0">Age:</span>
                  <span className="text-amber-800">{dog.age}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-amber-900 w-20 flex-shrink-0">Appearance:</span>
                  <span className="text-amber-800 break-words">{dog.appearance}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-amber-900 w-20 flex-shrink-0">Personality:</span>
                  <span className="text-amber-800 break-words">{dog.personality}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
        <h3 className="mb-3 text-xl font-semibold text-amber-900">
          Want to Help?
        </h3>
        <p className="mb-6 text-amber-800">
          You can support our campus dogs by volunteering for feeding schedules, 
          donating supplies, or sponsoring their medical care.
        </p>
        <a
          href="mailto:pawsitive@ashoka.edu.in"
          className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
        >
          Contact Us to Help
        </a>
      </div>
    </main>
  );
}
