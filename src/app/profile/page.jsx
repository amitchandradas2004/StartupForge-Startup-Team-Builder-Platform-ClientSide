"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");

  // mock user data (replace later with API/auth session)

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: user?.name,
    image: user?.image,
  });

  const handleSave = () => {
    setUser((prev) => ({
      ...prev,
      name: form.name,
      image: form.image,
      updatedAt: new Date().toISOString(),
    }));

    setIsEditing(false);
  };

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
              {user?.name}
            </h2>
            <p className="text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <span className="font-medium">Role:</span> {user?.role}
          </p>
          <p>
            <span className="font-medium">Email Verified:</span>{" "}
            {user?.emailVerified ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-medium">Created:</span>{" "}
            {new Date(user?.createdAt).toLocaleString()}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
