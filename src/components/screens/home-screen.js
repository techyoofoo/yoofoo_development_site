import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Flip, Slide, Bounce, LightSpeed } from 'react-reveal';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactTooltip from 'react-tooltip';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../styles/fontstyle.css';
import '../styles/styles.css';
import '../styles/slidernews.css';
import Footerscreen from '../screens/footer';

const content = [
    {
        title: 'Digital Transformation Solutions',
        description:
            'Through Distributed Agile Team',
        image: '../assets/banner1.jpg',
        button: "Read More",

    },
    {
        title: 'Software, and Data Solutions',
        description:
            'A Respected World Leader in the Provision of Technology',
        image: '../assets/about.jpg',
        botton: 'About Us',
        button: "About Us",

    },
    {
        title: 'Our Software Development Services Transform',
        description:
            'Development',
        image: '../assets/banner2.jpg',
        button: "Read More",

    },
    {
        title: 'Success Through a Proven Model',
        description:
            'Sucess',
        image: '../assets/contactus.jpg',
        button: "Contact Us",
    }
];

const Industry_Expertise = [
    {
        Industry_title: 'BFSI',
        Industry_title1: 'BANKS, FINANCIAL SERVICES AND INSURANCE',
        Industry_des1_1: ' Cras justo odio',
        Industry_des1_2: '42',
        Industry_des1_3: 'Dapibus ac facilisis in',
        Industry_des1_4: '1000+',
        Industry_des1_5: ' Morbi leo risus',
        Industry_des1_6: '240+',
        Industry_logo: '../assets/chalkcouture.png',

    },
    {
        Industry_title: 'LIFE SCIENCES',
        Industry_title1: 'BIOTECH, DIAGNOSTICS AND WELLNESS',
        Industry_des1_1: ' Historical Clients',
        Industry_des1_2: '31',
        Industry_des1_3: 'Delivered Projects ',
        Industry_des1_4: '700+',
        Industry_des1_5: ' Vertically Aligned Consultants',
        Industry_des1_6: '140+',
        Industry_logo: '../assets/chalkcouture.png',

    },
    {
        Industry_title: 'HIGH TECH',
        Industry_title1: 'SILICON VALLEY TO SILICON FOREST',
        Industry_des1_1: ' Historical Clients ',
        Industry_des1_2: '17',
        Industry_des1_3: 'Delivered Projects',
        Industry_des1_4: '350+',
        Industry_des1_5: ' Vertically Aligned Consultants',
        Industry_des1_6: '120+',
        Industry_logo: '../assets/chalkcouture.png',

    },
];

const content_news = [
    {
        title: 'QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT',
        description: 'QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT, MAY 29, 2019 , BY JUSTINE BATEMAN',
        description1: 'Strong collaboration and communication with your development partners is very important to the Agile process. But remember that in your role there are some important quality assurance ...',
        button: "Read More...",

    },
    {
        title: 'QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT',
        description: 'QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT, MAY 29, 2019 , BY JUSTINE BATEMAN',
        description1: 'Strong collaboration and communication with your development partners is very important to the Agile process. But remember that in your role there are some important quality assurance ...',
        button: "Read More...",

    },
    {
        title: 'QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT',
        description: 'QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT, MAY 29, 2019 , BY JUSTINE BATEMAN',
        description1: 'Strong collaboration and communication with your development partners is very important to the Agile process. But remember that in your role there are some important quality assurance ...',
        button: "Read More...",

    }
];

const content_Testimonials = [
    {
        image1: '../assets/jeffb.png',
        title: '2015 Global Big Data Competition',
        description: '- Brad Stone',
        company: 'By Global Data Utah',
        description1: 'Jeff Boonmee, CEO at YooFoo.com, is awarded an Honorable Mention for providing leadership in more than one region (Greater India and South East Asia). Participation in the Greater India region ranked second overall – only beat by the Intermountain West region.',
        button: "Read More...",

    },
    {
        image1: '../assets/danielzaldivar.png',
        title: 'Amazing Partner!',
        description: '- Vince Romney',
        company: 'By Foreveegreen International',
        description1: 'YooFoo has always been a great development partner and accommodates the rigors of the direct-selling industry with great efficiency. Definitely recommend YooFoo as a great asset to any development needs',
        button: "Read More...",

    },
    {
        image1: '../assets/jeff1.png',
        title: 'Thanks!',
        description: '- Daniel Zaldivar',
        company: 'By Unicity International',
        description1: '...very knowledgable on technology matters. Wonderful team of developers fluent in many different programming languages and technologies but are able to makes you feel confortable when discussing serious complex technologies. It is a pleasure to work and associate with YooFoo.',
        button: "Read More...",

    }
];

