import React, {  useContext } from 'react';
import Fade from 'react-reveal/Zoom';
import AppContext from "../../AppContext";
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import data from '../../yourdata';
import { ProjectStyle } from "./projectStyle";
import CIBC from "./CIBC";
import PHARMA from "./PHARMA";
import ONETREE from "./ONETREE";
import AUDI from "./AUDI";
import P5 from "./project5";
import { Link } from "react-router-dom";
TweenOne.plugins.push(SvgMorphPlugin);


function Project() {
    const {page_2, setPage_2, page, page_l  } = useContext(AppContext);
    const Switch_On = { opacity:1} ;
    const Switch_Off = {opacity:0};
    let state2 = {opacity:0};
    if (page.index === 2 ){
        state2 = Switch_On
        
      }
      if ( page.index !== 2 ){
        state2 = Switch_Off
      } 
          
      const Project = data.projects.map((project) =>
      <Link to={project.link} className="column"  key={project.id}>
      <img
          
           
            url={project.url}
            onClick={() => { setPage_2(project.id); }} 
            src={project.imagesrc} 
            alt="loading..."
            style={{  width:"100%"}}>
      </img>
        </Link>    
                     
    );
        return ( 
            <div className="innerpage" >
            
             {page_2 === 0 &&
            <Fade duration={400} spy={(page.index === 2 || page.index !== page_l.index) ? 1 : 2} top={page.index === 3 ? true: false} bottom={page.index < 2 ? true : false}><div className="row" onLoad={() => document.getElementById("third").children[0].children[0].children[0].style = {transform: 'translate(0px, 0px)'}}>  {Project}</div></Fade> 
            } 

        
         </div>
  
   
      
    );

}


export default Project;