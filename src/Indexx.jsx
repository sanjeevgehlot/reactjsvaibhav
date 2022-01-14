import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function Indexx(props){
    const [show, setShow] = useState(false);
        return(


     <div>       


    <section className="content_area">
        <div className="container-fluid p_lr_0">
            <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <div className="left_sidebar">
                        <ul className="sidebar_menu no_ul">
                            <li>
                                <a href="#"
                                    className="active f16 d-flex justify-content-between color_black"><span>Home</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                                            viewBox="0 0 11.747 11.747">
                                            <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                                transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                                fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2.5" />
                                        </svg>
                                    </span> </a>
                            </li>
                            <li>
                                <a href="#" className="f16 d-flex justify-content-between color_black"><span>Driver</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                                            viewBox="0 0 11.747 11.747">
                                            <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                                transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                                fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2.5" />
                                        </svg>
                                    </span> </a>
                            </li>
                            <li>
                                <a href="#" className="f16 d-flex justify-content-between color_black"><span>Manifest</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                                            viewBox="0 0 11.747 11.747">
                                            <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                                transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                                fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2.5" />
                                        </svg>
                                    </span> </a>
                            </li>
                            <li>
                                <a href="#" className="f16 d-flex justify-content-between color_black"><span>Orders</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                                            viewBox="0 0 11.747 11.747">
                                            <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                                transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                                fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2.5" />
                                        </svg>
                                    </span> </a>
                            </li>
                            <li>
                                <a href="#" className="f16 d-flex justify-content-between color_black"><span>Help</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                                            viewBox="0 0 11.747 11.747">
                                            <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                                transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                                fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2.5" />
                                        </svg>
                                    </span> </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-9 col-lg-9 col-xl-9">
                    <div className="map-cover position-relative">
                        <div className="position-absolute form_top w-100">
                            <form>
                                <div className="d-flex align-items-center filter_form justify-content-end p_r_15">
                                    <div className="m_r_8">
                                        <div className=" m_b_0 src position-relative removeMargin">
                                            <input type="search" placeholder="search here" />
                                            <svg className="src_icon position-absolute" data-name="Group 10163"
                                                xmlns="http://www.w3.org/2000/svg" width="20.771" height="20.77"
                                                viewBox="0 0 20.771 20.77">
                                                <path className="Path_6852" data-name="Path 6852"
                                                    d="M20.517,19.3,14.61,13.389a8.237,8.237,0,1,0-1.224,1.224l5.907,5.907A.865.865,0,1,0,20.517,19.3Zm-12.3-4.581a6.491,6.491,0,1,1,6.491-6.491A6.5,6.5,0,0,1,8.222,14.715Z"
                                                    transform="translate(0 -0.003)" fill="#8f9198"></path>
                                            </svg>


                                        </div>
                                    </div>

                                    <div>
                                        <div className=" m_b_0 flt">
                                            <button><svg xmlns="http://www.w3.org/2000/svg" width="20.938"
                                                    height="21.402" viewBox="0 0 20.938 21.402">
                                                    <g className="Group_10164" data-name="Group 10164"
                                                        transform="translate(0.517 0.5)">
                                                        <path id="filter"
                                                            d="M19.542,0H1.353A.854.854,0,0,0,.591.464a.866.866,0,0,0,.067.9l6.664,9.387.007.01a1.9,1.9,0,0,1,.374,1.13v7.653a.851.851,0,0,0,.851.856.876.876,0,0,0,.336-.067l3.745-1.428a.811.811,0,0,0,.558-.8V11.892a1.9,1.9,0,0,1,.374-1.13l.007-.01,6.664-9.388a.866.866,0,0,0,.067-.9A.855.855,0,0,0,19.542,0ZM12.731,10.149a2.948,2.948,0,0,0-.575,1.743v6.089l-3.418,1.3V11.892a2.947,2.947,0,0,0-.575-1.743L1.695,1.035H19.2Zm0,0"
                                                            transform="translate(-0.496 0)" fill="#c4c3c6"
                                                            stroke="#c4c3c6" strokeWidth="1"></path>
                                                    </g>
                                                </svg>
                                                <span>Filter</span> </button>
                                        </div>
                                    </div>


                                </div>
                            </form>
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.185364430251!2d88.36282641449756!3d22.53472798520226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276df28f85b29%3A0x542014ac191b5620!2sParis%20Cafe!5e0!3m2!1sen!2sin!4v1619730314919!5m2!1sen!2sin"
                            width="100%" height="100%" className="iframeStyle" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
  </div>                                       
                                         

        );
}

export default Indexx;