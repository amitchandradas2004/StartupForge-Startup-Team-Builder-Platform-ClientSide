import OverviewCards from "@/components/dashboard/founder/OverviewCards";
import { authClient } from "@/lib/auth-client";

export default function OverviewPage() {

  return (
    <div className="p-6">
      <OverviewCards
        
        totalOpportunities={12}
        totalApplications={48}
        acceptedMembers={9}
      />
    </div>
  );
}
