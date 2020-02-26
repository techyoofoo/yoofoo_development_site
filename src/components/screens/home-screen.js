import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import {
  Zoom,
  Fade,
  Flip,
  Slide,
  Bounce,
  LightSpeed,
  Reveal
} from "react-reveal";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import ReactTooltip from "react-tooltip";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/fontstyle.css";
import "../styles/styles.css";
import "../styles/slidernews.css";
import Footerscreen from "../screens/footer";
// import HeaderMenuscreen from '../screens/headermenu';

const content = [
  {
    title: "Digital Transformation Solutions",
    description: "Through Distributed Agile Team",
    image: "../assets/banner1.jpg",
    // button: "Read More"
  },
  {
    title: "Software, and Data Solutions",
    description: "A Respected World Leader in the Provision of Technology",
    image: "../assets/about.jpg",
    // button: "About Us"
  },
  {
    title: "Our Software Development Services Transform",
    description: "Development",
    image: "../assets/banner2.jpg",
    // button: "Read More"
  },
  {
    title: "Success Through a Proven Model",
    description: "Sucess",
    image: "../assets/contactus.jpg",
    // button: "Contact Us"
  }
];

const Industry_Expertise = [
  {
    Industry_title: "BFSI",
    Industry_title1: "BANKS, FINANCIAL SERVICES AND INSURANCE",
    // Industry_des1_1: ' ',
    // Industry_des1_2: '42',
    // Industry_des1_3: 'Dapibus ac facilisis in',
    // Industry_des1_4: '1000+',
    // Industry_des1_5: ' Morbi leo risus',
    // Industry_des1_6: '240+',
    Industry_logo: "../assets/clients/bfsi.png"
  },
  {
    Industry_title: "LIFE SCIENCES",
    Industry_title1: "BIOTECH, DIAGNOSTICS AND WELLNESS",
    // Industry_des1_1: ' Historical Clients',
    // Industry_des1_2: '31',
    // Industry_des1_3: 'Delivered Projects ',
    // Industry_des1_4: '700+',
    // Industry_des1_5: ' Vertically Aligned Consultants',
    // Industry_des1_6: '140+',
    Industry_logo: "../assets/clients/lifesciences.png"
  },
  {
    Industry_title: "HIGH TECH",
    Industry_title1: "SILICON VALLEY TO SILICON FOREST",
    // Industry_des1_1: ' Historical Clients ',
    // Industry_des1_2: '17',
    // Industry_des1_3: 'Delivered Projects',
    // Industry_des1_4: '350+',
    // Industry_des1_5: ' Vertically Aligned Consultants',
    // Industry_des1_6: '120+',
    Industry_logo: "../assets/clients/hightech.png"
  }
];

const content_news = [
  {
    title: "QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT",
    description:
      "QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT, MAY 29, 2019 , BY JUSTINE BATEMAN",
    description1:
      "Strong collaboration and communication with your development partners is very important to the Agile process. But remember that in your role there are some important quality assurance ...",
    button: "Read More..."
  },
  {
    title: "QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT",
    description:
      "QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT, MAY 29, 2019 , BY JUSTINE BATEMAN",
    description1:
      "Strong collaboration and communication with your development partners is very important to the Agile process. But remember that in your role there are some important quality assurance ...",
    button: "Read More..."
  },
  {
    title: "QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT",
    description:
      "QUALITY ASSURANCE QUESTIONS TO ASK IN AGILE SOFTWARE DEVELOPMENT, MAY 29, 2019 , BY JUSTINE BATEMAN",
    description1:
      "Strong collaboration and communication with your development partners is very important to the Agile process. But remember that in your role there are some important quality assurance ...",
    button: "Read More..."
  }
];

const content_Testimonials = [
  {
    image1: "../assets/profile_img/testimonial-1-jeffb.png",
    title: "2015 Global Big Data Competition",
    description: "- Brad Stone",
    company: "By Global Data Utah",
    description1:
      "Jeff Boonmee, CEO at YooFoo.com, is awarded an Honorable Mention for providing leadership in more than one region (Greater India and South East Asia). Participation in the Greater India region ranked second overall – only beat by the Intermountain West region.",
    button: "Read More..."
  },
  {
    image1: "../assets/profile_img/testimonial-2.jpg",
    title: "Amazing Partner!",
    description: "- Vince Romney",
    company: "By Foreveegreen International",
    description1:
      "YooFoo has always been a great development partner and accommodates the rigors of the direct-selling industry with great efficiency. Definitely recommend YooFoo as a great asset to any development needs",
    button: "Read More..."
  },
  {
    image1: "../assets/profile_img/danielzaldivar.png",
    title: "Thanks!",
    description: "- Daniel Zaldivar",
    company: "By Unicity International",
    description1:
      "...very knowledgable on technology matters. Wonderful team of developers fluent in many different programming languages and technologies but are able to makes you feel confortable when discussing serious complex technologies. It is a pleasure to work and associate with YooFoo.",
    button: "Read More..."
  }
];

