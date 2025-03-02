import './footer.css' ;

export default function Footer(){
    return (
   <footer>
        <div className='left-footer'>
           <ul>       
           <li><a href='#about' >About</a></li>
              <li><a href='#project' >Project</a></li>
              <li><a href='#article' >Article</a></li>
              {/* <li><a href='' >Speaking</a></li> */}
              <li><a href='#contact' >Contact us  </a></li>
           </ul>
        </div>
        <div className='right-footer'>
          &copy; 2024 Elmahadi Jaouali,All right reserved 
        </div>
   </footer>
    )
}