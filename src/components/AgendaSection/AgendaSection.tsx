import React from "react";
import { FaCheck, FaLock } from "react-icons/fa";
import SessionCard from "../SessionCard/SessionCard";
const agendaData: {
  day: string;
  sessions: {
    id: number;
    time: string;
    title: string;
    description: string;
    speaker?: string;
    icon?: React.ReactNode;
  }[];
}[] = [
  {
    day: "Day 1",
    sessions: [
      {
        id: 1,
        time: "8:30am - 9:15am",
        title: "Registration",
        description:
          "Participants check in, receive welcome kits, and enjoy a light breakfast and networking.",
        icon: <FaLock className="text-3xl" />,
      },
      {
        id: 2,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/amg.png",
      },
      {
        id: 3,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/and.png",
      },
      {
        id: 4,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/Bas.png",
      },
    ],
  },
  {
    day: "Day 2",
    sessions: [
      {
        id: 1,
        time: "9:00am - 10:30am",
        title: "Workshop 1",
        description:
          "Hands-on collaborative workshop focused on innovation and strategy.",
        icon: <FaCheck className="text-3xl" />,
      },
      {
        id: 2,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/day1dinner.png",
      },
      {
        id: 3,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/day2dinner.png",
      },
      {
        id: 4,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/Dinner.svg",
      },
      {
        id: 5,
        time: "9:15am - 10:00am",
        title: "Summit Opening",
        description:
          "Opening remarks and overview of the Summit’s goals and schedule. Special Guest keynote speech.",
        speaker: "/images/Agenda/hasanand1.png",
      },
    ],
  },
];
const AgendaSection = () => {
  return (
    <main className="bg-gray-100 py-12 px-4 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-black mb-8">
          The Agenda
        </h2>
        {agendaData.map((day) => (
          <div key={day.day} className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-4">{day.day}</h3>
            <div className="space-y-6">
              {day.sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default React.memo(AgendaSection);
