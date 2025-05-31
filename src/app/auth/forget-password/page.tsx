import ForgetPasswordForm from "@/components/ForgetPasswordForm/ForgetPasswordForm";
import styles from "../authStyles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nudge | Forget Password",
  description: "Forget Password Page",
};

const ForgetPasswordPage = () => {
  return (
    <>
      <h1 className={`${styles.heading} text-center mb-3 text-4xl font-bol`}>
        Forget Password
      </h1>
      <ForgetPasswordForm />
    </>
  );
};

export default ForgetPasswordPage;
