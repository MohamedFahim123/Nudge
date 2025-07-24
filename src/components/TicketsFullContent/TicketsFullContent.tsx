"use client";

import React from "react";
import DashboardMyAllTickets from "../DashboardMyAllTickets/DashboardMyAllTickets";
import UnUsedTickets from "../UnUsedTickets/UnUsedTickets";
import MyTicketSection from "../MyTicketSection/MyTicketSection";

const TicketsFullContent = () => {
  const [view, setView] = React.useState<
    "All Tickets" | "My Ticket" | "UnUsed Tickets" | "Requests"
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
        <button
          onClick={() => setView("Requests")}
          className={`btn cursor-pointer ${
            view === "Requests" && "bg-gray-700 text-white hover:text-gray-700"
          }`}
        >
          Tickets Requests
        </button>
      </div>
      <div className="bg-white shadow p-6 rounded-md">
        {view === "All Tickets" && <DashboardMyAllTickets />}
        {view === "My Ticket" && <MyTicketSection />}
        {view === "UnUsed Tickets" && <UnUsedTickets />}
        {view === "Requests" && <>Requests</>}
      </div>
    </>
  );
};

export default TicketsFullContent;