export default class Homescreen extends Component {
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
                            <div className="col-md-3 col-sm-12">
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
                                                <NavLink href="/#/contact-us/" activeclassname="selected">
                                                    CONTACT US
                                            </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 paddinglr">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <Slider autoplay={2000} className="slider-wrapper">
                                    {content.map((item, index) => (
                                        <div
                                            key={index}
                                            className="slider-content"
                                            style={{ background: `url('${item.image}') no-repeat center center` }}
                                            autoplay={5}
                                        >
                                            <div className="inner">
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                                <button>{item.button}</button>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 aboutusbg">
                                <div>
                                    <div className="float_left">
                                        <a href={BASE_URL} className="" data-for='soclose' data-tip='1'>
                                            <Fade left>
                                                <div className="roundedbox1">
                                                    <div className="clientNo">43</div>
                                                    <div className="clientNo1">Active <br></br> Clients</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Active Clients </h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />


                                        <a href={BASE_URL} className="" data-for='soclose1' data-tip='1'>
                                            <Fade top>
                                                <div className="roundedbox1">
                                                    <div className="clientNo4">2000+</div>
                                                    <div className="clientNo5">Delivered <br></br> Projects</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose1' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Delivered Projects </h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />


                                        <a href={BASE_URL} className="" data-for='soclose2' data-tip='1'>
                                            <Fade bottom>
                                                <div className="roundedbox">
                                                    <div className="clientNo2">2000+</div>
                                                    <div className="clientNo3">Staff <br></br> Attrition</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose2' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Staff Attrition</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />

                                    </div>
                                    <div className="float_left boxpdng">

                                        <a href={BASE_URL} className="" data-for='soclose3' data-tip='1'>
                                            <Fade top>
                                                <div className="roundedbox">
                                                    <div className="clientNo2">6+</div>
                                                    <div className="clientNo3">Timezones <br></br> Covered</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose3' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Timezones Covered</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />

                                        <a href={BASE_URL} className="" data-for='soclose4' data-tip='1'>
                                            <Fade left>
                                                <div className="roundedbox3">
                                                    <div className="clientNo6">98%</div>
                                                    <div className="clientNo7">Client <br></br> Retention</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose4' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Client Retention</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />

                                        <a href={BASE_URL} className="" data-for='soclose5' data-tip='1'>
                                            <Fade bottom>
                                                <div className="roundedbox2">
                                                    <div className="clientNo2">100+</div>
                                                    <div className="clientNo3">Distributed  <br></br> Teams</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose5' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Distributed Teams</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />


                                    </div>
                                    <div className="float_left boxpdng1">

                                        <a href={BASE_URL} className="" data-for='soclose6' data-tip='1'>
                                            <Fade right>
                                                <div className="roundedbox2">
                                                    <div className="clientNo2">600+</div>
                                                    <div className="clientNo3">Full Time  <br></br> Engineering Staff</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose6' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Full Time Engineering Staff</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />

                                        <a href={BASE_URL} className="" data-for='soclose7' data-tip='1'>
                                            <Fade bottom>
                                                <div className="roundedbox circle">
                                                    <div className="clientNo2">3</div>
                                                    <div className="clientNo3">Countries of <br></br> Operation</div>
                                                </div>
                                            </Fade>
                                        </a>
                                        <ReactTooltip id='soclose7' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Countries of Operation</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <Tabs>
                                    <TabList>
                                        <Tab>
                                            <Slide top>
                                                <div className="heading1">About <span className="heading2">Us</span></div>
                                            </Slide>
                                        </Tab>
                                        <Tab>
                                            <Slide bottom>
                                                <div className="heading1">Contact <span className="heading2">Us</span></div>
                                            </Slide>
                                        </Tab>
                                    </TabList>

                                    <TabPanel>


                                        <Fade right>
                                            <div className="paragraphblue">A respected world leader in the provision of technology, software, and data solutions</div>
                                            <div className="paragraphgray">YooFoo is an international information technology company that specializes in creating and maintaining innovative information technology, data,
                            and software solutions for a wide range of needs in both private business and public/governmental organization environments.</div>
                                            <div className="explore"><a href="/#/about-us/">Read More About Us</a></div>
                                        </Fade>
                                    </TabPanel>
                                    <TabPanel>
                                        <Fade right>
                                            <div className="col-md-10 col-sm-12 getintbg1">
                                                <div className="contactsubh">Our team is ready to answer your queries</div>

                                                <div className="form-group formpdng">

                                                    <input type="name" className="form-control" placeholder="Name" name="c_name" required="" aria-required="true" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="name" className="form-control" placeholder="Phone" name="c_name" required="" aria-required="true" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="name" className="form-control" placeholder="Email" name="c_name" required="" aria-required="true" />
                                                </div>

                                                <div className="form-group">
                                                    <textarea type="text" className="form-control" placeholder="Message" required="" aria-required="true"></textarea>
                                                </div>
                                                <button type="submit" className="submitbtn">SUBMIT</button>
                                            </div>
                                        </Fade>
                                    </TabPanel>
                                </Tabs>


                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="container-fluid content_mrg">
                            <Fade top>
                                <div className="row">
                                    <div className="col-md-3 whatwedo_hdr">What We Do</div>
                                    <div className="col-md-9 whatwedo_hd1">We build to your business needs, asking questions before providing answers.</div>
                                </div>
                            </Fade>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 Design_tpdng">
                                            <Fade left>
                                                <div className="card">
                                                    <h5 className="card-title cardhdr"><div className="lineblue"></div> Design</h5>
                                                    <img className="" src="../../assets/design.png" alt="design" />
                                                    <div className="card-body">
                                                        <p className="card-text cardhdr">Plug into years of experience in architecture and visual design in building positive experiences for businesses and end-users alike.</p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>

                                        <div className="col-md-6 Build_tpdng">
                                            <Fade top>
                                                <div className="card">
                                                    <h5 className="card-title cardhdr"><div className="lineblue"></div> Build</h5>
                                                    <img className="" src="../../assets/build.png" alt="build"></img>
                                                    <div className="card-body">
                                                        <p className="card-text cardhdr">Awaken software and applications, join your needs, ideas, and visions with our lean and agile process.</p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                    <Fade left>
                                        <div className="col-md-12 whatwedo_hdrsub">FROM DISCOVERY TO DEPLOYMENT, REALIZE YOUR PERFECT PRODUCT WITH SOFTWARE DEVELOPMENT CONSULTING </div>
                                    </Fade>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <Fade right>
                                        <div className="col-md-12 whatwedo_hdrsub1">WE ARE GLOBAL, YOU ARE TOO WITH DISTRIBUTED AGILE SOFTWARE DEVELOPMENT. </div>
                                    </Fade>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 Scale_tpdng">
                                            <Fade bottom>
                                                <div className="card">
                                                    <h5 className="card-title cardhdr"><div className="lineblue"></div> Scale</h5>
                                                    <img className="" src="../../assets/scale.png" alt="scale"></img>
                                                    <div className="card-body">
                                                        <p className="card-text cardhdr">Take advantange of our scalable solutions and trusted architecture to support your critical business operations.</p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <Fade right>
                                                <div className="card Secure_tpdng">
                                                    <h5 className="card-title cardhdr"><div className="lineblue"></div> Secure</h5>
                                                    <img className="" src="../../assets/secure.png" alt="secure"></img>
                                                    <div className="card-body">
                                                        <p className="card-text cardhdr">Security is a fundamental part in our development process. It is always our goal to provide secure solutuions that are user-friendly.</p>

                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="container-fluid content_mrg">
                            <Fade top>
                                <div className="row">
                                    <div className="col-md-3 whatwedo_hdr">Our Services</div>
                                    <div className="col-md-9 whatwedo_hd1">Scale up development and complete that new initiative without a long-term resource commitment.</div>
                                </div>
                            </Fade>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="row">
                                        <div className="cardpdng">
                                            <LightSpeed left>
                                                <img className="" src="../../assets/ourservice.jpg" alt="ourservice"></img>
                                            </LightSpeed>
                                        </div>
                                        <div className="cardpdng">
                                            <Fade left>
                                                <div className="row">
                                                    <div className="col-md-1 cardbr">01</div>
                                                    <div className="col-md-10">
                                                        <div className="card cardbr1">
                                                            <div><i className="fa fa-laptop icon1"></i></div>
                                                            <h5 className="card-title cardhdr">Web Development</h5>
                                                            <p>Software and web development and integration A business or enterprise
                                        website presents your business scope in detail to the viewers and promotes your objectives in...</p>
                                                            <div><a href={BASE_URL}>Read More <i className="fa fa-angle-double-right readmore" aria-hidden="true"></i></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>

                                        <div className="cardpdng">
                                            <Fade bottom>
                                                <div className="row">
                                                    <div className="col-md-1 cardbr">02</div>
                                                    <div className="col-md-10">
                                                        <div className="card cardbr1">
                                                            <div><i className="fa fa-mobile icon1"></i></div>
                                                            <h5 className="card-title cardhdr">Mobile Development</h5>
                                                            <p>Going mobile ? We got you covered. For your app to succeed, you need a smart business strategy,
                                                a killer UI/UX design, and a talented mobile development team...</p>
                                                            <div><a href={BASE_URL}>Read More <i className="fa fa-angle-double-right readmore" aria-hidden="true"></i></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="cardpdng">
                                        <Flip>
                                            <img className="" src="../../assets/ourservice1.jpg" alt="ourservice1"></img>
                                        </Flip>
                                    </div>
                                    <div className="cardpdng">
                                        <Fade top>
                                            <div className="row">
                                                <div className="col-md-1 cardbr">01</div>
                                                <div className="col-md-10">
                                                    <div className="card cardbr1">
                                                        <div><i className="fa fa-cog icon1" aria-hidden="true"></i></div>
                                                        <h5 className="card-title cardhdr">Software Architecting & Engineering</h5>
                                                        <p>Tired of that house of cards system ? Our top architect and engineering team...</p>
                                                        <div><a href={BASE_URL}>Read More <i className="fa fa-angle-double-right readmore" aria-hidden="true"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="cardpdng">
                                        <Fade right>
                                            <div className="row">
                                                <div className="col-md-1 cardbr">02</div>
                                                <div className="col-md-10">
                                                    <div className="card cardbr1">
                                                        <div><i className="fa fa-database icon1" aria-hidden="true"></i></div>
                                                        <h5 className="card-title cardhdr">Data Services</h5>
                                                        <p>Do more with your data than just analytics. Look into the future with big data and infomatics.
                                                    Most companies have experienced the frustration of... </p>
                                                        <div><a href={BASE_URL}>Read More <i className="fa fa-angle-double-right readmore" aria-hidden="true"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="cardpdng">
                                        <LightSpeed right>
                                            <img className="" src="../../assets/ourservice2.jpg" alt="ourservice2"></img>
                                        </LightSpeed>
                                    </div>
                                    <div className="cardpdng">
                                        <Fade right>
                                            <div className="row">
                                                <div className="col-md-1 cardbr">01</div>
                                                <div className="col-md-10">
                                                    <div className="card cardbr1">
                                                        <div><i className="fa icon1">&#xf03e;</i></div>
                                                        <h5 className="card-title cardhdr">Design & Creatives</h5>
                                                        <p>Looking for some of the most creative minds? Well, they are here.
                                                    For those who have been hiding under the hood and never took a dive into the capacity of... </p>
                                                        <div><a href={BASE_URL}>Read More <i className="fa fa-angle-double-right readmore" aria-hidden="true"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="cardpdng">
                                        <Fade bottom>
                                            <div className="row">
                                                <div className="col-md-1 cardbr">02</div>
                                                <div className="col-md-10">
                                                    <div className="card cardbr1">
                                                        <div><i className="fa icon1">&#xf201;</i></div>
                                                        <h5 className="card-title cardhdr">Testing & Quality Analysis</h5>
                                                        <p>Comprehensive software testing & QA resources. Software and IT organizations wanting
                                                    to ensure high quality releases need to incorporate...</p>
                                                        <div><a href={BASE_URL}>Read More <i className="fa fa-angle-double-right readmore" aria-hidden="true"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="container-fluid">
                            <div className="row centerpdng">
                                <div className="col-md-12 testimonialsbg">
                                    <div className="row">
                                        <Flip left>
                                            <div className="col-md-5 ">
                                                <div className="row">                                                    
                                                    <div className="col-md-7">
                                                        <div className="heading1">Testimonials</div>
                                                        <div className="testimonial_sub">See What People are Saying</div>
                                                    </div>
                                                </div>
                                                <div className="row testimonialspanel">
                                                    <div className="col-md-12">
                                                        <Slider autoplay={5000} className="slider-wrapper2">
                                                            {content_Testimonials.map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="slider-content2"
                                                                    //  style={{ background: `url('${item.image1}') no-repeat center center` }}
                                                                    autoplay={5}
                                                                >
                                                                    <div className="inner2">
                                                                        <p className="profileimg"> <img className="rounded-circle" alt="profile" src={item.image1} /></p>
                                                                        <h1 className="testimonial_hdr1">{item.title}</h1>
                                                                        <p className="testimonial_hdr2">{item.description}</p>
                                                                        <p className="testimonial_hdr2">{item.company}</p>
                                                                        <p className="testimonial_p">{item.description1}</p>
                                                                        <button className="buttonReadm">{item.button}</button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                        </Flip>
                                        <div className="col-md-2"></div>
                                        <Flip right>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-12"> <div className="heading1 hdr1_pdng">Trusted By Industry Leaders</div></div>
                                                </div>
                                                <div className="row trustedbyindpanel">
                                                    <div className="col-sm-12">
                                                        <div className="media media_pdng">
                                                            <div className="media-body">
                                                                <marquee behavior="scroll" direction="up" className="marqueepdng" scrolldelay="100">
                                                                    <div className="chalkcoutureicon"> <img className="" src="../../assets/chalkcouture.png" alt="profile"></img></div>
                                                                    <div className="chalkcoutureicon"> <img className="" src="../../assets/chalkcouture.png" alt="profile"></img></div>
                                                                    <div className="chalkcoutureicon"> <img className="" src="../../assets/chalkcouture.png" alt="profile"></img></div>
                                                                </marquee>


                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Flip>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 industryExbg">
                        <div className="row">
                            <Fade left>
                                <div className="col-md-5 col-sm-12 trustDivpdng">
                                    <div className="row">
                                        <div className="col-md-1 col-sm-12"></div>
                                        <div className="col-md-11 col-sm-12">
                                            <div className="trustedbyind_hdr">Industry Expertise</div>
                                            <Slider autoplay={5000} className="slider-wrapper1">
                                                {Industry_Expertise.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="slider-content1"
                                                        autoplay={5}
                                                    >
                                                        <h1 className="Industry_subh1">{item.Industry_title}</h1>
                                                        <h1 className="Industry_subh2">{item.Industry_title1}</h1>
                                                        <div className="inner1">
                                                            <div className="row Industry_row">
                                                                <div className="Industry_div"><p className="Industry_des1_1">{item.Industry_des1_1}</p></div>
                                                                <div className="Industry_div1"><p className="Industry_des1_2">{item.Industry_des1_2}</p></div>
                                                                <div className="Industry_div"><p className="Industry_des1_3">{item.Industry_des1_3}</p></div>
                                                                <div className="Industry_div1"><p className="Industry_des1_4">{item.Industry_des1_4}</p></div>
                                                                <div className="Industry_div"><p className="Industry_des1_5">{item.Industry_des1_5}</p></div>
                                                                <div className="Industry_div1"><p className="Industry_des1_6">{item.Industry_des1_6}</p></div>
                                                                <p className="Industry_logo"> <img alt="profile" src={item.Industry_logo} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-md-7 col-sm-12 NewsDivbg">
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-11">
                                            <div className="trustedbyind_hdr1">News</div>
                                            <Slider autoplay={5000} className="slider-wrapper1">
                                                {content_news.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="slider-content1"
                                                        autoplay={5}
                                                    >
                                                        <div className="inner1">
                                                            <h1>{item.title}</h1>
                                                            <p>{item.description}</p>
                                                            <p>{item.description1}</p>
                                                            <button className="buttonReadm">{item.button}</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
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