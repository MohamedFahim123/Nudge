"use client";
import { Ticket } from "@/store/tickets";
import ReassignTicketModal from "../ReassignTicketModal/ReassignTicketModal";
import { useState } from "react";

interface TicketsTableProps {
  tickets: Ticket[];
  setView: (view: "All Tickets" | "My Ticket" | "UnUsed Tickets") => void;
}

export default function TicketsTable({ tickets, setView }: TicketsTableProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ticket, setTicket] = useState<string>("");

  const handleOpenModal = (code: string) => {
    setTicket(code);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTicket("");
  };

  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Transaction
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Your Ticket
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]">
              Re-Assign (Rejected Only)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {tickets?.map((ticket, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 transition"
              onClick={() => {
                if (ticket.your_ticket) {
                  setView("My Ticket");
                }
              }}
            >
              <td className="px-4 py-3">{ticket.audience.name}</td>
              <td className="px-4 py-3">{ticket.audience.email}</td>
              <td className="px-4 py-3 capitalize">{ticket.type}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    ticket.status === "Confirmed Attendee" ||
                    ticket.status === "Confirmed Invited Attendee"
                      ? "bg-green-100 text-green-700"
                      : ticket.status === "Prospect"
                      ? "bg-yellow-100 text-yellow-700"
                      : ticket.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-[#231f20]"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="px-4 py-3">{ticket.transaction}</td>
              <td className="px-4 py-3">
                {ticket.your_ticket ? "✅ Yes" : "❌ No"}
              </td>
              <td className="px-4 py-3">
                {ticket.status === "Rejected" && (
                  <button
                    type="button"
                    title="Re-Assign"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(ticket.code);
                    }}
                    className="hover:underline outline-none font-semibold transistion-all duration-300 text-[#250168] cursor-pointer"
                  >
                    Re-Assign Ticket
                  </button>
                )}
              </td>
            </tr>
          ))}
          {tickets.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-5 text-gray-500">
                No tickets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && ticket && (
        <ReassignTicketModal ticketId={ticket} onClose={handleCloseModal} />
      )}
    </div>
  );
}
