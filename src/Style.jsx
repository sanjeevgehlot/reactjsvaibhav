import React from "react";
import { Button, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Nav from './Nav';

function Style(props){
        return(


            
         <div className="wrapper ">
         

         <Sidebar/>




         <div className="main-panel">

         <Nav/>

         <div className="content">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="style-section">
                            <div className="row">
                                <div className=" col-md-5 col-sm-12">
                                    <div className="d-flex">
                                        <span>s</span>
                                        <form>
                                            <div className="formStyle">
                                                <label htmlFor="exampleInputEmail1">Primary Colour</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" placeholder="#3C266F" />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className=" col-md-5 col-sm-12">
                                    <div className="d-flex">
                                        <span className="black">s</span>
                                        <form>
                                            <div className="formStyle">
                                                <label htmlFor="exampleInputEmail2">secondory Colour</label>
                                                <input type="text" className="form-control" id="exampleInputEmail2"
                                                    aria-describedby="emailHelp" placeholder="#000000" />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className=" col-md-2 col-sm-12">
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 m-auto">
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h5 className="card-title">Widget Preview</h5>
                                        </div>
                                        <div className="object-area text-center">
                                            <img src="../assets/img/Ellipse 41.png" alt=""
                                                className="base-Ellipse img-fluid" />
                                            <img src="../assets/img/logo-new-icon.png" alt=""
                                                className="upper-object img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-12 col-sm-12 pt-4">
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h5 className="card-title">Widget Preview on website</h5>
                                        </div>
                                        <div className="object-area text-center">
                                            <img src="../assets/img/Screen Shot 2021-03-11 at 8.11.png" alt=""
                                                className=" website img-fluid" />
                                                <div className="object-area text-center">
                                                    <img src="../assets/img/Ellipse 41-img.png" alt=""
                                                        className="base-Ellipse-webside" />
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                        <div className="card card-stats margin-class">
                            <div className="card-body ">
                                <div className="right-bar">
                                    <h5 className="card-title">Fonts Available</h5>
                                    <p>Choose the perfect font matches for you</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-bar-item">
                            <ul>
                                <li className="active">
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li >
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                                <li>
                                    <a href="">Adamina</a>
                                </li>
                                <li>
                                    <a href="">Abeezee</a>
                                </li>
                            </ul>
            

                        </div>
                    </div>


                </div>

            </div>
     
         </div>
       </div>
                                         
                                         

        );
}

export default Style;