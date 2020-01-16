import React, {  useContext } from 'react';
import profile from '../img/profile.jpg';
import AppContext from "../../AppContext";
import hackteam from '../img/teamPhotoHackathoners.png'
import process1 from '../img/brainstorm1.jpg'
import process2 from '../img/brainstorm2.jpg'
import process3 from '../img/brainstorm3.jpg'

function CIBC() {
  const {setMore} = useContext(AppContext);
        return (      
          <div className="innerpage" >
        <div className='about-content'>
      
      <p>A Co-op project at CIBC</p><br></br>
        <p>Since the prototype developed by our Co-op team is going through the process of implication, I cannot show any design work or specifics about the solution.  Instead, I'm going to focus on the approach our team took!</p>

        <p>Software:</p>
        <ul><li>Adobe XD</li><li> Word</li><li>Excel</li><li>Illustrator</li></ul>

        <p>As part of the Co-op program, our team was asked to develop a solution to improve some aspect of the bank. Since multiple members of the team were working with the Enterprise payments team we decided to focus there. This made alot of sence as the bank was going throught the process of modernizing the mobile App and our chance of implementation could be increase if we integrated it with existing initiatives. </p>
       
        <p>Problem: How could the user experiance be simplified while making a payment through mobile online banking?</p>
        <p>to approach this our team did alot of reasearch examples include compitive analysis of existing bill payment systems, determining consumer painpoints for the click and conversion analytics and meetings with various team memebers and stackholder accross the bank</p>
        
        <p>Through our reasearch we found their was much redundancy in the payments process requiring the user to fill in values which the bank already knows and are populated in other areas of mobile online banking. Prepopulating these fields could simplify the process and reduce the rate of error.
        </p>
        <p>The bill payements page offered no graphical repersentations, calendars, or timelines. Providing better paymments visualizations could help clients better understand their payments.</p>
        <p>After Developing our solution the team had the oppertunity to present a XD prototype to numerous executives and teams accross the bank. Feedback was overwelmingly positive! </p> 
       

        {/* {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null} */}
        </div>
        </div>
  );
    
}
 
export default CIBC;