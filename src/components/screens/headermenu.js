
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
                                            <DropdownToggle nav caret> Services </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem href="/#/"> Distributed Agile Augmentation</DropdownItem>
                                                <DropdownItem href="/#/"> Technology Project Consulting </DropdownItem>
                                                <DropdownItem href="/#/"> Digital Transformation Strategies</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <NavItem>
                                            <NavLink href="/#/">Practice Areas</NavLink>
                                        </NavItem>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret> Industries </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem href="/#/"> BFSI </DropdownItem>
                                                <DropdownItem href="/#/"> Life Sciences </DropdownItem>
                                                <DropdownItem href="/#/"> High Tech </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        {/* <NavItem>
                                            <NavLink href="/#/ourdna/">OUR DNA</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/#/articles-events/">ARTICLES & EVENTS</NavLink>
                                        </NavItem> */}
                                        <NavItem>
                                            <NavLink href="/#/">About</NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink href="/#/blog/">BLOG</NavLink>
                                        </NavItem> */}
                                        <NavItem>
                                            <NavLink href="/#/contact-us/" className="menuactive">Contact Us</NavLink>
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