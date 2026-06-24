"use server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const payment = async (data) => {
  const res = await fetch(`${baseUrl}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();
  return resData;
};
