
import React, { Component } from 'react';



export default class PostsList extends Component {

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

        const {id} = this.props
        // console.log("fuck",id)
        let data = this.state.posts





        let data_id = data.map(function(item){
            if (item._id !== '') {
                return `${item.post_title}` ;
            } 
        });
        let data_content = data.map(function(item){
            if (item._id !== '') {
                return `${item.post_content}` ;
            } 
        });
        let data_pic = data.map(function(item){
            if (item._id !== '') {
                return `${item.post_pic_link}` ;
            } 
        });


        let index = data_id.indexOf(id)
        // console.log("index= ",index)
        



        return (
            <div>               
                <article>
                    <header className = "blank" ></header>
                    <div style={{textAlign:'center',
                        backgroundColor: '#e1d2c0',
                        marginRight: '100px',
                        marginLeft: '100px',
                        height: '600px',
                        backgroudcolor:'red'}}>

                        <h1 style={{textAlign:'center',margin: '10px',}} >{id}</h1>
                        <p style={{textAlign:'center',
                            color:'black'}} >{data_content[index]}</p>
                        <img height="512" 
                        src={data_pic[index]} >
                        </img>
                    </div>
                </article>
            </div>
        )
    }
}


