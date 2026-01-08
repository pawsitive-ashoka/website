import Link from "next/link";

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Events and Logistics",
      icon: "📅",
      href: "/departments/events-logistics",
      description:
        "Organizing and managing events, drives, and logistical operations for animal welfare activities on campus.",
    },
    {
      name: "On-Ground and Feeding",
      icon: "🍖",
      href: "/departments/on-ground-feeding",
      description:
        "Daily care, feeding schedules, and on-ground monitoring of campus animals to ensure their well-being.",
    },
    {
      name: "Social Media and Marketing",
      icon: "📱",
      href: "/departments/social-media-marketing",
      description:
        "Managing our online presence, spreading awareness, and engaging with the community through social platforms.",
    },
    {
      name: "Finance and Outreach",
      icon: "💰",
      href: "/departments/finance-outreach",
      description:
        "Handling finances, fundraising, donations, and reaching out to supporters and partners.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">Our Departments</h1>
      <p className="mb-12 text-lg text-amber-800">
        Pawsitive operates through four dedicated departments, each playing a vital
        role in our mission to care for and protect campus animals. Explore each
        department to learn more about what we do.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {departments.map((dept, index) => (
          <Link
            key={index}
            href={dept.href}
            className="group rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 text-4xl">
                {dept.icon}
              </div>
              <h2 className="text-2xl font-bold text-amber-900 group-hover:text-amber-700">
                {dept.name}
              </h2>
            </div>
            <p className="mb-4 text-amber-800/90">{dept.description}</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
              Learn More
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
        <h3 className="mb-3 text-xl font-semibold text-amber-900">
          Want to Join a Department?
        </h3>
        <p className="mb-6 text-amber-800">
          If you&apos;re interested in joining one of our departments and contributing to
          animal welfare at Ashoka University, we&apos;d love to hear from you!
        </p>
        <a
          href="mailto:pawsitive@ashoka.edu.in"
          className="inline-block rounded-full bg-amber-900 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-800"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
