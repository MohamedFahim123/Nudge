import PaymentFailed from "@/components/PaymentFailed/PaymentFailed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nudge | Payment Failed",
  description: "Payment Failed Page",
};

const PayFailed = () => {
  return <PaymentFailed />;
};

export default React.memo(PayFailed);
