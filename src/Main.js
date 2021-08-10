import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './AboutUs';
import Affiliates from './Affiliates';
import FAQ from './FAQ';
import Menu from './Menu';

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<h1>
						<span style={{ color: 'white' }}>Dado's</span>{' '}
						<span style={{ color: 'salmon' }}>Diner</span>
					</h1>
					<h3 style={{ letterSpacing: '2px' }}>First Class World Diner</h3>
					<ul className="header">
						<li>
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/menu">Menu</NavLink>
						</li>
						<li>
							<NavLink to="/about">About Us</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li>
							<NavLink to="/affiliates">Affiliates</NavLink>
						</li>
						<li>
							<NavLink to="/faq">Frequently Asked Questions</NavLink>
						</li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/menu" component={Menu} />
						<Route path="/contact" component={Contact} />
						<Route path="/faq" component={FAQ} />
						<Route path="/affiliates" component={Affiliates} />
						<Route path="/about" component={About} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
