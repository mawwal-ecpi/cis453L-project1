import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return (
			<div>
				<h2>Today's Menu</h2>
				<p>
					Please enjoy your stay by trying one of the items in our constant
					changing menu.
				</p>
				<div style={{ display: 'flex' }}>
					<ul style={{ listStyle: 'none', marginRight: '20px' }}>
						<li>Potato Gratis 5</li>
						<li>German Fries 6</li>
						<li>Vietnamese Tea 3</li>
						<li>Tukneneng 10</li>
						<li>Mango Lassi 4</li>
					</ul>
					<ul style={{ listStyle: 'none', marginRight: '20px' }}>
						<li>Potato Gratis 5</li>
						<li>German Fries 6</li>
						<li>Vietnamese Tea 3</li>
						<li>Tukneneng 10</li>
						<li>Mango Lassi 4</li>
					</ul>
					<ul style={{ listStyle: 'none', marginRight: '20px' }}>
						<li>Potato Gratis 5</li>
						<li>German Fries 6</li>
						<li>Vietnamese Tea 3</li>
						<li>Tukneneng 10</li>
						<li>Mango Lassi 4</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Menu;
