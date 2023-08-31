import { useContext } from "react"
import Wrapper from "../Wrapper/WrapperComp"
import { GlobalContext } from "../Context/GlobalContext";
import Styles from './ListRender.module.scss'
import { ItemData } from "../ItemData/ItemData";
export const ListRender = () => {
    const InternalContext = useContext(GlobalContext);
    return(
        <Wrapper className={Styles.customstyle}>
        {
          InternalContext.map(elem => {
            return (<ItemData data={elem}></ItemData>)
          })
         }
        </Wrapper>
    )
}