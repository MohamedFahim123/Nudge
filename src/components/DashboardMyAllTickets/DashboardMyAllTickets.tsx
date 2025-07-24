"use client";
import { useTicketsStore } from "@/store/tickets";
import { useCallback, useEffect } from "react";
import TicketsTable from "../TicketsTable/TicketsTable";
import Loader from "../Loader/Loader";

const DashboardMyAllTickets = () => {
  const { allTickets, allTicketsLoading, getAllTickets } = useTicketsStore();

  const getAllAvailabelTickets = useCallback(async () => {
    if (!allTicketsLoading) await getAllTickets();
  }, [getAllTickets, allTicketsLoading]);

  useEffect(() => {
    getAllAvailabelTickets();
  }, [getAllAvailabelTickets]);

  if (allTicketsLoading) return <Loader />;
  if (!allTickets) return null;

  return <TicketsTable tickets={allTickets} />;
};

export default DashboardMyAllTickets;
