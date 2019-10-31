import React, { Component } from "react";
import Card from "./Card.jsx";
import TypeCard from "./TypeCard";
import "./landing.css";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { Container, Row, Col } from "react-bootstrap";

class Landing extends Component {
  render() {
    var variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
    return (
      // <div className="landing-background">
      //   <div className="greg-container greg-center-everything greg-full-height">
      //     <TypeCard />
      //     {/* <Card /> */}
      //     <br />
      //     <br />
      //     <motion.a
      //       animate={{ y: [-10, 0, -10] }}
      //       href="#work"
      //       transition={{ duration: 2, ease: "easeInOut", loop: Infinity }}
      //     >
      //       <i className="fas fa-chevron-down white-font end-flex"></i>
      //     </motion.a>
      //   </div>
      // </div>
      <Container>
        <Row className="center-text type-landing greg-center-everything greg-full-height">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
            variants={variants}
          >
            <Typical
              steps={[
                "",
                3000,
                'With billions invested in "nice to haves"',
                2000,
                'One must ask, "are we using our resources wisely?"',
                2000,
                "Let's make something worthwhile",
                2500,
                "What will you ",
                400,
                "What will we build?"
              ]}
              wrapper="h1"
            />
          </motion.div>
          <br />

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 28, duration: 1.5 }}
            variants={variants}
          >
            <br />
            <h3 className="lighter">There's More to Discover.</h3>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 30, duration: 1.5 }}
            variants={variants}
          >
            <br />
            <p className="lighter">Scroll to meet Greg.</p>
          </motion.div>
          {/* <motion.a
            animate={{ y: [-10, 0, -10] }}
            href="#work"
            transition={{ duration: 2, ease: "easeInOut", loop: Infinity }}
          >
            <i className="fas fa-chevron-down dark-font"></i>
          </motion.a> */}
        </Row>
      </Container>
    );
  }
}

export default Landing;
