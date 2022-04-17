import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import tinder_logo from './tinder_logo.png';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header(){
    return (
        <div className="header">
         
    <IconButton>
    <PersonIcon fontSize='large' className='header__icon' />
    </IconButton>

    <IconButton> <img 
    className='header__logo'
    src={tinder_logo}
    alt='LOGO'
    />
    </IconButton>
   
    <IconButton>
    <ForumIcon fontSize='large'  className='header__icon' />
    </IconButton>
    

        </div>
    );
}

export default Header;