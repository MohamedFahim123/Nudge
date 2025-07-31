"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { useToast } from "../ToastContext/ToastContext";
import { useTicketsStore } from "@/store/tickets";

interface ReassignModalProps {
  ticketId: string;
  onClose: () => void;
}

const ReassignTicketModal = ({ ticketId, onClose }: ReassignModalProps) => {
  const { showToast } = useToast();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { getAllTickets, getUnUsedTickets } = useTicketsStore();

  const handleReassign = async () => {
    setLoading(true);
    const token = await getTokenFromServerCookies();

    const res = await fetchApi<{
      status: number;
      message: string;
      errors?: { [key: string]: string[] };
    }>("reassign-ticket", {
      method: "POST",
      body: JSON.stringify({ ticket_code: ticketId, audience_code: code }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (res.status === 200) {
      await getAllTickets();
      await getUnUsedTickets();
      showToast("Ticket reassigned successfully", "success");
      onClose();
    } else {
      showToast(res.message || "Reassignment failed", "error");
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Reassign Ticket</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter the code of the new user.
        </p>

        <input
          type="text"
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:border-[#250168]"
          placeholder="New User Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleReassign}
            disabled={loading || !code}
            className="bg-[#250168] text-white px-4 py-2 rounded hover:bg-white hover:text-[#250168] border border-[#250168] transition"
          >
            {loading ? "Reassigning..." : "Reassign"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ReassignTicketModal;
