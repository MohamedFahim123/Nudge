"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { handleErrors } from "@/Actions/HandleResponse";
import { resShape } from "@/Actions/SubmitFormData";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";
import { useToast } from "../ToastContext/ToastContext";
import { useProfileStore } from "@/store/profile";

const VerifyContent = ({ target }: { target: string }) => {
  const { getProfile } = useProfileStore();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();
  const { showToast } = useToast();
  const router = useRouter();

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

  const handleResendClick = async () => {
    if (target !== "Confirm Profile Email") {
      try {
        const token = await getTokenFromServerCookies();
        const response = await fetchApi<resShape>("resend-verification-code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-cache",
        });
        handleResponse(response);
      } catch (error) {
        handleSubmissionError(error, showToast);
      }
    }
    setCountdown(60);
    setIsDisabled(true);
  };

  const onSubmit: SubmitHandler<FormAuthInputs> = async (data) => {
    try {
      const token = await getTokenFromServerCookies();
      const response = await fetchApi<resShape>(
        target === "Confirm Profile Email"
          ? "confirm-change-email"
          : "verify-account",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-cache",
        }
      );

      handleResponse(response);
    } catch (error) {
      handleSubmissionError(error, showToast);
    }
  };

  const handleResponse = async (response: resShape) => {
    if (response.status !== 200 && response.errors) {
      handleErrors(response.errors, showToast, setError);
      return;
    }

    if (response.status === 200) {
      showToast(response.message, "success");
      reset();
      await getProfile();
      router.push("/dashboard/profile");
    }
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
      {target !== "Confirm Profile Email" && (
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
      )}
    </form>
  );
};

export default React.memo(VerifyContent);
