import React from "react";
const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key == "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return [];
};

export default useEscapeKey;
