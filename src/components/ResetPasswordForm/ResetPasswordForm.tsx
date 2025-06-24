"use client";

import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPasswordForm = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] =
    useState<boolean>(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);
  const handleToggleShowConfirmPassword = () =>
    setViewConfirmPassword(!viewConfirmPassword);
  const [countdown, setCountdown] = useState<number>(60);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsDisabled(false);
    }

    return () => clearInterval(timer);
  }, [isDisabled, countdown]);

  const handleResendClick = () => {
    setCountdown(60);
    setIsDisabled(true);
  };

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
      <div className={`${styles.inputContainer}`}>
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
      <div className={`mb-2 ${styles.inputContainer}`}>
        <label
          htmlFor="ForgetPasswordotp"
          className={`${styles.authLable} ${
            errors.otp && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          OTP
        </label>
        <input
          type="text"
          id="ForgetPasswordotp"
          {...register("otp", { required: "otp is required" })}
          placeholder="Enter your otp"
          className={`${styles.formInput} ${
            errors.otp ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
        />
        {errors.otp && (
          <span className="text-sm text-red-500">{errors.otp.message}</span>
        )}
      </div>
      <div className={`mb-1 ${styles.inputContainer}`}>
        <label
          htmlFor="RegisterPassword"
          className={`${styles.authLable} ${
            errors.password && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          Password
        </label>
        <input
          type={viewPassword ? "text" : "password"}
          id="RegisterPassword"
          placeholder="Enter your password"
          className={`${styles.formInput} ${
            errors.password ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
          {...register("password", { required: "Password is required" })}
        />
        <div
          className={styles.passwordViewIcon}
          onClick={handleToggleShowPassword}
        >
          {viewPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors.password && (
        <span className="text-sm text-red-500">{errors.password.message}</span>
      )}
      <div className={`mb-2 ${styles.inputContainer}`}>
        <label
          htmlFor="RegisterConfirmPassword"
          className={`${styles.authLable} ${
            errors.password_confirmation && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          Confirm Password
        </label>
        <input
          type={viewConfirmPassword ? "text" : "password"}
          id="RegisterConfirmPassword"
          placeholder="Enter your password"
          className={`${styles.formInput} ${
            errors.password_confirmation
              ? `${styles.errorInput} mb-0`
              : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
          {...register("password_confirmation", {
            required: "Confirm Password is required",
          })}
        />
        <div
          className={styles.passwordViewIcon}
          onClick={handleToggleShowConfirmPassword}
        >
          {viewConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors.password_confirmation && (
        <span className="text-sm text-red-500 mb-3">
          {errors.password_confirmation.message}
        </span>
      )}
      <AuthBtnSubmit name="Submit Changes" isSubmitting={isSubmitting} />
      <button
        type="button"
        onClick={handleResendClick}
        disabled={isDisabled}
        className={`disabled:cursor-not-allowed cursor-pointer border border-[#250168] transition-all 
    ${
      isDisabled
        ? "opacity-50 bg-white text-[#250168]"
        : "bg-white text-[#250168] hover:bg-[#250168] hover:text-white"
    }
    rounded-sm text-md font-semibold w-full sm:w-auto px-5 py-3 mt-3 text-center`}
      >
        {isDisabled ? `RESEND OTP (${countdown})` : "RESEND OTP"}
      </button>

      <Link
        href="/auth/login"
        className="text-[#250168] font-semibold underline mt-2"
      >
        Back to Login
      </Link>
    </form>
  );
};

export default React.memo(ResetPasswordForm);
