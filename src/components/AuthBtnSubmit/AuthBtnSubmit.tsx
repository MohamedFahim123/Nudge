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
      className={`${styles.authSubmit} ${name === "Register" && "col-span-2"} text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
    >
      {isSubmitting ? "Loading..." : name.toUpperCase()}
    </button>
  );
}
