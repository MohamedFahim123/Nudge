"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";
import { useToast } from "../ToastContext/ToastContext";

interface resShape {
  ok: unknown;
  message: string;
  data: {
    token: string;
  };
  status: number;
  errors: { [key: string]: string };
}

const VerifyAccountForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();
  const { showToast } = useToast();
  // const router = useRouter();

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
  const onSubmit: SubmitHandler<FormAuthInputs> = async (data) => {
    try {
      const token = await getTokenFromServerCookies();
      const response = await fetchApi<resShape>("verify-account", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      });

      handleResponse(response);
    } catch (error) {
      handleSubmissionError(error);
    }
  };
  const handleResponse = async (response: resShape) => {
    if (response.status !== 200 && response.errors) {
      handleErrors(response.errors);
      return;
    }

    if (response.status === 200) {
      showToast(response.message, "success");
      reset();
    }
  };
  const handleErrors = (errors: Record<string, unknown>) => {
    Object.entries(errors).forEach(([field, error]) => {
      const errorMessage = normalizeErrorMessage(error);
      setError(field as keyof FormAuthInputs, {
        type: "server",
        message: errorMessage,
      });
      showToast(errorMessage, "error");
    });
  };
  const normalizeErrorMessage = (error: unknown): string => {
    if (Array.isArray(error)) return error[0];
    if (error instanceof Error) return error.message;
    return String(error);
  };

  const handleSubmissionError = (error: unknown) => {
    console.error("Form submission failed:", error);
    showToast(
      error instanceof Error
        ? error.message
        : "An unexpected error occurred during submission",
      "error"
    );
  };

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
