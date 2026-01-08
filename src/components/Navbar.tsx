"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/dogs", label: "Our Dogs" },
    { href: "/departments", label: "Departments" },
    { href: "/team", label: "Meet the Team" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="border-b border-amber-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-900">
            🐾 Pawsitive
          </Link>
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-900 ${
                    pathname === link.href
                      ? "text-amber-900"
                      : "text-amber-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
