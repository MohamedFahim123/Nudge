"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { useTicketsStore } from "@/store/tickets";
import Loader from "../Loader/Loader";
import TicketCardWithNote from "../TicketCardWithNote/TicketCardWithNote";
import { useToast } from "../ToastContext/ToastContext";

const MyTicketSection = () => {
  const { myTicket, myTicketLoading, getMyTicket } = useTicketsStore();
  const { showToast } = useToast();

  if (myTicketLoading) return <Loader />;
  if (!myTicket) return null;

  const handleSubmitNote = async (notes: string) => {
    const res = await fetchApi<{
      message: string;
      data: [];
      errors: { [key: string]: string };
      status: number;
    }>("control-ticket-notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getTokenFromServerCookies()}`,
      },
      body: JSON.stringify({ notes }),
    });

    if (res.status === 200) {
      await getMyTicket();
      showToast(res?.message || "Note added successfully", "success");
    }
    if (res.errors) {
      Object.keys(res.errors).forEach((key) =>
        showToast(res.errors[key], "error")
      );
    }
  };

  return (
    <TicketCardWithNote onSubmitNote={handleSubmitNote} ticket={myTicket} />
  );
};

export default MyTicketSection;
