import { normalizeErrorMessage } from "@/utils/normalizeErrorMessage";
import { resShape } from "./SubmitFormData";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { FormAuthInputs } from "@/app/auth/utils/interfaces";
import { Toast } from "@/components/ToastContext/ToastContext";

export const handleResponse = (
  response: resShape,
  showToast: (message: string, type?: Toast["type"]) => void,
  handleErrors: (
    errors: Record<string, unknown>,
    showToast: (message: string, type?: Toast["type"]) => void,
    setError: UseFormSetError<FormAuthInputs>
  ) => void | unknown,
  reset: UseFormReset<FormAuthInputs>,
  setError: UseFormSetError<FormAuthInputs>
) => {
  if (response.status !== 200 && response.errors) {
    handleErrors(response.errors, showToast, setError);
    return;
  }

  if (response.status === 200) {
    showToast(response.message || "Process Successful", "success");
    reset();
  }
};

export const handleErrors = (
  errors: Record<string, unknown>,
  showToast: (message: string, type?: Toast["type"]) => void,
  setError: UseFormSetError<FormAuthInputs>
) => {
  if (!errors || Object.keys(errors).length === 0)
    return showToast("Form Errors", "error");

  Object.entries(errors).forEach(([field, error]) => {
    const errorMessage = normalizeErrorMessage(error);
    setError(field as keyof FormAuthInputs, {
      type: "server",
      message: errorMessage,
    });
    showToast(errorMessage, "error");
  });
};
