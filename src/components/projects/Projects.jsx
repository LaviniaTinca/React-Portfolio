/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Modal from "../modal/Modal";
import Carousel from "../carousel/Carousel";
import { items } from "../../utils/data/dummyData";
import "./projects.scss";

const Single = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  const toggleModal = () => {
    {
      item.path === ""
        ? setIsModalOpen(!isModalOpen)
        : window.open(item.path, "_blank");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Carousel item={item} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <h4>{item.technologies}</h4>
            <p>{item.desc}</p>
            {(item.demo !== "" || item.path !== "") && (
              <motion.button
                onClick={toggleModal}
                whileHover={
                  !item.demo && !item.path
                    ? {}
                    : { scale: 1.1, transition: { duration: 0.5 } }
                }
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              >
                See Demo
              </motion.button>
            )}
          </motion.div>
        </div>
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          demo={item.demo}
        />
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="Portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
