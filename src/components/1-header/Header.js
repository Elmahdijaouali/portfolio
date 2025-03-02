
import { useState } from 'react';
import './header.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon ,faBars ,faXmark ,faSun } from '@fortawesome/free-solid-svg-icons' ;


export default function Header(){
    // state menu 
    const [showMenu,setShowMenu]=useState(false)
    // state mode 
    const [mode,setMode]=useState(localStorage.getItem("mode") ?? "dark") 
    function handleMode(){
      localStorage.setItem('mode',mode ==="light" ? "dark" : "light")
      setMode(localStorage.getItem("mode"))
    }
    //add class mode css
    classMode(mode)  
    return (
    <header>
        {/* menu */}
         <button className='btn_menu ' onClick={()=>{setShowMenu(true)}}  ><FontAwesomeIcon icon={faBars} className='close' /></button>
         {
           showMenu  && 
            (
                <div className='filter_container'>
                <div className='menu' >
                   <ul>
                      <li><button className='btn_close' onClick={()=>{setShowMenu(false)}}><FontAwesomeIcon icon={faXmark} /></button></li>
                      <li><a onClick={()=>{setShowMenu(false)}} href='#about' >About</a></li>
                      <li><a  onClick={()=>{setShowMenu(false)}} href='#project' >Project</a></li>
                      <li><a onClick={()=>{setShowMenu(false)}}  href='#article' >Article</a></li>
                      {/* <li><a onClick={()=>{setShowMenu(false)}} href='' >Speaking</a></li> */}
                      <li><a onClick={()=>{setShowMenu(false)}} href='#contact' >Contact us  </a></li>
                   </ul>
                </div>
              </div>
            )
         }
        
        
        <div />
        <NavBar />
    
        
         <button onClick={handleMode} className='mode'>{mode==="dark" ? (<FontAwesomeIcon icon={faMoon} /> ) : (<FontAwesomeIcon id='sun' icon={faSun} />) } </button>
         
        
    </header>
    )
}
// function add class mode css to body
function classMode(mode){
    if(mode==="dark"){
        document.body.classList.add("dark")
        document.body.classList.remove("light")
      }else{
          document.body.classList.add("light")
          document.body.classList.remove("dark")
      }
}
// this is navbar my portfolio
function NavBar(){
    return (
        <nav>
            <ul>
              <li><a  href='#about' >About</a></li>
              <li><a href='#project' >Project</a></li>
              <li><a href='#article' >Article</a></li>
              {/* <li><a href='' >Speaking</a></li> */}
              <li><a href='#contact' >Contact us  </a></li>
            </ul>
        </nav>
    )
}





