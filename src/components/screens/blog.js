import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import '../styles/styles.css';
import Footerscreen from '../screens/footer';
import HeaderMenuscreen from '../screens/headermenu';

export default class Blogscreen extends Component {   
    render() {
        const BASE_URL = '#'
        return (
            <div>
                <div>
                <HeaderMenuscreen />
                    <div className="col-md-12 col-sm-12 paddinglr ">
                        <div className="row blogbg">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <Slide top>
                                    <div className="About_hdr">DIGITAL
                                    <div className="About_hdr1"> TRANSFORMATION </div>
                                        <div className="About_hdr2"> BLOG </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                        <div className="row aboutContent">
                            <div className="container">
                                <div className="heading1">Blog <span className="heading2"></span></div>
                                <div>
                                    <div>
                                        <div className="background-img">
                                            <div className="box">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <div className="content">
                                                    <h2><a href="http://www.yoofoo.com/blog/" target="_blank">http://www.yoofoo.com/blog/</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <Footerscreen />
                    <div>
                        <ScrollUpButton />
                    </div>
                </div>

            </div>
        )
    }
}