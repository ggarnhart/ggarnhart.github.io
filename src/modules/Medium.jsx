import React, { Component } from 'react';
import Article from './Article.jsx';
import "./landing.css";


class Medium extends Component {

    state = {posts: null}

    async componentDidMount(){
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@GGarnhart')
            .then((res) => res.json())
            .then((data) => {
                // Fillter the array
                const res = data.items //This is an array with the content. No feed, no info about author etc..
                const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
                this.setState({posts: posts});
                console.log(this.state)
            });
    }

    renderArticles = () => {
        if(this.state.posts != null){
            var articles = this.state.posts.map(post => {
                if(post.title != "Hello, Medium"){
                    return <Article title={post.title} img={post.thumbnail} link={post.link} key={post.link}/>
                }
            });
            return(articles)
        }
    }
    render(){
        return(
            <div className="medium-background">
                
                <div className="greg-full-height container greg-padding-bottom">
                    <br />
                    <h1 className="white-text">Posts</h1>
                    <div className="row">
                        {this.renderArticles()}
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Medium;