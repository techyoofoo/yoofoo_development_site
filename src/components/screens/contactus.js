import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Zoom, Fade, Slide, Bounce } from 'react-reveal';
import '../styles/styles.css';
import Footerscreen from '../screens/footer';
import HeaderMenuscreen from '../screens/headermenu';

export default class ContactUsscreen extends Component {    
    render() {
        const BASE_URL = '#'
        return (
            <div>
                <div>
                   <HeaderMenuscreen />
                    <div className="col-md-12 col-sm-12 paddinglr ">
                        <div className="row contactus">
                            <div className="col-md-7">
                                <Fade top>
                                    <div className="Contactbannerhdr">
                                        <span className="Contactbannerhdr2">YooFoo </span> is an
                                        <span className="Contactbannerhdr1"> International Company</span> that Specializes in
                                        <span className="Contactbannerhdr4"> Creating and Maintaining</span>
                                        <span className="Contactbannerhdr2"> Innovative Information</span>
                                        <span className="Contactbannerhdr4"> Technology Solutions.</span></div>
                                </Fade>
                            </div>
                            <div className="col-md-4 contactfrom">
                                <div className="Getinhdr">Get In Touch</div>
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
                            <div className="col-md-1">
                            </div>
                        </div>
                        <div className="row contactfrom">
                            <div className="col-md-6">
                                <div className="faicons"><i className='fas fa-map-marker-alt'></i></div>
                                <div className="row">
                                    <div className="col-md-12"><div className="address_hdr">Address</div></div>
                                    <div className="col-md-5">
                                        <div className="address_hdr1">UNITED STATES</div>
                                        <div className="address_p">YooFoo, LLC.</div>
                                        <div className="address_p">9192 South 300 West Suite 3</div>
                                        <div className="address_p">Sandy, Utah 84070</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="address_hdr1">INDIA</div>
                                        <div className="address_p">YooFoo Technologies India Pvt Ltd.</div>
                                        <div className="address_p">Vatika Business Centre, </div>
                                        <div className="address_p">Divya Sree building, kondapur</div>
                                        <div className="address_p">Hyderabad-Telangana - 500081</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="faicons"><i className='fas fa-envelope-open'></i></div>
                                <div className="address_hdr">Email</div>
                                <div className="address_hdr1"><a href={BASE_URL}>info@yoofoo.com</a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="faicons"><i className='fas fa-phone-volume'></i></div>
                                <div className="address_hdr">Phone</div>
                                <div className="address_p"><div><div> <img className="flagdiv" src="../../assets/usa.png" alt="ourservice2"></img></div></div> +1-800-741-8264</div>
                                <div className="address_p"><div> <img className="flagdiv" src="../../assets/india.png" alt="ourservice2"></img></div> 040-71055788</div>
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