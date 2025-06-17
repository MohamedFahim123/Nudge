import AgendaSection from "@/components/AgendaSection/AgendaSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nudge | Summit Agenda",
  description: "Summit Agenda Page",
};

const AgendaPage = () => {
  return <AgendaSection />;
};

export default React.memo(AgendaPage);
