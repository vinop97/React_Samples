import { createContext,useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = (props)=>{
    const [isLoggin, setLogin] = useState(false);
		const AuthChange = (param) => {
			setLogin(param);
		};
    return (
			<AuthContext.Provider
				value={{
					isAuthenticated: isLoggin,
					SetAuth: AuthChange,
				}}>
				{props.children}
			</AuthContext.Provider>
		);
}