"use client";

import { useTicketsStore } from "@/store/tickets";
import { useCallback, useEffect } from "react";
import Loader from "../Loader/Loader";
import TicketsTable from "../TicketsTable/TicketsTable";

const MyTicketSection = () => {
  const { myTicket, myTicketLoading, getMyTicket } = useTicketsStore();

  const getMyAvailabelTickets = useCallback(async () => {
    if (!myTicketLoading) await getMyTicket();
  }, [getMyTicket, myTicketLoading]);

  useEffect(() => {
    getMyAvailabelTickets();
  }, [getMyAvailabelTickets]);

  if (myTicketLoading) return <Loader />;
  if (!myTicket) return null;

  return <TicketsTable tickets={myTicket} />;
};

export default MyTicketSection;
