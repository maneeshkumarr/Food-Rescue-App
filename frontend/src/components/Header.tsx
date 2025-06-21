"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/donate", label: "Donate" },
    { href: "/browse", label: "Browse" },
    { href: "/history", label: "History" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          aria-label="Food Rescue Home"
          onClick={() => setMenuOpen(false)}
          className="select-none"
        >
          <h1 className="text-3xl font-extrabold text-green-700 hover:text-green-800 transition-colors cursor-pointer">
            Food Rescue
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-10"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative font-semibold text-gray-700 transition-colors duration-300 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 ${
                  isActive ? "text-green-700" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10">{label}</span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-green-600 transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-green-700 hover:text-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white shadow-lg border-t border-green-200"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col py-5 space-y-4 px-6">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg font-semibold text-gray-700 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-md px-3 py-2 ${
                      isActive ? "text-green-700" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
