"use client";

import Link from "next/link";
import { Button, Dropdown, Separator } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa6";
import { VscDebugStart } from "react-icons/vsc";
import Icon from "@/Assets/icon.png";
import { ThemeToggle } from "./ThemeToggle";
import UserDropDown from "./UserDropDown";
import Image from "next/image";
import { MdCollections } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect, usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user?.role || "founder";

  const pathName = usePathname();

  if (pathName.includes("/dashboard")) {
    return null;
  }
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success(`${user?.name}, you have successfully logged Out.`);
    redirect("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl shadow-xl border-b border-white/10 bg-white/70 dark:bg-slate-950/70 transition-colors duration-300">
      <nav className="mx-auto flex h-13 container items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-orange-600 dark:text-white"
        >
          <div className="flex h-10 w-10 items-center justify-center border text-2xl rounded-xl shadow">
            <Image
              src={Icon}
              alt="logo"
              height={25}
              width={25}
              className="w-6.5"
            />
          </div>
          <span className="text-xl font-bold">StartUp Forge</span>
        </Link>

        {/* Desktop Menu - Added Glassmorphic "Blur Button" effects */}
        {/* <div className="hidden md:flex items-center gap-2 text-xs">
          <Link
            href="/"
            className="px-4 py-1 rounded-full font-medium transition-all duration-200 backdrop-blur-md bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            href="/browseStartups"
            className="px-4 py-1 rounded-full font-medium transition-all duration-200 backdrop-blur-md bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-indigo-600"
          >
            Startups
          </Link>
          <Link
            href="/browseOpportunities"
            className="px-4 py-1 rounded-full font-medium transition-all duration-200 backdrop-blur-md bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-indigo-600"
          >
            Opportunities
          </Link>
        </div> */}
        <div className="hidden md:flex items-center gap-2 text-xs">
          <Link
            href="/"
            className={`px-4 py-1 rounded-full font-medium transition-all duration-200 backdrop-blur-md
      ${
        pathName === "/"
          ? "bg-indigo-600 text-white shadow-lg"
          : "bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-indigo-600"
      }`}
          >
            Home
          </Link>

          <Link
            href="/browseStartups"
            className={`px-4 py-1 rounded-full font-medium transition-all duration-200 backdrop-blur-md
      ${
        pathName.startsWith("/browseStartups")
          ? "bg-indigo-600 text-white shadow-lg"
          : "bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-indigo-600"
      }`}
          >
            Startups
          </Link>

          <Link
            href="/browseOpportunities"
            className={`px-4 py-1 rounded-full font-medium transition-all duration-200 backdrop-blur-md
      ${
        pathName.startsWith("/browseOpportunities")
          ? "bg-indigo-600 text-white shadow-lg"
          : "bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 hover:text-indigo-600"
      }`}
          >
            Opportunities
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {!user ? (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href={"/login"}>
                <Button className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700">
                  <VscDebugStart />
                  Login
                </Button>
              </Link>
            </div>
          ) : (
            <UserDropDown user={user} role={role} />
          )}
        </div>

        {/* Mobile Menu Button */}
        <Dropdown>
          <Button
            isIconOnly
            aria-label="Profile"
            className={"text-indigo-600 bg-transparent inline md:hidden"}
          >
            <TiThMenu size={24} />
          </Button>

          {/* Small devices */}
          {/* Added a touch of blur to the dropdown popover itself for consistency */}
          <Dropdown.Popover className="min-w-60 p-3 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-white/20 shadow-2xl">
            {!user ? (
              <Dropdown.Menu>
                <Dropdown.Item id="home" className="p-0">
                  <Link
                    href="/"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <FaHome />
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="browseStartups" className="p-0">
                  <Link
                    href="/browseStartups"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <MdCollections />
                    Browse Startups
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="browseOpportunities" className="p-0">
                  <Link
                    href="/browseOpportinuties"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <MdCollections />
                    Browse Opportunities
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="theme" className="pl-0">
                  <ThemeToggle />
                </Dropdown.Item>

                <Dropdown.Item id="signIn" className="p-0">
                  <Link
                    href="/login"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <VscDebugStart />
                    Login
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item id="home" className="p-0">
                  <Link
                    href="/"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <FaHome />
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="dashboard" className="p-0">
                  <Link
                    href={`/dashboard/${role}`}
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <FaReplyAll />
                    Dashboard
                  </Link>
                </Dropdown.Item>

                {role === "collaborator" ? (
                  ""
                ) : (
                  <Dropdown.Item id="profile" className="p-0">
                    <Link
                      href="/profile"
                      className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                    >
                      <ImProfile />
                      Profile
                    </Link>
                  </Dropdown.Item>
                )}
                <Dropdown.Item id="browseStartups" className="p-0">
                  <Link
                    href="/browseStartups"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <MdCollections />
                    Browse Startups
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="browseOpportunities" className="p-0">
                  <Link
                    href="/browseOpportinuties"
                    className="w-full flex items-center gap-2 p-2 rounded-xl transition hover:backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-600"
                  >
                    <MdCollections />
                    Browse Opportunities
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="theme" className="pl-0">
                  <ThemeToggle />
                </Dropdown.Item>
                <Separator />
                <Dropdown.Item className="text-red-400 p-0">
                  <Button
                    onClick={handleLogout}
                    variant="danger"
                    className={
                      "w-full bg-red-500/10 hover:bg-red-500/20 text-red-500"
                    }
                  >
                    Logout <LuLogOut />
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown.Popover>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Navbar;
