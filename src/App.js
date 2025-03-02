import './App.css';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';



function App() {
  const [stateScroll,setStateScroll]=useState(false) 
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 0 ?   setStateScroll(true) :   setStateScroll(false)   
    })
  })
  return (
    <div  className="App {mode}">
       <div id='up' className='container'>
          <Header />
           
            <Hero />
            <div className='divider' />
            <Main />
            <div className='divider' />
            <Contact />
            <div className='divider' />
            <Footer />
    
              <a style={stateScroll ? {opacity:1} : {opacity:0}} id='link_scroll' href="#up">
                  <button className='btn_arrow_up'><i class="fa-solid fa-arrow-up"></i></button>
              </a>
      
       </div>
        
    </div>
  );
}

export default App;
