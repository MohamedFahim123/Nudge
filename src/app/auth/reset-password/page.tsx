import { Metadata } from "next";
import styles from "../authStyles.module.css";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import Loader from "@/components/Loader/Loader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nudge | Reset Password",
  description: "Reset Password Page",
};

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <h1 className={`${styles.heading} text-center mb-3 text-4xl font-bol`}>
        Reset Password
      </h1>
      <ResetPasswordForm />
    </Suspense>
  );
};

export default ResetPasswordPage;
