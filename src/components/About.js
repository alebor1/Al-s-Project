import React, {  useContext } from 'react';
import Fade from 'react-reveal/Zoom';
import AppContext from "./../AppContext";
import PDF from '../Alexander_Borthwick_Resume.pdf';
function About() {
    const {page_l, page  } = useContext(AppContext);
 
return (      
<div className="innerpage" id="about1">
<Fade duration={300} spy={(page.index === 1 || page.index !== page_l.index) ? 1 : 2} top={page_l.index > 1 ? true: false} bottom={page_l.index < 1 ? true : false}>
<div id="abt" className="text-block">
<p className="subtext">
    <span className="thicc"> Hey, I’m Alex!<br></br></span><br></br>         
An UX designer, rapid prototyper & experience creator. I'm currently an undergraduate student studying Commerce and Interaction Design. Last year, I had a Co-op at CIBC on the Enterprise Payments team. I also actively participate in  hackathon events to further my skills in both business and design! <br></br><br></br>
    </p>
    <span className="thicc"><a href={PDF} download>Download Resume{/* <img src={PDF} alt="Resume" /> */}</a></span>
{/*  <span className="thicc1">Skills</span>
<br></br><br></br>
<ul><li>Adobe XD<br></br>Photoshop<br></br>Illustrator<br></br>After Effects<br></br>Cinema 4D<br></br>Figma</li>        
<li>Adobe XD<br></br>Photoshop<br></br>Illustrator<br></br>After Effects<br></br>Cinema 4D<br></br>Figma</li>        
<li>Adobe XD<br></br>Photoshop<br></br>Illustrator<br></br>After Effects<br></br>Cinema 4D<br></br>Figma</li>        

</ul> */}
</div>
</Fade>
</div>  );

}
 
export default About;