export default class Homescreen extends Component {
  componentDidMount() {
    scrollToComponent(this.Homescreen, {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "inCirc"
    });
  }
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
    const BASE_URL = "#";
    return (
      <div>
        <div
          className="modal fade bd-example-modal-lg"
          id="RequestForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Request a quote
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 Requestfrom">
                    <div className="form-group formpdng">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Name"
                        name="c_name"
                        required=""
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Phone"
                        name="c_name"
                        required=""
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Email"
                        name="c_name"
                        required=""
                        aria-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Message"
                        required=""
                        aria-required="true"
                      ></textarea>
                    </div>
                    <button type="submit" className="submitbtn">
                      SUBMIT
                    </button>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="detail-img img-responsive"
                      src="../../assets/Request-a-Quote.jpg"
                      alt="Web Development"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          id="modalabout"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  About Us
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12">
                    <p className="about_para">
                      <span className="yoo">Yoo</span>
                      <span className="foo">Foo</span> is a minority-owned
                      company which was founded in 2010.
                      <span className="yoo">Yoo</span>
                      <span className="foo">Foo</span>'s primary aim is to use
                      technical skills and experience to make a difference in
                      people and businesses.
                    </p>
                    <p className="about_para paddingt0">
                      <span className="yoo">Yoo</span>
                      <span className="foo">Foo</span> has its offices in the US
                      (Headquarters) and international office in India
                      (International). The international office is occupied by
                      the <span className="yoo">Yoo</span>
                      <span className="foo">Foo</span> Technologies India
                      Private Limited.
                      <span className="yoo">Yoo</span>
                      <span className="foo">Foo</span> Technologies India
                      Private Limited was registered in September 2014. Their
                      registered address on file is Vatika Business Centre, 6th
                      Floor, Omega-C Block, Divyasree Building, Hitech City Rd,
                      Kondapur, Hyderabad - 500081, Telangana, India. Plans are
                      underway to establish more international offices in
                      Thailand, and opportunities in other regions are currently
                      being explored.
                    </p>
                  </div>
                  <div>
                    <div className="containertab">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#Vision"
                          >
                            <div className="floatleft iconbox">
                              <i
                                className="fa fa-eye vision"
                                aria-hidden="true"
                              ></i>
                            </div>
                            Vision
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#Mission"
                          >
                            <div className="floatleft iconbox">
                              <i
                                className="fa fa-podcast vision"
                                aria-hidden="true"
                              ></i>
                            </div>
                            Mission
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#Primary"
                          >
                            <div className="floatleft iconbox">
                              <i
                                className="fa fa-life-ring vision"
                                aria-hidden="true"
                              ></i>
                            </div>
                            Primary Objectives
                          </a>
                        </li>
                      </ul>

                      <div className="tab-content">
                        <div
                          id="Vision"
                          className="containertab tab-pane active tabcontenth"
                        >
                          <p>
                            <span className="yoo">Yoo</span>
                            <span className="foo">Foo</span>'s vision is to be a
                            respected world leader in the provision of
                            technology, software and data solutions for
                            competitive business outcomes, through increased
                            cost efficiency, and enhanced quality management
                            processes.
                          </p>
                        </div>
                        <div
                          id="Mission"
                          className="containertab tab-pane fade"
                        >
                          <p>
                            <span className="yoo">Yoo</span>
                            <span className="foo">Foo</span>'s mission is to
                            utilize a unique business model with flexibility to
                            provide clients with competitive, expert, focused, &
                            results-driven teams; to deliver the most effective,
                            efficient, technology solutions.
                          </p>
                        </div>
                        <div
                          id="Primary"
                          className="containertab tab-pane fade"
                        >
                          <div className="aboutlist">
                            <ul>
                              <li>
                                <i
                                  className="fa fa-check abouticon"
                                  aria-hidden="true"
                                ></i>
                                To help companies, especially start-ups, to
                                leverage their IT/IS resources for better
                                business outcomes
                              </li>
                              <li>
                                <i
                                  className="fa fa-check abouticon"
                                  aria-hidden="true"
                                ></i>
                                To implement interoperable decision support
                                systems that enhance patient care services,
                                patient safety, mitigate medical errors, and
                                promote continuity of care at the point of care
                              </li>
                              <li>
                                <i
                                  className="fa fa-check abouticon"
                                  aria-hidden="true"
                                ></i>
                                To conduct/perform research and analytics
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          id="modal1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Web Development
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        .Net MVC
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        C#
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Java
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        VB
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        PHP
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Node.JS
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        HTML5
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        CSS
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Bootstrap
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Python
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        JQuery
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        AngularJS
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        WordPress
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Joomla
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 blueboxR">
                    <div className="popuppara">
                      A business or enterprise website presents your business
                      scope in detail to the viewers and promotes your
                      objectives in each click. We have a passion to create and
                      build websites as per your business objectives and
                      transform your business needs in to a form a website. You
                      will be explored to get the best and web friendly
                      development services sinking with the latest trends of the
                      market with our different range of solutions.
                    </div>
                    <div>
                      <img
                        src="../../assets/webdev.jpg"
                        className="col-sm-6"
                        alt="Mobile Development"
                      ></img>
                    </div>
                    <div className="row btntmng">
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <a
                          href="#pricing"
                          type="button"
                          data-dismiss="modal"
                          aria-hidden="true"
                          aria-label="Close"
                          className="btn btn-primary btn-block"
                        >
                          Our Price
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#RequestForm"
                          className="btn btn-primary btn-block"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Mobile Development
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Ios
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Android
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Windows
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Swift
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Objective-C
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        PhoneGap
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Apache Cordova
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Xamarin
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Titanium
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 blueboxR">
                    <div className="popuppara">
                      For your app to succeed, you need a smart business
                      strategy, a killer UI/UX design, and a talented mobile
                      development team. Good news - you've come to the right
                      source. We don't settle for good. We shoot for amazing,
                      and that's where we can take you - if you’re ready.
                      Innovative mobile business strategies. Beautiful user
                      experience designs. Powerful agile app development.
                    </div>
                    <div>
                      <img
                        src="../../assets/mobiledev.jpg"
                        className="col-sm-6"
                        alt="Mobile Development"
                      ></img>
                    </div>
                    <div className="row btntmng">
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <a
                          href="#pricing"
                          type="button"
                          data-dismiss="modal"
                          aria-hidden="true"
                          aria-label="Close"
                          className="btn btn-primary btn-block btn-pricing price-request smooth-scroll"
                        >
                          Our Price
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#RequestForm"
                          className="btn btn-primary btn-block btn-pricing quote-request"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Software Architecting & Engineering
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Software Development Life-Cycle Management (SDLC)
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Software Analysis
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Architecture & Design
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Software Integration
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Hardware Integration
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Embedded Systems
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        C, C++
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        ASM
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        C#
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Java
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Windows
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Linux
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        OSx
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        iOS
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 blueboxR">
                    <div className="popuppara">
                      Most companies have experienced the frustration of two or
                      more software programs unable to share critical
                      information. Lack of software interoperability is one of
                      the biggest problems in business today.
                      <span className="yoo">Yoo</span>
                      <span className="foo">Foo</span> has extensive experience
                      in developing Enterprise Resource Planning (ERP) systems:
                      systems that enable multiple, independent, software
                      applications to communicate with each other throughout the
                      organization. All of our software interfaces are created
                      to meet or exceed industry standards.
                    </div>
                    <div>
                      <img
                        src="../../assets/softwaredev.jpg"
                        className="col-sm-6"
                        alt="Mobile Development"
                      ></img>
                    </div>
                    <div className="row btntmng">
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <a
                          href="#pricing"
                          type="button"
                          data-dismiss="modal"
                          aria-hidden="true"
                          aria-label="Close"
                          className="btn btn-primary btn-block"
                        >
                          Our Price
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#RequestForm"
                          className="btn btn-primary btn-block"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal4"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Data Services
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Infomatics
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Data research
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Data Analysis
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Reporting and Visualization
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Data Migration
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Data integration
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 blueboxR">
                    <div className="popuppara">
                      Most companies have experienced the frustration of trying
                      to merge data from more than one system, or data source,
                      with disappointing results. These ‘silos’ of information
                      create inefficiencies within an organization that result
                      in cumbersome work-around and hours of wasted time. In
                      fact lack of software interoperability is one of the
                      biggest problems reported by businesses and government
                      organizations, large and small, throughout the world
                      today.
                    </div>
                    <div>
                      <img
                        src="../../assets/data_management.jpg"
                        className="col-sm-6"
                        alt="Mobile Development"
                      ></img>
                    </div>
                    <div className="row btntmng">
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <a
                          href="#pricing"
                          type="button"
                          data-dismiss="modal"
                          aria-hidden="true"
                          aria-label="Close"
                          className="btn btn-primary btn-block"
                        >
                          Our Price
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#RequestForm"
                          className="btn btn-primary btn-block"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal5"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Design & Creatives
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Web design
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Graphics design
                      </li>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        UI design
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 blueboxR">
                    <div className="popuppara">
                      For those who have been hiding under the hood and never
                      took a dive into the capacity of a web page; the essence
                      of web designing goes beyond just embedding attractive
                      layouts with the development code.
                    </div>
                    <div>
                      <img
                        src="../../assets/design2.jpg"
                        className="col-sm-6"
                        alt="Mobile Development"
                      ></img>
                    </div>
                    <div className="row btntmng">
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <a
                          href="#pricing"
                          type="button"
                          data-dismiss="modal"
                          aria-hidden="true"
                          aria-label="Close"
                          className="btn btn-primary btn-block"
                        >
                          Our Price
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#RequestForm"
                          className="btn btn-primary btn-block"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal6"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Testing & Quality Analysis
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <i
                          className="fa fa-check okicon"
                          aria-hidden="true"
                        ></i>
                        Selenium
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 blueboxR">
                    <div className="popuppara">
                      Software and IT organizations wanting to ensure high
                      quality releases need to incorporate an effective quality
                      assurance and testing program in their operations.
                    </div>
                    <div>
                      <img
                        src="../../assets/testing1.jpg"
                        className="col-sm-6"
                        alt="Mobile Development"
                      ></img>
                    </div>
                    <div className="row btntmng">
                      <div className="col-md-1"></div>
                      <div className="col-md-5">
                        <a
                          href="#pricing"
                          type="button"
                          data-dismiss="modal"
                          aria-hidden="true"
                          aria-label="Close"
                          className="btn btn-primary btn-block"
                        >
                          Our Price
                        </a>
                      </div>
                      <div className="col-md-5">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#RequestForm"
                          className="btn btn-primary btn-block"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          id="modal7"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Distributed Agile Augmentation
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4 blueboxL popuplist">
                    <ul>
                      <li>
                        <a href={BASE_URL}>
                          <i
                            className="fa fa-check okicon"
                            aria-hidden="true"
                          ></i>
                          On Shore
                        </a>
                      </li>
                      <li>
                        <a href={BASE_URL}>
                          <i
                            className="fa fa-check okicon"
                            aria-hidden="true"
                          ></i>
                          Off Shore
                        </a>
                      </li>
                      <li>
                        <a href={BASE_URL}>
                          <i
                            className="fa fa-check okicon"
                            aria-hidden="true"
                          ></i>
                          On Premise
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8">
                    <p className="Distributed_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries.
                    </p>
                    <div>
                      <img
                        src="../../assets/DistributedAgileAugmentation.jpg"
                        className="img-fluid ousrser_img col-sm-12"
                        alt="Distributed Agile Augmentation
"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal8"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Technology Project Consulting
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12">
                    <p className="Distributed_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                  </div>
                  <div>
                    <img
                      src="../../assets/TechnologyProjectConsulting.jpg"
                      className="img-fluid ousrser_img col-sm-8"
                      alt="Distributed Agile Augmentation
"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          id="modal9"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Digital Transformation Strategies
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12">
                    <p className="Distributed_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                  </div>
                  <div>
                    <img
                      src="../../assets/ourdna.jpg"
                      className="img-fluid ousrser_img col-sm-8"
                      alt="Distributed Agile Augmentation
"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <HeaderMenuscreen /> */}
          <div className="col-md-12 col-sm-12">
            <div className="row header">
              <div className="col-md-3 col-sm-3">
                <a href={BASE_URL}>
                  <img
                    className="img-fluid logopdng"
                    src="../../assets/yoofoo_logo.png"
                    alt="logo"
                  ></img>
                </a>
              </div>

              <div className="col-md-9 col-sm-12">
                <Navbar color="light" light expand="md">
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          
                          Services
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            onClick={() =>
                              scrollToComponent(this.DistributedAgile, {
                                offset: 0,
                                align: "top",
                                duration: 500
                              })
                            }
                          >
                            
                            Distributed Agile Augmentation
                          </DropdownItem>
                          <DropdownItem
                            onClick={() =>
                              scrollToComponent(this.Technologyproject, {
                                offset: 0,
                                align: "top",
                                duration: 500,
                                ease: "inExpo"
                              })
                            }
                          >
                            
                            Technology Project Consulting
                          </DropdownItem>
                          <DropdownItem
                            onClick={() =>
                              scrollToComponent(this.DigitalTrans, {
                                offset: 0,
                                align: "top",
                                duration: 500,
                                ease: "inCirc"
                              })
                            }
                          >
                            
                            Digital Transformation Strategies
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      {/* <NavItem>
                                            <NavLink onClick={() => scrollToComponent(this.Practiceareas, { offset: 0, align: 'top', duration: 500, ease: 'inExpo' })}> Practice Areas</NavLink>
                                        </NavItem> */}
                      <NavItem>
                        <NavLink
                          onClick={() =>
                            scrollToComponent(this.industries, {
                              offset: -100,
                              align: "top",
                              duration: 500,
                              ease: "inExpo"
                            })
                          }
                        >
                          
                          Industries
                        </NavLink>
                      </NavItem>
                      {/* <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret> Industries </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem onClick={() => scrollToComponent(this.Bfsi, { offset: 0, align: 'top', duration: 500, ease: 'inExpo' })}> BFSI </DropdownItem>
                                                <DropdownItem onClick={() => scrollToComponent(this.LifeSciences, { offset: 0, align: 'top', duration: 500, ease: 'inExpo' })}> Life Sciences </DropdownItem>
                                                <DropdownItem onClick={() => scrollToComponent(this.Hightech, { offset: 0, align: 'top', duration: 500, ease: 'inExpo' })}> High Tech </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown> */}
                      {/* <NavItem>
                                            <NavLink href="/#/ourdna/">OUR DNA</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/#/articles-events/">ARTICLES & EVENTS</NavLink>
                                        </NavItem> */}
                      <NavItem>
                        <NavLink
                          onClick={() =>
                            scrollToComponent(this.About, {
                              offset: -100,
                              align: "top",
                              duration: 500
                            })
                          }
                        >
                          About
                        </NavLink>
                      </NavItem>
                      {/* <NavItem>
                                            <NavLink href="/#/blog/">BLOG</NavLink>
                                        </NavItem> */}
                      <NavItem>
                        <NavLink
                          onClick={() =>
                            scrollToComponent(this.ContactUs, {
                              offset: -10,
                              align: "top",
                              duration: 500,
                              ease: "inExpo"
                            })
                          }
                        >
                          Contact Us
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
                      style={{
                        background: `url('${item.image}') no-repeat center center`
                      }}
                      autoplay={5}
                    >
                      <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        {/* <button>{item.button}</button> */}
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
                    <div data-for="soclose" data-tip="1">
                      <Fade left>
                        <div className="roundedbox1">
                          {/* <div className="clientNo">43</div> */}
                          <div className="clientNo1">
                            Active Clients include Small to Fortune 500
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Active Clients </h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}

