import { SellerProductsFrom } from "@/components/dashboard/seller/page";
import React from "react";

const SellerProducts = () => {
  console.log("productssssssssssssss");
  return (
    <div className="">
      <h2 className=" font-bold text-2xl">To order products click here </h2>
      <SellerProductsFrom></SellerProductsFrom>
    </div>
  );
};

export default SellerProducts;
