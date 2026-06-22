import OverviewCards from "@/components/dashboard/founder/OverviewCards";
import { getFounderOpportunity } from "@/lib/api/opportunity";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export default async function OverviewPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const founderEmail = user?.email;

  const opportunities = await getFounderOpportunity(founderEmail);

  return (
    <div className="p-6">
      <OverviewCards
        totalOpportunities={opportunities.length}
        totalApplications={48}
        acceptedMembers={9}
      />
    </div>
  );
}
