import React from "react";
import { Button, Card } from 'react-bootstrap';

class Sidebar extends React.Component {

    state = {
        show: true,
      }
    
        toggle = () => this.setState((currentState) => ({show: !currentState.show}));


    render() {
        return(

                <div className="sidebar" data-color="white" data-active-color="danger">
                    <div className="logo">

                    <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                    <img src="../assets/img/logo-black (1).png" alt="" />
                    </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                        <li>
                            <a href="javascript:;">
                            <p>Dashboard</p>
                            </a>
                        </li>
                        <li >
                            <a className="trans" href="javascript:;" onClick={this.toggle}>
                            
                                Widget
                            </a>
                            {this.state.show && <ul className="left-side-bar">
                                <li className="active"><a className="trans submenus" href="#">Style</a></li>
                                <li ><a className="trans submenus" href="#">Calender</a></li>
                            </ul>}
                            

                        </li>
                        <li>
                            <a href="javascript:;">
                            <p>Notifications</p>
                            </a>
                        </li>
                        <li >
                            <a href="./embed">
                            <p>Embed</p>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>

                );
    }
}

export default Sidebar;