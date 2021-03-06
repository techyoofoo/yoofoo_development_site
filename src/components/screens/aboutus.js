import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import '../styles/styles.css';
import Footerscreen from '../screens/footer';
import HeaderMenuscreen from '../screens/headermenu';

export default class Aboutusscreen extends Component {
    render() {
        const BASE_URL = '#'
        return (
            <div>
                <div>
                    <HeaderMenuscreen />
                    <div className="col-md-12 col-sm-12 paddinglr ">
                        <div className="row aboutbg">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <Slide top>
                                    <div className="About_hdr"><span className="About_hdr">A Respected World </span>
                                        Leader in the Provision of
                                 <span className="About_hdr2"> Technology,</span>
                                        <span className="About_hdr3"> Software, and Data Solutions</span></div>
                                </Slide>
                            </div>
                        </div>
                        <div className="row aboutContent">
                            <div>
                                <div className="headingAbout">About <span className="headingAbout1">Us</span></div>
                                <div className="col-md-12">
                                    <p>YooFoo is an international information technology company that specializes in creating and maintaining innovative information technology, data,
                                        and software solutions for a wide range of needs in both private business and public/governmental organization environments. YooFoo is a minority-owned company which was founded in 2010.
                                        YooFoo's primary aim is to use technical skills and experience to make a difference in people and businesses.</p>
                                    <p>
                                        YooFoo has its offices in the US (Headquarters) and international office in India (International).
                                        The international office is occupied by the YooFoo Technologies India Private Limited.
                                        Yoofoo Technologies India Private Limited was registered in September 2014.
                                        Their registered address on file is Vatika Business Centre, 6th Floor, Omega-C Block, Divyasree Building, Hitech City Rd, Kondapur, Hyderabad - 500081, Telangana, India.
                                        Plans are underway to establish more international offices in Thailand, and opportunities in other regions are currently being explored.
                                        </p>
                                </div>
                                <div className="col-md-12 topding">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="floatleft iconbox"><i className="fa fa-eye vision" aria-hidden="true"></i></div>
                                                <div className="floatleft heading3">Vision</div>
                                            </div>
                                            <div>
                                                <p>
                                                    YooFoo's vision is to be a respected world leader in the provision of technology,
                                                    software and data solutions for competitive business outcomes, through increased cost efficiency, and enhanced quality management processes.
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="floatleft iconbox"><i className="fa fa-podcast vision" aria-hidden="true"></i></div>
                                                <div className="floatleft heading3">Mission</div>
                                            </div>
                                            <div>
                                                <p>YooFoo's mission is to utilize a unique business model with flexibility to provide clients with competitive, expert,
                                               focused, & results-driven teams; to deliver the most effective, efficient, technology solutions.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="row">
                                                <div className="floatleft iconbox"><i className="fa fa-life-ring vision" aria-hidden="true"></i></div>
                                                <div className="floatleft heading3">Primary Objectives</div>
                                            </div>
                                            <div className="liststyled">
                                                <ul>
                                                    <li><i className="fa fa-check okicon" aria-hidden="true"></i> To help companies, especially start-ups, to leverage their IT/IS resources for better business outcomes</li>
                                                    <li><i className="fa fa-check okicon" aria-hidden="true"></i> To implement interoperable decision support systems that enhance patient care services, patient safety, mitigate medical errors, and promote continuity of care at the point of care</li>
                                                    <li><i className="fa fa-check okicon" aria-hidden="true"></i> To conduct/perform research and analytics</li>
                                                </ul>
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