import React, {  useContext } from 'react';
import profile from '../img/profile.jpg';
import AppContext from "../../AppContext";
import hackteam from '../img/teamPhotoHackathoners.png'
import webapp from '../img/webapp_3.png'
import process1 from '../img/brainstorm1.jpg'
import process2 from '../img/brainstorm2.jpg'
import process3 from '../img/brainstorm3.jpg'
import Audi1 from '../img/AudiAudio.gif'
import Audi2 from '../img/AudiLights.gif'
import Audi3 from '../img/AudiRecline.gif'
import Audi4 from '../img/AudiTemp.gif'
import Audi5 from '../img/pairingEx.svg'
import Audi6 from '../img/connection.png'
import Audi7 from '../img/AudiLink.gif'
function Audi() {
  const {setMore} = useContext(AppContext);
        return (      
<div className="innerpage" >
<div className='about-content' onLoad={() => { setMore(1); }}>
<div className="header">MyAudi Connect</div>
<div className="text-block mb-5">
<div className="grid-2-col to-1-col">
<ul>
<div className="grid-2-col">
<li><p><span className="thicc">Process:</span><br></br><br></br> Empathize<br></br> Research<br></br> Reframe<br></br> Ideate<br></br> Design<br></br> Evaluate<br></br><br></br></p></li>  
<li><p><span className="thicc">Tools:</span><br></br><br></br> Adobe XD<br></br> Illustrator<br></br> Photoshop<br></br> After Effects</p></li> 

</div>  
<div className="grid-2-col">
<li><p><span className="thicc">My Role:</span><br></br><br></br> Lead Designer</p></li>       
<li><p><span className="thicc">Duration:</span><br></br><br></br> 4 weeks</p></li>             
</div>
</ul>
<div>
<img src={hackteam} className="image" alt="Hackathon Team Photo with the president of Audi Canada"/>
<p className="subtext">
Hackathon Team Photo with the President of Audi Canada (Giorgio Delucchi)                
</p>
</div>
</div>



</div>
<div className="text-block mb-5">

<p className="subheader">Background</p>
<p className="subtitle mb-1"><br></br>
Powered by <span className="thicc">Audi Canada</span> and <span className="thicc">BIMM</span>, RED is a 4-week competition for developers, and designers to team up and develop game-changing ideas, inspired by the theme <span className="thicc">“Mobility as a Service.”</span> <br></br><br></br>
</p>
<p className="subtext">
<span className="thicc"> Mobility as a Service: </span> In tomorrow's world, digitally-enabled carsharing and ride-hailing—will be a crucial driver of growth and profitability in tomorrow's auto markets, far outstripping the profitability potential of traditional car making. Accenture research shows that by 2030, revenues from manufacturing and selling vehicles (around €2 trillion) will be only marginally higher than they are today and that profits from car sales will even shrink slightly. By contrast, revenues from mobility services are projected to soar to almost €1.2 trillion—with benefits reaching as much as €220 billion.          
</p>
</div>




<div className="text-block mb-5">
<p className="subheader">Research</p>
<div className="subtext">
<p >
Mobility as services fundamentally alters the relationship between the rider and the car. Not owning the vehicle, makes it much more difficult for passengers to get acquainted with the features offered in their ride. For this reason, MaaS can be a challenge for luxury automotive manufacturers that rely on premium features to differentiate their brand. The Audi E-Tron comes equipped with many features, such as the lights, climate control, quality speakers, and even built-in massage chairs. Imagine getting in an uber and having a massage!  Unfortunately, accessing these features is awkward, and most customers won’t even realize the features exist without being prompted.    
</p>
<p >
The MyAudi app is a mobile application for owners to provide a diagnosis of their car. It also allows the user features such as preheating their seats and setting up their Audi Wifi.  Designed for Audi owners, only MaaS users are not even considered.  This is a problem as it constricts data gathered to only owners and provides little insight into the needs of ridesharers.</p>
</div>
<p className="thicc">Brainstorming Ideas for the Interface</p> 
<div className="grid-2-col to-1-col">
<img src={process1} className="content-image" alt=""/>

<div className="grid-2-col">
<img src={process2} className="content-image" alt=""/>

<img src={process3} className="content-image" alt=""/>
</div>
</div>
</div>
<div className="text-block mb-5">
<p className="subheader">Solution</p> 
<div className="subtext">
<div className="grid-2-col to-1-col">

<p>
To address this problem our team created web application prototype to onboard users with myAudi app. With the solution, a customer can simply scan a QR code from the driver, and instantly have access to all of these features right in front of them on their phone. The reason we designed to first onboard users with a webapp is that it reduces the oppertunity cost of addoption. A rideshare would not have to download an app if this was a one time event, but premium feature would still be avalible. We spent alot of effort towards creating an intuitive design, it is obvious what you can control, and what features are available.
</p> 


<img src={webapp} className="content-image" alt=""/>

</div>
 
<p>  
<span className="thicc">Design Strategy: </span> 
The application has been designed with brand consistency to the native mobile app with some adaptations to better fit within a web app format. To insure consistence we built a mockup of the MyAudi native app. Through several design iterations we decided to go with a tiled layout. This was to avoid confusion with the web navigation bar at the bottom of the page. It also made more sense as there were only four main categories of task which could be done throught the webapp. 
</p>
<div className="grid-2-col to-1-col">
<p>    
<span className="thicc">The way it Works: </span> 
The MyAudi application on the driver’s phone will act as a mediator between the rideshare and the car. This ensures the driver has full control over the features accessed for the entire trip. For example, it would be able to set tolerances to things like the music volume. The driver would also be able to set a password for additional privacy. Seat selection is vital as it establishes a hierarchy of control. This prevents conflict between two or more paired devices.</p> 

<img src={Audi6} className="content-image" alt=""/>
</div>
<p>   
<span className="thicc">Data is the new Oil: </span> 
Our proposal allows Audi to gain user insights on a much broader scope of riders. By providing a web app, Audi would be able to gather the aggregate of its anonymous userbase while maintaining privacy. By downloading the native application, Audi can collect individual data and provide enhanced features. For instance, if a rider has Audi Wifi for their car, it should be available while ridesharing in an Audi. Expanding the amount of data could also help the firm find essential trends such as seating and heating preferences. These are important considerations when designing their vehicles.</p> 
<p>
<span className="thicc">Future State: </span> 
Many user identification methods could be deployed in a  future state version of MyAudi. The best choice will be a compromise between user privacy and providing a seamless experience. Building on our QR system, more seamless input methods could be deployed like voice or face recognition. In such a scenario, the car would identify the user as they enter the vehicle and set the seating to their desired preferances. These would both would require first onboarding users to the MyAudi platform as they could not be provided without first building a user profile. This is why our primary current state goal is expanding the userbase of MyAudi.</p> <br></br><br></br>
<img src={Audi5} className="content-image" alt=""/>
</div>
</div>
<div className="text-block mb-5">
<p className="subheader">Final UX</p> 
<div className="grid-2-col">
<img src={Audi1} className="content-image" alt=""/>
<img src={Audi2} className="content-image" alt=""/>
</div>
<div className="grid-2-col">
<img src={Audi3} className="content-image" alt=""/>
<img src={Audi4} className="content-image" alt=""/>
</div>
<div className="grid-2-col">
<img src={Audi7} className="content-image" alt=""/>
<img src={Audi7} className="content-image" alt=""/>
</div>
</div>
<p className="subheader">Takeaways</p> 
<div className="subtext">
<p>
<span className="thicc">Communication: </span>   Always keep all group members on the same page. During the first week of our project, a group member was confused about the initial proposal. This was further complicated as that individual didn't say anything to the rest of the team. I had thought that the best approach would involve every team member completing their portion of work and taking responsibility for that. Instead, it leads to chaos; through this project, I have learned the importance of maintaining a shared vision across the team. If I could do the project again, I would jump out of my comfort zone and get to know what others are  thinking. </p>       
<p>
<span className="thicc">Design: </span> Design system matters! We started working on sketches without a design system and didn’t expect there are so many screens. Very quickly, we notice some inconsistency since when we made changes on a screen, we sometimes forgot to change other screens accordingly. To avoid further confusion, we started to draw out the screens and hierarchy on a whiteboard,  thought this, we realized the importance of defining a design system beforehand. </p>      
<p>
<span className="thicc">Prioritization: </span>Knowing what not to do is equally important to know what to do in a limited amount of time. Our prototype was extremely detailed, with all transitions animated using XD's auto animate feature. With limited time, we should have paid more considerable attention to perfecting our presentation.</p>          
<br></br><br></br>

</div>  
</div>
</div>
          );
    
}
 
export default Audi;