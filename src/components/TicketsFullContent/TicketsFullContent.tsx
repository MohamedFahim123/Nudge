"use client";

import { useTicketsStore } from "@/store/tickets";
import React, { useEffect } from "react";
import DashboardMyAllTickets from "../DashboardMyAllTickets/DashboardMyAllTickets";
import Loader from "../Loader/Loader";
import MyTicketSection from "../MyTicketSection/MyTicketSection";
import UnUsedTickets from "../UnUsedTickets/UnUsedTickets";

const TicketsFullContent = () => {
  const [view, setView] = React.useState<
    "All Tickets" | "My Ticket" | "UnUsed Tickets"
  >("All Tickets");
  const {
    myTicket,
    myTicketLoading,
    getMyTicket,
    getAllTickets,
    allTicketsLoading,
    getUnUsedTickets,
    unUsedTickets,
    unUsedTicketsLoading,
  } = useTicketsStore();

  useEffect(() => {
    getAllTickets();
  }, [getAllTickets]);

  useEffect(() => {
    getMyTicket();
  }, [getMyTicket]);

  useEffect(() => {
    getUnUsedTickets();
  }, [getUnUsedTickets]);

  if (myTicketLoading || allTicketsLoading || unUsedTicketsLoading)
    return <Loader />;

  if (!myTicket && !allTicketsLoading && !unUsedTicketsLoading) return null;

  return (
    <>
      <div className="flex space-x-3 mb-4">
        <button
          onClick={() => setView("All Tickets")}
          className={`btn cursor-pointer ${
            view === "All Tickets" &&
            "bg-[#231f20] text-white hover:text-[#231f20]"
          }`}
        >
          All Tickets
        </button>
        {myTicket?.status && (
          <button
            onClick={() => setView("My Ticket")}
            className={`btn cursor-pointer ${
              view === "My Ticket" &&
              "bg-[#231f20] text-white hover:text-[#231f20]"
            }`}
          >
            My Ticket
          </button>
        )}
        {unUsedTickets?.length
          ? unUsedTickets.length > 0 && (
              <button
                onClick={() => setView("UnUsed Tickets")}
                className={`btn cursor-pointer ${
                  view === "UnUsed Tickets" &&
                  "bg-[#231f20] text-white hover:text-[#231f20]"
                }`}
              >
                UnUsed Tickets
              </button>
            )
          : null}
      </div>
      {view === "All Tickets" && <DashboardMyAllTickets setView={setView} />}
      {view === "My Ticket" && myTicket?.type && <MyTicketSection />}
      {view === "UnUsed Tickets" && <UnUsedTickets setView={setView} />}
    </>
  );
};

export default TicketsFullContent;
