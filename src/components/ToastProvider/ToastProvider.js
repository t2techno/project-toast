import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [activeToasts, setActiveToasts] = React.useState([]);

  const addToast = React.useCallback((variant, message) => {
    const newToast = {
      id: Math.random(),
      variant: variant,
      message: message,
    };
    setActiveToasts((toasts) => [...toasts, newToast]);
  }, []);

  const closeToast = React.useCallback((id) => {
    setActiveToasts((toasts) =>
      toasts.filter((val) => {
        return val.id != id;
      })
    );
  }, []);

  const resetToasts = React.useCallback(() => {
    setActiveToasts([]);
  }, []);

  useEscapeKey(resetToasts);

  const providerValue = React.useMemo(() => {
    return { activeToasts, addToast, closeToast };
  }, [activeToasts]);
  return (
    <ToastContext.Provider value={providerValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
