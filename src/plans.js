import React from 'react';

function subscription() {
  return (
    <div className="plan">
		<div className="price-tag1">
			<label id='free-plan'>Free</label>
			<h1>$0</h1>
			<h4>/mo</h4>
			<p>10 users included</p>
			<p>2GB of Storage</p>
			<p>Help center access</p>
			<p>Email support</p>
			<button>SIGN UP FOR FREE</button>
		</div>
		<div className="price-tag2">
		<label  id='pro-plan'>Pro</label>
		<label  id='pro-plan1'>Most popular</label>
			<h1>$15</h1>
			<h4>/mo</h4>
			<p>20 users included</p>
			<p>10GB of Storage</p>
			<p>Help center access</p>
			<p>Priority email support</p>
			<button>GET STARTED</button>
		</div>
		<div className="price-tag3">
			<label  id='enterprise-plan'>Enterprise</label>
			<h1>$30</h1>
			<h4>/mo</h4>
			<p>50 users included</p>
			<p>30GB of Storage</p>
			<p>Help center access</p>
			<p>Phone & email support</p>
			<button>CONTACT US</button>
		</div>
	</div>
  );
}

export default subscription;
