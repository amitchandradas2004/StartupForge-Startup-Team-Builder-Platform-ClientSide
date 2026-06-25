import { authClient } from "../auth-client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createStartup = async (newStartupData) => {
  const { data: token } = await authClient.token();
   
  const res = await fetch(`${baseUrl}/api/startups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       authorization: `Bearer ${token?.token}`,
    },
    body: JSON.stringify(newStartupData),
  });
  return res.json();
};
