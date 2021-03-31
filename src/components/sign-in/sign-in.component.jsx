import React from 'react';
import './sign-in.styles.scss';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils.js';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
	constructor(){
		super();
		this.state= {
			email:'',
			password:''
		}
	}
	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;
		try{
			await auth.signInWithEmailAndPassword(email,password)

			this.setState({email: '', password: ''})
		}catch(error){
			console.log(error.message);
		}
	}

	handleChange = event => {
	    const { value, name } = event.target;
	    this.setState({[name]: value})
	}
	render(){
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type="email" 
						name="email" 
						value={this.state.email} 
						handleChange={this.handleChange} 
						required 
						label="Email"
						/>
					
					<FormInput 
						type="password" 
						name="password" 
						value={this.state.password} 
						handleChange={this.handleChange} 
						required 
						label="Password"
						/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;