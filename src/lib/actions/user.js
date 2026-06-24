"use server";
import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const updateUserStatus = async (id, data) => {
  const res = await fetch(`${baseUrl}/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidatePath("/dashboard/admin/users");
  return res.json();
};
