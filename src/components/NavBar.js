import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="header-color">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' 
                    exact
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 hover:text-green-800 text-6xl font-bold cursive tracking-widest">
                        Enzo
                    </NavLink>
                    <NavLink to="/post" 
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3 my-6 text-xl text-white-200 hover:text-green-800">
                        Blog Post
                    </NavLink>
                    <NavLink to='/project' 
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3 my-6 text-xl text-white-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3 my-6 text-xl text-white-200 hover:text-green-800">
                        About Me
                    </NavLink>
                    <NavLink to='/todolist'
                    activeClassName="text-white"
                    className="inline-flex items-center py-3 px-3 my-6 text-xl text-white-200 hover:text-green-800">
                        Todo-List
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">  
                    <SocialIcon url="https://github.com/ejimenezsoto" className='mr-4' target="_blank" fgColor="#fff" style={{height:30, width:30}} />
                    <SocialIcon url="https://www.linkedin.com/in/enzojimenezsoto/" className='mr-4' target="_blank" fgColor="#fff" style={{height:30, width:30}} />
                </div>
            </div>
        </header>
    )
}