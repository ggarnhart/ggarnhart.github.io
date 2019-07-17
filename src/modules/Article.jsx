import React, { Component } from 'react';
import { motion } from 'framer-motion';
import "./landing.css";


class Article extends Component {
    render(){
        return(
            <div className="col col-md-6" key={this.props.link}>
                <div className=" greg-article white-background">
                    <img className='greg-article-image' src={this.props.img} />
                    <div className="greg-inline">
                        <h4>{this.props.title}</h4>
                        <br />
                        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="medium-button" target="_blank" href={this.props.link}>Read on Medium <i className="fas fa-chevron-right"></i></motion.a>
                    </div>
                </div>      
            </div>
        )
    }
}

export default Article;