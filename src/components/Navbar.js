import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// MUI imports
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

export class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <ToolBar>
                    <IconButton color="inherit" component={Link} to="/">
                        <HomeIcon fontSize="large"/>
                    </IconButton>
                    <span className="Title">
                        CuyitoSpotting
                    </span>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/register">Register</Button>
                </ToolBar>
            </AppBar>
        )
    }
}

export default Navbar
