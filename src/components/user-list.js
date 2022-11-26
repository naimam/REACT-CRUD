import React, {useEffect, useState} from "react";

import {getAllUsers} from "../services/users-http.service";
import UserDetails from "./user-details";
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import '../App.css';


const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data);
            console.log("Users: ", response.data);
            console.log(response.data);
        });
    }, []);

    // count number of users
    const countUsers = () => {
        let count = 0;
        users.forEach(user => {
            count++;
        });
        return count;
    }


        if (countUsers() === 0) {
            return (
                <>
                    <Typography variant="h3" component="h3" sx={{marginTop:'30px', color:"6da37c"}}>
                USER LIST
            </Typography>

                    <Typography variant="h5" component="h5" sx={{marginTop:'30px', color:"red"}}>
                No users found! Add one <a href="/new">here.</a>
            </Typography>
                </>
            );
        }
        

    return (
            <>
            <Typography variant="h3" component="h3" sx={{marginTop:'30px', color:"6da37c"}}>
                USER LIST
            </Typography>

            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                {users.map((user) => (
                    <UserDetails key={user.id} id={user.id}/>
                ))}
            </List>
            
            </>
    );

}

export default UserList;