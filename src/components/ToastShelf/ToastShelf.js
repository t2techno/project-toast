import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, closeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              id={toast.id}
              variant={toast.variant}
              closeToast={closeToast}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
