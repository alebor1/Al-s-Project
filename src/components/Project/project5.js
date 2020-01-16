import React, {  useContext } from 'react';
import profile from '../img/profile.jpg';
import AppContext from "../../AppContext";
import hackteam from '../img/teamPhotoHackathoners.png'
import process1 from '../img/brainstorm1.jpg'
import process2 from '../img/brainstorm2.jpg'
import process3 from '../img/brainstorm3.jpg'

function Pharma() {
  const {setMore} = useContext(AppContext);
        return (      

          <div className='about-content' onLoad={() => { setMore(1); }}>


          <div className="container">
          
          <img src={hackteam} className="image" alt="Hackathon Team Photo with the president of Audi Canada"/>
          <p className="subtext">
          Hackathon Team Photo with the president of Audi Canada                
          </p>
          <div className="text-block">
          <p className="subheader">The Challenge</p>
          <p className="subtitle mb-1">
          Powered by <span className="thicc">Audi Canada</span> and <span className="thicc">BIMM</span>, RED is a 4-week competition for developers, and designers to team up and develop game-changing ideas, inspired by the theme <span className="thicc">“Mobility as a Service.”</span> 
          </p>
          </div>
          </div>
          
          
          
          <div className="text-block mb-5">
          
          <p className="subtext">
          In tommorow's world digitally-enabled carsharing and ride-hailing—will be a key driver of growth and profitability in tomorrow’s auto markets, far outstripping the profitability potential of traditional car making. Accenture research shows that by 2030, revenues from manufacturing and selling vehicles (around €2 trillion) will be only marginally higher than they are today, and that profits from car sales will even shrink slightly. By contrast,<span className="thicc">revenues from mobility services are projected to soar to almost €1.2 trillion—with profits reaching as much as €220 billion.</span>                  
          </p>
          </div>
          
          
          
          <div className="text-block mb-5">
          <p className="subheader">Project</p> 
          <p className="subtext">
          Mobillity as a services funementally alters, the relationship between the rider and the car. Not owning the car, make it much more difficult for passengers to get aquantied with the features offered in their ride. This is a challenge for luxury automotive manufactures which rely on premium features to differente their brand. The Audi E-tron comes equipped with many features, such as the lights, climate control, quality speakers, and even built-in massage chairs. Imagine getting in an uber and having a massage! This could be well worth the small difference it would take to enjoy the luxury experience. Unfortunately, accessing these features is awkward, and most customers probably won’t even realize the features exist without being prompted.
          </p>
          <p className="subtext">
          The MyAudi app is a mobile application for owners to provide diagnosis of their car. It also allows the user features such as preheating their seats and setting up their Audi Wifi. With mobility as a service the userbase is limited to only a small portion of the people who actually use the car. This is a problem as it limits data gathered to only owners and provides little insight to other riders.
          </p>
          <p className="subtext">
          
          </p>
          </div>
          
          <div className="text-block mb-5">
          <p className="subheader">Solution</p> 
          <p className="subtext">
          To address this problem my team created web application prototype to onboard users with myAudi app. With the solution, a customer can simply scan a QR code from the driver, and instantly have access to all of these features right in front of them on their phone. With an intuitive design, it is obvious what you can control, and what features are available.
          </p>    
          
          <p className="subheader">Design Strategy</p> 
          <p className="subtext">
          The application has been designed with brand consistency to the native mobile app with some adaptations to better fit within a web app format. There are four main options to choose from in the web application: audio, lights, climate, and seats.
          </p>    
          <p className="subheader">Brainstorming Ideas for the Interface</p> 
          <div class="grid-2-col">
          <img src={process1} className="content-image" alt=""/>
          
          <div class="grid-2-col">
          <img src={process2} className="content-image" alt=""/>
          
          <img src={process3} className="content-image" alt=""/>
          </div>
          </div>
          <p className="subheader">The way it Works</p> 
          <p className="subtext">
          The myAudi application on the driver’s phone will act as a mediator between the rideshare and the car. This ensures the driver has full control over the features accessed over the duration of the trip. For example, it would be able to set tolerances to things like the music volume. The driver would also be able to set a password for additional privacy. Also, seat selection is important for the hierarchy to solve the conflict between two or more paired devices.
          </p>    
          <p className="subheader">Data is the new Oil</p> 
          <p className="subtext">
          This data can be very useful for knowing what preferences a person likes when they ride, what features are used most often, and how to best market their features to prospective buyers. This data also lets Audi expand their knowledge of their consumer base, answering questions such as who uses an Audi as a passenger, and what is Audi’s main demographic of people who use Audi in a rideshare.
          </p>    
          <p className="subheader">Future State</p> 
          <p className="subtext">
          There are many input methods that could be employed in the future state. Building on the system we developed instead of the rideshare scanning a QR code more seamless input methods could be deployed like voice or face recognition. These input methods could offer a more seamless experience having rideshare preferences sync as soon as they enter the car (this would require the rideshare to have MyAudi).
          </p>  
          <p className="subtext">
          Having end-user anonymously access all the premium features during their rideshare experience builds up trust to the Audi brand. In the future people might get so familiar with the digital service, so it may become the reason why they would use audi cars to get somewhere.
          </p>
          </div>
          <p className="subheader">Final UX</p> 
          <div class="grid-2-col">
          <img src={profile} className="content-image" alt=""/>
          
          
          <img src={profile} className="content-image" alt=""/>
          
          </div>
          <p className="subheader">Take Aways</p> 
          <p className="subtext">
          There are many input methods that could be employed in the future state. Building on the system we developed instead of the rideshare scanning a QR code more seamless input methods could be deployed like voice or face recognition. These input methods could offer a more seamless experience having rideshare preferences sync as soon as they enter the car (this would require the rideshare to have MyAudi).
          </p>  
          </div>
  );
    
}
 
export default Pharma;