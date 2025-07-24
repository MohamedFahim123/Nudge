import ForgetPasswordForm from "@/components/ForgetPasswordForm/ForgetPasswordForm";
import styles from "../authStyles.module.css";
import { Metadata } from "next";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

export const metadata: Metadata = {
  title: "Nudge | Forget Password",
  description: "Forget Password Page",
};

const ForgetPasswordPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <h1 className={`${styles.heading} text-center mb-3 text-4xl font-bol`}>
        Forget Password
      </h1>
      <ForgetPasswordForm />
    </Suspense>
  );
};

export default ForgetPasswordPage;
