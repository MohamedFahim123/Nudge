"use client";

import { useCartsStore } from "@/store/cart";
import { Suspense, useEffect, useCallback } from "react";
import Loader from "../Loader/Loader";
import MyCart from "../MyCart/MyCart";

const MyCartFullContent = () => {
  const { cartItems, cartItemsLoading, getCartItems } = useCartsStore();

  const getCartData = useCallback(async () => {
     await getCartItems();
  }, [getCartItems]);

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  if (cartItemsLoading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <MyCart cartData={cartItems} getCartData={getCartData} />
    </Suspense>
  );
};

export default MyCartFullContent;
