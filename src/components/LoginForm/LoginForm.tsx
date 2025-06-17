"use client";

import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);
  const [isChecked, setIsChecked] = useState<boolean>(false);
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
