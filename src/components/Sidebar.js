import React, { useState } from 'react'
import '../App.css';

import {RiMenu4Fill} from  'react-icons/ri'

import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) =>  {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "home"
        },
        {
            path: "/agenda",
            name: "agenda"
        }
    ]

  return (
    <div className="container">
        <div style={{width: isOpen ? "200px" : "60px"}}  className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}}  className="logo">logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className="bars">
                    
                </div>
            </div>
            <div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       
                        <div style={{display: isOpen ? "block" : "none"}}  className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div>

                </div>
                <main>{children}</main>
                </div>

        </div>

    </div>
  )
}

export default  Sidebar;
