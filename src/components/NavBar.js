import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="header-color">
            <div className="container mx-auto flex justify-between ml-0 mr-0">
                <nav className="flex ml-0 mr-0">
                    <NavLink to='/' 
                    exact
                    activeClassName="text-white"
                    className="inline-flex items-center  px-3 text-red-100 hover:text-green-800 text-6xl font-bold cursive tracking-widest">
                        ENZO
                    </NavLink>
                    <NavLink to="/post" 
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3  rounded text-black hover:text-green-800">
                        Blog Post
                    </NavLink>
                    <NavLink to='/project' 
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3  rounded text-black hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3  rounded text-black hover:text-green-800">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex items-center py-3 px-3">  
                    <SocialIcon url="https://github.com/ejimenezsoto" className='mr-4' target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    <SocialIcon url="https://www.linkedin.com/in/enzojimenezsoto/" className='mr-4' target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                </div>
            </div>
        </header>
    )
}
