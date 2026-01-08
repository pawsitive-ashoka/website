export default function FinanceOutreachPage() {
  const donationOptions = [
    {
      title: "One-Time Donation",
      description: "Make a one-time contribution to support our animal welfare initiatives.",
      icon: "💝",
    },
    {
      title: "Monthly Support",
      description: "Become a monthly supporter and make a lasting impact on campus animals.",
      icon: "📅",
    },
    {
      title: "Sponsor an Animal",
      description: "Sponsor the care, food, and medical needs of a specific campus animal.",
      icon: "🐾",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-amber-900">
        Finance and Outreach
      </h1>
      <p className="mb-12 text-lg text-amber-800">
        {/* Department description will be added here */}
        Short description of the Finance and Outreach department will be added here.
      </p>

      {/* Donation Options */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {donationOptions.map((option, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-sm text-center"
          >
            <div className="mb-4 text-5xl">{option.icon}</div>
            <h3 className="mb-3 text-xl font-bold text-amber-900">
              {option.title}
            </h3>
            <p className="text-sm text-amber-800/80">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Main Donation Section */}
      <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-8 shadow-sm">
        <h2 className="mb-4 text-center text-2xl font-bold text-amber-900">
          Support Our Cause
        </h2>
        <p className="mb-8 text-center text-amber-800">
          Your donations help us provide food, medical care, and shelter for campus
          animals. Every contribution makes a difference.
        </p>

        {/* Donation Portal Placeholder */}
        <div className="rounded-xl bg-white/80 p-8 text-center">
          <div className="mb-6 text-6xl">🏦</div>
          <h3 className="mb-4 text-xl font-bold text-amber-900">
            Donation Portal
          </h3>
          <p className="mb-6 text-amber-800">
            {/* Donation portal integration will be added here */}
            Donation portal details and payment gateway integration will be added here.
          </p>
          
          {/* Placeholder for donation form/button */}
          <div className="space-y-4">
            <button className="w-full rounded-full bg-amber-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-amber-800">
              Donate Now (Coming Soon)
            </button>
            
            <p className="text-sm text-amber-700">
              For now, please contact us at{" "}
              <a
                href="mailto:pawsitive@ashoka.edu.in"
                className="font-semibold underline hover:text-amber-900"
              >
                pawsitive@ashoka.edu.in
              </a>{" "}
              to make a donation.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
          <div className="mb-2 text-3xl font-bold text-amber-900">₹500</div>
          <p className="text-sm text-amber-800">Feeds one dog for a month</p>
        </div>
        <div className="rounded-xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
          <div className="mb-2 text-3xl font-bold text-amber-900">₹2000</div>
          <p className="text-sm text-amber-800">Covers vaccination costs</p>
        </div>
        <div className="rounded-xl bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
          <div className="mb-2 text-3xl font-bold text-amber-900">₹5000</div>
          <p className="text-sm text-amber-800">
            Supports a sterilization procedure
          </p>
        </div>
      </div>
    </main>
  );
}
