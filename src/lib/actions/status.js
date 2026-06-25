"use server";

import { revalidatePath } from "next/cache";
export const updateStartupStatus = async (id, data) => {
  const res = await fetch(`${baseUrl}/api/startups/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidatePath("/dashboard/admin/startups");
  return res.json();
};
