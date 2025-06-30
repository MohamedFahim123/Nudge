"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import { normalizeErrorMessage } from "@/utils/normalizeErrorMessage";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthBtnSubmit from "../AuthBtnSubmit/AuthBtnSubmit";
import styles from "../LoginForm/loginForm.module.css";
import { useToast } from "../ToastContext/ToastContext";

interface resShape {
  message: string;
  data: { token: string };
  status: number;
  errors: { [key: string]: string };
}

const RegisterForm = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const handleToggleShowPassword = () => setViewPassword(!viewPassword);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [passportName, setPassportName] = useState<string>("");
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>();

  const onSubmit: SubmitHandler<FormAuthInputs> = async (data) => {
    try {
      const formData = createFormData(data);

      const response = await submitFormData(formData);

      handleResponse(response);
    } catch (error) {
      handleSubmissionError(error, showToast);
    }
  };

  const createFormData = (data: FormAuthInputs): FormData => {
    const formData = new FormData();
    const formFields: Array<keyof FormAuthInputs> = [
      "name",
      "email",
      "password",
      "phone",
      "role",
      "company",
      "linkedin_profile",
      "profile_image",
      "passport_file",
    ];

    formFields.forEach((field) => {
      const value = data[field];
      if (value !== undefined && value !== null) {
        if (value instanceof FileList) {
          formData.append(field, value[0]);
        } else if (value instanceof File) {
          formData.append(field, value);
        } else {
          formData.append(field, value);
        }
      }
    });

    return formData;
  };

  const submitFormData = async (formData: FormData): Promise<resShape> => {
    return await fetchApi<resShape>("register", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
      cache: "no-cache",
    });
  };

  const handleResponse = (response: resShape) => {
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
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          htmlFor="Registername"
          className={`${styles.authLable} ${
            errors.name && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          User Name
        </label>
        <input
          autoComplete="name"
          type="text"
          id="Registername"
          {...register("name", { required: "name is required" })}
          placeholder="Enter your name"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.name ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          htmlFor="RegisterEmail"
          className={`${styles.authLable} ${
            errors.email && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          Email
        </label>
        <input
          autoComplete="email"
          type="email"
          id="RegisterEmail"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.email ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          htmlFor="Registerphone"
          className={`${styles.authLable} ${
            errors.phone && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          Phone Number
        </label>
        <input
          autoComplete="phone"
          type="number"
          id="Registerphone"
          {...register("phone", { required: "phone is required" })}
          placeholder="Enter your phone"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.phone ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
        />
        {errors.phone && (
          <span className="text-sm text-red-500">{errors.phone.message}</span>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          htmlFor="Registerrole"
          className={`${styles.authLable} ${
            errors.role && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          Role
        </label>
        <input
          autoComplete="role"
          type="text"
          id="Registerrole"
          {...register("role", { required: "role is required" })}
          placeholder="Enter your role"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.role ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
        />
        {errors.role && (
          <span className="text-sm text-red-500">{errors.role.message}</span>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          htmlFor="Registercompany"
          className={`${styles.authLable} ${
            errors.company && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          Company Name
        </label>
        <input
          autoComplete="company"
          type="text"
          id="Registercompany"
          {...register("company", { required: "company is required" })}
          placeholder="Current company name"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.company ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
        />
        {errors.company && (
          <span className="text-sm text-red-500">{errors.company.message}</span>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          htmlFor="Registerlinkedin_profile"
          className={`${styles.authLable} ${
            errors.linkedin_profile && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          Linkedin Profile
        </label>
        <input
          autoComplete="linkedin_profile"
          type="text"
          id="Registerlinkedin_profile"
          {...register("linkedin_profile", {
            required: "linkedin profile is required",
          })}
          placeholder="Linkedin Profile Link"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.linkedin_profile
              ? `${styles.errorInput} mb-0`
              : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
        />
        {errors.linkedin_profile && (
          <span className="text-sm text-red-500">
            {errors.linkedin_profile.message}
          </span>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          className={`${styles.authLable} block mb-1 text-sm font-medium dark:text-white`}
        >
          Profile Image
        </label>
        <input
          type="file"
          accept="image/*"
          {...register("profile_image", {
            required: "Profile image is required",
          })}
          className="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setProfilePreview(URL.createObjectURL(file));
            }
          }}
        />
        {errors.profile_image && (
          <span className="text-sm text-red-500">
            {errors.profile_image.message}
          </span>
        )}
        {profilePreview && (
          <div className="mt-2">
            <Image
              width={100}
              height={100}
              src={profilePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        )}
      </div>
      <div className={`${styles.inputContainer} col-span-2 md:col-span-1`}>
        <label
          className={`${styles.authLable} block mb-1 text-sm font-medium dark:text-white`}
        >
          Passport File
        </label>
        <input
          type="file"
          accept="image/*,.pdf"
          {...register("passport_file", {
            required: "Passport file is required",
          })}
          className="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPassportName(file.name);
            }
          }}
        />
        {errors.passport_file && (
          <span className="text-sm text-red-500">
            {errors.passport_file.message}
          </span>
        )}
        {passportName && (
          <div className="mt-2 text-sm text-gray-600">
            Selected: <span className="font-medium">{passportName}</span>
          </div>
        )}
      </div>
      <div className={`mb-1 ${styles.inputContainer} col-span-2`}>
        <label
          htmlFor="RegisterPassword"
          className={`${styles.authLable} ${
            errors.password && "mb-0"
          } block mb-1 text-sm font-medium dark:text-white`}
        >
          Password
        </label>
        <input
          type={viewPassword ? "text" : "password"}
          id="RegisterPassword"
          placeholder="Enter your password"
          className={`${styles.formInput} ${styles.formRegInput} ${
            errors.password ? `${styles.errorInput} mb-0` : `border-gray-300`
          } bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 my-0`}
          {...register("password", { required: "Password is required" })}
        />
        <div
          className={`${styles.passwordViewIcon} ${
            errors.password && "-mt-2.5"
          }`}
          onClick={handleToggleShowPassword}
        >
          {viewPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <AuthBtnSubmit name="Register" isSubmitting={isSubmitting} />
    </form>
  );
};

export default RegisterForm;
