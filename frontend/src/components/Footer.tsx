import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-800 to-lime-700 text-green-100 py-10 select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Food Rescue. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {[{
            href: "https://facebook.com",
            icon: <Facebook className="w-6 h-6 hover:text-lime-300 transition" />
          },{
            href: "https://twitter.com",
            icon: <Twitter className="w-6 h-6 hover:text-lime-300 transition" />
          },{
            href: "https://instagram.com",
            icon: <Instagram className="w-6 h-6 hover:text-lime-300 transition" />
          },{
            href: "https://linkedin.com",
            icon: <Linkedin className="w-6 h-6 hover:text-lime-300 transition" />
          }].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${href.split('.')[1]} page`}
              className="text-green-100 hover:text-lime-300 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
