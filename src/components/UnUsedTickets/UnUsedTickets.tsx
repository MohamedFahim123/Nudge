"use client";

import { Suspense, useCallback, useEffect } from "react";
import Loader from "../Loader/Loader";
import TicketsTable from "../TicketsTable/TicketsTable";
import { useTicketsStore } from "@/store/tickets";

const UnUsedTickets = () => {
  const { unUsedTickets, unUsedTicketsLoading, getUnUsedTickets } =
    useTicketsStore();

  const getAllUnUsedTickets = useCallback(async () => {
    if (!unUsedTicketsLoading) await getUnUsedTickets();
  }, [getUnUsedTickets, unUsedTicketsLoading]);

  useEffect(() => {
    getAllUnUsedTickets();
  }, [getAllUnUsedTickets]);

  if (unUsedTicketsLoading ) return <Loader />;
  if(!unUsedTickets) return null;

  return (
    <Suspense fallback={<Loader />}>
      <TicketsTable tickets={unUsedTickets} />
    </Suspense>
  );
};

export default UnUsedTickets;
