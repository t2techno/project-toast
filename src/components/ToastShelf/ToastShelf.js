import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf({ toasts, closeToast }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              id={toast.id}
              variant={toast.variant}
              closeToast={closeToast}
            >
              <VisuallyHidden>{toast.variant} -</VisuallyHidden>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
