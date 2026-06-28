const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getMyHirings = async (email) => {
  const res = await fetch(`${baseUrl}/hirings/user/${email}`, {
    cache: "no-store",
  });

  return res.json();
};
export const getLawyerHirings = async (email) => {
  const res = await fetch(`${baseUrl}/hirings/lawyer/${email}`, {
    cache: "no-store",
  });

  return res.json();
};
export const updateHiringStatus = async (id, status) => {
  const res = await fetch(`${baseUrl}/hirings/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return res.json();
};
