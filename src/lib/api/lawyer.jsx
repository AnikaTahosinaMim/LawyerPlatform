const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const LawyersData = async (params = {}) => {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${baseUrl}/lawyerData?${query}`, {
    cache: "no-store",
  });

  return res.json();
};

// details pages:
export const lawyerDetails = async (id) => {
  const res = await fetch(`${baseUrl}/lawyerData/${id}`);
  const data = await res.json();
  return data;
};
