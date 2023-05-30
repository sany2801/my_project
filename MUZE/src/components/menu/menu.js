import menu from "./menu.json"
import "./menu.css"
// const image = menu.pizza[0].img
// menu[0].pizza.map(item=>(console.log(item.size.dough.thin)))
// console.log(menu[0].pizza)

menu[0].pizza.push(
    {
        name:"Баварская",
        id: 346346,
        size:[
            {
                dough:"Тонкое",
                id: "thin",
                small:["21 см", "215 г"],
                midle:["26 см","360 г"],
                large:["31 см", "550 г"]
            },
            {
                dough:"Пышное",
                id: "lush",
                small:["21 см", "215 г"],
                midle:["26 см","360 г"],
                large:["31 см", "550 г"]
            },
        ],
            price:[10, 20, 30, 40],
            compound:"соус из протертых томатов, Моцарелла, колбаски из курицы и свинины, колбаса Пепперони, запеченный сладкий перец, карамелизированный лук, соус Барбекю, сырный соус",
            img:"https://3.downloader.disk.yandex.ru/preview/848e930c04ad76dbd59492ccc29e078fd364805269b497e4242fb8aef3c8abb1/inf/v-nP42GSHfFa_0mr0Ej7l3o6PV7o31W64drqA_0tMnukJ7I1My_v6iNDhjWWzr4kgMncI7wWyN_I26SculEGkQ%3D%3D?uid=325189121&filename=r_5868_280x280.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=325189121&tknv=v2&size=1855x964"
    }
)
const Menu=()=>{
 
    return(
        <>
            <h2>MENU</h2>
        <div className="menu_section">
                {menu[0].pizza.map(item=>(
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