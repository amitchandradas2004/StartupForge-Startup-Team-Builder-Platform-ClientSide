"use server";

 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const profileUpdateCol = async (data) => {
  const res = await fetch(`${baseUrl}/api/collaborator/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const profileUpdate = async (data) => {
  const res = await fetch(`${baseUrl}/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
   return res.json();
};
