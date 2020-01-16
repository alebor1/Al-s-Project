import React, {  useContext } from 'react';
import Fade from 'react-reveal/Zoom';
import AppContext from "./../AppContext";
import data from '../yourdata';
import PDF from '../Alexander_Borthwick_Resume.pdf';
function Contact() {
    const {page, page_l  } = useContext(AppContext);
        return (  <div id="contact1" className="innerpage">
        
            <Fade duration={300} spy={(page.index === 3 || page.index !== page_l.index) ? 1 : 2} top={page_l.index > 3 ? true: false} bottom={page_l.index < 3 ? true : false}> <h1 id="H_C">
            Let’s connect<br></br>
            <span className='amazing-color'>and build something.</span><br></br>
            </h1>
         
      
            <ul>
                
                
        <li className='column1'><a id="link1" target='_blank' rel="noopener noreferrer" href={"www.linkedin.com/in/alexanderborthwic"}>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50px" height="80px" viewBox="0 0 512 352" >

<path d="M511.9,512.5L511.9,512.5l0.1,0V324.7c0-91.9-19.8-162.6-127.2-162.6c-51.6,0-86.3,28.3-100.4,55.2h-1.5v-46.6H181.1v341.8
	h106V343.2c0-44.6,8.4-87.7,63.6-87.7c54.4,0,55.2,50.9,55.2,90.5v166.4H511.9z"/>
<path d="M8.4,170.7h106.2v341.8H8.4L8.4,170.7z"/>
<path d="M61.5,0.5C27.5,0.5,0,28,0,62S27.5,124,61.5,124S123,95.9,123,62C122.9,28,95.4,0.5,61.5,0.5z"/>
</svg>
<div className="thicc1">Linked-in</div></a></li>
            <li className='column1'><a id="link1" target='_blank' rel="noopener noreferrer" href={`mailto:${data.contactEmail}`}>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50px" height="80px" viewBox="0 0 512 352">
<polygon points="339.4,178.6 512,287.7 512,64.9 		"/>
<polygon points="0,64.9 0,287.7 172.6,178.6 		"/>
<path d="M480,0H32C16,0,3.4,11.9,1,27.2l255,168l255-168C508.6,11.9,496,0,480,0z"/>
<path d="M310.1,198l-45.3,29.8c-2.7,1.8-5.7,2.6-8.8,2.6s-6.1-0.9-8.8-2.6l-45.3-29.9L1,325c2.5,15.2,15.1,27,31,27h448
			c15.9,0,28.5-11.8,31-27L310.1,198z"/>
</svg>




               <div className="thicc1">E-mail</div> </a></li>
            </ul>
         
           <span className="footer"> Built by Alex</span></Fade>
        </div>);
    
}

export default Contact;