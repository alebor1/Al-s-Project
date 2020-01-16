import React, {  useContext } from 'react';
import Fade from 'react-reveal/Zoom';
import AppContext from "./../AppContext";

function Header() {
    const {page, page_l  } = useContext(AppContext);
        return (<div className="innerpage" > 
               
        
            <Fade id="header1"duration={300} spy={(page.index === 0 || page.index !== page_l.index) ? 1 : 2} top={page_l.index > 0 ? true: false} bottom={page_l.index < 0 ? true : false}>
            
            <div id='H_H'>
            Alex Borthwick<br></br>
            A UX Designer<br></br>
            from Toronto
        
                    {/* <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button> */}
                </div>
                <p  className="subtext">I am currently looking for<br/>summer internship positions.</p>
          
                
          
            </Fade>
    


        </div>);
    
}

export default Header;