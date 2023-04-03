import "./button.css"

const Button = ({fn,text, result, price})=>{
    const priceFmt = new Intl.NumberFormat('ru-RU').format(price);
    const resultFmt = new Intl.NumberFormat('ru-RU').format(result);
    console.log(result)
    return (
        <button className="btn" onClick={()=>fn(result,price)}>
            <h1>
                {text}
            </h1>
            <h3>{priceFmt}$</h3><span className="result">+{resultFmt} click</span>
        </button>
    )
}

export default Button