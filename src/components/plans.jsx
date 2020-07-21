import React from 'react';

class Plans extends React.Component {

    render(){
		const {plan} = this.props;
	return (
		<div  className='plan-window'>
			{plan.map((data) => {
			return(
			<div  className='plan-window-size' key={data.priceTag}>
			<p className='plan-window-Top-Portion'>{data.title}</p>
			<p  className={'plan-window-Top-Portion1'}>{data.info}</p>
			<p className='plan-window--AmountSection'>{data.priceTag}<span>/mo</span></p>
			<div className='plan-window-Description'>
			<p>{data.users} users included</p>
			<p>{data.storage} of Storage</p>
			<p>Help center access</p>
			<p>{data.support} support</p>
			</div>
			<div  className='plan-window-Subscription'>
			<button>{data.button}</button>
			</div>
			</div>
			);
	})}
		</div>
	);
}
}

	export default Plans;
