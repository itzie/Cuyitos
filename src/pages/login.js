import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Cuyitos = require('../assets/manyCuyitos.png');


export class login extends Component {
    render() {
        return (
            <div className="content-box">
                <h2 className="login-title">
                    Login
                </h2>
                <div className="login-form-container">
                    <h4 className="username-label">Username</h4>
                    <Input className="login-inputs" placeholder="Username or Password" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">Password</h4>
                    <Input className="login-inputs" placeholder="********" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <Button variant="contained" size="large" className="login-button">
                        Login
                    </Button>
                    <img src={Cuyitos} className="cuyitos-img" alt={"cuyitos"}/>
                </div>
            </div>
        )
    }
}

export default login