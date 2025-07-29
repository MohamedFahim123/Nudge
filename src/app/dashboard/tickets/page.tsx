import Loader from "@/components/Loader/Loader";
import TicketsFullContent from "@/components/TicketsFullContent/TicketsFullContent";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | Tickets",
  description: "Tickets Page",
};

const TicketsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex justify-between items-center border border-gray-200 p-4 rounded-t-lg">
        <h1 className="text-3xl font-bold">Tickets</h1>
        <Link
          href="/dashboard/buy-ticket"
          title="Buy Ticket"
          className="outline-none font-semibold px-4 py-2 rounded-lg shadow-md transistion-all duration-300 bg-[#250168] text-white cursor-pointer border border-[#250168] hover:bg-white hover:text-[#250168]"
        >
          Buy a Ticket
        </Link>
      </div>
      <div className="p-4 min-h-40 border border-gray-200 rounded-b-lg">
        <TicketsFullContent />
      </div>
    </Suspense>
  );
};

export default TicketsPage;
