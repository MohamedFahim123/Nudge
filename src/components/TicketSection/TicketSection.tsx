"use client";

import React from "react";
import styles from "./TicketSection.module.css";

const features = [
  "Access to the two days of the summit",
  "Access to the five main keynotes and the four main workshops",
  "Access to the networking activities",
  "A digital certificate after the summit and a digital copy of the framework’s mind map",
  "Access to the sessions pre- and post-assessments and the strategy blueprint template",
  "Access to the two exclusive Q&A dinners with the speakers",
  "Access to the two exclusive sessions: The group coaching and online influence.",
  "One-year access to the summit’s recordings",
  "A personalized gift by the speakers",
];

const standardIncluded = [0, 1, 2, 3, 4];
const premiumIncluded = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const TicketSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-screen-xl mx-auto ${styles.ticketSectionContainer}`}
      >
        <h1 className="text-4xl md:text-5xl font-regular text-center text-[#250168] mb-4">
          Only 500 seats are available!
        </h1>

        <div className="overflow-x-auto mt-12">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3"></th>
                <th className="bg-green-400 text-white px-4 py-3 text-lg font-bold">
                  Standard <br />
                  <span className="text-base">$749</span>
                </th>
                <th
                  className={`bg-[#250168] text-white px-4 py-3 text-lg font-bold relative ${styles.premiumCol}`}
                >
                  Premium <br />
                  <span className="text-base">$1,349</span>
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    Only 50 seats
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 text-lg text-[#231f20] border-e border-gray-100">
                    {feature}
                  </td>
                  <td className="px-4 py-3 text-lg text-center border-e border-gray-100">
                    {standardIncluded.includes(index) && (
                      <span className="text-green-500 text-lg font-bold">
                        ✓
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-lg text-center">
                    {premiumIncluded.includes(index) && (
                      <span className="text-purple-700 text-lg font-bold">
                        ✓
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xl text-gray-600 mt-8 italic">
          The tickets’ prices exclude tax, travel, accommodation, and personal
          expenses.
        </p>
      </div>
    </section>
  );
};

export default React.memo(TicketSection);
