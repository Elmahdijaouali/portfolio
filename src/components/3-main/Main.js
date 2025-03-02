import './main.css' ;
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion" ;
// import data projects from file dataProjects.js
import dataProjects from '../../dataProjects'

export default function Main(){
    const [btnActive,setBtnActive]=useState("all project")
    const [arProject,setArrProject]=useState(dataProjects)

    const listProjects=arProject.map((project)=>(
        <Card 
           key={project.id}
           id={project.id} 
           title={project.title}
           description={project.description} 
           img={project.img} 
           link_project={project.link_project} 
           link_github={project.link_github} 
           category={project.category} />
       ))
       function handlefilterProject(category){
            const projects=dataProjects.filter((project)=>{
                return project.category === category
            })
            setArrProject(projects)
       }
      
    return (
     <main id='project'>
        <div className='left-section'>

             
                  <button onClick={()=>{ 
                          setBtnActive("all project")
                          setArrProject(dataProjects)
                   }}  className={btnActive === "all project" ? "active" : null} >all project</button>
                    <button onClick={()=>{ 
                           setBtnActive("html")
                           handlefilterProject("html")
                   }}   className={btnActive === "html" ? "active" : null} >Html & css</button>
    
                   <button onClick={()=>{ 
                            setBtnActive("JavaScript")
                            handlefilterProject("javaScript")
                   }}  className={btnActive === "JavaScript" ? "active" : null} >JavaScript</button>
    
                  <button onClick={()=>{ 
                             setBtnActive("react js")
                             handlefilterProject("react")
                   }}   className={btnActive === "react js" ? "active" : null} >react js</button>
                 
                   
                  <button onClick={()=>{ 
                           setBtnActive("PHP")
                           handlefilterProject("php")
                   }}   className={btnActive === "PHP" ? "active" : null} >PHP</button>
        
        
                  <button onClick={()=>{ 
                           setBtnActive("laravel")
                           handlefilterProject("laravel")
                  }}   className={btnActive === "laravel" ? "active" : null} >laravel</button>

        </div>
        <div className='right-section'>
           <AnimatePresence>
           {
            listProjects
           }
           </AnimatePresence>
        </div>

     </main>
    )
}

function Card({id,title,description,img,link_project,link_github,category}){
    return (
        <motion.div
         // animation   
         layout
         initial={{ transform: "scale(0)" }}
         animate={{ transform: "scale(1)" }}
         transition={{type:"spring" , damping:8,stiffness:50}}

          className='card' key={id} category={category}>
            <img src={img} alt='image_project' />
            <div className='body-card'>
                <div>
                   <h2>{title}</h2>
                   <p>{description}
                   </p>
                </div>
                
                <div className='media-card'>
                    <div>
                       <a className='icon' href={link_project} > <i class="fa-solid fa-link"></i> </a>
                       <a className='icon' href={link_github} >  <i class="fa-brands fa-github icon"></i></a>
                    </div>
                    <div>
                     
                    </div>
                </div>
            </div>
        </motion.div>
    )
}