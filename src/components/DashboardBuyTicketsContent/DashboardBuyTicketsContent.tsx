"use client";

import { useAvTicketsStore } from "@/store/avTickets";
import { useEffect } from "react";
import AvTicketsTable from "../AvTicketsTable/AvTicketsTable";
import Loader from "../Loader/Loader";

const DashboardBuyTicketsContent = () => {
  const { allAvTickets, allAvTicketsLoading, getAllAvTickets } =
    useAvTicketsStore();

  useEffect(() => {
    getAllAvTickets();
  }, [getAllAvTickets]);

  if (allAvTicketsLoading) return <Loader />;
  if (!allAvTickets) return null;

  return <AvTicketsTable tickets={allAvTickets} />;
};

export default DashboardBuyTicketsContent;
