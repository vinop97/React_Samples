import './App.css';
import NavbarComp from './NavbarComp';
import {LoginformComp} from './LoginformComp';
import { AuthContext } from './GlobalContex/AuthContext';
import { useContext, useState } from 'react';


function App() {  
  return (
		<>
			<NavbarComp></NavbarComp>
			<LoginformComp></LoginformComp>  
		</>
	);
}

export default App
