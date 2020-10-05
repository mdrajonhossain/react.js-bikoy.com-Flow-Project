import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Maincoponenttag from './allcomponent/Maincoponenttag'; 
import AllAddpostcomponenttag from './allcomponent/alladdpost/AllAddpostcomponenttag'; 
import My_add_post from './allcomponent/my_add_post/My_add_post'; 
import Showingpost from './allcomponent/showposting/Showingpost'; 
 

import { BrowserRouter as Router, Route, Like, Switch } from 'react-router-dom';

 

function App(props) {
 
  return (
  	<div className="">
  	<Router>    
      <Switch>
        <Route exact path="/" component={Maincoponenttag}/>
        <Route path="/all_add_post" component={AllAddpostcomponenttag}/>
        <Route path="/my_add_post" component={My_add_post}/> 
        <Route path="/Showingpost/:name" component={Showingpost}/> 
      </Switch>    
 	</Router>

         
    </div>
  );
}

export default App
