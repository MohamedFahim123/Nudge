import PaymentSuccess from "@/components/PaymentSuccess/PaymentSuccess";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nudge | Payment Success",
  description: "Payment Success Page",
};

function PaySuccessPage() {
  return <PaymentSuccess />;
}
export default React.memo(PaySuccessPage);
