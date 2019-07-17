import React, { Component } from 'react';
import Card from './Card.jsx';
import "./landing.css";
import { motion } from 'framer-motion';
import resumeListings from "./resume.js";
import Job from './Job.jsx';
import _ from 'lodash';

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

class Work extends Component{
    renderJobs() {
        return _.map(resumeListings, ({title, duration, description, website, company, key}) => {
            return <Job title={title} key={key} duration={duration} description={description} website={website} company={company}/>
        });
    }

    render(){
        return(
            <div className="work-background" id="work">
                <div className="greg-container greg-full-height greg-center-everything">
                    <motion.div className=" row stagger" variants={stagger} initial="hidden" animate="visible">
                    {this.renderJobs()}
                    </motion.div>
                </div>
            </div>
        )
    }
}

export default Work;