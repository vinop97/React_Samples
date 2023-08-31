import { useState } from "react";
import Styles from './ItemData.module.scss'
export const ItemData = ({data}) => {  
    const [step,setstep] = useState(1)
    
    const Addcart =()=> {
        let finalcartitem = {...data,count:step};
        console.log(finalcartitem);
    }
    const CartAddHanlder = (event)=> {
        console.log(event)
       setstep(event.target.value)
    }
    return (
  
         <div className={Styles.listitem} key={data.name}>
            <div>
                <span>{data.name}</span>
                <p>{data.Desicription}</p>
            </div>
            <div>
                <input type="number" value={step} onChange={CartAddHanlder} step={1} min={1} max={10}/>
                <button className={Styles.AddCartBtn} onClick={Addcart}>Add Cart</button>
            </div>
         </div>
   
    )
}
