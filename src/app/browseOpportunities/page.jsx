import OpportunityCard from "@/components/dashboard/founder/OpportunityCard";

const page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/opportunities`, {
    cache: "no-store",
  });

  const opportunities = await res.json();

  return (
    <section className="dark:bg-slate-950">
      <div className="container mx-auto px-4 py-20 ">
        <h1 className="text-3xl font-bold mb-8">
          Available Opportunities : {opportunities.length}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity._id} opportunity={opportunity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
