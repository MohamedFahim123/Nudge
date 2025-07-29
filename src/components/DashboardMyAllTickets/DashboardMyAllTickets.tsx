"use client";
import { useTicketsStore } from "@/store/tickets";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import TicketsTable from "../TicketsTable/TicketsTable";

const DashboardMyAllTickets = ({
  setView,
}: {
  setView: (view: "All Tickets" | "My Ticket" | "UnUsed Tickets") => void;
}) => {
  const { allTickets, allTicketsLoading, getAllTickets } = useTicketsStore();

  useEffect(() => {
    (async () => {
      await getAllTickets();
    })();
  }, [getAllTickets]);

  if (allTicketsLoading) return <Loader />;
  if (!allTickets) return null;

  return <TicketsTable setView={setView} tickets={allTickets} />;
};

export default DashboardMyAllTickets;
