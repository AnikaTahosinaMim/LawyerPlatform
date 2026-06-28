const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getMyHirings = async (email) => {
  const res = await fetch(`${baseUrl}/hirings/user/${email}`, {
    cache: "no-store",
  });

  return res.json();
};
