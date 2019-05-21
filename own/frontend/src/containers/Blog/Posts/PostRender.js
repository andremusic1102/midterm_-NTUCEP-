import React, { Component } from "react";

import Post from "../../../components/Post/Post_2";
// import Post from "../../../components/Post/data";

export default class PostRender extends Component {



    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        fetch("http://localhost:4000/posts/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    posts: data,
                })
            })
            .catch(function (error){
                console.log(error);
            })
    };




    render() {

        let data = this.state.posts
        let data_id = data.map(function(item){
            if (item._id !== '') {
                return `${item.post_title}` ;
            } 
        });
        const postIDs = data_id;
        // const postIDs = ["1", "2", "3", "4", "5"];

        //  “Destructuring Assignment” 用法
        const { id } = this.props.match.params;
        // console.log("postrender",id)
        // 把右邊object assign 給左邊
        return id && postIDs.includes(id) ? (
            <Post id={id}/>
        ) : (
            <div>
                <header className = "header">
                    <h3>Error: Activities #{id} NOT FOUND</h3>
                </header>
            </div>
        );
    }
}
