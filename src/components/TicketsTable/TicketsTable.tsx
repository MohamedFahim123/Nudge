import { Ticket } from "@/store/tickets";


interface TicketsTableProps {
  tickets: Ticket[];
}

export default function TicketsTable({ tickets }: TicketsTableProps) {
  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Created At
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {tickets?.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3">{ticket.id}</td>
              <td className="px-4 py-3">{ticket.title}</td>
              <td className="px-4 py-3">{ticket.type}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    ticket.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : ticket.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="px-4 py-3">{ticket.created_at}</td>
            </tr>
          ))}
          {tickets.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-5 text-gray-500">
                No tickets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
