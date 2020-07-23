import React from 'react';
import { Link } from 'react-router-dom';

function header(){
	return(
		<div  className='header'>
			<Link to='/features'>
			<li id='header-list'>FATURES</li>
			</Link>
			<Link to='/enterprise'>
			<li id='header-list'>ENTERPRISE</li>
			</Link>
			<Link>
			<li id='header-list'>SUPPORT</li>
			</Link>
		</div>
	);
}

export default header;