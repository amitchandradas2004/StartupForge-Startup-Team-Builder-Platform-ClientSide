import OpportunityDetails from "@/components/dashboard/founder/OpportunityDetails";

const OpportunityDetailsPage = async ({ params }) => {
  const { id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/opportunities/${id}`);
  const opportunityData = await res.json();

  return (
    <div>
      <OpportunityDetails opportunity={opportunityData} />
    </div>
  );
};

export default OpportunityDetailsPage;
