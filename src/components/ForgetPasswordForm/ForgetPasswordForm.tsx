"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { handleErrors } from "@/Actions/HandleResponse";
import { resShape } from "@/Actions/SubmitFormData";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";
import { useToast } from "../ToastContext/ToastContext";

const ForgetPasswordForm = () => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormAuthInputs> = async (data) => {
    try {
      const response = await fetchApi<resShape>("forget-password", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "no-cache",
      });

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
      router.push("/auth/reset-password");
    }
  };

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
        className="text-[#250168] font-semibold underline mt-2"
      >
        Back to Login
      </Link>
    </form>
  );
};

export default React.memo(ForgetPasswordForm);
