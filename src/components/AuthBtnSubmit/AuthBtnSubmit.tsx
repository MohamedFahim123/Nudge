import styles from "./authBtnSubmit.module.css";

interface AuthBtnSubmitProps {
  name: string;
  isSubmitting: boolean;
}

export default function AuthBtnSubmit({
  name,
  isSubmitting,
}: AuthBtnSubmitProps) {
  return (
    <button
      disabled={isSubmitting}
      className={`${styles.authSubmit} text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
    >
      {name.toUpperCase()}
      {isSubmitting ? "..." : ""}
    </button>
  );
}
