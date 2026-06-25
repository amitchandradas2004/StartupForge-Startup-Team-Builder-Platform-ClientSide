const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getFounderOpportunity = async (founderEmail) => {
  const params = new URLSearchParams({
    founderEmail,
  });
  const res = await fetch(
    `${baseUrl}/api/founderEmail/opportunities?${params.toString()}`,
    {
      cache: "no-store",
    },
  );
  return res.json();
};

export const getAllOpportunities = async (page) => {
  if (!page) {
    page = 1;
  }
  const res = await fetch(`${baseUrl}/api/opportunities?page=${page}`, {
    cache: "no-store",
  });
  return res.json();
};
