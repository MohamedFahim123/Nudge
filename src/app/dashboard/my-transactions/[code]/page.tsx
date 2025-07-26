import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";

interface Transaction {
  code: string;
  payment_method: string;
  status: string;
  price: number;
  type?: string;
  your_ticket?: boolean;
  audience?: {
    name: string;
    email: string;
    code: string;
  };
}

interface ApiResponse {
  data: {
    bookings: {
      bookings: Transaction[];
    };
  };
}

const TransactionDetailsPage = async ({
  params,
}: {
  params: { code: string };
}) => {
  const res = await fetchApi<ApiResponse>(`show-transaction/${params.code}`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${await getTokenFromServerCookies()}`,
    },
  });

  const transaction = res.data.bookings.bookings[0];
  const tickets = res.data.bookings.bookings;

  console.log(transaction);
  console.log(tickets);

  return (
    <div className="max-100 mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        Transaction Details{" "}
        <small className="text-gray-500 font-medium underline">
          {params.code}
        </small>
      </h1>

      <div className="mb-6 space-y-2">
        <p>
          <strong>User Code:</strong> {transaction.code}
        </p>
        <p>
          <strong>Status:</strong> {transaction.status}
        </p>
        <p>
          <strong>Total Price:</strong> $
          {tickets.reduce((acc, ticket) => acc + ticket.price, 0)}
        </p>
        <p>
          <strong>Total Tickets:</strong> {tickets.length}
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-3">Tickets</h2>
      <div className="space-y-4">
        {tickets.map((ticket, index) => (
          <div
            key={ticket.code}
            className="border p-4 rounded-lg bg-gray-50 shadow-sm"
          >
            <p>
              <strong>Ticket #{index + 1}</strong>
            </p>
            <p>
              <strong>Ticket Code:</strong> {ticket.code}
            </p>
            {ticket.type && (
              <p>
                <strong>Type:</strong> {ticket.type}
              </p>
            )}
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                  ticket.status === "Confirmed Attendee"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {ticket.status}
              </span>
            </p>
            <p>
              <strong>Price:</strong> ${ticket.price}
            </p>
            {typeof ticket.your_ticket !== "undefined" && (
              <p>
                <strong>Your Ticket:</strong>{" "}
                {ticket.your_ticket ? "Yes" : "No"}
              </p>
            )}
            {ticket.audience && (
              <>
                <p>
                  <strong>Audience Name:</strong> {ticket.audience.name}
                </p>
                <p>
                  <strong>Audience Email:</strong> {ticket.audience.email}
                </p>
                <p>
                  <strong>Audience Code:</strong> {ticket.audience.code}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
