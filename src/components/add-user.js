
// when click on this component, a form to add user will be displayed
import React, {useState} from "react";
import {createUser} from "../services/users-http.service";
import {Button, TextField} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';
import { Link } from 'react-router-dom'

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

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <Button variant="contained" onClick={newUser}>Add Another User</Button>
                    <Button variant="contained" component={Link} to="/home">User List</Button>
                    
                </div>
            ) : (
                <div>
                   
                   
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
                        <Button variant="contained" onClick={saveUser}>Submit</Button>
                </div>
            )}
        </div>
    );

}

export default AddUser;

