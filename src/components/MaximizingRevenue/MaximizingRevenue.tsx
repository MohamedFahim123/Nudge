"use client";

import React from "react";
import ArcChart from "../ArcChart/ArcChart";

const MaximizingRevenue = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#250168] mb-4">
          Maximizing Revenue
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-black mb-8 mt-4">
          You are responsible, too!
        </p>
        <p className="text-lg md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
          Let&apos;s face it—everyone is responsible for maximizing their
          company&apos;s revenue! It&apos;s not the sales team&apos;s
          responsibility: you must help, too! You strengthen strategic alignment
          as a CEO, craft clear messaging as MarCom, manage the talent and
          culture war as HR, negotiate deals as procurement, influence and
          increase conversion rates as marketing, and build products and
          services to fulfill customers&apos; needs as a product team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
          <ArcChart
            percent={95}
            color="#111827"
            label={`Nearly 30,000 new products are introduced each year, and 95% of them fail, and no business is immune to this harrowing statistic. — Professor Clayton Christensen, Harvard Business School.`}
          />
          <ArcChart
            percent={67}
            color="#4B0082"
            label={`67% of consumers must trust the brand before they'll continue buying its products or services. — Edelman, 2019`}
          />
          <ArcChart
            percent={41}
            color="#22C55E"
            label={`Non-sales professionals spend 41% of their time persuading and influencing others—that's 24 minutes per hour. For top managers, it's a resounding 80%—or 48 minutes per hour. — Daniel Pink, 2012, To Sell Is Human.`}
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(MaximizingRevenue);
