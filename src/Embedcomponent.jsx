import React from "react";
import { Button, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Nav from './Nav';

class Embedcomponent extends React.Component {

  state = {
      show: false,
    }
  
      toggle = () => this.setState((currentState) => ({show: !currentState.show}));


  render() {
        return(


            
         <div className="wrapper ">
         

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
                            {this.state.show && <ul>
                                <li ><a className="trans" href="./style">Style</a></li>
                                <li ><a className="trans" href="#">Calender</a></li>
                            </ul>}
                            

                        </li>
                        <li>
                            <a href="javascript:;">
                            <p>Notifications</p>
                            </a>
                        </li>
                        <li className="active ">
                            <a href="./embed">
                            <p>Embed</p>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>




         <div className="main-panel">

         <Nav/>

       <div className="content">
         <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-12">
             <div className="card card-stats">
               <div className="card-body ">
                 <p className="d-flex"> Select the website type  <select className="form-control form-control-sm ">
                     <option>SquareSpace</option>
                   </select>
                 </p>
               </div>
 
             </div>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             <div className="card ">
               <div className="card-header ">
                 <h5 className="card-title">Steps to embed our code in SquareSpace</h5>
                 <div className="row">
                   <div className="col-lg-12 col-md-12 col-sm-12">
                     <div className="Embed-Block-area">
                       <h6>Add an Embed Block</h6>
                       <br/>
                       <ul>
                         <li>Edit a page or post, click an insert point, and click Embed. For help, visit Adding content
                           with blocks.</li>
                         <li> Enter the URL of the item you're embedding. You'll need a URL from a site that uses the
                           oEmbed standard.</li>
                         <li> If the content doesn't appear, click in the block editor on a computer (or Code in the
                           Squarespace app) and paste an embed code manually into the text field.</li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="row pt-5">
                   <div className="col-lg-6 col-md-6 col-sm-12 height-total">
                     <div className="Embed-Block-area">
                       <h6>Troubleshooting</h6>
                       <br/>
                       <span>Error message: Enter a valid embed URL or code</span>
                       <p> This messages displays if there's an error with the embed URL or code. To fix the issue:</p>
                       <ul>
                         <li>Open the Embed Block.</li>
                         <li> Add a valid URL or embed code.</li>
                         <li> When a valid URL or code is entered, a "Successfully Located" message will display below.
                         </li>
                       </ul>
                       <p>If your embed code still isn't working, we recommend contacting the third-party service that
                         provided the code for help.</p>
                       <h6>Embedded content isn't displaying</h6>
                       <p>As a security measure, sometimes embedded code or content doesn't appear when you're logged in.
                         As long as the code is valid, it should display to visitors. To check that visitors can see it,
                         try logging out of your site and visiting it, or opening it in an incognito window.</p>
                       <p>If you still can't see it, there's probably something wrong with the code. We recommend
                         contacting the third-party service that provided the code for help.
 
                       </p>
                     </div>
                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-12 pl-2 pr-2">
                   <img src="../assets/img/image 16.svg" alt="" className="imgPaddingLeft"/>
                   <img src="../assets/img/Polygon-bottom.png" alt="" className="imgPaddingLeft"/>
                   </div>
 
                 </div>
               </div>
             </div>
           </div>
 
         </div>
 
       </div>
     
         </div>
       </div>
                                         
                                         

        );
}

}

export default Embedcomponent;