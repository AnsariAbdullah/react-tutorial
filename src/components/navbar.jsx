import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="google.com">
				Navbar
				<span className="badge badge-pill badge-secondry">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
}

 
export default NavBar;