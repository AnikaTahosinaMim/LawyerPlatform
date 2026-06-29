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
// payment
export const createCheckoutSession = async (hiring) => {
  const res = await fetch(`${baseUrl}/create-checkout-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hiring),
  });

  return res.json();
};
// admin

export const getUsers = async () => {
  const res = await fetch(`${baseUrl}/user`, {
    cache: "no-store",
  });

  return res.json();
};

export const changeRole = async (id, role) => {
  const res = await fetch(`${baseUrl}/user/role/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role }),
  });

  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${baseUrl}/user/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
