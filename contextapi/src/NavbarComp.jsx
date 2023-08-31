import { useEffect,useContext } from 'react';
import { AuthContext } from './GlobalContex/AuthContext';
import Styles from './NavbarComp.module.scss';

const NavbarComp = ()=> {
    useEffect(()=>{
        console.log("navbar mounted");
    },[])
    const {isAuthenticated} = useContext(AuthContext);
    return (
			<div className={Styles.NavbarParent}>
				{!isAuthenticated && (
					<div className={Styles.loginbtn}>
						<button>Login</button>
					</div>
				)}
				{isAuthenticated && (
					<div>
						<div>
							<span>Username</span>
						</div>
					</div>
				)}
				{isAuthenticated && (
					<div>
						<div>
							<span>Home</span>
						</div>
						<div>
							<span>Products</span>
						</div>
						<div>
							<span>List</span>
						</div>
						<div>
							<span>Admin</span>
						</div>
						<div>
							<span>Cart</span>
						</div>
						<div>
							<span>Logout</span>
						</div>
					</div>
				)}
			</div>
		);
}

export default NavbarComp;