import DashboardBuyTicketsContent from "@/components/DashboardBuyTicketsContent/DashboardBuyTicketsContent";
import Loader from "@/components/Loader/Loader";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { TiShoppingCart } from "react-icons/ti";

export const metadata: Metadata = {
  title: "Nudge | Buy Ticket",
  description: "Buy Ticket Page",
};

const BuyTicketPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex justify-between items-center border border-gray-200 p-4 rounded-t-lg">
        <h1 className="text-3xl font-bold">Buy a Ticket</h1>
        <Link
          href="/dashboard/my-cart"
          title="Buy Ticket"
          className="outline-none flex items-center gap-2 font-semibold px-4 py-2 rounded-lg shadow-md transistion-all duration-300 bg-[#250168] text-white cursor-pointer border border-[#250168] hover:bg-white hover:text-[#250168]"
        >
          My Cart
          <TiShoppingCart size={20} />
        </Link>
      </div>
      <div className="p-4 min-h-40 border border-gray-200 rounded-b-lg">
        <DashboardBuyTicketsContent />
      </div>
    </Suspense>
  );
};

export default BuyTicketPage;
