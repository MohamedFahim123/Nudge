"use client";

import React from "react";
import DashboardMyAllTickets from "../DashboardMyAllTickets/DashboardMyAllTickets";
import UnUsedTickets from "../UnUsedTickets/UnUsedTickets";
import MyTicketSection from "../MyTicketSection/MyTicketSection";

const TicketsFullContent = () => {
  const [view, setView] = React.useState<
    "All Tickets" | "My Ticket" | "UnUsed Tickets" 
  >("All Tickets");

  return (
    <>
      <div className="flex space-x-3 mb-4">
        <button
          onClick={() => setView("All Tickets")}
          className={`btn cursor-pointer ${
            view === "All Tickets" &&
            "bg-gray-700 text-white hover:text-gray-700"
          }`}
        >
          All Tickets
        </button>
        <button
          onClick={() => setView("My Ticket")}
          className={`btn cursor-pointer ${
            view === "My Ticket" && "bg-gray-700 text-white hover:text-gray-700"
          }`}
        >
          My Ticket
        </button>
        <button
          onClick={() => setView("UnUsed Tickets")}
          className={`btn cursor-pointer ${
            view === "UnUsed Tickets" &&
            "bg-gray-700 text-white hover:text-gray-700"
          }`}
        >
          Unused Tickets
        </button>
      </div>
        {view === "All Tickets" && <DashboardMyAllTickets setView={setView} />}
        {view === "My Ticket" && <MyTicketSection />}
        {view === "UnUsed Tickets" && <UnUsedTickets setView={setView} />}
    </>
  );
};

export default TicketsFullContent;
