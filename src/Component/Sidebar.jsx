import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/sidebar.css'

function Sidebar() {
  return (
    <>
            <div className="sidebar">
               <div className="sidebar-list">
               <div className="tag">
                    <ul>
                        <li><NavLink className="side-links title-name" to="/">Tags</NavLink></li>
                        <li><NavLink className="side-links all" to="/">All</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink className="side-links title-name" to="/">Materials</NavLink></li>
                        <li><NavLink className="side-links all" to="/">All</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                        <li><NavLink className="side-links" to="/">Generic</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink className="side-links title-name" to="/">Color</NavLink></li>
                        <li><NavLink className="side-links all" to="/">All</NavLink></li>
                        <li><NavLink className="side-links" to="/">Mint Green</NavLink></li>
                        <li><NavLink className="side-links" to="/">Blue</NavLink></li>
                        <li><NavLink className="side-links" to="/">Red</NavLink></li>
                    </ul>
                </div>
               </div>
            </div>
    </>
  )
}

export default Sidebar