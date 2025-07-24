"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { handleErrors } from "@/Actions/HandleResponse";
import { resShape } from "@/Actions/SubmitFormData";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { useToast } from "@/components/ToastContext/ToastContext";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../DashboardProfileStyles.module.css";
import { useState } from "react";

export default function ChangePasswordForm({ token }: { token: string }) {
  const { showToast } = useToast();
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewNewPassword, setViewNewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] =
    useState<boolean>(false);
  const handleTogglePasswords = (
    pass: boolean,
    setPass: React.Dispatch<React.SetStateAction<boolean>>
  ) => setPass(!pass);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();
  const newPassword = watch("new_password");

  const onSubmit: SubmitHandler<FormAuthInputs> = async (
    data: FormAuthInputs
  ) => {
    try {
      const response = await fetchApi<resShape>("change-password", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
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
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-6 gap-y-4"
    >
      <div className={`mb-1 col-span-2 ${styles.inputContainer}`}>
        <label
          htmlFor="current_password"
          className={`${styles.authLable} ${
            errors.password && "mb-0"
          } block mb-2 text-sm font-medium `}
        >
          Old Password
        </label>
        <input
          type={viewPassword ? "text" : "password"}
          id="current_password"
          placeholder="Old password"
          className={`${styles.formInput} ${
            errors.current_password && `errorInput mb-0`
          } border-gray-300 focus:border-purple-600 outline-none bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
          {...register("current_password", {
            required: "Password is required",
          })}
        />
        <div
          className={styles.passwordViewIcon}
          onClick={() => handleTogglePasswords(viewPassword, setViewPassword)}
        >
          {viewPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors.current_password && (
        <span className="text-sm col-span-2 text-red-500">
          {errors.current_password.message}
        </span>
      )}

      <div className={`mb-1 col-span-2 ${styles.inputContainer}`}>
        <label
          htmlFor="New_password"
          className={`${styles.authLable} ${
            errors.new_password && "mb-0"
          } block mb-2 text-sm font-medium `}
        >
          New Password
        </label>
        <input
          type={viewNewPassword ? "text" : "password"}
          id="LoginPassword"
          placeholder="New password"
          className={`${styles.formInput} ${
            errors.new_password && `errorInput mb-0`
          } border-gray-300 focus:border-purple-600 outline-none bg-gray-50 border  text-sm rounded-lg block w-full p-2.5`}
          {...register("new_password", {
            required: "New Password is required",
          })}
        />
        <div
          className={styles.passwordViewIcon}
          onClick={() =>
            handleTogglePasswords(viewNewPassword, setViewNewPassword)
          }
        >
          {viewNewPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors.new_password && (
        <span className="text-sm col-span-2 text-red-500">
          {errors.new_password.message}
        </span>
      )}

      <div className={`mb-1 col-span-2 ${styles.inputContainer}`}>
        <label
          htmlFor="New_password_confirm"
          className={`${styles.authLable} ${
            errors.new_password && "mb-0"
          } block mb-2 text-sm font-medium `}
        >
          New Password Confirm
        </label>
        <input
          type={viewConfirmPassword ? "text" : "password"}
          id="New_password_confirm"
          placeholder="New password confirm"
          className={`${styles.formInput} ${
            errors.new_password_confirmation && `errorInput mb-0`
          } border-gray-300 focus:border-purple-600 outline-none bg-gray-50 border text-sm rounded-lg block w-full p-2.5`}
          {...register("new_password_confirmation", {
            required: "New Password Confirm is required",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          })}
        />
        <div
          className={styles.passwordViewIcon}
          onClick={() =>
            handleTogglePasswords(viewConfirmPassword, setViewConfirmPassword)
          }
        >
          {viewConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors.new_password_confirmation && (
        <span className="text-sm text-red-500">
          {errors.new_password_confirmation.message}
        </span>
      )}

      <div className="col-span-2 mt-5">
        <button
          disabled={isSubmitting}
          className="btn cursor-pointer bg-purple-600 text-white hover:text-purple-600"
        >
          {isSubmitting ? "Loading..." : "Update Password"}
        </button>
      </div>
    </form>
  );
}
