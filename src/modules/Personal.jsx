import React, { Component } from 'react';
import "./landing.css";
import { motion } from 'framer-motion';
import "./landing.css";
import _ from 'lodash';
import Project from './Project';
import projectListings from "./projects.js";

const stagger = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            when: "beforeChildren",
            staggerChildren: .25
        }
    }
}

class Personal extends Component{
    renderProjects() {
        return _.map(projectListings, ({title, description, link, _key}) => {
            return <Project title={title} _key={_key} link={link} description={description}/>
        });
    }

    render(){
        return(
            <div className="personal-background" id="personal">
                <br/>
                <div className="container">
                    <h1 className="faded-black">&lt; Projects /&gt;</h1>
                    <motion.div className="full-height" variants={stagger} initial="hidden" animate="visible">
                        {this.renderProjects()}
                    </motion.div>
                </div>
            </div>
        )
    }
}

export default Personal;