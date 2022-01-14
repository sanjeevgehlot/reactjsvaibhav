import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function Header(props){
    const [show, setShow] = useState(false);
        return(


     <div>       
      <header>
        <section className="main_header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-xl-4">
                        <div className="d-flex align-items-center">
                            <div onClick={() => setShow(true)}
                                className="menu_toggler navbar-btn pull-right">
                                <svg className="menu_1_" data-name="menu (1)" xmlns="http://www.w3.org/2000/svg" width="31"
                                    height="22" viewBox="0 0 31.2 22.533">
                                    <path id="Path_6853" data-name="Path 6853"
                                        d="M29.9,125.268H1.3a1.3,1.3,0,1,1,0-2.6H29.9a1.3,1.3,0,1,1,0,2.6Zm0,0"
                                        transform="translate(0 -112.701)" />
                                    <path id="Path_6854" data-name="Path 6854"
                                        d="M29.9,2.6H1.3A1.3,1.3,0,0,1,1.3,0H29.9a1.3,1.3,0,0,1,0,2.6Zm0,0" />
                                    <path id="Path_6855" data-name="Path 6855"
                                        d="M29.9,247.932H1.3a1.3,1.3,0,1,1,0-2.6H29.9a1.3,1.3,0,1,1,0,2.6Zm0,0"
                                        transform="translate(0 -225.399)" />
                                </svg>

                            </div>
                            <div className="title_logo">
                                <h5 data-toggle="modal" data-target="#sidebar-right"
                                    className="f30 f500 color_black  navbar-btn pull-left">Delivery Management</h5>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-xl-4 text-center">
                        <a href="#">
                            <img src="../assets/img/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 text-right">
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="m_r_20">
                                <div className="position-relative">
                                    <span className="org-circle">

                                    </span>
                                    <svg id="_004-alarm" data-name="004-alarm" xmlns="http://www.w3.org/2000/svg"
                                        width="32.271" height="28.237" viewBox="0 0 32.271 28.237">
                                        <path className="Path_6840" data-name="Path 6840"
                                            d="M78.1,48.943a7.01,7.01,0,0,1-.505-2.622V39.808a10.065,10.065,0,0,0-7.111-9.586,3.016,3.016,0,0,0-5.948,0,10.065,10.065,0,0,0-7.111,9.586v6.514a7.01,7.01,0,0,1-.505,2.622l-1.44,3.6a1.009,1.009,0,0,0,.937,1.383h7.666a3.92,3.92,0,0,0,6.854,0h7.666a1.009,1.009,0,0,0,.937-1.383ZM57.91,51.909l.887-2.218a9.033,9.033,0,0,0,.649-3.37V39.807a8.068,8.068,0,1,1,16.135,0v6.514a9.033,9.033,0,0,0,.649,3.37l.887,2.218Z"
                                            transform="translate(-51.379 -27.706)" fill="#232323" />
                                        <path className="Path_6841" data-name="Path 6841"
                                            d="M1.9,117.344a16.124,16.124,0,0,0,0,15.186l1.779-.949a14.114,14.114,0,0,1,0-13.287Z"
                                            transform="translate(0 -110.819)" fill="#232323" />
                                        <path className="Path_6842" data-name="Path 6842"
                                            d="M394.546,117.344l-1.779.949a14.114,14.114,0,0,1,0,13.287l1.779.949a16.124,16.124,0,0,0,0-15.186Z"
                                            transform="translate(-364.175 -110.819)" fill="#232323" />
                                    </svg>
                                </div>


                            </div>

                            <div className="m_r_20">
                                <div className="dropdown">
                                    <button className="dropdown-toggle f16 color_black" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Janie Wayne
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Admin</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something </a>
                                    </div>
                                </div>
                            </div>

                            <div className="diff">
                                <a href="#" className="text-center d-block">
                                    <svg id="logout" xmlns="http://www.w3.org/2000/svg" width="20.936" height="22.586"
                                        viewBox="0 0 20.936 22.586">
                                        <g className="Group_10089" data-name="Group 10089">
                                            <path className="Path_6844" data-name="Path 6844"
                                                d="M27.3,21.292H21.413a2.9,2.9,0,0,1-2.9-2.9V4.194a2.9,2.9,0,0,1,2.9-2.9H27.4A.647.647,0,1,0,27.4,0H21.413a4.2,4.2,0,0,0-4.194,4.194v14.2a4.2,4.2,0,0,0,4.194,4.194H27.3a.647.647,0,1,0,0-1.294Z"
                                                transform="translate(-17.219)" fill="#8f9198" />
                                            <path className="Path_6845" data-name="Path 6845"
                                                d="M136.313,140.628l-4.113-4.113a.647.647,0,0,0-.916.916l3.01,3.01H121.166a.647.647,0,0,0,0,1.294H134.3l-3.01,3.01a.65.65,0,0,0,.455,1.107.631.631,0,0,0,.455-.192l4.113-4.113A.647.647,0,0,0,136.313,140.628Z"
                                                transform="translate(-115.567 -129.79)" fill="#8f9198" />
                                        </g>
                                    </svg>
                                    <div className="f16 color_grey">
                                        Logout
                                    </div>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bread_crumb">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="bread_crumb">
                            <h4 className="f30 color_white">Home</h4>
                            <ul className="no_ul d-flex m_b_0">
                                <li className="m_r_8"><a href="#" className="color_white f16">Admin Panel</a></li>
                                <li className="m_r_8"> <svg xmlns="http://www.w3.org/2000/svg" width="11.747"
                                        height="11.747" viewBox="0 0 11.747 11.747">
                                        <path className="Path_6866" data-name="Path 6866" d="M0,0V5.8H5.811"
                                            transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)" fill="none"
                                            stroke="#b7b7b7" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2.5" />
                                    </svg>
                                </li>
                                <li><span className="color_white f16">Home</span></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="295" height="52" viewBox="0 0 295 52">
                            <g id="Group_10159" data-name="Group 10159" transform="translate(-0.432)">
                                <g id="Group_10157" data-name="Group 10157">
                                    <g id="Group_10114" data-name="Group 10114">
                                        <rect id="Rectangle_2324" data-name="Rectangle 2324" width="295" height="52"
                                            rx="10" transform="translate(0.432)" fill="#f8f5f5" />
                                    </g>
                                    <text id="Activity_Feed" data-name="Activity Feed" transform="translate(57.432 32)"
                                        fill="#232323" fontSize="14" fontFamily="OpenSans-Light, Open Sans"
                                        fontWeight="300">
                                        <tspan x="0" y="0">Activity Feed</tspan>
                                    </text>
                                </g>
                                <path id="flash"
                                    d="M15.651,10.149H9.677l5.159-9.071A.721.721,0,0,0,14.208,0H5.55a.721.721,0,0,0-.685.494L.537,13.529a.721.721,0,0,0,.685.949H7.344l-3.9,9.144a.722.722,0,0,0,1.2.762L16.191,11.349a.722.722,0,0,0-.54-1.2ZM6.516,20.1,9.1,14.039a.722.722,0,0,0-.664-1H2.221L6.071,1.443h6.9L7.809,10.514a.722.722,0,0,0,.627,1.078h5.612Zm0,0"
                                    transform="translate(22.046 15.644)" fill="#8f9198" />
                                <g id="Group_10158" data-name="Group 10158" transform="translate(242 7)">
                                    <circle id="Ellipse_496" data-name="Ellipse 496" cx="19.5" cy="19.5" r="19.5"
                                        transform="translate(0.432)" fill="#d35b30" />
                                    <text id="_17" data-name="17" transform="translate(11.432 25)" fill="#fff"
                                        fontSize="14" fontFamily="OpenSans-Light, Open Sans" fontWeight="300">
                                        <tspan x="0" y="0">17</tspan>
                                    </text>
                                </g>
                            </g>
                        </svg>

                    </div>
                </div>
            </div>
        </section>

    </header>

    
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      className="modalStyle">
        <Modal.Header closeButton className="d-flex align-items-center p-20">
          <Modal.Title id="example-custom-modal-styling-title">
            <strong>All Modules</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="sidebar_menu menu_modal no_ul p-0">
                        <li>
                            <a href="#" className="active f16 d-flex color_black"><span>Admin
                                Panel</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="f16 d-flex color_black"><span>Delivery
                                    Management</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="f16 d-flex color_black"><span>HR Admin</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="f16 d-flex color_black"><span>Database</span>
                            </a>
                        </li>
                        <li>
                            <a href="dashboard12" className="f16 d-flex color_black"><span>Driver
                                    Management</span>
                            </a>
                        </li>
                    </ul>
        </Modal.Body>
      </Modal>





    
    
  </div>                                       
                                         

        );
}

export default Header;