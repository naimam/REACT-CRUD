
// when click on this component, a form to add user will be displayed
import React, {useState} from "react";
import {createUser} from "../services/users-http.service";
import {Button, TextField} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';


const AddUser = () => {
    const initialUserState= {
        id: "",
        fname: "",
        lname: "",
        email: "",
        password: ""
    }
    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    const saveUser = () => {
        const {fname, lname, email, password} = user;

        createUser({fname, lname, email, password})
            .then(response => {
                setUser({
                    id: response.data.id,
                    fname: response.data.fname,
                    lname: response.data.lname,
                    email: response.data.email,
                    password: response.data.password
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
    }


    // cannot be null or empty
    const validate = () => {
        if (user.fname === "" || user.lname === "" || user.email === "" || user.password === "") {
            return true;
        }
        return false;
    }


    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>User added successfully!</h4> <br/>
                    <Button variant="contained" onClick={newUser}>Add Another User</Button> <br/> <br/>
                    <Button variant="contained" component={Link} to="/home">User List</Button>
                    
                </div>
            ) : (
                <div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" name="fname" value={user.fname} onChange={handleInputChange} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" name="lname" value={user.lname} onChange={handleInputChange} required/>
                            </Form.Group>

                        </Row>

                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleInputChange} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password" value={user.password} onChange={handleInputChange} required/>
                        </Form.Group>
                        <p style={{color:'gray'}}>Enter all fields to submit.</p>


                    </Form>
                    <Button variant="contained" disabled={validate()} onClick={saveUser}>Submit</Button>


                    
{/* 
                   
                    <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                name="fname"
                                value={user.fname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                                name="lname"
                                value={user.lname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required    
                                id="outlined-required"
                                label="Email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button variant="contained" onClick={saveUser}>Submit</Button> */}





                </div>
            )}
        </div>
    );

}

export default AddUser;

