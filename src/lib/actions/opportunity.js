import { authClient } from "../auth-client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createOpportynity = async (newOpportynityData) => {
  const { data: token } = await authClient.token();
  
  const res = await fetch(`${baseUrl}/api/opportunities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token?.token}`,
    },
    body: JSON.stringify(newOpportynityData),
  });
  return res.json();
};
