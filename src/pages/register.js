import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

export class register extends Component {
    render() {
        return (
            <div className="content-box">
                <h2 className="login-title">
                    Login
                </h2>
                <div className="login-form-container">
                    <h4 className="username-label">Username</h4>
                    <Input className="login-inputs" placeholder="User" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">Name</h4>
                    <Input className="login-inputs" placeholder="name" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">Last Name</h4>
                    <Input className="login-inputs" placeholder="50 char max" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">E-mail</h4>
                    <Input className="login-inputs" placeholder="example@domain.com" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">Password</h4>
                    <Input className="login-inputs" placeholder="********" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">Phone Number *</h4>
                    <Input className="login-inputs" placeholder="555-example-1010" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">Address *</h4>
                    <Input className="login-inputs" placeholder="" inputProps={{ 'aria-label': 'description' }} fullWidth={true}/>
                    <h4 className="password-label">* Optional</h4>
                    <div className="upload-files">
                        <AccountCircle/>
                        <div>
                            <h5 className="upload-label">Profile Picture</h5>
                            <Button variant="contained" size="medium" className="">
                                Choose a file
                            </Button>
                            <h5 className="upload-label">Banner Picture</h5>
                            <Button variant="contained" size="medium" className="">
                                Choose a file
                            </Button>
                        </div>
                    </div>
                    <Button variant="contained" size="large" className="login-button">
                        Register
                    </Button>
                    
                </div>
            </div>
        )
    }
}

export default register