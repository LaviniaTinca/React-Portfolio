import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>LAVINIA ȚINCA</motion.h2>
          <motion.h1 variants={textVariants}>Software developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#c6ad8f",
                border: "none",
                fontWeight: "bold",
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              onClick={() => window.open("/cv.pdf")}
            >
              Download CV
            </motion.button>
            <motion.button
              variants={textVariants}
              // whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#c6ad8f",
                border: "none",
                fontWeight: "bold",
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Junior Software Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/333.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
