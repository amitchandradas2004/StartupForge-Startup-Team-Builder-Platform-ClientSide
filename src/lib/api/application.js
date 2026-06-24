const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getApplicationsByApplicantEmail = async (applicantEmail) => {
  const params = new URLSearchParams({
    applicantEmail,
  });
  const res = await fetch(`${baseUrl}/api/applications?${params.toString()}`, {
    cache: "no-store",
  });
  return res.json();
};

export const getFounderAllApplications = async (founderEmail) => {
  const params = new URLSearchParams({
    founderEmail,
  });
  const url = `${baseUrl}/api/applications?${params.toString()}`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  return res.json();
};