                    <div data-for="soclose1" data-tip="1">
                      <Fade top>
                        <div className="roundedbox1">
                          {/* <div className="clientNo4">2000+</div> */}
                          <div className="clientNo5">
                            Countless Delivered Projects
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose1' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Countless Delivered Projects </h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}

                    <div data-for="soclose2" data-tip="1">
                      <Fade bottom>
                        <div className="roundedbox">
                          {/* <div className="clientNo2">2000+</div> */}
                          <div className="clientNo3">
                            Offshore Onshore / Nearshore On-Premise
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose2' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Offshore Onshore</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}
                  </div>
                  <div className="float_left boxpdng">
                    <div data-for="soclose3" data-tip="1">
                      <Fade top>
                        <div className="roundedbox">
                          {/* <div className="clientNo2">6+</div> */}
                          <div className="clientNo3">
                            Covering Multiple Timezones
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose3' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Covering Multiple Timezones</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}

                    <div data-for="soclose4" data-tip="1">
                      <Fade left>
                        <div className="roundedbox3">
                          {/* <div className="clientNo6">98%</div> */}
                          <div className="clientNo7">
                            Expertise in Various Industries
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose4' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Expertise in Various Industries</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}

                    <div data-for="soclose5" data-tip="1">
                      <Fade bottom>
                        <div className="roundedbox2">
                          {/* <div className="clientNo2">100+</div> */}
                          <div className="clientNo3">
                            Agile Management Style
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose5' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Agile Management Style</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}
                  </div>
                  <div className="float_left boxpdng1">
                    <div data-for="soclose6" data-tip="1">
                      <Fade right>
                        <div className="roundedbox2">
                          {/* <div className="clientNo2">600+</div> */}
                          <div className="clientNo3">
                            Experienced and High Performing Engineering Team
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose6' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Experienced Engineering Team</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}

