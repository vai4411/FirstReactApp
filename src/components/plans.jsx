import React from 'react';

class Plans extends React.Component {

    render(){
		const {plan} = this.props;
	return (
		<div>
			{plan.map((data) => {
			return(
			<div key={data.priceTag}>
			<label>{data.title}</label>
			<p>{data.info}</p>
			<p>{data.priceTag}<span>/mo</span></p>
			<p>{data.users} users included</p>
			<p>{data.storage} of Storage</p>
			<p>Help center access</p>
			<p>{data.support} support</p>
			<button>{data.button}</button>
			</div>
			);
	})}
		</div>
	);
}
}

	export default Plans;
