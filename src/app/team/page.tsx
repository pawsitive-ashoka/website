export default function TeamPage() {
  const team = [
    {
      name: "Team Member 1",
      role: "President",
      emoji: "👤",
    },
    {
      name: "Team Member 2",
      role: "Vice President",
      emoji: "👤",
    },
    {
      name: "Team Member 3",
      role: "Operations Lead",
      emoji: "👤",
    },
    {
      name: "Team Member 4",
      role: "Events Coordinator",
      emoji: "👤",
    },
    {
      name: "Team Member 5",
      role: "Social Media Manager",
      emoji: "👤",
    },
    {
      name: "Team Member 6",
      role: "Outreach Coordinator",
      emoji: "👤",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">Meet the Team</h1>
      <p className="mb-12 text-lg text-amber-800">
        The passionate individuals behind Pawsitive, working together to make our 
        campus a better place for all creatures.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.02]"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
                {member.emoji}
              </div>
            </div>
            <h2 className="mb-2 text-xl font-bold text-amber-900">
              {member.name}
            </h2>
            <p className="text-sm font-medium text-amber-700">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
        <h3 className="mb-3 text-xl font-semibold text-amber-900">
          Join Our Team
        </h3>
        <p className="mb-6 text-amber-800">
          We're always looking for dedicated volunteers who share our passion for 
          animal welfare. Be part of something meaningful!
        </p>
        <a
          href="mailto:pawsitive@ashoka.edu.in"
          className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
        >
          Apply to Join
        </a>
      </div>
    </main>
  );
}
