import React, { Component } from 'react';
import Likes from './Likes';
import './landing.css';

class Other extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-6 blue-background white-text">
                    <div className="container">
                        hi
                    </div>
                </div>
                <div className="col-md-6 red-background white-text">
                    <div className="container">
                        Some things I like
                        <Likes />
                    </div>
                </div>
            </div>
        )
    }
}

export default Other;