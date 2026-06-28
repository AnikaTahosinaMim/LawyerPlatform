"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard")) {
    return null;
  }

  return (
    <footer className="mt-16 border-t border-slate-700/60 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-slate-100">⚖️ Law Connect</h2>

          <p className="mt-4 leading-7 text-slate-400">
            Find experienced lawyers, compare legal experts, and book
            consultations with confidence. Your trusted legal partner.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="rounded-full border border-slate-700 bg-slate-900 p-3 transition-all hover:border-blue-500 hover:bg-blue-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-700 bg-slate-900 p-3 transition-all hover:border-pink-500 hover:bg-pink-600"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-700 bg-slate-900 p-3 transition-all hover:border-sky-500 hover:bg-sky-600"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-700 bg-slate-900 p-3 transition-all hover:border-slate-500 hover:bg-slate-700"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-slate-100">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/about" className="transition hover:text-blue-400">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-blue-400">
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="transition hover:text-blue-400"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-slate-100">
            Newsletter
          </h3>

          <p className="mb-4 text-slate-400">
            Subscribe to get the latest legal news and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-500"
            />

            <button className="rounded-r-lg bg-blue-600 px-5 font-medium text-white transition hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700/60 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Law Connect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
