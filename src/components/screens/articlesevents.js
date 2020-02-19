import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import '../styles/styles.css';
import Footerscreen from '../screens/footer';
import HeaderMenuscreen from '../screens/headermenu';

export default class Articleseventsscreen extends Component {    
    render() {
        const BASE_URL = '#'
        return (
            <div>
                <div>
                <HeaderMenuscreen />
                    <div className="col-md-12 col-sm-12 paddinglr">

                        <div className="row articleseventsbg">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <Slide top>
                                    <div className="About_hdr">THOUGHT LEADERSHIP
                                    <span className="About_hdr1"> DIGITAL TRANSFORMATION </span>
                                        <span className="About_hdr2"> ARTICLES, </span>
                                        <span className="About_hdr3"> & MORE</span></div>
                                </Slide>
                            </div>
                        </div>

                        <div className="row innerContent">
                            <div>
                                <div className="headingAbout">Articles <span className="headingAbout1">Events</span></div>
                                <div className="col-md-12">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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