import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Card extends Component {
    render(){
        var variants = {
            hidden: {opacity: 0},
            visible: { opacity: 1 }
        }
        return(
            <motion.div initial="hidden" animate="visible" transition={{duration: 1.5}} variants={variants} className="gerg-card white-background">
                <h1 className="lighter no-margin-bottom">Hi, friend! My name is Greg.</h1>
                <p>I'm a senior at William & Mary majoring in Computer Science & Marketing.</p>
                <div className="greg-flex-row">
                    <motion.a className="btn purple-background" href="mailto:greg.garnhart12@gmail.com" target="_blank" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        Want to chat?
                    </motion.a>
                </div>
            </motion.div>
        )
    }
}
export default Card;