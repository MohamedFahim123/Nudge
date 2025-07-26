import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Nudge | Payment Success",
  description: "Payment Success Page",
};

function PaySuccessPage() {
  return (
    <div className="nc-PayPage" data-nc-id="PayPage">
      <main className="container mt-11 mb-24 lg:mb-32 px-4">
        <div className="max-w-4xl mx-auto w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 space-y-8 px-0 sm:p-6 xl:p-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-green-600">
            🎉 Congratulations!
          </h2>

          <p className="text-gray-900">
            Your payment has been processed successfully. You’ll receive a
            confirmation email shortly with all your booking details.
          </p>

          <hr className="border-neutral-200" />

          <div>
            <Link
              href="/"
              className="cursor-pointer inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
            >
              <FaArrowLeft /> Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
export default React.memo(PaySuccessPage);
