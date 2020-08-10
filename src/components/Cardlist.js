import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
	// if(true){
	// 	throw new Error('NOOOO');
	// }     Enable this if you want to see the error boundary working
	const cardArray = robots.map((user,i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />

	})
 return (
 	<div>  	

		{cardArray}

	</div>

 	);
}

export default Cardlist;