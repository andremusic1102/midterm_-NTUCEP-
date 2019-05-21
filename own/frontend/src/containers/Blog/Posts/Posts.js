import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Posts extends Component {

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



        // 寫死的ID
        // const postIDs = ["1", "2", "3", "4", "5"];
        const list_style ={
           margin:'30px',
           
        }


        const lists = postIDs.map((i, index) => (
            <li key={data} style={list_style}>
                <NavLink to={"/activities/" + i}>{i}</NavLink>
            </li>
        ));


        const style ={
            textAlign:'center',
            font: 'inherit',
            fontSize: 'xx-large',

        }


        return (           
            <div>
                
                <header className = "blank">
                </header>
                <header className = "header">
                    <div style={style}>
                        <h3 style={{color:"#a3816a",marginTop: '70px'}} >Click to view activities </h3>
                        <header className = "list__text">
                                {lists}
                        </header>
                    </div> 
                </header>
            </div>
        );
    }
}
