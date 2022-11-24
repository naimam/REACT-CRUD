import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = function () {

    // login form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // login status
    const [loggedIn, setLoggedIn] = useState(false);

    // login error
    const [loginError, setLoginError] = useState('');

    // login form submit handler
    const handleLogin = function (e) {
        e.preventDefault();
        console.log('username', username);
        console.log
        ('password',password);
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
            setLoginError('');
            // redirect to home page
            window.location.href = '/home';
        }
        else {
            setLoginError('Invalid username or password!');
        }
    }

    // login form change handler
    const handleUsernameChange = function (e) {
        setUsername(e.target.value);
    }

    // login form change handler
    const handlePasswordChange = function (e) {
        setPassword(e.target.value);
    }

    return (
        <>
        <Container className="mt-4">
            <h1>Login</h1>
           

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {loginError && <p style={{color:'red'}}>{loginError}</p>}
            {loggedIn && <p style={{color:'green'}}>Logged in successfully!</p>}
        </Container>

        </>
    );
  
};

export default Login;

