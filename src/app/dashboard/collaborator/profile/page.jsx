"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { CollaboratorProfileUpdateModal } from "./CollaboratorProfileUpdateModal";
import { redirect } from "next/navigation";

const CollaboratorProfilePage = () => {
  const { data: session } = authClient.useSession();
  if (!session) {
    redirect("/login");
  }
  if (session?.user?.role !== "collaborator") {
    redirect("/unauthorized");
  }
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const email = session?.user?.email;

  // Fetch updated user from DB
  const fetchUser = async () => {
    if (!email) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${email}`,
        { cache: "no-store" },
      );

      const data = await res.json();
      setUser(data);
    } catch (err) {
      // console.log("Error fetching user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [email]);

  if (loading) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center h-screen dark:bg-slate-950">
        <div className="w-20   h-20  border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 dark:bg-slate-950">
      {/* Card */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <Image
            src={user?.image}
            alt={user?.name}
            width={90}
            height={90}
            className="rounded-full border-4 border-slate-100 dark:border-slate-800"
          />

          <div className="text-center sm:text-left flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {user?.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 break-all">
              {user?.email}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs sm:text-sm">
                {user?.role}
              </span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm">
                {user?.plan}
              </span>
            </div>
          </div>
        </div>

        {/* Skills + Bio */}
        <div className="mt-6 sm:mt-8 space-y-6">
          {/* Skills */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Skills
            </h3>

            {user?.skills?.length ? (
              <div className="flex flex-wrap gap-2">
                {user?.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm">Not Added Yet</p>
            )}
          </div>

          {/* Bio */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Bio
            </h3>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {user?.bio || "Not Added Yet"}
            </p>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-6">
          <CollaboratorProfileUpdateModal onSuccess={fetchUser} />
        </div>
      </div>
    </div>
  );
};

export default CollaboratorProfilePage;
