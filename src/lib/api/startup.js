const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getFounderStartup = async (founderEmail) => {
  const params = new URLSearchParams({
    founderEmail,
  });
  const res = await fetch(`${baseUrl}/api/startups?${params.toString()}`, {
    cache: "no-store",
  });
  return res.json();
};


