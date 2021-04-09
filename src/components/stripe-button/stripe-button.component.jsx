import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51IckuJHon1lbVcVF0Hfnp5zkWirkI6PL1tNuV9UVQIfwxNGCrpg8UVPOwgUgeJVCJqQXamGNXzDs8aCY3OVA2HbE00Wxwy765l';

	const onToken = token => {
		console.log(token)
		alert('Payment successful')
	}
	return (
		<StripeCheckout 
			label='Pay Now'
			name="Crwn Clothing"
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeCheckoutButton;