"use server";

import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const updateApplicationStatus = async (id, data) => {
  const res = await fetch(`${baseUrl}/api/applications/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidatePath("/dashboard/founder/applications");
  return res.json();
};
