import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function Dashboard12(props){
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
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
                        className="active f16 d-flex justify-content-between color_black">
                        <span>Home</span>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                              viewBox="0 0 11.747 11.747">
                              <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                 transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                 fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2.5" />
                           </svg>
                        </span>
                     </a>
                  </li>
                  <li>
                     <a onClick={() => setShow(true)} href="#" className="f16 d-flex justify-content-between color_black">
                        <span>Driver</span>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                              viewBox="0 0 11.747 11.747">
                              <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                 transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                 fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2.5" />
                           </svg>
                        </span>
                     </a>
                  </li>
                  <li>
                     <a onClick={() => setShow1(true)} href="#" className="f16 d-flex justify-content-between color_black">
                        <span>Manifest</span>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                              viewBox="0 0 11.747 11.747">
                              <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                 transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                 fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2.5" />
                           </svg>
                        </span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="f16 d-flex justify-content-between color_black">
                        <span>Orders</span>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                              viewBox="0 0 11.747 11.747">
                              <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                 transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                 fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2.5" />
                           </svg>
                        </span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="f16 d-flex justify-content-between color_black">
                        <span>Help</span>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="11.747" height="11.747"
                              viewBox="0 0 11.747 11.747">
                              <path className="Path_6881" data-name="Path 6881" d="M0,0V5.8H5.811"
                                 transform="matrix(-0.695, -0.719, 0.719, -0.695, 5.804, 9.98)"
                                 fill="none" stroke="#b7b7b7" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2.5" />
                           </svg>
                        </span>
                     </a>
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
                              <button>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20.938"
                                    height="21.402" viewBox="0 0 20.938 21.402">
                                    <g className="Group_10164" data-name="Group 10164"
                                       transform="translate(0.517 0.5)">
                                       <path id="filter"
                                          d="M19.542,0H1.353A.854.854,0,0,0,.591.464a.866.866,0,0,0,.067.9l6.664,9.387.007.01a1.9,1.9,0,0,1,.374,1.13v7.653a.851.851,0,0,0,.851.856.876.876,0,0,0,.336-.067l3.745-1.428a.811.811,0,0,0,.558-.8V11.892a1.9,1.9,0,0,1,.374-1.13l.007-.01,6.664-9.388a.866.866,0,0,0,.067-.9A.855.855,0,0,0,19.542,0ZM12.731,10.149a2.948,2.948,0,0,0-.575,1.743v6.089l-3.418,1.3V11.892a2.947,2.947,0,0,0-.575-1.743L1.695,1.035H19.2Zm0,0"
                                          transform="translate(-0.496 0)" fill="#c4c3c6"
                                          stroke="#c4c3c6" strokeWidth="1"></path>
                                    </g>
                                 </svg>
                                 <span>Filter</span> 
                              </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-12 col-lg-12 col-xl-12">
                  <div className="table-area">
                     <nav className="row align-items-center">
                        <div className="col-lg-12">
                           <ul className="table_menu d-flex no_ul m_b_0">
                              <li>
                                 <a href="dashboard10" className="active color_black f16 m_r_15">
                                 Add Driver
                                 </a>
                              </li>
                              <li>
                                 <a href="dashboard10" className="color_black f16 m_r_15">
                                 Delete Driver
                                 </a>
                              </li>
                              <li>
                                 <a href="dashboard10" className="color_black f16 m_r_15">
                                 Refresh
                                 </a>
                              </li>
                              <li>
                                 <a href="dashboard10" className="color_black f16 m_r_15">
                                 Edit
                                 </a>
                              </li>
                           </ul>
                        </div>
                        
                     </nav>
                     <div className="table-responsive table_content">
                        <table className="table table-striped">
                           <thead>
                              <tr>
                                 <th className="color-grey-dark">Driver Name</th>
                                 <th className="color-grey-dark">Vehicle Name</th>
                                 <th className="color-grey-dark">Validation</th>
                                 <th className="color-grey-dark">Licence</th>
                                 <th className="color-grey-dark">Action</th>
                              </tr>
                           </thead>
                           <tbody>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                    <tr>
                                        <td>Jonny Doe</td>
                                        <td>Benz HL100</td>
                                        <td>Approved</td>
                                        <td>Yes</td>
                                        <td><span className="action_part">Action</span></td>
                                    </tr>
                                </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>







<Modal style={{width: "400px", right: 0,left: "auto"}}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      className="modalStyle2 left_modal">
        <Modal.Header closeButton className="d-flex align-items-center p-20">
          <Modal.Title id="example-custom-modal-styling-title">
            <div className="d-flex p-20 justify-content-between">
                    <div>
                        <div className="d-flex">
                            <div className="m_r_20">
                                <img className="profile" src="../assets/img/men.png" alt="" />
                            </div>
                            <div>
                                <h5 className="f18 color_black f600">James Dew</h5>
                                <p className="f14 f300 color_grey">Active</p>
                                <p className="f14 f300 color_grey"><a href="tel:+61-458-4545"
                                        className="color_orange f14">+61-458-4545</a></p>
                            </div>
                        </div>
                    </div>

                    



                </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="no_ul tab_menu d-flex">
                        <li>
                            <a href="#" className="f14 color_black">Edit Profile</a>
                        </li>
                        <li>
                            <a href="#" className="f14 color_black">Delete Driver</a>
                        </li>
                        <li>
                            <a href="#" className="f14 color_black">Edit</a>
                        </li>
                        <li>
                            <a href="#" className="f14 color_black">Block User</a>
                        </li>
                    </ul>

                    <h3 className="f30 f700 color_black m_b_30">Checklist</h3>
                    <p className="f14 f700 color_grey">Add Question</p>

                    <form action="" className="m_b_30">
                        <div className=" m_b_30 src position-relative">

                            <input type="text" placeholder="Type Question" />


                        </div>
                        <div className="custom-control custom-checkbox m_b_10">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                            <label className="custom-control-label" for="customCheck1">Compulsory</label>
                        </div>

                        <div className="custom-control custom-checkbox m_b_30">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                            <label className="custom-control-label" for="customCheck2">Hide</label>
                        </div>

                        <div className="buttons">
                            <button type="submit" className="btn_org m_r_8">Add</button>
                            <button type="reset" className="btn_blue">Cancel</button>
                        </div>
                    </form>

                    <ul className="ques_list no_ul">
                        <li className=" f16 color_grey m_b_15"><span>Q1 :</span> <span>Do you have seat belts on all seats
                                of your
                                vehicle?</span></li>
                        <li className=" f16 color_grey m_b_15"><span>Q1 :</span> <span>Do you have seat belts on all seats
                                of your
                                vehicle?</span></li>
                        <li className=" f16 color_grey m_b_15"><span>Q1 :</span> <span>Do you have seat belts on all seats
                                of your
                                vehicle?</span></li>
                    </ul>
        </Modal.Body>
      </Modal>





      <Modal style={{width: "420px", right: 0,left: "auto"}}
        show={show1}
        onHide={() => setShow1(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      className="modalStyle2 left_modal">
        <Modal.Header closeButton className="d-flex align-items-center p-20">
          <Modal.Title id="example-custom-modal-styling-title">
            <div className="d-flex p-20 justify-content-between">
                    <div>
                        <div className="d-flex">
                            <div className="m_r_20">
                                <img className="profile" src="../assets/img/men.png" alt="" />
                            </div>
                            <div>
                                <h5 className="f18 color_black f600">James Dew</h5>
                                <p className="f14 f300 color_grey">Active</p>
                                <p className="f14 f300 color_grey"><a href="tel:+61-458-4545"
                                        className="color_orange f14">+61-458-4545</a></p>
                            </div>
                        </div>
                    </div>

                    



                </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{overflowY: "auto"}}>
                <div class="d-flex p-20 justify-content-between">    
                    <div>
                       <p className="f16 color_grey m_b_0">
                          Current order
                       </p>
                    </div>
                    <div>
                       <p className="f16 color_grey m_b_0">
                          Manifest - MKT0621
                       </p>
                    </div>
                </div>
                    <div className="short_map">
                       <img src="../assets/img/short_map.png" alt="" />
                    </div>
                    <div className="d-flex p-20 justify-content-between m_b_30">
                       <div>
                          <span className="f14 color_grey m_b_0">
                          Estimated Time
                          </span>
                          <span className="f14 color_grey m_b_0">
                          20 min
                          </span>
                       </div>
                       <div className="border_left">
                          <span className="f14 color_grey m_b_0">
                          Estimated Time
                          </span>
                          <span className="f14 color_grey m_b_0">
                          08 km
                          </span>
                       </div>
                    </div>
                    <div className="">
                       <h4 className="f16 color_grey">
                          Order Timeline
                       </h4>
                    </div>
                    <div className="d-flex border_top border_bottom">
                       <div className="m_r_8">
                          <img src="../assets/img/try.png" alt="" />
                       </div>
                       <div className="m_r_8">
                          <p className="f12 color_grey m_b_45">
                             11:00
                          </p>
                          <p className="f12 color_grey m_r_0">
                             14:20
                          </p>
                       </div>
                       <div>
                          <p className="f12 color_grey m_b_45">
                             Sentoskawa, Jersy
                          </p>
                          <p className="f12 color_grey">
                             Jerris Road, Alskwa
                          </p>
                       </div>
                       <div className="m_l_100">
                          <div className="m_b_10">
                             <a href="#" className="deliver">Delivered</a>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg id="clock_lined" data-name="clock lined" xmlns="http://www.w3.org/2000/svg"
                                   width="16" height="16" viewBox="0 0 16.694 16.694">
                                   <g className="Group_10228" data-name="Group 10228"
                                      transform="translate(7.701 3.873)">
                                      <g id="Group_10227" data-name="Group 10227">
                                         <path id="Path_6896" data-name="Path 6896"
                                            d="M239.79,124.727l-2.328-1.746v-3.556a.647.647,0,1,0-1.293,0V123.3a.645.645,0,0,0,.259.517l2.586,1.94a.647.647,0,0,0,.776-1.035Z"
                                            transform="translate(-236.169 -118.779)" />
                                      </g>
                                   </g>
                                   <g className="Group_10230" data-name="Group 10230">
                                      <g id="Group_10229" data-name="Group 10229">
                                         <path id="Path_6897" data-name="Path 6897"
                                            d="M8.347,0a8.347,8.347,0,1,0,8.347,8.347A8.356,8.356,0,0,0,8.347,0Zm0,15.4A7.054,7.054,0,1,1,15.4,8.347,7.063,7.063,0,0,1,8.347,15.4Z" />
                                      </g>
                                   </g>
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             1:12 hrs
                             </span>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                   viewBox="0 0 16.694 16.645">
                                   <path className="Path_6884" data-name="Path 6884"
                                      d="M36.665,33.272H28.03a2.3,2.3,0,0,1,0-4.605h9.856l-.863.863a.814.814,0,0,0,1.151,1.151l2.268-2.268a.863.863,0,0,0,0-1.221l-2.268-2.268a.814.814,0,0,0-1.151,1.151l.863.864H28.03a4.03,4.03,0,0,0,0,8.059h8.635a2.3,2.3,0,1,1,0,4.605H26.878a.863.863,0,1,0,0,1.727h9.786a4.03,4.03,0,1,0,0-8.059Z"
                                      transform="translate(-24 -24.686)" />
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             22 km
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className="d-flex border_top border_bottom">
                       <div className="m_r_8">
                          <img src="../assets/img/try.png" alt="" />
                       </div>
                       <div className="m_r_8">
                          <p className="f12 color_grey m_b_45">
                             11:00
                          </p>
                          <p className="f12 color_grey m_r_0">
                             14:20
                          </p>
                       </div>
                       <div>
                          <p className="f12 color_grey m_b_45">
                             Sentoskawa, Jersy
                          </p>
                          <p className="f12 color_grey">
                             Jerris Road, Alskwa
                          </p>
                       </div>
                       <div className="m_l_100">
                          <div className="m_b_10">
                             <a href="#" className="deliver">Delivered</a>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg id="clock_lined" data-name="clock lined" xmlns="http://www.w3.org/2000/svg"
                                   width="16" height="16" viewBox="0 0 16.694 16.694">
                                   <g className="Group_10228" data-name="Group 10228"
                                      transform="translate(7.701 3.873)">
                                      <g id="Group_10227" data-name="Group 10227">
                                         <path id="Path_6896" data-name="Path 6896"
                                            d="M239.79,124.727l-2.328-1.746v-3.556a.647.647,0,1,0-1.293,0V123.3a.645.645,0,0,0,.259.517l2.586,1.94a.647.647,0,0,0,.776-1.035Z"
                                            transform="translate(-236.169 -118.779)" />
                                      </g>
                                   </g>
                                   <g className="Group_10230" data-name="Group 10230">
                                      <g id="Group_10229" data-name="Group 10229">
                                         <path id="Path_6897" data-name="Path 6897"
                                            d="M8.347,0a8.347,8.347,0,1,0,8.347,8.347A8.356,8.356,0,0,0,8.347,0Zm0,15.4A7.054,7.054,0,1,1,15.4,8.347,7.063,7.063,0,0,1,8.347,15.4Z" />
                                      </g>
                                   </g>
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             1:12 hrs
                             </span>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                   viewBox="0 0 16.694 16.645">
                                   <path className="Path_6884" data-name="Path 6884"
                                      d="M36.665,33.272H28.03a2.3,2.3,0,0,1,0-4.605h9.856l-.863.863a.814.814,0,0,0,1.151,1.151l2.268-2.268a.863.863,0,0,0,0-1.221l-2.268-2.268a.814.814,0,0,0-1.151,1.151l.863.864H28.03a4.03,4.03,0,0,0,0,8.059h8.635a2.3,2.3,0,1,1,0,4.605H26.878a.863.863,0,1,0,0,1.727h9.786a4.03,4.03,0,1,0,0-8.059Z"
                                      transform="translate(-24 -24.686)" />
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             22 km
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className="d-flex border_top border_bottom">
                       <div className="m_r_8">
                          <img src="../assets/img/try.png" alt="" />
                       </div>
                       <div className="m_r_8">
                          <p className="f12 color_grey m_b_45">
                             11:00
                          </p>
                          <p className="f12 color_grey m_r_0">
                             14:20
                          </p>
                       </div>
                       <div>
                          <p className="f12 color_grey m_b_45">
                             Sentoskawa, Jersy
                          </p>
                          <p className="f12 color_grey">
                             Jerris Road, Alskwa
                          </p>
                       </div>
                       <div className="m_l_100">
                          <div className="m_b_10">
                             <a href="#" className="deliver">Delivered</a>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg id="clock_lined" data-name="clock lined" xmlns="http://www.w3.org/2000/svg"
                                   width="16" height="16" viewBox="0 0 16.694 16.694">
                                   <g className="Group_10228" data-name="Group 10228"
                                      transform="translate(7.701 3.873)">
                                      <g id="Group_10227" data-name="Group 10227">
                                         <path id="Path_6896" data-name="Path 6896"
                                            d="M239.79,124.727l-2.328-1.746v-3.556a.647.647,0,1,0-1.293,0V123.3a.645.645,0,0,0,.259.517l2.586,1.94a.647.647,0,0,0,.776-1.035Z"
                                            transform="translate(-236.169 -118.779)" />
                                      </g>
                                   </g>
                                   <g className="Group_10230" data-name="Group 10230">
                                      <g id="Group_10229" data-name="Group 10229">
                                         <path id="Path_6897" data-name="Path 6897"
                                            d="M8.347,0a8.347,8.347,0,1,0,8.347,8.347A8.356,8.356,0,0,0,8.347,0Zm0,15.4A7.054,7.054,0,1,1,15.4,8.347,7.063,7.063,0,0,1,8.347,15.4Z" />
                                      </g>
                                   </g>
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             1:12 hrs
                             </span>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                   viewBox="0 0 16.694 16.645">
                                   <path className="Path_6884" data-name="Path 6884"
                                      d="M36.665,33.272H28.03a2.3,2.3,0,0,1,0-4.605h9.856l-.863.863a.814.814,0,0,0,1.151,1.151l2.268-2.268a.863.863,0,0,0,0-1.221l-2.268-2.268a.814.814,0,0,0-1.151,1.151l.863.864H28.03a4.03,4.03,0,0,0,0,8.059h8.635a2.3,2.3,0,1,1,0,4.605H26.878a.863.863,0,1,0,0,1.727h9.786a4.03,4.03,0,1,0,0-8.059Z"
                                      transform="translate(-24 -24.686)" />
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             22 km
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className="d-flex border_top border_bottom">
                       <div className="m_r_8">
                          <img src="../assets/img/try.png" alt="" />
                       </div>
                       <div className="m_r_8">
                          <p className="f12 color_grey m_b_45">
                             11:00
                          </p>
                          <p className="f12 color_grey m_r_0">
                             14:20
                          </p>
                       </div>
                       <div>
                          <p className="f12 color_grey m_b_45">
                             Sentoskawa, Jersy
                          </p>
                          <p className="f12 color_grey">
                             Jerris Road, Alskwa
                          </p>
                       </div>
                       <div className="m_l_100">
                          <div className="m_b_10">
                             <a href="#" className="deliver">Delivered</a>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg id="clock_lined" data-name="clock lined" xmlns="http://www.w3.org/2000/svg"
                                   width="16" height="16" viewBox="0 0 16.694 16.694">
                                   <g className="Group_10228" data-name="Group 10228"
                                      transform="translate(7.701 3.873)">
                                      <g id="Group_10227" data-name="Group 10227">
                                         <path id="Path_6896" data-name="Path 6896"
                                            d="M239.79,124.727l-2.328-1.746v-3.556a.647.647,0,1,0-1.293,0V123.3a.645.645,0,0,0,.259.517l2.586,1.94a.647.647,0,0,0,.776-1.035Z"
                                            transform="translate(-236.169 -118.779)" />
                                      </g>
                                   </g>
                                   <g className="Group_10230" data-name="Group 10230">
                                      <g id="Group_10229" data-name="Group 10229">
                                         <path id="Path_6897" data-name="Path 6897"
                                            d="M8.347,0a8.347,8.347,0,1,0,8.347,8.347A8.356,8.356,0,0,0,8.347,0Zm0,15.4A7.054,7.054,0,1,1,15.4,8.347,7.063,7.063,0,0,1,8.347,15.4Z" />
                                      </g>
                                   </g>
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             1:12 hrs
                             </span>
                          </div>
                          <div className="">
                             <span className="m_r_8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                   viewBox="0 0 16.694 16.645">
                                   <path className="Path_6884" data-name="Path 6884"
                                      d="M36.665,33.272H28.03a2.3,2.3,0,0,1,0-4.605h9.856l-.863.863a.814.814,0,0,0,1.151,1.151l2.268-2.268a.863.863,0,0,0,0-1.221l-2.268-2.268a.814.814,0,0,0-1.151,1.151l.863.864H28.03a4.03,4.03,0,0,0,0,8.059h8.635a2.3,2.3,0,1,1,0,4.605H26.878a.863.863,0,1,0,0,1.727h9.786a4.03,4.03,0,1,0,0-8.059Z"
                                      transform="translate(-24 -24.686)" />
                                </svg>
                             </span>
                             <span className="f12 color_grey">
                             22 km
                             </span>
                          </div>
                       </div>
                    </div>
                
        </Modal.Body>
      </Modal>

          </div>                                       
                                         

        );
}

export default Dashboard12;