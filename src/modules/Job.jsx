import React, { Component } from 'react';
import { motion } from 'framer-motion';
import "./landing.css";

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

class Job extends Component{
    render(){
        return(
            <motion.div key={this.props.key} variants={item} className="item job-card white-background">
                <h1 className="lighter no-bottom-margin">{this.props.title}</h1>
                <h2 className="lighter no-bottom-margin no-top-margin">{this.props.duration}, <a target="_blank" href={this.props.website} className="job-link">{this.props.company}</a></h2>
                <p className="no-top-margin">{this.props.description}</p>
            </motion.div>
        )
    }
}

export default Job;