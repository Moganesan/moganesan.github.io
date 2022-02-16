import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted
    ? createPortal(children, document.querySelector("#modal"))
    : null;
};

export default Modal;
