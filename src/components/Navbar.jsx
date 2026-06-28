"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.includes("dashboard")) {
    return null;
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Browse Lawyers", href: "/lawyers" },
  ];

  const dashboardHref = user?.role ? `/dashboard/${user.role}` : "/dashboard";

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) {
      router.push("/lawyers");
      setIsMenuOpen(false);
      return;
    }
    router.push(`/lawyers?search=${encodeURIComponent(query)}`);
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
  };

  const activeClass = (href) =>
    pathname === href
      ? "text-primary font-semibold"
      : "text-slate-300 hover:text-primary transition-colors";

  return (
    <div className="sticky top-0 z-40 w-full border-b border-slate-700/60 bg-slate-950/95 backdrop-blur-xl text-slate-100 shadow-sm">
      <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 text-slate-100 transition hover:bg-slate-800 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 px-3 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-base font-black text-slate-900">T</span>
              <div className="flex flex-col leading-tight">
                <span>Lawyers</span>
                <span className="text-xs text-slate-200">Expert lawyers, fast</span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`text-sm ${activeClass(item.href)}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <form onSubmit={handleSearchSubmit} className="w-full max-w-xl">
              <label htmlFor="nav-search" className="sr-only">Search lawyers by name or specialization</label>
              <div className="flex h-12 items-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 focus-within:border-cyan-400">
                <input
                  id="nav-search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search lawyers by name or specialization"
                  className="h-full w-full border-none bg-transparent px-4 text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
                <Button type="submit" size="sm" variant="secondary" className="h-full rounded-none rounded-r-2xl px-5">
                  Search
                </Button>
              </div>
            </form>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {!user ? (
              <>
                <Link href="/signin" className="text-sm text-slate-100 transition hover:text-primary">Login</Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            ) : (
              <Dropdown>
                <Dropdown.Trigger className="rounded-full border border-slate-800 bg-slate-900/95 p-1">
                  <Avatar size="sm" aria-label="Open profile menu">
                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0) ?? "U"}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover className="w-72 rounded-3xl border border-slate-800 bg-slate-950/95 p-3 shadow-xl">
                  <div className="mb-3 flex items-center gap-3 rounded-3xl bg-slate-900/80 p-3">
                    <Avatar size="sm">
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback delayMs={600}>{user?.name?.charAt(0) ?? "U"}</Avatar.Fallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-slate-100">{user?.name}</p>
                      <p className="text-xs text-slate-400">{user?.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link href={`/dashboard/${user?.role}`} className="flex items-center gap-2 rounded-2xl px-3 py-3 text-sm text-slate-100 transition hover:bg-slate-900/80">
                      <MdDashboard className="text-lg" />
                      <span>Dashboard</span>
                    </Link>
                    <Link href="/profile" className="flex items-center gap-2 rounded-2xl px-3 py-3 text-sm text-slate-100 transition hover:bg-slate-900/80">
                      <CgProfile className="text-lg" />
                      <span>Profile</span>
                    </Link>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center justify-between rounded-2xl bg-slate-900/95 px-3 py-3 text-sm text-slate-100 transition hover:bg-slate-800"
                    >
                      <span className="flex items-center gap-2">
                        <BiLogOut className="text-lg" />
                        Logout
                      </span>
                    </button>
                  </div>
                </Dropdown.Popover>
              </Dropdown>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 shadow-lg md:hidden">
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <label htmlFor="mobile-search" className="sr-only">Search lawyers by name or specialization</label>
              <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-2">
                <input
                  id="mobile-search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search lawyers..."
                  className="w-full border-none bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
                <Button type="submit" size="sm">Go</Button>
              </div>
            </form>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-sm ${activeClass(item.href)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link href={dashboardHref} className="block rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/80" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Link href="/profile" className="block rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/80" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full rounded-2xl bg-slate-900/95 px-4 py-3 text-left text-sm text-slate-100 transition hover:bg-slate-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/signin" className="block rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-900/80" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/signup" className="block rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-95" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
