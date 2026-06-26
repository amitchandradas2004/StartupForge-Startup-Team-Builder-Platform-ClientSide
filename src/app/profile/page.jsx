"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { UpdateUserProfileModal } from "./UpdateUserModal";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Image
            height={100}
            width={100}
            src={user?.image}
            alt={user?.name}
            className="w-16 h-16 rounded-full object-cover border"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {user?.name || "Name"}
            </h2>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-5 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <span className="font-medium">Role:</span>{" "}
            <span className="border rounded-2xl  text-black p-1 bg-slate-200 dark:bg-slate-800 dark:text-white ">
              {user?.role || "founder"}
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-start gap-3 justify-start ">
            <p>
              <span className="font-medium">Current Plan:</span>{" "}
              <span className="border rounded-2xl  text-black p-1 bg-slate-200 dark:bg-slate-800 dark:text-white">
                {user?.plan || "free"}
              </span>
            </p>
            <span>
              Want to upgrade your plan?{" "}
              <Link href={"/pricing"} className="text-blue-500 underline">
                Click here
              </Link>
            </span>
          </div>

          <p>
            <span className="font-medium">Created:</span>{" "}
            {new Date(user?.createdAt).toLocaleString()}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <UpdateUserProfileModal user={user} />
        </div>
      </div>
    </div>
  );
}
