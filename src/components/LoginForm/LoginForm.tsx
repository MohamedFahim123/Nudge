"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { setServerCookie } from "@/Actions/TokenHandlers";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import { normalizeErrorMessage } from "@/utils/normalizeErrorMessage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import { useToast } from "../ToastContext/ToastContext";
import styles from "./loginForm.module.css";

interface resShape {
  ok: unknown;
  message: string;
  data: {
    audience: {
      id: number;
      name: string;
      email: string;
      phone: string;
      role: string;
      company: string;
      linkedin_profile: string;
      profile_image: string;
      passport_file: string;
      profile_completed: boolean;
      email_verified: boolean;
      [key: string]: string | number | boolean;
    };
    token: string;
  };
  status: number;
  errors: { [key: string]: string };
}

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);
  const { showToast } = useToast();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();
  const onSubmit: SubmitHandler<FormAuthInputs> = async (formData) => {
    try {
      const response = await fetchApi<resShape>("login", {
        method: "POST",
        body: JSON.stringify(formData),
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
      handleErrors(response.errors);
      return;
    }

    if (response.status === 200) {
      const token = response.data.token;
      await setServerCookie(token);
      showToast(response.message, "success");
      reset();
      if (response.data.audience.email_verified) {
        router.push("/dashboard/profile");
      } else {
        router.push("/auth/verify-account");
      }
    }
  };
  const handleErrors = (errors: Record<string, unknown>) => {
    if (!errors || Object.keys(errors).length === 0) return;

    Object.entries(errors).forEach(([field, error]) => {
      const errorMessage = normalizeErrorMessage(error);
      setError(field as keyof FormAuthInputs, {
        type: "server",
        message: errorMessage,
      });
      showToast(errorMessage, "error");
    });
  };

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`mb-1 ${styles.inputContainer}`}>
        <label
          htmlFor="LoginEmail"
          className={`${styles.authLable} ${
            errors.email && "mb-0"
          } block mb-2 text-sm font-medium `}
        >
          Email
        </label>
        <input
          type="email"
          id="LoginEmail"
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
      <div className={`mb-1 ${styles.inputContainer}`}>
        <label
          htmlFor="LoginPassword"
          className={`${styles.authLable} ${
            errors.password && "mb-0"
          } block mb-2 text-sm font-medium `}
        >
          Password
        </label>
        <input
          type={viewPassword ? "text" : "password"}
          id="LoginPassword"
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
      <div className="flex justify-between items-start mb-5 mt-3">
        <div className="flex items-center h-5">
          <label className="container flex items-center gap-1 text-sm">
            <input
              checked={isChecked}
              type="checkbox"
              className="w-4 h-4"
              onChange={() => setIsChecked(!isChecked)}
            />
            <div className="checkmark"></div>
            Remember me
          </label>
        </div>
        <Link
          href={"/auth/forget-password"}
          className="text-[#250168] font-500 text-sm"
        >
          Forget Password?
        </Link>
      </div>
      <AuthBtnSubmit name="Login" isSubmitting={isSubmitting} />
    </form>
  );
};

export default LoginForm;
