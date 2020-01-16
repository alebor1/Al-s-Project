import React, { useContext } from "react";
import AppContext from "./../../AppContext";
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import data from '../../yourdata';
import Animation from "../../styles/animateStyle";
TweenOne.plugins.push(SvgDrawPlugin);
function Builder() {
const { page, page_l, page_2 } = useContext(AppContext);
const Switch_On = {SVGDraw: '100%', duration: 1000, opacity:1} ;
const Switch_Off = {SVGDraw: '100% 100%', duration: 1000, opacity:0};
let state = {SVGDraw: '100% 100%', duration: 0, opacity:0};
let state1 = {SVGDraw: '100% 100%', duration: 0, opacity:0};
let state3 = {SVGDraw: '100% 100%', duration: 0, opacity:0};


  if ((page === 0 && page_l.index === 0) || page.index === 0){
    state = Switch_On
    
  }
  if ( page.index !== 0 && page !==0){
    state = Switch_Off
  } 
  if (page.index === 1){
    state1 = Switch_On
    
  }
  if ( page.index !== 1){
    state1 = Switch_Off
  } 

  if (page.index === 3){
    state3 = Switch_On
    
  }
  if ( page.index !== 3){
    state3 = Switch_Off
  } 

    const Header = data.d0.map((number) =>
      <TweenOne
            key={number.toString()}
            animation={state}
            reverseDelay={100}
            style={{ fill: 'none', strokeWidth: 2, stroke: 'black', opacity:0,  }}
            component="path"
            d={number}
          />
          
    );
     const About = data.d1.map((number) =>
        <TweenOne
              key={number.toString()}
              animation={state1}
              reverseDelay={100}
              style={{ fill: 'none', strokeWidth: 2, stroke: 'black', opacity:0 }}
              component="path"
              d={number}
            />
            
      );
 
        const Contact = data.d3.map((number) =>
        <TweenOne
              key={number.toString()}
              animation={state3}
              reverseDelay={100}
              style={{ fill: 'none', strokeWidth: 2, stroke: 'black', opacity:0, marginBottom: "100px" }}
              component="path"
              d={number}
            />
            
      ); 
     
    
    return (
      <Animation id="lineart1" style={{  width: page.index !== 2 ? "calc(100% - 18px)" : "calc(100% + 4px)",
        height: page.index !== 2 ? "calc(100% - 18px)" : "calc(100% + 4px)",   margin: page.index !== 2 ?  "10px" : "0px",background: page.index !== 2 ?  "ghostwhite" : page_2 ===  0 ? "#e1e1eb" : "ghostwhite" }}>   
        <svg id="lineart" viewBox="0 0 614 539.7" version="1.2" 
        style={{ display: 'block'}} >   
       {Header}{About}{Contact}
        </svg>
     
      </Animation>
     
    );
  }
  export default Builder;