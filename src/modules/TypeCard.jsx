import React, { Component } from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";

class TypeCard extends Component {
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
        className="greg-card"
      >
        <Typical
          steps={[
            "Hi there! My name is Greg 👋",
            2500,
            "I'm a senior doubling in Computer Science and Marketing.",
            2500,
            "Let's build something together"
          ]}
          wrapper="h1"
        />
      </motion.div>
    );
  }
}
export default TypeCard;
