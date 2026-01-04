export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold text-amber-900">About Us</h1>
      
      <div className="space-y-6">
        <div className="rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold text-amber-900">Our Mission</h2>
          <p className="mb-4 text-amber-800/90">
            Pawsitive is dedicated to promoting animal welfare and fostering a deeper 
            appreciation for all living beings on campus and beyond. We believe in 
            creating a safe, compassionate community where both humans and animals can 
            thrive together.
          </p>
          <p className="text-amber-800/90">
            Through our initiatives, we aim to raise awareness about animal rights, 
            provide care for campus animals, and build a strong community of animal 
            lovers at Ashoka University.
          </p>
        </div>

        <div className="rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold text-amber-900">What We Do</h2>
          <ul className="space-y-3 text-amber-800/90">
            <li className="flex items-start">
              <span className="mr-3 text-xl">🐕</span>
              <span>Regular feeding and care for campus animals</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">🏥</span>
              <span>Coordinate medical assistance and vaccinations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">📚</span>
              <span>Organize workshops and awareness sessions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">🤝</span>
              <span>Partner with local animal welfare organizations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">🎉</span>
              <span>Host adoption drives and community events</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-amber-900">Join Us</h2>
          <p className="mb-6 text-amber-800">
            Whether you're an animal lover, want to volunteer, or simply want to learn 
            more about animal welfare, there's a place for you at Pawsitive.
          </p>
          <a
            href="mailto:pawsitive@ashoka.edu.in"
            className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
          >
            Get Involved
          </a>
        </div>
      </div>
    </main>
  );
}
