import { CollaboratorProfileUpdateModal } from "./CollaboratorProfileUpdateModal";
import { updatedUser } from "@/lib/api/user";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import ProfileCard from "./ProfileCard";

const CollaboratorProfilePage = async () => {
  const userData = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = userData?.user.email;

  const user = await updatedUser(userEmail);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        User not found.
      </div>
    );
  }

  return <ProfileCard user={user} />;
};

export default CollaboratorProfilePage;
