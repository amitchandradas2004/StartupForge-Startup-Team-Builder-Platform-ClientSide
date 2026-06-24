"use server";

import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createStartup = async (newStartupData) => {
  const res = await fetch(`${baseUrl}/api/startups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStartupData),
  });
  return res.json();
};

export const createOpportynity = async (newOpportynityData) => {
  const res = await fetch(`${baseUrl}/api/opportunities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOpportynityData),
  });
  return res.json();
};

export const submitApplication = async (applicationData) => {
  const res = await fetch(`${baseUrl}/api/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicationData),
  });
  return res.json();
};

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
