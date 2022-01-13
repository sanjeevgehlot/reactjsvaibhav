import React from "react";
import { Button, Card } from 'react-bootstrap';

function Login(props){
        return(


            
      <div className="container-fluid p_lr_0">
        <div className="row">
            <div className="col-lg-5 bg_white">
                <div className="login_wrapper">
                    <img src="../assets/img/logo.png" alt="" />

                    <div className="welcome">
                        <div className="flex-vertical-center">
                            <div className="m_b_30">
                                <h4 className="f30 f300 color_black">Welcome</h4>
                                <h2 className="f40 f700 color_black">Login Your Account</h2>
                            </div>

                            <div className="btn_divi">
                                <a href="#" className="btn_theme d-block text-center">Login</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-lg-7">
                <img className="h-100vh w-100" src="../assets/img/login.jpg" alt="" />
            </div>
        </div>
      </div>
                                         
                                         

        );
}

export default Login;