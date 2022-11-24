import Navbar from '../components/navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from '../components/user-list';
import Box from '@mui/material/Box';
import '../App.css';
import AddUser from "../components/add-user";
import Typography from '@mui/material/Typography';


const NewUser = () => {
    return (
        <>
               <Navbar/>

                <Box 
                    sx={{  
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                      <Typography variant="h3" component="h3" sx={{marginTop:'30px', marginBottom:'30px', color:"#6da37c"}}>
                USER LIST
            </Typography>


            <AddUser/>

                </Box>
        </>
    );
}

export default NewUser;