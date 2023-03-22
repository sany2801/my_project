import './logo.css'
import Button from '../Button/Button'
const  Logo = ()=>{
    return(
        <div className='wrapper_logo'>
            <div className="logo"></div>
            <h1>Muze</h1>
        <Button className={'admin'}>Log in</Button>
            
        </div>
    )
}
export default Logo