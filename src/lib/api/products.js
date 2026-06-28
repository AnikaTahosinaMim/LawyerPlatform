// import { authClient } from "../auth-client";

// const baseURL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_SERVER_URL;
// export const addProducts = async (products) => {
//   const { data: token } = await authClient.token();
//   console.log(token.token)
//   const res = await fetch(`${baseURL}/seller/products`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       authorization:`Bearer ${token.token}`
//     },
//     body: JSON.stringify(products),
//   });
//   const data = await res.json();
//   return data;
// };
