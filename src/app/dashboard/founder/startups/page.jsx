import { StartupTable } from "@/components/dashboard/founder/StartupTable";
import { getFounderStartup } from "@/lib/api/startup";
import { Button } from "@heroui/react";
import Link from "next/link";

const StartupsPage = async () => {
  const founderEmail = "founder@gmail.com";
  const startups = await getFounderStartup(founderEmail);
 
  return (
    <div className="mb-20 mt-10">
      <div className="flex items-center justify-between p-5 gap-3">
        {" "}
        <h2>Manage all startups from here</h2>
        <Link href={"/dashboard/founder/startups/new"}>
          <Button> Add new Startup</Button>
        </Link>{" "}
      </div>
      <StartupTable startups={startups} />
    </div>
  );
};

export default StartupsPage;
