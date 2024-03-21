import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState("notice");
  const [toastMessage, setToastMessage] = React.useState("");
  const [activeToasts, setActiveToasts] = React.useState([]);

  const addToast = () => {
    const newToast = {
      id: Math.random(),
      variant: toastVariant,
      message: toastMessage,
    };
    setActiveToasts((toasts) => [...toasts, newToast]);
  };

  const closeEarly = (id) => {
    setActiveToasts((toasts) =>
      toasts.filter((val) => {
        return val.id != id;
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {activeToasts.map((toast) => {
        return <Toast key={toast.id} toast={toast} closeEarly={closeEarly} />;
      })}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(event) => {
                setToastMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, idx) => {
              const key = `variant_${variant}`;
              return (
                <label key={key} htmlFor={key}>
                  <input
                    id={key}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={toastVariant === variant}
                    onChange={(event) => setToastVariant(event.target.value)}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => addToast()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
