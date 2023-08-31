import NavBarComp from './NavBar/NavBarComp';
import Styles from './App.module.scss';
import { ListRender } from './ListRender/ListRender';
import { GlobalContext } from './Context/GlobalContext';
function App() {

  const [Mainlist,setmainlist] = [
    
    {
      name:"Briyani",
      Desicription:"scrambled it to make a type specimen book. It has survived not only five centuries",
      price:150,
      count:1
  },
  {
      name:"Tofu",
      Desicription:"scrambled it to make a type specimen book. It has survived not only five centuries",
      price:50,
      count:1
  },
  {
      name:"Rice",
      Desicription:"scrambled it to make a type specimen book. It has survived not only five centuries",
      price:10,
      count:1
  },
  {
      name:"Egg",
      Desicription:"scrambled it to make a type specimen book. It has survived not only five centuries",
      price:20,
      count:1
  },
  {
      name:"Mint",
      Desicription:"scrambled it to make a type specimen book. It has survived not only five centuries",
      price:10,
      count:1
  },
  {
      name:"Gravy",
      Desicription:"scrambled it to make a type specimen book. It has survived not only five centuries",
      price:10,
      count:1
  }
]
  

  return (
    <GlobalContext.Provider value={Mainlist}>
    <NavBarComp></NavBarComp>   
     <ListRender></ListRender>
    </GlobalContext.Provider>
  )
}

export default App
