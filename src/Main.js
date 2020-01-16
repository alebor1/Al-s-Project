import React, { useState} from "react";
import { Switch, Route } from "react-router-dom";
import CIBC from "./components/Project/CIBC";
import PHARMA from "./components/Project/PHARMA";
import ONETREE from "./components/Project/ONETREE";
import AUDI from "./components/Project/AUDI";
import P5 from "./components/Project/project5";
import AppContext from "./AppContext";
import './styles/style.css';
import App from "./App"
import  Menu from './components/Menu/Menu';

function Main(){
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [page_l, setPage_l] = useState(0);
    const [page_2, setPage_2] = useState(0);
    const [more, setMore] = useState(false);
 return (
       <AppContext.Provider
      value={{
      open,
      setOpen,
      page,
      setPage,
      page_l,
      setPage_l,
      more,
      setMore,
      page_2,
      setPage_2
      }}>
    <Menu  />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path='/#work' component={App} />
      <Route path='/#/' component={App} />
      <Route path='/audi' component={AUDI} />
      <Route path='/cibc' component={CIBC} />
      <Route path='/pharma' component={PHARMA} />
      <Route path='/onetree' component={ONETREE} />
      <Route path='/googledoodle' component={P5} />
    </Switch>

    </AppContext.Provider>
  );
}

export default Main;