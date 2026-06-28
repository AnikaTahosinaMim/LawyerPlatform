const baseUrl = process.env.SERVER_URL;
export const LawyersData = async () => {
  const res = await fetch(`${baseUrl}/lawyerData`);
  const data = await res.json();
  return data;
};

// details pages:
export const lawyerDetails = async (id) => {
  const res = await fetch(`${baseUrl}/lawyerData/${id}`);
  const data = await res.json();
  return data;
};
