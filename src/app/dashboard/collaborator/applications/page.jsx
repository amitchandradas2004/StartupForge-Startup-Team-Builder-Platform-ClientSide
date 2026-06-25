import { auth } from "@/lib/auth";
import { ApplicationTable } from "./ApplicationTable";
import EmptyApplications from "./EmptyApplication";
import { headers } from "next/headers";
import { getApplicationsByApplicantEmail } from "@/lib/api/application";
import { redirect } from "next/navigation";

const CollaboratorApplicationsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }
  if (session?.user?.role !== "collaborator") {
    redirect("/unauthorized");
  }
  const user = session?.user;
  const applicantEmail = user?.email;
  const applications = await getApplicationsByApplicantEmail(applicantEmail);
  return (
    <div className="w-full py-10 px-5 dark:bg-slate-950">
      {applications.length === 0 ? (
        <EmptyApplications />
      ) : (
        <ApplicationTable applications={applications} />
      )}
    </div>
  );
};

export default CollaboratorApplicationsPage;
