
import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/styles.css';

export default class HeaderMenuscreen extends Component {
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
                                        {/* <NavItem>
                                            <NavLink href="/#/ourdna/">OUR DNA</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/#/articles-events/">ARTICLES & EVENTS</NavLink>
                                        </NavItem> */}
                                        <NavItem>
                                            <NavLink href="/#/about-us/">ABOUT</NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink href="/#/blog/">BLOG</NavLink>
                                        </NavItem> */}
                                        <NavItem>
                                            <NavLink href="/#/contact-us/" className="menuactive">CONTACT US</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}