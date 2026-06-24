const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getAllUsers = async () => {
  const res = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });
  return res.json();
};
