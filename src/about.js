import React from 'react';
import './about.css';

function details() {
  return (
    <div className="about-tab">
		<div>
			<h3>Company</h3>
			<p>Team</p>
			<p>History</p>
			<p>Contact us</p>
			<p>Locations</p>
		</div>
		<div>
			<h3>Features</h3>
			<p>Cool stuff</p>
			<p>Random feature</p>
			<p>Team feature</p>
			<p>Developer stuff</p>
			<p>Another one</p>
		</div>
		<div>
			<h3>Resources</h3>
			<p>Resource</p>
			<p>Rosource Name</p>
			<p>Another resource</p>
			<p>Final resource</p>
		</div>
		<div>
			<h3>Legal</h3>
			<p>Privacy Policy</p>
			<p>Terms of use</p>
		</div>
</div>
  );
}

export default details;
