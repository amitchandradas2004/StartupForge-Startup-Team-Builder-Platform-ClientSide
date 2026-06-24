import StartupCard from "@/components/dashboard/founder/StartupCard";
import { getAllStarups } from "@/lib/api/startup";

const Page = async () => {
  const startups = await getAllStarups();

  return (
    <section className="dark:bg-slate-950">
      <section className="container mx-auto px-4 py-15">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Browse Startups : {startups.length}
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Discover innovative startups and find your next opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <StartupCard key={startup._id} startup={startup} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Page;
