"use client";

import React, { useState } from "react";

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
  const [note, setNote] = useState(ticket.notes || "");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    await onSubmitNote(note);
    setSubmitting(false);
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
          <p className="text-md text-gray-800">
            Price: ${(ticket.price / 100).toFixed(2)}
          </p>
          <p className="text-md text-gray-800">
            Booked by you: {ticket.booked_by_you ? "Yes" : "No"}
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              ticket.status === "Confirmed Attendee"
                ? "bg-green-100 text-green-700"
                : ticket.status === "Prospect"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {ticket.status}
          </span>
        </div>
      </div>

      <textarea
        className="w-full border outline-none border-gray-300 focus:border-purple-600 focus:shadow-sm transition-all duration-300 rounded-md p-3 text-sm resize-none mb-3"
        rows={3}
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="bg-purple-600 hover:bg-white border border-purple-600 cursor-pointer disabled:cursor-default disabled:opacity-50 hover:text-purple-600 text-white font-medium text-sm px-4 py-2 rounded"
      >
        {submitting ? "Submitting..." : "Submit Note"}
      </button>
    </div>
  );
};

export default TicketCardWithNote;
