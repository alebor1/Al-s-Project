import React, { useContext } from "react";
import AppContext from "./../../AppContext";
import Nav from './navStyle';
import Logo from './Logo';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
const Menu = () => {

const {  setPage, setMore, page_2, setPage_2, page, page_l } = useContext(AppContext);
return (
<Nav id="myMenu" >
    <div data-menuanchor="" className="active" onClick={page_2 === 0  ? () => setPage({index: 0}): () => {setPage({index: 0}); setPage_2(0);}}> 
    <Fade><Link to={page_2 > 0 ? "/#work" : "/#"}><Logo></Logo>{page_2 > 0 && <div id="logo1">back</div>}</Link></Fade>
 
    </div>
    {page_2 !== 0 ?
    <div>
    
    {page_2 === 2 && <Fade><div className="pageind" >CIBC</div></Fade>}
    {page_2 === 1 && <Fade><div className="pageind" >Audi Red Hackathon</div></Fade>}
    {page_2 === 3 && <Fade><div className="pageind" >PHARMA</div></Fade>}
    {page_2 === 4 && <Fade><div className="pageind" >ONE TREE</div></Fade>}
    {page_2 === 5 && <Fade><div className="pageind" >GOOGLE DOODLE</div></Fade>}
    </div>
    :
    <div>
    {((page === 0 && page_l.index === 0) || page.index === 0 || page.index === 1) && <Fade><div className={(page.index === 0)||(page === 0 && page_l.index === 0)  ? "pageind" : "pageind3"} >Home</div></Fade>}
    {(page.index === 2 || page.index === 1 || page.index === 0 || page_l.index === 0) && <Fade><div className={page.index === 1  ? "pageind" : page.index === 0 ? "pageind2" : "pageind3"} >My Story</div></Fade>}
    {(page.index === 3 || page.index === 2 || page.index === 1) && <Fade><div className={page.index === 2  ? "pageind" : page.index === 1 ? "pageind2" : "pageind3"} >Work</div></Fade>}
    {( page.index === 3 || page.index === 2) && <Fade><div className={page.index === 3  ? "pageind" : page.index === 2 ? "pageind2" : "pageind3"}>Contact</div></Fade>}
    </div>}
    </Nav>
  );
}



export default Menu;
