export const normalizeErrorMessage = (error: unknown): string => {
    if (Array.isArray(error)) return error[0];
    if (error instanceof Error) return error.message;
    return String(error);
  };

