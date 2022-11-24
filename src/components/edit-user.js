import React, {useEffect, useState} from "react";
import {updateUser, getUser} from "../services/users-http.service";
import {Button, TextField} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';
import { Link } from 'react-router-dom'


const EditUser = (props) => {
    const initialUserState = {
        id: null,
        fname: "",
        lname: "",
        email: "",
        password: ""
    }
    const [currentUser, setCurrentUser] = useState(initialUserState);
    const [message, setMessage] = useState("");

    const getUser = (id) => {
        getUser(id)
            .then(response => {
                setCurrentUser(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getUser(props.id);
    }, [props.id]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCurrentUser({...currentUser, [name]: value});
    }

    const SUCupdateUser = () => {
        updateUser(currentUser.id, currentUser)
            .then(response => {
                console.log(response.data);
                setMessage("The user was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    }
    
    return (
        <h1>hi</h1>
        // <div>
        //     {currentUser ? (
        //         <div className="edit-form">
        //             <h4>User</h4>
        //             <form>
        //                 <div className="form-group">
        //                     <label htmlFor="fname">First Name</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="fname"
        //                         value={currentUser.fname}
        //                         onChange={handleInputChange}
        //                         name="fname"
        //                     />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="lname">Last Name</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="lname"
        //                         value={currentUser.lname}
        //                         onChange={handleInputChange}
        //                         name="lname"
        //                     />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="email">Email</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="email"
        //                         value={currentUser.email}
        //                         onChange={handleInputChange}
        //                         name="email"
        //                     />
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="password">Password</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="password"
        //                         value={currentUser.password}
        //                         onChange={handleInputChange}
        //                         name="password"
        //                     />
        //                 </div>
        //             </form>
        //             <Button variant="contained" onClick={updateUser}>Update User</Button>
        //             <Button variant="contained" component={Link} to="/home">Cancel</Button>
        //             <p>{message}</p>
        //         </div>
        //     ) : (
        //         <div>
        //             <br/>
        //             <p>Please click on a User...</p>
        //         </div>
        //     )}
        // </div>
    );
}

export default EditUser;

    