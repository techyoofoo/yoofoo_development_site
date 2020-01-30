import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/styles.css';

export default class DistributedAgileAugmentationscreen extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const BASE_URL = '#'
        return (
            <div>
                <div>
                    <div className="col-md-12 col-sm-12">
                        <div className="row header">
                            <div className="col-md-3 col-sm-3">
                                <a href={BASE_URL}><img className="img-fluid logopdng" src="../../assets/yoofoo_logo.png" alt="logo"></img></a>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <Navbar color="light" light expand="md">
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret> SERVICES </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem href="/#/DistributedAgileAugmentation/"> DISTRIBUTED AGILE AUGMENTATION</DropdownItem>
                                                    <DropdownItem href="/#/TechnologyProjectConsulting/"> TECHNOLOGY PROJECT CONSULTING </DropdownItem>
                                                    <DropdownItem href="/#/DigitalTransformationStrategies/"> DIGITAL TRANSFORMATION STRATEGIES</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <NavItem>
                                                <NavLink href="/#/practice-areas/">PRACTICE AREAS</NavLink>
                                            </NavItem>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret> INDUSTRIES </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem href="/#/Bfsi/"> BFSI </DropdownItem>
                                                    <DropdownItem href="/#/LifeSciences/"> LIFE SCIENCES </DropdownItem>
                                                    <DropdownItem href="/#/HighTech/"> HIGH TECH </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <NavItem>
                                                <NavLink href="/#/ourdna/">OUR DNA</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="/#/articles-events/">ARTICLES & EVENTS</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="/#/about-us/">ABOUT</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="/#/blog/">BLOG</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="/#/contact-us/">CONTACT US</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 paddinglr ">
                        <div className="row daa">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <Slide top>
                                    <div className="About_hdr">SUCCESS
                                    <div className="About_hdr1"> THROUGH A  </div>
                                        <div className="About_hdr2">  PROVEN MODEL </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>

                    <div className="row innerContent">
                        <div>
                            <div className="headingAbout">Distributed <span className="headingAbout1">Agile Augmentation</span></div>
                            <div className="col-md-12">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 footerbg">
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
                                    <div className="col-md-5">Copyright © 2019 YooFoo All Rights Reserved</div>
                                    <div className="col-md-4">Follow Us : <a href={BASE_URL}><i className='fab fa-facebook-f'></i></a> <a href={BASE_URL}><i className='fab fa-linkedin-in'></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ScrollUpButton />
                    </div>
                </div>

            </div>
        )
    }
}