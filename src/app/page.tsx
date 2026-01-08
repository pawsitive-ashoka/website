export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h2 className="mb-6 text-5xl font-bold text-amber-900">
            Welcome to Pawsitive
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl text-amber-800">
            Animal Welfare Club at Ashoka University
          </p>
          <p className="mx-auto max-w-2xl text-lg text-amber-700/80">
            Creating a compassionate community for all creatures, one paw at a time.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-amber-900">
              About Us
            </h3>
            <p className="mb-4 text-amber-800/90">
              Pawsitive is dedicated to promoting animal welfare and fostering a
              deeper appreciation for all living beings on campus and beyond.
              We believe in creating a safe, compassionate community where both
              humans and animals can thrive together.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-amber-900">
            What We Do
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 text-3xl">🍖</div>
              <h4 className="mb-2 text-lg font-semibold text-amber-900">
                Daily Care & Monitoring
              </h4>
              <p className="text-sm text-amber-800/80">
                We regularly feed and monitor the health of street dogs and cats on and around campus, ensuring their basic needs are met with consistency and care.
              </p>
            </div>
            <div className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 text-3xl">🏥</div>
              <h4 className="mb-2 text-lg font-semibold text-amber-900">
                Veterinary Support
              </h4>
              <p className="text-sm text-amber-800/80">
                We facilitate timely medical treatment by coordinating vet visits, hospitalisation, and post-treatment care for injured or unwell animals.
              </p>
            </div>
            <div className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 text-3xl">💉</div>
              <h4 className="mb-2 text-lg font-semibold text-amber-900">
                Sterilisation & Vaccination Drives
              </h4>
              <p className="text-sm text-amber-800/80">
                We organise sterilisation, vaccination, and tick-removal drives to control population growth, prevent disease, and promote the safety of both animals and the campus community.
              </p>
            </div>
            <div className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 text-3xl">🏠</div>
              <h4 className="mb-2 text-lg font-semibold text-amber-900">
                Adoption & Rehabilitation
              </h4>
              <p className="text-sm text-amber-800/80">
                We support the rehabilitation and adoption of animals by connecting them with loving homes and encouraging responsible pet ownership.
              </p>
            </div>
            <div className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 text-3xl">📚</div>
              <h4 className="mb-2 text-lg font-semibold text-amber-900">
                Education & Awareness
              </h4>
              <p className="text-sm text-amber-800/80">
                We collaborate with veterinary professionals to educate students and the wider community about animal health, behaviour, welfare, and humane coexistence.
              </p>
            </div>
            <div className="rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 text-3xl">🤝</div>
              <h4 className="mb-2 text-lg font-semibold text-amber-900">
                Student Engagement
              </h4>
              <p className="text-sm text-amber-800/80">
                We provide students with opportunities to actively participate in animal welfare efforts, fostering empathy, responsibility, and long-term commitment to animal rights.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="mb-16">
          <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-amber-900">
              Get Involved
            </h3>
            <p className="mb-6 text-amber-800">
              Join us in making a difference for animals at Ashoka University.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:pawsitive@ashoka.edu.in"
                className="rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-amber-900 bg-transparent px-8 py-3 font-medium text-amber-900 transition-colors hover:bg-amber-900/10"
              >
                Join the Club
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200/50 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-amber-700">
          <p>© 2026 Pawsitive - Ashoka University</p>
          <p className="mt-2">Making the world a better place for all creatures 🐾</p>
        </div>
      </footer>
    </>
  );
}
