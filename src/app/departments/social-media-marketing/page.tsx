"use client";

export default function SocialMediaMarketingPage() {
  const socialLinks = [
    {
      name: "Email",
      icon: "📧",
      url: "mailto:pawsitive@ashoka.edu.in",
      handle: "pawsitive@ashoka.edu.in",
      description: "Get in touch with us via email",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com/teampawsitiveashoka",
      handle: "@teampawsitiveashoka",
      description: "Follow us on Instagram (Currently deactivated)",
      isDeactivated: true,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#", // Add actual LinkedIn URL when available
      handle: "Pawsitive - Ashoka University",
      description: "Connect with us on LinkedIn",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">
        Social Media and Marketing
      </h1>
      <p className="mb-12 text-lg text-amber-800">
        {/* Department description will be added here */}
        Short description of the Social Media and Marketing department will be added here.
      </p>

      <div className="space-y-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            className={`block rounded-2xl bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg ${
              link.isDeactivated
                ? "opacity-60 cursor-not-allowed"
                : "hover:scale-[1.01]"
            }`}
            onClick={(e) => link.isDeactivated && e.preventDefault()}
          >
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 text-4xl">
                {link.icon}
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-2xl font-bold text-amber-900">
                  {link.name}
                  {link.isDeactivated && (
                    <span className="ml-2 text-sm font-normal text-amber-600">
                      (Currently Deactivated)
                    </span>
                  )}
                </h2>
                <p className="mb-2 text-lg font-semibold text-amber-700">
                  {link.handle}
                </p>
                <p className="text-sm text-amber-800/80">{link.description}</p>
              </div>
              {!link.isDeactivated && (
                <div className="text-3xl text-amber-900">→</div>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center shadow-sm">
        <h3 className="mb-3 text-xl font-semibold text-amber-900">
          Stay Connected
        </h3>
        <p className="text-amber-800">
          Follow us on our social media platforms to stay updated with our latest
          activities, events, and animal welfare initiatives at Ashoka University.
        </p>
      </div>
    </main>
  );
}
