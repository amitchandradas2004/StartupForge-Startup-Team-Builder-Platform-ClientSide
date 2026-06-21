import { Button, Dropdown, Separator } from "@heroui/react";
import Link from "next/link";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FaReplyAll, FaStore } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
const UserDropDown = ({ user, role }) => {
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success(`${user?.name}, you have successfully logged Out.`);
    redirect("/");
  };

  return (
    <Dropdown>
      <Button isIconOnly aria-label="Profile" variant="secondary">
        {user ? (
          <Image
            src={user?.image}
            alt={user?.name}
            height={60}
            width={60}
            className="rounded-full shadow border"
            referrerPolicy="no-referrer"
          />
        ) : (
          <FaUserCircle />
        )}
      </Button>

      <Dropdown.Popover className="min-w-60 p-3">
        <Dropdown.Menu>
          <Dropdown.Item id="home" className="p-0">
            <Link
              href="/"
              className="w-full  flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
            >
              <FaHome />
              Home
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="dashboard" className="p-0">
            <Link
              href={`/dashboard/${role}`}
              className="w-full  flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
            >
              <FaReplyAll />
              Dashboard
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="profile" className="p-0 ">
            <Link
              href="/profile"
              className="w-full  flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
            >
              <ImProfile />
              Profile
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="theme" className="p-0">
            {" "}
            <ThemeToggle />
          </Dropdown.Item>
          <Separator />
          <Dropdown.Item className="text-red-400 p-0 ">
            <Button
              onClick={handleLogout}
              variant="danger"
              className={"w-full"}
            >
              Logout <LuLogOut />
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default UserDropDown;
