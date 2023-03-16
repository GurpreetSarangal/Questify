import logo1 from "../images/logo1.png";
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Button } from "@mui/material";
import "./css/QHeader.css";

function Header() {
  return (
    <div className='header'>
        <div className='header-content'>
            <div className='header-logo'>
                <img src={logo1} alt="" />
              </div>
                <div className="header-icons">
                    <div className="header-icon"><HomeIcon/></div>
                    <div className="header-icon"><FeaturedPlayListOutlinedIcon/></div>
                    <div className="header-icon"><AssignmentOutlinedIcon/></div>
                    <div className="header-icon"><PeopleAltOutlinedIcon/></div>
                    <div className="header-icon"><NotificationsOutlinedIcon/></div>
                    <div className="header-input"><SearchOutlinedIcon/>
                      <input type="text" placeholder="Search Question" />
                    </div>
                    <div className="header-Rem"><Avatar/></div>
                    <Button>Add Question</Button>
                </div>
            </div>
        </div>
    
  )
}

export default Header;