                    <div data-for="soclose7" data-tip="1">
                      <Fade bottom>
                        <div className="roundedbox circle">
                          {/* <div className="clientNo2">3</div> */}
                          <div className="clientNo3">
                            Multiple Countries of Operation
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* <ReactTooltip id='soclose7' getContent={(dataTip) =>
                                            <div className="col-md-12">
                                                <h3>Multiple Countries of Operation</h3>
                                                <div className="activeclients_p">YooFoo is an international information technology company that
                                             specializes in creating and maintaining innovative information technology, </div>
                                            </div>}
                                            effect='float' delayHide={50} delayShow={50} delayUpdate={300} place={'right'} border={true} type={'light'} /> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="About">
                  <Tabs>
                    <TabList>
                      <Tab>
                        <Slide top>
                          <div
                            className="heading1"
                            ref={section => {
                              this.About = section;
                            }}
                          >
                            About <span className="heading2">Us</span>
                          </div>
                        </Slide>
                      </Tab>
                      <Tab>
                        <Slide bottom>
                          <div className="heading1">
                            Contact <span className="heading2">Us</span>
                          </div>
                        </Slide>
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <Fade right>
                        <div className="paragraphblue">
                          A respected world leader in the provision of
                          technology, software, and data solutions
                        </div>
                        <div className="paragraphgray">
                          <span className="yoo">Yoo</span>
                          <span className="foo">Foo</span> is an international
                          information technology company that specializes in
                          creating and maintaining innovative information
                          technology, data, and software solutions for a wide
                          range of needs in both private business and
                          public/governmental organization environments.
                        </div>

