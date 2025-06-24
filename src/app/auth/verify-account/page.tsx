import { Metadata } from "next";
import styles from "../authStyles.module.css";
import VerifyAccountForm from "@/components/VerifyAccountForm/VerifyAccountForm";

export const metadata: Metadata = {
  title: "Nudge | Verify Account",
  description: "Verify Account Page",
};

const VerifyAccountPage = () => {
  return (
    <>
      <h1 className={`${styles.heading} text-center mb-3 text-4xl font-bol`}>
        Verify Account
      </h1>
      <VerifyAccountForm />
    </>
  );
};

export default VerifyAccountPage;
