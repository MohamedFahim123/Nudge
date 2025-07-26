import { Ticket } from "@/store/tickets";

interface TicketsTableProps {
  tickets: Ticket[];
  setView: (
    view: "All Tickets" | "My Ticket" | "UnUsed Tickets" | "Requests"
  ) => void;
}

export default function TicketsTable({ tickets, setView }: TicketsTableProps) {
  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Transaction
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Your Ticket
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {tickets?.map((ticket, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 transition"
              onClick={() => {
                if (ticket.your_ticket) {
                  setView("My Ticket");
                }
              }}
            >
              <td className="px-4 py-3">{ticket.audience.name}</td>
              <td className="px-4 py-3">{ticket.audience.email}</td>
              <td className="px-4 py-3 capitalize">{ticket.type}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    ticket.status === "Confirmed Attendee"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="px-4 py-3">{ticket.transaction}</td>
              <td className="px-4 py-3">
                {ticket.your_ticket ? "✅ Yes" : "❌ No"}
              </td>
            </tr>
          ))}
          {tickets.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-5 text-gray-500">
                No tickets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
