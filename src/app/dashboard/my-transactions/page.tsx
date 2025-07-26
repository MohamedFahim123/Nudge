import Loader from "@/components/Loader/Loader";
import TransactionsTable from "@/components/TransactionsTable/TransactionsTable";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | My Transactions",
  description: "My Transactions Page",
};

const MyTransactionsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <TransactionsTable />
    </Suspense>
  );
};

export default MyTransactionsPage;
