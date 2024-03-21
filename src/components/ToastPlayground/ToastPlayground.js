import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext, VARIANT_OPTIONS } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const { activeToasts, addToast, closeToast } = React.useContext(ToastContext);
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleAddToast = (event) => {
    event.preventDefault();
    addToast(toastVariant, toastMessage);

    // clear fields
    setToastMessage("");
    setToastVariant(VARIANT_OPTIONS[0]);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleAddToast}>
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
      <ToastShelf toasts={activeToasts} closeToast={closeToast} />
    </div>
  );
}

export default ToastPlayground;
