"use client";

import { useTicketsStore } from "@/store/tickets";
import Loader from "../Loader/Loader";
import TicketsTable from "../TicketsTable/TicketsTable";

const DashboardMyAllTickets = ({
  setView,
}: {
  setView: (view: "All Tickets" | "My Ticket" | "UnUsed Tickets") => void;
}) => {
  const { allTickets, allTicketsLoading } = useTicketsStore();

  if (allTicketsLoading) return <Loader />;
  if (!allTickets) return null;

  return <TicketsTable setView={setView} tickets={allTickets} />;
};

export default DashboardMyAllTickets;
