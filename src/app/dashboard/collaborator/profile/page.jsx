import { CollaboratorProfileUpdateModal } from "./CollaboratorProfileUpdateModal";
import { updatedUser } from "@/lib/api/user";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const CollaboratorProfilePage = async () => {
  const userData = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = userData?.user.email;

  const user = await updatedUser(userEmail);
  console.log(user, "user");

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        User not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm overflow-hidden my-15 mr-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-8 border-b border-slate-200 dark:border-slate-800">
        <Image
          height={200}
          width={200}
          src={user?.image}
          alt={user?.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {user?.name}
          </h2>

          <p className="text-slate-500 break-all mt-1">{user?.email}</p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              {user?.role}
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium capitalize">
              {user?.plan}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                user?.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user?.status}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 space-y-8">
        {/* Bio */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Bio
          </h3>

          <p className="text-slate-700 dark:text-slate-300 leading-7">
            {user?.bio || "Not added yet"}
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Skills
          </h3>

          {user?.skills?.length ? (
            <div className="flex flex-wrap gap-3">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No skills added.</p>
          )}
        </div>

        {/* Account Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5">
            <p className="text-sm text-slate-500">Plan</p>
            <p className="font-semibold capitalize">{user?.plan}</p>
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5">
            <p className="text-sm text-slate-500">Role</p>
            <p className="font-semibold capitalize">{user?.role}</p>
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5">
            <p className="text-sm text-slate-500">Status</p>
            <p className="font-semibold capitalize">{user?.status}</p>
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5">
            <p className="text-sm text-slate-500">Email Verified</p>
            <p className="font-semibold">
              {user?.emailVerified ? "Yes" : "No"}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-800 p-5 md:col-span-2">
            <p className="text-sm text-slate-500">Joined</p>
            <p className="font-semibold">
              {new Date(user?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 dark:border-slate-800 p-6 flex justify-end">
        <CollaboratorProfileUpdateModal user={user} />
      </div>
    </div>
  );
};

export default CollaboratorProfilePage;
