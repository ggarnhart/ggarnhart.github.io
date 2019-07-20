import React, { Component } from "react";
import { motion } from "framer-motion";

class Card extends Component {
  render() {
    var variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        variants={variants}
        className="greg-card white-background"
      >
        <h1 className="lighter no-margin-bottom">
          Hi, friend! My name is Greg.
        </h1>
        <p className="lighter">
          I'm a senior at <span className="bolder">William &amp; Mary</span>{" "}
          majoring in <span className="bolder">Computer Science</span> &amp;
          <span className="bolder"> Marketing</span>, with a concentration in{" "}
          <span className="bolder">Entrepreneurship</span>.
        </p>
        <div className="greg-flex-row">
          <motion.a
            className="greg-btn purple-background no-decoration"
            href="mailto:greg.garnhart12@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Want to chat?
          </motion.a>
        </div>
      </motion.div>
    );
  }
}
export default Card;
