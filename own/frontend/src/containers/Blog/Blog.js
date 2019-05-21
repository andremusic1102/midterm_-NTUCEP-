import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Header from "./Header/Header";
import Lesson  from "./Lesson/Lesson";
import Communication  from "./Communication/Communication";
import Application  from "./Application/Application";





export default class Blog extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar__background">
                        <div className="row">
                            <div className="navbar__nav">
                                <div className="navbar__list">
                                    臺大創創學程
                                </div>
                                <div className="navbar__list">
                                    <span className="text-wrap">
                                        <NavLink to="/home">Home</NavLink>
                                    </span>
                                    <span className="text-wrap">
                                        <NavLink to="/activities">學程活動</NavLink>
                                    </span>
                                    <span className="text-wrap">
                                        <NavLink to="/lesson">課程規劃</NavLink>
                                    </span>
                                    <span className="text-wrap">
                                        <NavLink to="/application">申請學程</NavLink>
                                    </span>
                                    <span className="text-wrap">
                                        <NavLink to="/communication">新創交流吧</NavLink>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>         
                <header className='header'>   
                    <Switch>
                        {/* localhost:3000 一點開才不會跑掉 */}
                        <Route exact path="/" component={Header} />
                        <Route exact path="/activities" component={Posts} />
                        <Route path="/activities/:id?" component={PostRender} />
                        <Route exact path="/lesson"  component={Lesson} />
                        <Route exact path="/application"  component={Application} />
                        <Route path="/communication"  component={Communication} />
                        <Redirect from="/home" to="/"/>
                    </Switch>
                </header>
                        
                <hr/>
                
                <div className="section__body">
                    <img 
                        width="300"
                        height="190"
                        alt = "創創logo"
                        src="https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2017/09/Screen-Shot-2017-09-26-at-11.37.38-AM.png?fit=300%2C190&amp;ssl=1"
                        className="image" 
                        // sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <p>
                        National Taiwan University<br/>
                        Creativity and Entrepreneurship Program<br/>
                        TEL: 3366-1869 #55386<br/>
                        FAX: 3366-1462<br/>
                        MAIL: <a href="mailto: jmh0502@ntu.edu.tw">ntucep@ntu.edu.tw</a><br/>
                        Address: 台北市中正區思源街18號(台大水源校區卓越研究大樓 409室)
                    </p>
                </div>
            </div>

        );
    }
}
