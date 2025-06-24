"use client";

import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";

const VerifyAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();

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

  const onSubmit: SubmitHandler<FormAuthInputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`mb-2 ${styles.inputContainer}`}>
        <label
          htmlFor="ForgetPasswordOtp"
          className={`${styles.authLable} ${
            errors.otp && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          OTP
        </label>
        <input
          type="number"
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
      <AuthBtnSubmit name="Verify" isSubmitting={isSubmitting} />
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
    </form>
  );
};

export default React.memo(VerifyAccountForm);
