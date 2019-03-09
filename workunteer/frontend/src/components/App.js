import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
  } from "react-router-dom";
import Header from './layout/Header';
import Home from './layout/home';
import Signin_popup from './layout/signin_popup'
import Sidebar from './view_freelancers/sidebar'
import {Provider} from 'react-redux';
import store from '../store';
import {loadUser} from '../actions/auth';
import PrivateRoute from "./common/PrivateRoute";



class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Fragment>
						<Header />
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Sidebar} />
							<Route exact path="/" component={Signin_popup} />
						</Switch>
					</Fragment>
				</Router>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
