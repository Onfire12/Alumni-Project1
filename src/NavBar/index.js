import React, {Component} from 'react';
import './NavBar.css'

class NavBar extends  Component{
    constructor(){
        super()
    }
   render(){
       return(
           <div className="Navbar">
                <ul className="NavUl">
                    <li className="NavLi">Home</li>
                    <li className="NavLi">Test</li>
                    <li className="NavLi">Haha</li>
                    <li className="NavLi">Hehe</li>
                </ul>
           </div>
       )
   }
}

export default NavBar;