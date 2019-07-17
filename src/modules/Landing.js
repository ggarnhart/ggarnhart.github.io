import React, { Component } from 'react';
import Card from './Card.jsx';
import "./landing.css";
import { motion } from 'framer-motion';


class Landing extends Component{
    render(){
        return(
            <div className="landing-background">
                <div className="greg-container greg-center-everything greg-full-height">
                    <Card />
                    <br />
                    <br />
                    <motion.a animate={{y: [-10, 0, -10] }} href="#work" transition={{duration: 2, ease: "easeInOut", loop: Infinity}}><i className="fas fa-chevron-down white-font end-flex"></i></motion.a>
                </div>
            </div>
        )
    }
}

export default Landing;