"use client";

import { useTransactionsStore } from "@/store/transactions";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { BsEyeFill } from "react-icons/bs";

const TransactionsTable = () => {
  const router = useRouter();
  const {
    getTransactions,
    transactions,
    filteredTransactions,
    filterByCode,
    loading,
  } = useTransactionsStore();
  console.log(transactions, filteredTransactions);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <div className="p-4">
      <input
        type="text"
        onChange={(e) => filterByCode(e.target.value)}
        placeholder="Search by transaction code"
        className="border px-3 py-2 rounded mb-4 w-full"
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-start p-3">Code</th>
                <th className="text-center p-3">Method</th>
                <th className="text-center p-3">Status</th>
                <th className="text-center p-3">Amount</th>
                <th className="text-center p-3">Tickets</th>
                <th className="text-end p-3">View Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions?.map((t) => (
                <tr
                  key={t.code}
                  className="border-t border-gray-300 hover:bg-gray-50"
                >
                  <td
                    className="p-3 cursor-pointer hover:underline transition-all duration-200"
                    onClick={() =>
                      router.push(`/dashboard/my-transactions/${t.code}`)
                    }
                  >
                    {t.code}
                  </td>
                  <td className="p-3 text-center">{t.payment_method}</td>
                  <td className="p-3 text-center">{t.payment_status}</td>
                  <td className="p-3 text-center">${t.total_amount}</td>
                  <td className="p-3 text-center">{t.total_tickets}</td>
                  <td className="p-3 pe-10 flex justify-end">
                    <BsEyeFill
                      size={20}
                      className="cursor-pointer text-[#250168] hover:text-[#231f20]"
                      onClick={() =>
                        router.push(`/dashboard/my-transactions/${t.code}`)
                      }
                    />
                  </td>
                </tr>
              ))}
              {filteredTransactions?.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionsTable;
