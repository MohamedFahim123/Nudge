import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PaymentFailed = () => {
  return (
    <div className={`nc-PayFailedPage`} data-nc-id="PayFailedPage">
      <main className="container mt-11 mb-24 lg:mb-32 px-4">
        <div className="max-w-4xl mx-auto space-y-6 sm:rounded-2xl sm:border border-neutral-200 p-6 xl:p-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-red-600">
            ❌ Failed to pay for the package
          </h2>

          <p className="text-gray-900">
            There was an error while processing your payment. Please try again
            or contact support if the issue persists.
          </p>

          <hr className="border-neutral-200" />
          <div>
            <Link
              href="/"
              className="cursor-pointer inline-flex items-center gap-2 bg-[#250168] hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
            >
              <FaArrowLeft /> Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default React.memo(PaymentFailed);
