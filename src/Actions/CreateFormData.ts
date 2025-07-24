import { FormAuthInputs } from "@/app/auth/utils/interfaces";

export const createFormData = (
  data: FormAuthInputs,
  keysArr: Array<keyof FormAuthInputs>
): FormData => {
  const formData = new FormData();
  const formFields: Array<keyof FormAuthInputs> = keysArr;

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
