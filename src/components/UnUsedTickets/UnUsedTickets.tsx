"use client";

import { useTicketsStore } from "@/store/tickets";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import TicketsTable from "../TicketsTable/TicketsTable";

const UnUsedTickets = ({
  setView,
}: {
  setView: (view: "All Tickets" | "My Ticket" | "UnUsed Tickets") => void;
}) => {
  const { unUsedTickets, unUsedTicketsLoading } = useTicketsStore();

  if (unUsedTicketsLoading) return <Loader />;
  if (!unUsedTickets) return null;

  return (
    <Suspense fallback={<Loader />}>
      <TicketsTable setView={setView} tickets={unUsedTickets} />
    </Suspense>
  );
};

export default UnUsedTickets;
