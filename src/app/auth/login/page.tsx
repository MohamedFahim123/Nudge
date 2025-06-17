import LoginForm from "@/components/LoginForm/LoginForm";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../authStyles.module.css";

export const metadata: Metadata = {
  title: "Nudge | Login",
  description: "Login Page",
};

const LoginPage = () => {
  return (
    <>
      <h1
        className={`${styles.heading} text-center mb-3 mt-6 text-4xl font-bol`}
      >
        Login
      </h1>
      <p className={`${styles.paragraph} text-center mb-4`}>
        Welcome, Log into you account
      </p>
      <LoginForm />
      <p className={`${styles.paragraph} text-center mb-10 text-sm mt-4`}>
        Create an account?{" "}
        <Link
          href="/auth/register"
          className="text-[#250168] font-semibold underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
