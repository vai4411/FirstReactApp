import React from 'react';

function subscription() {
  return (
    <div>
		<div>
			<label>Free</label>
			<h1>$0</h1>
			<h4>/mo</h4>
			<h5>10 users included</h5>
			<h5>2GB of Storage</h5>
			<h5>Help center access</h5>
			<h5>Email support</h5>
			<button>SIGN UP FOR FREE</button>
		</div>
		<div>
		<label>Pro</label>
		<label>Most popular</label>
			<h1>$15</h1>
			<h4>/mo</h4>
			<h6>20 users included</h6>
			<h6>10GB of Storage</h6>
			<h6>Help center access</h6>
			<h6>Priority email support</h6>
			<button>GET STARTED</button>
		</div>
		<div>
			<label>Enterprise</label>
			<h1>$30</h1>
			<h4>/mo</h4>
			<h6>50 users included</h6>
			<h6>30GB of Storage</h6>
			<h6>Help center access</h6>
			<h6>Phone & email support</h6>
			<button>CONTACT US</button>
		</div>
	</div>
  );
}

export default subscription;
