import { AvTicket } from "@/store/avTickets";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

interface TicketsTableProps {
  tickets: AvTicket[];
}

const AvTicketsTable = ({ tickets }: TicketsTableProps) => {
  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full divide-y divide-gray-300 shadow-md rounded-lg overflow-hidden bg-white">
        <thead className="bg-gray-200">
          <tr className="font-bold">
            <th
              colSpan={3}
              className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]"
            >
              Type
            </th>
            <th
              colSpan={3}
              className="px-4 py-3 text-left text-sm font-semibold text-[#231f20]"
            >
              Price
            </th>
            <th className="px-4 py-3 pe-12 text-end text-sm font-semibold text-[#231f20]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {tickets?.map((ticket) => (
            <tr
              key={ticket.id}
              className="hover:bg-gray-50 font-semibold transition"
            >
              <td colSpan={3} className="px-4 py-3 capitalize">
                {ticket.type}
              </td>
              <td colSpan={3} className="px-4 py-3">
                {ticket.price}
              </td>
              <td className="px-4 py-3 text-end">
                <AddToCartBtn text="Add to Cart" ticketId={ticket.id} />
              </td>
            </tr>
          ))}
          {tickets.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-5 text-gray-500">
                No tickets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AvTicketsTable;
