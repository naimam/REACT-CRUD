import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from '../components/user-list';
import Box from '@mui/material/Box';
import '../App.css';


const Home = function () {


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
        
           
            <UserList/>





            </Box>
        </>
    );

};

export default Home;

