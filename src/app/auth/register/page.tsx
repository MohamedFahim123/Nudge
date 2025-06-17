import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { Metadata } from "next";
import styles from "../authStyles.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nudge | Register",
  description: "Register Page",
};

const RegisterPage = () => {
  return (
    <>
      <h1 className={`${styles.heading} text-center mb-3 text-4xl font-bol`}>
        Register
      </h1>
      <p className={`${styles.paragraph} text-center mb-6`}>
        Welcome, create your account
      </p>
      <RegisterForm />
      <p className={`${styles.paragraph} text-center mb-10 text-sm mt-4`}>
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-[#250168] font-semibold underline"
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
