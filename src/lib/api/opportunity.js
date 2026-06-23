
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getFounderOpportunity = async (founderEmail) => {
  const params = new URLSearchParams({
    founderEmail,
  });
  const res = await fetch(`${baseUrl}/api/opportunities?${params.toString()}`, {
    cache: "no-store",
  });
  return res.json();
};
