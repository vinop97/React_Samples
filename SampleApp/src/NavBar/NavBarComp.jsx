import Styles from './NavBarComp.module.scss';
const NavBarComp = () => {
    return (
        <div className={Styles.NavbarParent}>
            <div>
                <span>Cart</span><span>0</span>
            </div>
        </div>
    )
}

export default NavBarComp;