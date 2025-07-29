"use client";

import { createFormData } from "@/Actions/CreateFormData";
import { handleErrors, handleResponse } from "@/Actions/HandleResponse";
import { submitFormData } from "@/Actions/SubmitFormData";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { useToast } from "@/components/ToastContext/ToastContext";
import { Profile, useProfileStore } from "@/store/profile";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  user: Profile;
  token: string;
  setView: (view: "view" | "edit" | "password" | "email") => void;
};

export default function EditProfileForm({ user, token, setView }: Props) {
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [passportName, setPassportName] = useState<string>("");
  const { showToast } = useToast();
  const { getProfile } = useProfileStore();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>({
    defaultValues: {
      phone: user.phone,
      company: user.company,
      linkedin_profile: user.linkedin_profile,
    },
  });

  const onSubmit: SubmitHandler<FormAuthInputs> = async (
    data: FormAuthInputs
  ) => {
    const finalData: FormAuthInputs = {};
    Object.entries(data).filter(([key, value]) => {
      if (value && value.length) finalData[key as keyof FormAuthInputs] = value;
    });
    try {
      const formData = createFormData(finalData, [
        "profile_image",
        "phone",
        "company",
        "linkedin_profile",
        "passport_file",
      ]);

      const response = await submitFormData(formData, "update-profile", token);

      handleResponse(response, showToast, handleErrors, reset, setError);
      if (response.status === 200) {
        await getProfile();
        setView("view");
      }
    } catch (error) {
      handleSubmissionError(error, showToast);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
    >
      <div className={`col-span-2 md:col-span-1`}>
        <label
          htmlFor="profile_image"
          className={`block mb-1 text-sm font-medium text-black`}
        >
          Profile Image
        </label>
        <input
          id="profile_image"
          type="file"
          accept="image/*"
          {...register("profile_image")}
          className="w-full bg-gray-50 outline-none border border-gray-300 focus:border-[#250168] text-sm rounded-lg p-2.5"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setProfilePreview(URL.createObjectURL(file));
            }
          }}
        />
        {errors.profile_image && (
          <span className="text-sm text-[#ff2020]">
            {errors.profile_image.message}
          </span>
        )}
        {profilePreview && (
          <div className="w-60 h-60 mt-2 rounded-full overflow-hidden">
            <Image
              src={profilePreview ? profilePreview : user.profile_image}
              alt="Profile"
              width={100}
              height={100}
              className="object-contain bg-gray-200 shadow-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>
      <div className={`col-span-2 md:col-span-1`}>
        <label
          htmlFor="passport_file"
          className={`block mb-1 text-sm font-medium text-black`}
        >
          Passport File
        </label>
        <input
          id="passport_file"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.rar"
          {...register("passport_file")}
          className="w-full bg-gray-50 outline-none border border-gray-300 focus:border-[#250168] text-sm rounded-lg p-2.5"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPassportName(file.name);
            }
          }}
        />
        {errors.passport_file && (
          <span className="text-sm text-[#ff2020]">
            {errors.passport_file.message}
          </span>
        )}
        {passportName && (
          <div className="mt-2 text-sm text-gray-600">
            Selected: <span className="font-medium">{passportName}</span>
          </div>
        )}
      </div>

      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="phone"
          className={`block mb-1 text-sm font-medium text-black`}
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\d{11}$/,
              message: "Phone number must be 11 digits",
            },
          })}
          className={`input outline-none border-2 border-gray-300 focus:border-[#250168] ${
            errors.phone ? "errorInput" : ""
          }`}
          placeholder={user.phone}
        />
        {errors.phone && (
          <span className="text-[#ff2020]">{errors.phone.message}</span>
        )}
      </div>

      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="company"
          className={`block mb-1 text-sm font-medium text-black`}
        >
          Company Name
        </label>
        <input
          id="company"
          {...register("company", {
            required: "Company name is required",
            minLength: {
              value: 3,
              message: "Company name must be at least 3 characters",
            },
          })}
          className={`input outline-none border-2 border-gray-300 focus:border-[#250168] ${
            errors.company ? "errorInput" : ""
          }`}
          placeholder={user.company}
        />
        {errors.company && (
          <span className="text-[#ff2020]">{errors.company.message}</span>
        )}
      </div>
      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="linkedin_profile"
          className={`block mb-1 text-sm font-medium text-black`}
        >
          LinkedIn Profile
        </label>
        <input
          id="linkedin_profile"
          {...register("linkedin_profile", {
            required: "LinkedIn profile is required",
          })}
          className={`input outline-none border-2 border-gray-300 focus:border-[#250168] ${
            errors.linkedin_profile ? "errorInput" : ""
          }`}
          placeholder={user.linkedin_profile}
        />
        {errors.linkedin_profile && (
          <span className="text-[#ff2020]">
            {errors.linkedin_profile.message}
          </span>
        )}
      </div>

      <div className="col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn mt-5 cursor-pointer bg-[#250168] text-white hover:text-[#250168]"
        >
          {isSubmitting ? "Loading..." : "Save"}
        </button>
      </div>
    </form>
  );
}
