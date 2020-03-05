import React from 'react';
import Link from 'react-router-dom/Link';

// MUI imports
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade("#E7E7E7", 1),
      '&:hover': {
        backgroundColor: fade("#f1f1f1", 1),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000000'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
      color: '#000000',
    },
  }));

export default function Navbar() {
    const classes = useStyles();
    return (
            <AppBar>
                <ToolBar>
                    <IconButton color="inherit" component={Link} to="/">
                        <HomeIcon fontSize="large"/>
                    </IconButton>
                    <span className="Title">
                        CuyitoSpotting
                    </span>
                    <div className="Navbar-actions">
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button className="borderBtn" color="inherit" component={Link} to="/register">Register</Button>
                    </div>
                    <IconButton>
                        <AccountCircle/>
                    </IconButton>
                </ToolBar>
            </AppBar>
    )
}
