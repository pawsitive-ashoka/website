export default function DogsPage() {
  const dogs = [
    {
      name: "Max",
      description: "Friendly golden retriever who loves belly rubs and treats",
      location: "Near the library",
    },
    {
      name: "Bella",
      description: "Gentle senior dog who enjoys peaceful naps in the sun",
      location: "Academic block courtyard",
    },
    {
      name: "Rocky",
      description: "Energetic pup always ready to play and make new friends",
      location: "Sports complex area",
    },
    {
      name: "Luna",
      description: "Sweet and shy, loves gentle pets and quiet company",
      location: "Behind the cafeteria",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">Our Dogs</h1>
      <p className="mb-12 text-lg text-amber-800">
        Meet the wonderful dogs that call Ashoka University home. These furry friends 
        are an important part of our campus community.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {dogs.map((dog, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.02]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">
                🐕
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900">{dog.name}</h2>
                <p className="text-sm text-amber-700">📍 {dog.location}</p>
              </div>
            </div>
            <p className="text-amber-800/90">{dog.description}</p>
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
