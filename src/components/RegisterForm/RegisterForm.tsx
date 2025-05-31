"use client";

import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";

const RegisterForm = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] =
    useState<boolean>(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);
  const handleToggleShowConfirmPassword = () =>
    setViewConfirmPassword(!viewConfirmPassword);
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
          htmlFor="RegisterEmail"
          className={`${styles.authLable} ${
            errors.email && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          Email
        </label>
        <input
          type="email"
          id="RegisterEmail"
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
      <div className={`mb-1 ${styles.inputContainer}`}>
        <label
          htmlFor="RegisterConfirmPassword"
          className={`${styles.authLable} ${
            errors.confirm_password && "mb-0"
          } block mb-2 text-sm font-medium dark:text-white`}
        >
          Confirm Password
        </label>
        <input
          type={viewConfirmPassword ? "text" : "password"}
          id="RegisterConfirmPassword"
          placeholder="Enter your password"
          className={`${styles.formInput} ${
            errors.confirm_password
              ? `${styles.errorInput} mb-0`
              : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
          {...register("confirm_password", {
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
      {errors.confirm_password && (
        <span className="text-sm text-red-500 mb-3">
          {errors.confirm_password.message}
        </span>
      )}
      <AuthBtnSubmit name="Register" isSubmitting={isSubmitting} />
    </form>
  );
};

export default RegisterForm;
