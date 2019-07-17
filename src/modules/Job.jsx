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
            <motion.div key={this.props.key} variants={item} className="col-md-3 greg-margin-bottom greg-margin-top">
                <div className="job-card white-background">
                    <h3 className="lighter no-bottom-margin">{this.props.title}</h3>
                    <h6 className="lighter no-bottom-margin no-top-margin">{this.props.duration}, <a target="_blank" href={this.props.website} className="job-link">{this.props.company}</a></h6>
                    <p className="no-top-margin">{this.props.description}</p>
                </div>
            </motion.div>
        )
    }
}

export default Job;