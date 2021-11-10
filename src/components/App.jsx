import React from "react";
// import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { createBrowserHistory } from "history";

import Posts from './posts/Posts';
import SinglePost from './singlepost/SinglePost';

export default function App(){
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Posts/>}/>
            <Route exact path="/:id" element={<SinglePost/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
        
    )
}

 function NotFound(){
    return ( 
        <div>
            not found!!
        </div>
    )
}