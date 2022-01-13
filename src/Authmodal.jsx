import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

function Auth() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
      <div>
        <Button variant="info" className="float-right" onClick={handleShow}>
          Login
        </Button>
        <h6 className="float-center mt-3 user-style">Sanjeev</h6>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Textbox
                attributesInput={{ // Optional.
                  id: 'Username',
                  name: 'Username',
                  type: 'text',
                  placeholder: 'Username',
                }}
                // Optional.[String].Default: "".
                onChange={(username, e) => {
                  this.setState({ username });
                  console.log(e);
                }} // Required.[Func].Default: () => {}. Will return the value.
                onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  name: 'Username', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                  check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                  required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                }}
              />

              <Textbox
                attributesInput={{ // Optional.
                  id: 'Password',
                  name: 'Password',
                  type: 'password',
                  placeholder: 'Password',
                }}
                // Optional.[String].Default: "".
                onChange={(password, e) => {
                  this.setState({ password });
                  console.log(e);
                }} // Required.[Func].Default: () => {}. Will return the value.
                onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                validationOption={{
                  name: 'Password', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                  check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                  required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                }}
              />
        


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <div className={`${CSS['my-button']} ${CSS['my-button__red']} ${CSS['save-button']}`} onClick={this.validateForm}>
              validate
            </div>
            <input type="submit" style={{ display: 'none' }} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  //render(<Auth />);
  export default Auth;