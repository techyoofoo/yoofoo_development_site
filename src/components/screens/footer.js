
import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import '../styles/styles.css';

export default class Footerscreen extends Component {

    render() {
        const BASE_URL = '#'
        return (
            <div>
                <div className="footerbg">
                    <div className="footerlogo"> <img className="img-fluid" src="../../assets/logo-yoofoo-gray-scale.png" alt="Logo"></img></div>
                    <div className="col-md-12 col-sm-12">
                        <Zoom>
                            <div className="caretojoin">Care To Join Us?</div>
                        </Zoom>
                        <Fade top>
                            <div className="subhdr_blue">YooFoo is seeking passionate individuals for the following posistions:</div>
                        </Fade>
                        <Slide bottom>
                            <div className="subhdr_wt">Software Developers (USA, INDIA)</div>
                            <div className="subhdr_wt">Administrative Assistant (USA)</div>
                        </Slide>
                        <Bounce>
                            <div className="applyNow"><a href={BASE_URL}> APPLY NOW</a></div>
                        </Bounce>
                        <div className="footer_br"></div>
                        <div className="footer_br1"></div>

                        <Fade left>
                            <div className="subhdr_wt1">YooFoo is an international company that specializes in creating and <br></br>
                                maintaining innovative information technology solutions.</div>
                        </Fade>
                    </div>
                    <div className="col-md-12">
                        <Fade top>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-8">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" href={BASE_URL}>HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={BASE_URL}>SERVICES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={BASE_URL}>PRICING</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={BASE_URL}>ABOUT</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={BASE_URL}>CAREERS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={BASE_URL}>BLOG</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={BASE_URL}>CONTACT US</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="footer_br"></div>
                    <div className="footer_br1"></div>
                    <div className="col-md-12">
                        <div className="row footercopy">
                            <div className="col-md-3"></div>
                            <div className="col-md-5">Copyright © {new Date().getFullYear()} YooFoo All Rights Reserved</div>
                            <div className="col-md-4">Follow Us :
                                <a href="https://www.facebook.com/pages/Yoofoo/258692607528105" target="_blank"><i className='fab fa-facebook-f'></i></a>
                                <a href="https://www.linkedin.com/company/yoofoo-com-llc" target="_blank"><i className='fab fa-linkedin-in'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}