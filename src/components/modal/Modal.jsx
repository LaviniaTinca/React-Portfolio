/* eslint-disable react/prop-types */
import "./modal.scss";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isOpen, setIsOpen, demo }) => {
  const modalClass = isOpen ? "modal active" : "modal";
  const closeModal = () => {
    setIsOpen(false);
  };
  if (!isOpen) return null;
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={modalClass}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 1 }}
        >
          <div className="modal-content">
            <motion.span className="close" onClick={closeModal}>
              {/* <motion.span className="close" onClick={() => setIsOpen(false)}> */}
              &times;
            </motion.span>
            <img src={`/${demo}`} alt="GIF demo" />{" "}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
