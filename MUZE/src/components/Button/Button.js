
import './Button.css'


const Button = ({children, className, active, onClick})=>{
    return(
        <button className={className} disabled={active} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button