import React from "react";
import styles from "./MaximizingRevenue.module.css";
import ArcChart from "../ArcChart/ArcChart";

const MaximizingRevenue = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-normal text-wrap max-w-2xl m-auto text-[#250168] mb-4 ${styles.headingAnimated}`}
        >
          Who should attend the Nudge Summit 2025?
        </h1>

        <p
          className={`text-lg sm:text-xl md:text-2xl font-semibold text-black mb-12 mt-4 ${styles.subheadingAnimated}`}
        >
          Everyone’s responsible for maximizing revenue
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 w-full">
          <ArcChart
            percent={95}
            color="#250168"
            label={`Nearly 30,000 new products are introduced each year, and 95% of them fail, and no business is immune to this harrowing statistic. Professor Clayton Christensen, Harvard Business School.`}
          />
          <ArcChart
            percent={67}
            color="#1fc7bc"
            label={`"67% of consumers must trust the brand before they'll continue buying its products or services." Edelman, 2019`}
          />
          <ArcChart
            percent={41}
            color="#5bf286"
            label={`Non-sales professionals spend 41% of their time persuading and influencing others—that's 24 minutes per hour. For top managers, it's a resounding 80%—or 48 minutes per hour. Daniel Pink, 2012, To Sell Is Human.`}
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(MaximizingRevenue);
