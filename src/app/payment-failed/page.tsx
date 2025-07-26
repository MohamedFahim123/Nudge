import PaymentFailed from "@/components/PaymentFailed/PaymentFailed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nudge | Payment Failed",
  description: "Payment Failed Page",
};

const PayFailed = () => {
  const searchParams = new URLSearchParams();
  const sessionId = searchParams.get("session_id");

  return <PaymentFailed sessionId={sessionId} />;
};

export default React.memo(PayFailed);
