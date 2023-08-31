
import Styles from './WrapperComp.module.scss';
const Wrapper = (props) => {
    return (
        <div className={Styles.WrapperParent + " " + `${props.className.length>1 ? props.className : ''}`}>
            {props.children}
        </div>
    )
}
export default Wrapper;