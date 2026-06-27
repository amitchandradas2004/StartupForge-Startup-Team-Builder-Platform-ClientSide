"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { CollaboratorProfileUpdateModal } from "./CollaboratorProfileUpdateModal";

const CollaboratorProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const email = session?.user?.email;

  // Redirect after auth is loaded
  useEffect(() => {
    if (isPending) return;

    if (!session) {
      router.replace("/login");
      return;
    }

    if (session.user.role !== "collaborator") {
      router.replace("/unauthorized");
    }
  }, [session, isPending, router]);

  const fetchUser = useCallback(async () => {
    if (!email) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${email}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [email]);

  useEffect(() => {
    if (email) {
      fetchUser();
    }
  }, [email, fetchUser]);

  if (isPending || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        User not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-700">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>

          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold">{user?.name}</h1>

            <p className="text-slate-500 break-all">
              {user?.email}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                {user?.role}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                {user?.plan}
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h3 className="mb-3 font-semibold text-slate-500">
            Skills
          </h3>

          {user?.skills?.length ? (
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Not Added Yet</p>
          )}
        </div>

        {/* Bio */}
        <div className="mt-6 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h3 className="mb-3 font-semibold text-slate-500">
            Bio
          </h3>

          <p className="leading-7 text-slate-700 dark:text-slate-300">
            {user?.bio || "Not Added Yet"}
          </p>
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