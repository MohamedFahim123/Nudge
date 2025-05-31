import styles from "./LoaderStyles.module.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
