import menu from "./menu.json"
import "./menu.css"



const Menu=()=>{
 
    return(
        <>
            <h2>MENU</h2>
        <div className="menu_section">
                {menu.pizza.map(item=>(
            <div>
                    <h2>{item.name}</h2>
                    <img src={item.img}></img>
                    <p>Состав:</p>
                    <p className="discription">{item.compound}</p>

                    <form>
      <label className="doughInput">

                    {item.size.map(item2=>(
                        <>
                            <input id={item2.id + item.id} name="dough" type="radio"></input>
                            <label for={item2.id + item.id}>{item2.dough}</label>
                        </>
                            
                            ))}
      </label>

                     </form>
            </div> 
                ))}
        </div>
        </>
    )
}

export default Menu