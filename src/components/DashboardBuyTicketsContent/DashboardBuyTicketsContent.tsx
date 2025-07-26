"use client";

import { useAvTicketsStore } from "@/store/avTickets";
import { useCallback, useEffect } from "react";
import AvTicketsTable from "../AvTicketsTable/AvTicketsTable";
import Loader from "../Loader/Loader";

const DashboardBuyTicketsContent = () => {
  const { allAvTickets, allAvTicketsLoading, getAllAvTickets } =
    useAvTicketsStore();

  const getAllAvailabelTickets = useCallback(async () => {
    if (!allAvTicketsLoading) await getAllAvTickets();
  }, [getAllAvTickets, allAvTicketsLoading]);

  useEffect(() => {
    getAllAvailabelTickets();
  }, [getAllAvailabelTickets]);

  if (allAvTicketsLoading) return <Loader />;
  if (!allAvTickets) return null;

  return <AvTicketsTable tickets={allAvTickets} />;
};

export default DashboardBuyTicketsContent;
