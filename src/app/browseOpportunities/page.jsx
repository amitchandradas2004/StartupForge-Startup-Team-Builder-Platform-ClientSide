import OpportunityCard from "@/components/dashboard/founder/OpportunityCard";
import { getAllOpportunities } from "@/lib/api/opportunity";
import { Pagination, Table } from "@heroui/react";
import Link from "next/link";

const page = async ({ searchParams }) => {
  const params = await searchParams;

  const opportunities = await getAllOpportunities(params.page);
  const opportunitiesData = opportunities.data;
  const page = opportunities.page;
  const pages = [];
  const totalPages = opportunities.totalPage;
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <section className="dark:bg-slate-950">
      <div className="container mx-auto px-4 py-20 ">
        <h1 className="text-3xl font-bold mb-8">
          Available Opportunities for this page : {opportunitiesData.length}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunitiesData.map((opportunity) => (
            <OpportunityCard key={opportunity._id} opportunity={opportunity} />
          ))}
        </div>

        <Table.Footer className="my-5">
          <Pagination size="sm">
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous isDisabled={page === 1}>
                  <Link
                    href={`/browseOpportunities?page=${page - 1}`}
                    className="flex items-center gap-3"
                  >
                    {" "}
                    <Pagination.PreviousIcon />
                    Prev
                  </Link>
                </Pagination.Previous>
              </Pagination.Item>
              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Link href={`/browseOpportunities?page=${p}`}>
                    {" "}
                    <Pagination.Link
                      className={`${p === page && "bg-indigo-500"}`}
                      isActive={p === page}
                    >
                      {p}
                    </Pagination.Link>
                  </Link>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <Pagination.Next isDisabled={page === totalPages}>
                  <Link
                    href={`/browseOpportunities?page=${page + 1}`}
                    className="flex items-center gap-3"
                  >
                    Next
                    <Pagination.NextIcon />
                  </Link>
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </Table.Footer>
      </div>
    </section>
  );
};

export default page;
