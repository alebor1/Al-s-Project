import React, { useContext } from 'react';

import Section from "./styles/sectionStyle";
import Body from "./styles/bodyStyle";
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project/Project';
import Contact from './components/Contact';
import "fullpage.js/vendors/scrolloverflow"; 
import ReactFullpage from "@fullpage/react-fullpage";

import AppContext from "./AppContext";
import Animation from './components/SVGs/Builder';
import './styles/style.css';


function App() {
  const {setMore, page,setPage,setPage_l,page_2, more, page_l} = useContext(AppContext);
  return (
   
<>
      

      <Animation  page={page}/>
      <ReactFullpage
        anchors= {['/', 'about', 'work', 'contact']}
        menu= '#myMenu'
        slidesNavigation= {true}
        scrollingSpeed= {700}
        touchSensitivity= {6}
        bigSectionsDestination='top'
        scrollOverflowReset={true}
        //sectionsColor={["none", "none", "none", "none"]}
        controlArrows= {false}
        onLeave={(origin, destination, direction) =>  setPage(destination)}
        afterLoad={(origin, destination, direction) =>  {setPage_l(destination)}}
        afterBuild={() => setMore(0)}
        scrollOverflow={true}
        render={({ fullpageApi }) => {
        
          return (
      
            <Body id="fullpage-wrapper">
              <Section className="section firstPage">
              <Header></Header>
              </Section>
              <Section className="section secondPage">
              <About></About>
              </Section>
              <Section id="third" className="section thirdPage" >
              <Project></Project>
              </Section>
              <Section className="section forthPage" >
              <Contact></Contact>      
              </Section>


            </Body>
          );
        }}
      />
</>
  );
}

export default App;
