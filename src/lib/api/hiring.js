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
console.log("BASE URL:", baseUrl);
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
export const getTransactions = async () => {
  const res = await fetch(`${baseUrl}/transactions`, {
    cache: "no-store",
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
export const getAnalytics = async () => {
  const res = await fetch(`${baseUrl}/analytics`, {
    cache: "no-store",
  });

  return res.json();
};
export const getUserProfile = async (email) => {
  const res = await fetch(`${baseUrl}/user/${email}`);

  return res.json();
};

export const updateUserProfile = async (email, data) => {
  const res = await fetch(`${baseUrl}/user/${email}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
export const getLawyerProfile = async (email) => {
  try {
    const res = await fetch(`${baseUrl}/lawyer/${email}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Network response failed");

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
};
export const updateLawyerProfile = async (id, data) => {
  const res = await fetch(`${baseUrl}/lawyer/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
export const getTopLawyers = async () => {
  const res = await fetch(`${baseUrl}/top-lawyers`, {
    cache: "no-store",
  });

  return res.json();
};
