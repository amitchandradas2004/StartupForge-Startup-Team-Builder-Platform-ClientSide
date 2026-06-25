import OverviewCards from "@/components/dashboard/founder/OverviewCards";
import { getFounderAllApplications } from "@/lib/api/application";
import { getFounderOpportunity } from "@/lib/api/opportunity";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function OverviewPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
   if (!session) {
      redirect("/login");
    }
    if (session?.user?.role !== "founder") {
      redirect("/unauthorized");
    }
  const user = session?.user;
  const founderEmail = user?.email;

  const opportunities = await getFounderOpportunity(founderEmail);
  const applications = await getFounderAllApplications(founderEmail);
  const acceptedMembers = applications.filter(
    (application) => application.status === "accepted",
  ).length;
  return (
    <div className="pt-10 px-5 container bg-white dark:bg-slate-950 w-full h-screen">
      <OverviewCards
        totalOpportunities={opportunities.length}
        totalApplications={applications.length}
        approvedMembers={acceptedMembers}
      />
    </div>
  );
}
