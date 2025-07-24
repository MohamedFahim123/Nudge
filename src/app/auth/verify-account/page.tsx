import VerifyContent from "@/components/VerifyContent/VerifyContent";
import { Metadata } from "next";
import styles from "../authStyles.module.css";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

export const metadata: Metadata = {
  title: "Nudge | Verify Account",
  description: "Verify Account Page",
};

const VerifyAccountPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <h1 className={`${styles.heading} text-center mb-3 text-4xl font-bol`}>
        Verify Account
      </h1>
      <VerifyContent target="Verify Account" />
    </Suspense>
  );
};

export default VerifyAccountPage;
