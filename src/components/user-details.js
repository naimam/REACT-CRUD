import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';

import {getUser, updateUser, deleteUser} from '../services/users-http.service';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemIcon from '@mui/material/ListItemIcon';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import {Button, TextField} from "@mui/material";


const UserDetails = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(props.id).then(response => {
            setUser(response.data);
            console.log("User Details: ", response.data);
            console.log(response.data);
        });
    }, [props.id]);

    //    handle delete and reload page
    const handleDelete = (id) => {
        deleteUser(id).then(response => {
            console.log(response.data);
            window.location.reload();
        });
    }

    // editing user:
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    const SucUpdateUser = () => {
        updateUser(user.id, user)
            .then(response => {
                console.log(response.data);
                console.log("The user was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    }



    // toggle edit form
        const [isShown, setIsShown] = useState(false);
        const handleClick = event => {
          setIsShown(current => !current);
        };

    return (

        <div key={user.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={user.fname + " " + user.lname} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.fname + " " + user.lname}
                                secondary={user.email}
                            />
                            {/* Update Button onclick  */}  
                            <IconButton aria-label="edit" onClick={handleClick}>
                                <EditIcon />
                            </IconButton>



                            {/* Delete Button */}
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.id)}>
                                <DeleteIcon />
                            </IconButton>

                        </ListItem>

            {/*  show hide edit */}
            {isShown && 

            <>
              <Box 
                sx={{  
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"  id="fname" onChange={handleInputChange} name="fname" value={user.fname}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"  id="lname" onChange={handleInputChange} name="lname" value={user.lname}/>
                    </Form.Group>

            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  id="email" onChange={handleInputChange} name="email" value={user.email}/>
                </Form.Group>

            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  id="password" onChange={handleInputChange} name="password" value={user.password}/>
                </Form.Group>
            </Row>
            <br/>
            <Button variant="contained" type="submit" onClick={SucUpdateUser}>
                Submit
            </Button>
            
            </Form>
            

        </Box>
        <br/><br/>
            </>
            
            
            }
            

            <Divider variant="inset" component="li" />

        </div>

    );
}




export default UserDetails;