import React, { Component } from 'react';
import "./landing.css";
import { motion } from 'framer-motion';
import "./landing.css";
import _ from 'lodash';

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};
class Project extends Component{
    
    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return(
            <motion.div variants={item} className="project" key={this.props._key}>
                <p className="no-margin"><span className="blue-project">class</span> {this.props.title}{'{'}</p>
                <p className="no-bottom-margin left-indent"><span className="blue-project">this</span>.detail = <span className="orange-project">"{this.props.description}"</span>;</p>
                <p className="no-top-margin left-indent"><span className="blue-project">this</span>.link = <a href={this.props.link} className="orange-project underline">"{this.props.link}";</a></p>
                <p className="no-top-margin">{'}'}</p>
            </motion.div>
        )
    }
}

export default Project;