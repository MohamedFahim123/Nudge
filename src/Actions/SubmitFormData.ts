import { fetchApi } from "./FetchApi";

export interface resShape {
  message: string;
  data: { token: string };
  status: number;
  errors: { [key: string]: string };
}

export const submitFormData = async (
  formData: FormData,
  path: string,
  token?: string
): Promise<resShape> => {
  return await fetchApi<resShape>(path, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    cache: "no-cache",
  });
};