                        <div className="explore">
                          <a
                            href="/#/"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                            data-target="#modalabout"
                          >
                            Read More About Us
                          </a>
                        </div>
                      </Fade>
                    </TabPanel>
                    <TabPanel>
                      <Fade right>
                        <div className="col-md-10 col-sm-12 getintbg1">
                          <div className="contactsubh">
                            Our team is ready to answer your queries
                          </div>

                          <div className="form-group formpdng">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Name"
                              name="c_name"
                              required=""
                              aria-required="true"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Phone"
                              name="c_name"
                              required=""
                              aria-required="true"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Email"
                              name="c_name"
                              required=""
                              aria-required="true"
                            />
                          </div>

                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              placeholder="Message"
                              required=""
                              aria-required="true"
                            ></textarea>
                          </div>
                          <button type="submit" className="submitbtn">
                            SUBMIT
                          </button>
                        </div>
                      </Fade>
                    </TabPanel>
                  </Tabs>
                </div>
                <div className="clear"></div>
                <div
                  className="col-sm-12 col-md-8 ind_line"
                  ref={section => {
                    this.industries = section;
                  }}
                >
                  {/* <div className="trustedbyind_hdr">Industry Expertise</div> */}
                  <div>
                    {/* <div>
                                 <div className="lefthdrbluline2"></div>                           
                            </div> */}
                    <div className="headingAbout_In">
                      Industry
                      <span className="headingAbout1_In">Expertise</span>
                    </div>
                  </div>
                  <Slider autoplay={4000} className="slider-wrapper11">
                    {Industry_Expertise.map((item, index) => (
                      <div key={index} className="slider-content1" autoplay={3}>
                        <h1 className="Industry_subh1">
                          {item.Industry_title}
                        </h1>
                        <h1 className="Industry_subh2">
                          {item.Industry_title1}
                        </h1>
                        <p className="Industry_logo">
                          
                          <img alt="profile" src={item.Industry_logo} />
                        </p>
                        {/* <div className="inner1">
                                                    <div className="row Industry_row">
                                                        <div className="Industry_div"><p className="Industry_des1_1">{item.Industry_des1_1}</p></div>
                                                        <div className="clear"></div>
                                                        <div className="Industry_div1"><p className="Industry_des1_2">{item.Industry_des1_2}</p></div>
                                                        <div className="clear"></div>
                                                        <div className="Industry_div"><p className="Industry_des1_3">{item.Industry_des1_3}</p></div>
                                                        <div className="clear"></div>
                                                        <div className="Industry_div1"><p className="Industry_des1_4">{item.Industry_des1_4}</p></div>
                                                        <div className="clear"></div>
                                                        <div className="Industry_div"><p className="Industry_des1_5">{item.Industry_des1_5}</p></div>
                                                        <div className="clear"></div>
                                                        <div className="Industry_div1"><p className="Industry_des1_6">{item.Industry_des1_6}</p></div>
                                                        <div className="clear"></div>
                                                        <p className="Industry_logo"> <img alt="profile" src={item.Industry_logo} /></p>
                                                    </div>
                                                </div> */}
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6"></div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <div className="container-fluid content_mrg">
              <Fade top>
                {/* <div className="row"> 
                            <div>
                            <div className="lefthdrbluline"></div>                           
                            </div>
                            <div className="headingAbout">What We  <span className="headingAbout1">Do</span>
                            <p className="para1">We build to your business needs, <br></br>asking questions before providing answers.</p>
                            </div>
                            </div>  */}

                <div className="row">
                  <div className="col-md-3 whatwedo_hdr">What We Do</div>
                  <div className="col-md-9 whatwedo_hd1">
                    We build to your business needs, asking questions before
                    providing answers.
                  </div>
                </div>
              </Fade>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col-md-6 Design_tpdng">
                      <Fade left>
                        <div className="card">
                          <h5 className="card-title cardhdr">
                            <div className="lineblue"></div> Design
                          </h5>
                          <img src="../../assets/design.png" alt="design" />
                          <div className="card-body">
                            <p className="card-text cardhdr">
                              Plug into years of experience in architecture and
                              visual design in building positive experiences for
                              businesses and end-users alike.
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </div>

                    <div className="col-md-6 Build_tpdng">
                      <Fade top>
                        <div className="card">
                          <h5 className="card-title cardhdr">
                            <div className="lineblue"></div> Build
                          </h5>
                          <img src="../../assets/build.png" alt="build"></img>
                          <div className="card-body">
                            <p className="card-text cardhdr">
                              Awaken software and applications, join your needs,
                              ideas, and visions with our lean and agile
                              process.
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                  <Fade left>
                    <div className="col-md-12 whatwedo_hdrsub">
                      FROM DISCOVERY TO DEPLOYMENT, REALIZE YOUR PERFECT PRODUCT
                      WITH SOFTWARE DEVELOPMENT CONSULTING
                    </div>
                  </Fade>
                </div>
                <div className="col-md-6 col-sm-12">
                  <Fade right>
                    <div className="col-md-12 whatwedo_hdrsub1">
                      WE ARE GLOBAL, YOU ARE TOO WITH DISTRIBUTED AGILE SOFTWARE
                      DEVELOPMENT.
                    </div>
                  </Fade>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 Scale_tpdng">
                      <Fade bottom>
                        <div className="card">
                          <h5 className="card-title cardhdr">
                            <div className="lineblue"></div> Scale
                          </h5>
                          <img src="../../assets/scale.png" alt="scale"></img>
                          <div className="card-body">
                            <p className="card-text cardhdr">
                              Take advantange of our scalable solutions and
                              trusted architecture to support your critical
                              business operations.
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Fade right>
                        <div className="card Secure_tpdng">
                          <h5 className="card-title cardhdr">
                            <div className="lineblue"></div> Secure
                          </h5>
                          <img src="../../assets/secure.png" alt="secure"></img>
                          <div className="card-body">
                            <p className="card-text cardhdr">
                              Security is a fundamental part in our development
                              process. It is always our goal to provide secure
                              solutuions that are user-friendly.
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 pay_pdng">
            <div className="row paytopp">
              <Fade left>
                <div className="col-sm-6">
                  <div>
                    <div>
                      <div className="lefthdrbluline1"></div>
                    </div>
                    <div className="headingAbout">
                      PAY AS YOU <span className="headingAbout1">GROW</span>
                      <p className="para1">
                        As your company grows, <span className="yoo">Yoo</span>
                        <span className="foo">Foo</span> has the technical
                        capabilities to provide you with top of the line
                        services. As a long term partner with us, we have the
                        additional savings described below. <br></br>asking
                        questions before providing answers.
                      </p>
                    </div>
                  </div>
                  <div className="row hpatop">
                    <div className="col-sm-12 monthlyhdr">
                      Monthly Service Packages
                    </div>
                    <div className="col-sm-4 monthlydis">
                      Discount as much as
                    </div>
                  </div>
                  <div className="row divtop">
                    <Fade left>
                      <div className="col-sm-5 box1">
                        <div className="iconimg">
                          <img
                            className="img-fluid"
                            src="../../assets/basic.jpg"
                            alt="Basic"
                          ></img>
                        </div>
                        <div className="icontextdiv">
                          <div className="payh1">Basic</div>
                          <div className="payh2">
                            UPTO
                            <span className="payh3">
                              20 <span className="payh4">%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade top>
                      <div className="col-sm-5 box2">
                        <div className="iconimg">
                          <img
                            className="img-fluid"
                            src="../../assets/standard.jpg"
                            alt="Basic"
                          ></img>
                        </div>
                        <div className="icontextdiv">
                          <div className="payh1">Standard</div>
                          <div className="payh2">
                            UPTO
                            <span className="payh3">
                              30 <span className="payh4">%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="row">
                    <Fade bottom>
                      <div className="col-sm-5 box3">
                        <div className="iconimg">
                          <img
                            className="img-fluid"
                            src="../../assets/professoonal.jpg"
                            alt="Basic"
                          ></img>
                        </div>
                        <div className="icontextdiv">
                          <div className="payh1">Professoonal</div>
                          <div className="payh2">
                            UPTO
                            <span className="payh3">
                              40 <span className="payh4">%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="col-sm-5 box4">
                        <div className="iconimg">
                          <img
                            className="img-fluid"
                            src="../../assets/ultimate.jpg"
                            alt="Basic"
                          ></img>
                        </div>
                        <div className="icontextdiv">
                          <div className="payh1">Ultimate</div>
                          <div className="payh2">
                            UPTO
                            <span className="payh3">
                              50 <span className="payh4">%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </Fade>
              <div className="col-sm-6">
                <LightSpeed right>
                  <img
                    className="img-fluid"
                    src="../../assets/payasugrow_rbg.png"
                    alt="pay as u grow"
                  ></img>
                </LightSpeed>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <div className="container-fluid content_mrg1">
              <Fade top>
                <div className="row">
                  <div className="col-md-3 whatwedo_hdr">Our Services</div>
                  <div className="col-md-9 whatwedo_hd1">
                    Scale up development and complete that new initiative
                    without a long-term resource commitment.
                  </div>
                </div>
              </Fade>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <div
                      className="containerimg cardpdng"
                      ref={section => {
                        this.DistributedAgile = section;
                      }}
                    >
                      <LightSpeed left>
                        <img
                          src="../../assets/ourservice.jpg"
                          alt="Distributed Agile Augmentation"
                        ></img>
                      </LightSpeed>
                    </div>
                    <div className="cardpdng">
                      <Fade left>
                        <div className="row">
                          <div className="cardbr"></div>
                          <div className="col-md-10 paddingleft0">
                            <div className="card cardbr1">
                              <div>
                                <i className="fa fa-laptop icon1"></i>
                              </div>
                              <h5 className="card-title cardhdr">
                                Web Development
                              </h5>
                              <p>
                                Software and web development and integration A
                                business or enterprise website presents your
                                business scope in detail to the viewers and
                                promotes your objectives in...
                              </p>
                              <div>
                                <a
                                  href={BASE_URL}
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                  data-target="#modal1"
                                >
                                  Read More
                                  <i
                                    className="fa fa-angle-double-right readmore"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </div>
                    <div className="cardpdng">
                      <Fade bottom>
                        <div className="row">
                          <div className="cardbr"></div>
                          <div className="col-md-10 paddingleft0">
                            <div className="card cardbr1">
                              <div>
                                <i className="fa fa-mobile icon1"></i>
                              </div>
                              <h5 className="card-title cardhdr">
                                Mobile Development
                              </h5>
                              <p>
                                Going mobile ? We got you covered. For your app
                                to succeed, you need a smart business strategy,
                                a killer UI/UX design, and a talented mobile
                                development team...
                              </p>
                              <div>
                                <a
                                  href={BASE_URL}
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                  data-target="#modal2"
                                >
                                  Read More
                                  <i
                                    className="fa fa-angle-double-right readmore"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <div
                      className="containerimg cardpdng"
                      ref={section => {
                        this.Technologyproject = section;
                      }}
                    >
                      <Flip>
                        <img
                          src="../../assets/ourservice1.jpg"
                          alt="Technology Project Consulting"
                        ></img>
                      </Flip>
                    </div>
                  </div>
                  <div className="cardpdng">
                    <Fade top>
                      <div className="row">
                        <div className="cardbr"></div>
                        <div className="col-md-10 paddingleft0">
                          <div className="card cardbr1">
                            <div>
                              <i
                                className="fa fa-cog icon1"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h5 className="card-title cardhdr">
                              Software Architecting & Engineering
                            </h5>
                            <p>
                              Tired of that house of cards system ? Our top
                              architect and engineering team...
                            </p>
                            <div>
                              <a
                                href={BASE_URL}
                                data-toggle="modal"
                                data-target=".bd-example-modal-lg"
                                data-target="#modal3"
                              >
                                Read More
                                <i
                                  className="fa fa-angle-double-right readmore"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="cardpdng">
                    <Fade right>
                      <div className="row">
                        <div className="cardbr"></div>
                        <div className="col-md-10 paddingleft0">
                          <div className="card cardbr1">
                            <div>
                              <i
                                className="fa fa-database icon1"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h5 className="card-title cardhdr">
                              Data Services
                            </h5>
                            <p>
                              Do more with your data than just analytics. Look
                              into the future with big data and infomatics. Most
                              companies have experienced the frustration of...
                            </p>
                            <div>
                              <a
                                href={BASE_URL}
                                data-toggle="modal"
                                data-target=".bd-example-modal-lg"
                                data-target="#modal4"
                              >
                                Read More
                                <i
                                  className="fa fa-angle-double-right readmore"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <div
                      className="containerimg cardpdng"
                      ref={section => {
                        this.DigitalTrans = section;
                      }}
                    >
                      <LightSpeed right>
                        <img
                          src="../../assets/ourservice2.jpg"
                          alt="DigitalTransformation Strategies"
                        ></img>
                      </LightSpeed>
                    </div>
                  </div>
                  <div className="cardpdng">
                    <Fade right>
                      <div className="row">
                        <div className="cardbr"></div>
                        <div className="col-md-10 paddingleft0">
                          <div className="card cardbr1">
                            <div>
                              <i className="fa icon1">&#xf03e;</i>
                            </div>
                            <h5 className="card-title cardhdr">
                              Design & Creatives
                            </h5>
                            <p>
                              Looking for some of the most creative minds? Well,
                              they are here. For those who have been hiding
                              under the hood and never took a dive into the
                              capacity of...
                            </p>
                            <div>
                              <a
                                href={BASE_URL}
                                data-toggle="modal"
                                data-target=".bd-example-modal-lg"
                                data-target="#modal5"
                              >
                                Read More
                                <i
                                  className="fa fa-angle-double-right readmore"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="cardpdng">
                    <Fade bottom>
                      <div className="row">
                        <div className="cardbr"></div>
                        <div className="col-md-10 paddingleft0">
                          <div className="card cardbr1">
                            <div>
                              <i className="fa icon1">&#xf201;</i>
                            </div>
                            <h5 className="card-title cardhdr">
                              Testing & Quality Analysis
                            </h5>
                            <p>
                              Comprehensive software testing & QA resources.
                              Software and IT organizations wanting to ensure
                              high quality releases need to incorporate...
                            </p>
                            <div>
                              <a
                                href={BASE_URL}
                                data-toggle="modal"
                                data-target=".bd-example-modal-lg"
                                data-target="#modal6"
                              >
                                Read More
                                <i
                                  className="fa fa-angle-double-right readmore"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-12 col-sm-12 paddingtop">
                        <div className="container-fluid">
                        <div className="row innerContent" ref={(section) => { this.Practiceareas = section; }}>                        
                            <div className="row">  
                            <Fade left>               
                            <div className="col-md-7">
                            <div>
                            <div className="lefthdrbluline"></div>                           
                            </div>
                            <div className="headingAbout">Practice <span className="headingAbout1">Areas</span>
                            <p className="para1">Broad and Deep Technical Software Development <br></br> Experts to Create to Enterprise-Level Applications</p>
                            </div>
                                <p className="paraalign">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Fade>
                            <div className="col-md-5">
                            <Fade right>
                            <img className="img-thumbnail rounded" src="../../assets/practiceareas.jpg" alt="Practice Areas"></img>
                            </Fade>
                            </div>
                            </div>                        
                      </div>
                        </div>
                    </div> */}
          {/* <div className="col-md-12 col-sm-12 paddingtop">
                        <div className="container-fluid">
                        <div className="row innerContent" ref={(section) => { this.Bfsi = section; }}>                        
                            <div className="row">   
                            <div className="col-md-5">
                            <Fade top>
                            <img className="img-thumbnail rounded" src="../../assets/Bfsi.jpg" alt="Practice Areas"></img>
                           </Fade>
                            </div>    
                            <Fade bottom>
                            <div className="col-md-7">
                            <div>
                            <div className="lefthdrbluline"></div>                           
                            </div>
                            <div className="headingAbout">BF<span className="headingAbout1">SI</span>
                            <p className="para1">Banks, Financial services and insurance <br></br> Success Through a Proven Model</p>
                            </div>
                                <p className="paraalign">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            </Fade>
                            </div>                       
                        </div>
                        </div>
                    </div> */}

          {/* <div className="col-md-12 col-sm-12 paddingtop">
                        <div className="container-fluid">
                        <div className="row innerContent" ref={(section) => { this.LifeSciences = section; }}>                        
                            <div className="row">    
                            <Fade left>                                    
                            <div className="col-md-7">
                            <div>
                            <div className="lefthdrbluline"></div>                           
                            </div>
                            <div className="headingAbout">LIFE <span className="headingAbout1">SCIENCES</span>
                            <p className="para1">Broad and Deep Technical Software Development <br></br> Experts to Create to Enterprise-Level Applications</p>
                            </div>
                                <p className="paraalign">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            </Fade>
                            <div className="col-md-5">
                            <Fade right>
                            <img className="img-thumbnail rounded" src="../../assets/LifeSciences.jpg" alt="Practice Areas"></img>
                           </Fade>
                            </div>      
                            </div>                       
                        </div>
                        </div>
                    </div> */}

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
                            <div className="testimonial_sub">
                              See What People are Saying
                            </div>
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
                                    <p className="profileimg">
                                      
                                      <img
                                        className="rounded-circle rounded img-thumbnail"
                                        alt="profile"
                                        src={item.image1}
                                      />
                                    </p>
                                    <h1 className="testimonial_hdr1">
                                      {item.title}
                                    </h1>
                                    <p className="testimonial_hdr2">
                                      {item.description}
                                    </p>
                                    <p className="testimonial_hdr2">
                                      {item.company}
                                    </p>
                                    <p className="testimonial_p">
                                      {item.description1}
                                    </p>
                                    <button className="buttonReadm">
                                      {item.button}
                                    </button>
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
                          <div className="col-md-12">
                            
                            <div className="heading1 hdr1_pdng">
                              Trusted By Industry Leaders
                            </div>
                          </div>
                        </div>
                        <div className="row trustedbyindpanel">
                          <div className="col-sm-12">
                            <div className="media media_pdng">
                              <div className="media-body">
                                <marquee
                                  behavior="scroll"
                                  direction="up"
                                  className="marqueepdng"
                                  scrolldelay="100"
                                >
                                  <div className="chalkcoutureicon">
                                    
                                    <img
                                      src="../../assets/clients/chalkcouture.png"
                                      alt="chalkcouture"
                                    ></img>
                                  </div>
                                  <div className="chalkcoutureicon">
                                    
                                    <img
                                      src="../../assets/clients/unicity.png"
                                      alt="unicity"
                                    ></img>
                                  </div>
                                  <div className="chalkcoutureicon">
                                    
                                    <img
                                      src="../../assets/clients/q-sciences.png"
                                      alt="q-sciences"
                                    ></img>
                                  </div>
                                  <div className="chalkcoutureicon">
                                    
                                    <img
                                      src="../../assets/clients/wink.png"
                                      alt="wink"
                                    ></img>
                                  </div>
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
          <div className="col-md-12 col-sm-12">
            <div className="container-fluid">
              <div
                className="row innerContent"
                ref={section => {
                  this.ContactUs = section;
                }}
              >
                <div className="row">
                  <Fade left>
                    <div className="col-md-7">
                      <div>
                        <div className="lefthdrbluline"></div>
                      </div>
                      <div className="headingAbout">
                        Contact <span className="headingAbout1">Us</span>
                        <p className="para1">
                          <span className="yoo">Yoo</span>
                          <span className="foo">Foo</span> is an international
                          company that specializes in creating and maintaining
                          innovative information technology solutions.
                        </p>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          {/* <div className="faicons"><i className='fas fa-map-marker-alt'></i></div> */}
                          <div className="row addresstopp">
                            <div className="row addrlp">
                              <div className="col-sm-7">
                                <div className="address_hdr">
                                  <i className="fas fa-map-marker-alt"></i>
                                  Address
                                </div>
                                <div>
                                  <div className="address_hdr1">
                                    United States
                                  </div>
                                  <div className="address_p">YooFoo, LLC.</div>
                                  <div className="address_p">
                                    9192 South 300 West Suite 3
                                  </div>
                                  <div className="address_p">
                                    Sandy, Utah 84070
                                  </div>
                                </div>
                                <div>
                                  <div className="address_hdr1">India</div>
                                  <div className="address_p">
                                    Yoofoo Technologies India Private Limited
                                  </div>
                                  <div className="address_p">
                                    Vatika Business Centre, 6th Floor,
                                  </div>
                                  <div className="address_p">
                                    Omega-C Block, Divyasree Building,
                                  </div>
                                  <div className="address_p">
                                    Hitech City Rd, Kondapur, Hyderabad
                                  </div>
                                  <div className="address_p">
                                    Telangana - 500081
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-5">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="address_hdr">
                                      <i className="fas fa-envelope-open"></i>
                                      Email
                                    </div>
                                    <div className="address_hdr1 mailid">
                                      <a href={BASE_URL}>info@yoofoo.com</a>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 adrtop30">
                                    <div className="address_hdr adrbtm15">
                                      <i className="fas fa-phone-volume"></i>
                                      Phone
                                    </div>
                                    <div className="address_p adrbtm15">
                                      <div>
                                        <div>
                                          
                                          <img
                                            className="flagdiv"
                                            src="../../assets/usa.png"
                                            alt="ourservice2"
                                          ></img>
                                        </div>
                                      </div>
                                      +1-800-741-8264
                                    </div>
                                    <div className="address_p">
                                      <div>
                                        
                                        <img
                                          className="flagdiv"
                                          src="../../assets/india.png"
                                          alt="ourservice2"
                                        ></img>
                                      </div>
                                      040-71055788
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  {/* <div className="col-md-1"></div> */}
                  <div className="col-md-5">
                    <Fade right>
                      <div className="contactfrom">
                        <div className="Getinhdr">Get In Touch</div>
                        <div className="contactsubh">
                          Our team is ready to answer your queries
                        </div>
                        <div className="form-group formpdng">
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Name"
                            name="c_name"
                            required=""
                            aria-required="true"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Phone"
                            name="c_name"
                            required=""
                            aria-required="true"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Email"
                            name="c_name"
                            required=""
                            aria-required="true"
                          />
                        </div>

                        <div className="form-group">
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message"
                            required=""
                            aria-required="true"
                          ></textarea>
                        </div>
                        <button type="submit" className="submitbtn">
                          SUBMIT
                        </button>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-12 col-sm-12 industryExbg">
                        <div className="row">
                            <Fade left>
                                <div className="col-md-5 col-sm-12 trustDivpdng">
                                    <div className="row">
                                        <div className="col-md-1 col-sm-12"></div>

                                    </div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-md-12 col-sm-12 NewsDivbg">
                                    <div className="row">
                                        <div className="col-md-12">
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
                    </div> */}
          <Footerscreen />
          <div>
            <ScrollUpButton />
          </div>
        </div>
      </div>
    );
  }
}
