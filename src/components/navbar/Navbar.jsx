import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <Sidebar />
      <nav>
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Lavinia Ținca
          </motion.span>
          <div className="socials">
            <a
              href="https://github.com/LaviniaTinca?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="/github.png"
                alt="social icon"
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/lavinia-tinca-6b4231240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="/linkedin.png"
                alt="social icon"
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
