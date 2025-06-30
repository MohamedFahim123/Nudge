export const handleSubmissionError = (
  error: unknown,
  showToast: (message: string, type: "success" | "error" | "info") => void
) => {
  console.error("Form submission failed:", error);
  showToast(
    error instanceof Error
      ? error.message
      : "An unexpected error occurred during submission",
    "error"
  );
};
