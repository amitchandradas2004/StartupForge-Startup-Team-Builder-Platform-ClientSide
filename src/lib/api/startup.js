const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getFounderStartup = async (founderEmail) => {
  const res = await fetch(
    `${baseUrl}/api/startups?=founderEmail${founderEmail}`,
  );
  return res.json();
};
