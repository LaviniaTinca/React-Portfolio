/* eslint-disable react/prop-types */
import "./modal.scss";
import { motion } from "framer-motion";

const Modal = ({ isOpen, setIsOpen, demo }) => {
  const modalClass = isOpen ? "modal active" : "modal";
  if (!isOpen) return null;
  return (
    <>
      <motion.div
        className={modalClass}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
          <img src={`/${demo}`} alt="GIF demo" />{" "}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
