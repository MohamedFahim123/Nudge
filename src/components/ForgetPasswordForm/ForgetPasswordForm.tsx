"use client";

import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";

const ForgetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();

  const onSubmit: SubmitHandler<FormAuthInputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`mb-2 ${styles.inputContainer}`}>
        <label
          htmlFor="ForgetPasswordEmail"
          className={`${styles.authLable} ${
            errors.email && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          Email
        </label>
        <input
          type="email"
          id="ForgetPasswordEmail"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className={`${styles.formInput} ${
            errors.email ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <AuthBtnSubmit name="Send OTP" isSubmitting={isSubmitting} />

      <Link
        href="/auth/login"
        className="text-[rgba(35,77,212,1)] font-semibold underline mt-2"
      >
        Back to Login
      </Link>
    </form>
  );
};

export default ForgetPasswordForm;
