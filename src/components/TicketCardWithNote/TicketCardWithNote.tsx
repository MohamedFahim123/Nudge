"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import React, { useState } from "react";
import { useToast } from "../ToastContext/ToastContext";
import { useTicketsStore } from "@/store/tickets";

interface TicketCardProps {
  ticket: {
    code: string;
    type: string;
    status: string;
    price: number;
    assigned_by: string;
    booked_by_you: boolean;
    notes: string | null;
  };
  onSubmitNote: (notes: string) => Promise<void>;
}

const TicketCardWithNote: React.FC<TicketCardProps> = ({
  ticket,
  onSubmitNote,
}) => {
  const [note, setNote] = useState<string>(ticket.notes || "");
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();
  const [response, setResponse] = useState<boolean>(false);
  const { getMyTicket } = useTicketsStore();

  const handleSubmit = async () => {
    setSubmitting(true);
    await onSubmitNote(note);
    setSubmitting(false);
  };

  const handleAcceptOrRejectTicket = async (status: string) => {
    setResponse(true);
    const token = await getTokenFromServerCookies();
    const res = await fetchApi<{
      message: string;
      data: [];
      errors: { [key: string]: string };
      status: number;
    }>(`response-invitation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ response: status }),
    });
    if (res.status === 200) {
      await getMyTicket();
      showToast(res?.message || `Ticket ${status} successfully`, "success");
    }
    if (res.errors) {
      Object.keys(res.errors).forEach((key) =>
        showToast(res.errors[key], "error")
      );
    }
    setResponse(false);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white mb-6">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl mb-1">{ticket.code}</h3>
          <p className="text-md text-gray-800 capitalize">
            Type: {ticket.type}
          </p>
          <p className="text-md text-gray-800">
            Assigned by: {ticket.assigned_by}
          </p>
          <p className="text-md text-gray-800">Price: ${ticket.price}</p>
          <p className="text-md text-gray-800">
            Booked by you: {ticket.booked_by_you ? "Yes" : "No"}
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
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
        </div>
      </div>

      {ticket.status === "Prospect" ? (
        <textarea
          className="w-full border outline-none border-gray-300 focus:border-[#250168] focus:shadow-sm transition-all duration-300 rounded-md p-3 text-sm resize-none mb-3"
          rows={3}
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      ) : null}

      <div className="flex items-center justify-between">
        {ticket.status === "Prospect" && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="cursor-pointer text-white bg-[#250168] hover:bg-[#231f20] transition-all duration-300 rounded-md px-4 py-2"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        )}

        {ticket.status === "Prospect" && (
          <div className="flex space-x-3">
            <button
              type="button"
              title="Accept"
              disabled={response}
              onClick={() => handleAcceptOrRejectTicket("accept")}
              className="cursor-pointer text-green-600 border border-green-600 bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-md px-4 py-2"
            >
              {response ? "Processing..." : "Accept"}
            </button>
            <button
              type="button"
              disabled={response}
              title="Decline"
              onClick={() => handleAcceptOrRejectTicket("reject")}
              className="cursor-pointer text-red-600 border border-red-600 bg-white hover:bg-red-600 hover:text-white transition-all duration-300 rounded-md px-4 py-2"
            >
              {response ? "Processing..." : "Decline"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketCardWithNote;
