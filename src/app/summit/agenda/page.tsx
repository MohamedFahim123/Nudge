import AgendaSection from "@/components/AgendaSection/AgendaSection";
import Loader from "@/components/Loader/Loader";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | Summit Agenda",
  description: "Summit Agenda Page",
};

const AgendaPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AgendaSection />
    </Suspense>
  );
};

export default React.memo(AgendaPage);
