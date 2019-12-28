import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
	<Router>
        <Route exact path="/" component={HelloWorld}></Route>
		
	</Router>, document.getElementById('app')
)