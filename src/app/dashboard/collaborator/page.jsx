import CollaboratorDashboard from "@/components/dashboard/collaborator/OverviewCards";
import { getApplicationsByApplicantEmail } from "@/lib/api/application";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const CollaboratorPage = async () => {
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

  if (!user) {
    return <div>Please login</div>;
  }

  const applications = await getApplicationsByApplicantEmail(user?.email);

  const stats = {
    totalApplications: applications.length,
    pendingApplications: applications.filter((app) => app.status === "pending")
      .length,
    approvedApplications: applications.filter(
      (app) => app.status === "accepted",
    ).length,
    rejectedApplications: applications.filter(
      (app) => app.status === "rejected",
    ).length,
  };

  return <CollaboratorDashboard stats={stats} />;
};

export default CollaboratorPage;
