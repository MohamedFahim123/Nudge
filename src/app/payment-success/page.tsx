import PaymentSuccess from "@/components/PaymentSuccess/PaymentSuccess";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nudge | Payment Success",
  description: "Payment Success Page",
};

function PaySuccessPage() {
  const searchParams = new URLSearchParams();
  const sessionId = searchParams.get("session_id");

  return <PaymentSuccess sessionId={sessionId} />;
}
export default React.memo(PaySuccessPage);
