"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { handleErrors } from "@/Actions/HandleResponse";
import { resShape } from "@/Actions/SubmitFormData";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { useToast } from "@/components/ToastContext/ToastContext";
import { handleSubmissionError } from "@/utils/handleSubmitError";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  email: string;
  token: string;
};

export default function ChangeEmailForm({ email, token }: Props) {
  const { showToast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormAuthInputs>({
    defaultValues: {
      new_email: email,
    },
  });

  const onSubmit: SubmitHandler<FormAuthInputs> = async (
    data: FormAuthInputs
  ) => {
    try {
      const response = await fetchApi<resShape>("change-email", {
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
      router.push("/dashboard/profile/verify-email");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
    >
      <div className="col-span-2">
        <label htmlFor="new_email" className="label">
          Email
        </label>
        <input
          type="email"
          id="new_email"
          {...register("new_email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          className={`${
            errors.new_email && "errorInput"
          } input w-full bg-gray-50 outline-none border border-gray-300 focus:border-purple-600 text-sm rounded-lg p-2.5`}
          placeholder="Email"
        />
        {errors.new_email && (
          <span className="text-red-500 text-sm">
            {errors.new_email.message}
          </span>
        )}
      </div>
      <div className="col-span-2 mt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn  cursor-pointer bg-purple-600 text-white hover:text-purple-600"
        >
          {isSubmitting ? "Loading..." : "Change Email"}
        </button>
      </div>
    </form>
  );
}
