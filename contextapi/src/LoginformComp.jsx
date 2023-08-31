import { useContext, useState } from 'react';
import Styles from './LoginformComp.module.scss';
import { AuthContext } from './GlobalContex/AuthContext';
export const LoginformComp = ({ AuthChange }) => {
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [emailvalid, setemailvalid] = useState(false);
    const { SetAuth } = useContext(AuthContext);
	const [passvalid, setpassvalid] = useState(false);	
	const EmaildataHandler = (event) => {
		console.log(event.target.value);
		setemail(event.target.value);
	};
	const PassworddatHandler = (event) => {
		console.log(event.target.value);
		setpassword(event.target.value);
	};

	const LoginHandler = () => {
	  SetAuth(true)
		
	   
	};

	return (
		<div className={Styles.FormParent}>
			<div>
				<label htmlFor='email'>Email:</label>
				<input
					type='text'
					id='email'
					name='email'
					onChange={EmaildataHandler}
					className={`${emailvalid ? Styles.invalid : ''}`}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					onChange={PassworddatHandler}
				/>
			</div>
			<div className={Styles.LoginBtnsec}>
				<button onClick={LoginHandler}>Login</button>
			</div>
		</div>
	);
};