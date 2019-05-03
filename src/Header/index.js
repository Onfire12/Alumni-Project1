import React from 'react';
import "./header.css";

const Header =() =>{
    
    
        return(
        <div className="mainNav">
            <ul>
                <li>
                    <a>Home</a>
                    <div className="dropDown">
                        <a>DropDown </a>
                    </div>
                </li>
                <li>
                    <a>about</a>
                </li>
                <li>
                    <a>more</a>
                </li>
            </ul>
      </div>
        )
    
};

export default Header;