import './App.css';
import React, {useEffect, useState} from 'react';
import Button from './components/button/button';



function App() {
  const [count, setCount] = useState(0)
  const [res, setRes] = useState(1) 
  const [autoRes, setAutores]= useState(0)

  const countFmt = new Intl.NumberFormat('ru-RU').format(count);
  const resFmt = new Intl.NumberFormat('ru-RU').format(res);
  const autoResFmt = new Intl.NumberFormat('ru-RU').format(autoRes);
  
  const clickHendler = (result)=>{
    setCount(count + result)
  }
  const restResult = (value, price)=>{
    if(count < price){
      return null
    }else{
      setRes(res + value)
      setCount(count-price)
    }
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count + autoRes)
    },1000)
    return ()=> clearInterval(interval)
  })
  
  const restAuto =(result,price)=>{
    if(count < price){
      return null
    }else{
      setAutores(autoRes + result)
      setCount(count-price)
    }
  }




  return (
    <>
    <div className="App">
      <h1 style={{fontSize: '90px'}}>
        {countFmt}
      </h1>
      <button onClick={()=>clickHendler(res)} className='btnCliker'>KLIK</button>
      <div className='btnWrapper'>
      <div className='btnClik'>
          <h2>{res}</h2>
          <Button text={'CLIK'} price={50} result={1} fn={restResult}></Button>
          <Button text={'CLIK'} price={500} result={5} fn={restResult}></Button>
          <Button text={'CLIK'} price={12000} result={100} fn={restResult}></Button>
          <Button text={'CLIK'} price={90000} result={1000} fn={restResult}></Button>
          <Button text={'CLIK'} price={22000000} result={9000} fn={restResult}></Button>
          <Button text={'CLIK'} price={300000000} result={25000} fn={restResult}></Button>
          <Button text={'CLIK'} price={1800000000} result={100000} fn={restResult}></Button>
          <Button text={'CLIK'} price={2000000000000} result={2000000} fn={restResult}></Button>
      </div>
      <div className='btnAutoWrapper'>
          <h2>{autoRes}</h2>
          <Button text={'AUTO CLIK'} price={125} result={1} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={1100} result={5} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={100000} result={200} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={90000} result={5000} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={315000} result={9000} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={81000000}  result={100000} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={900000000} result={200000} fn={restAuto}></Button>
          <Button text={'AUTO CLIK'} price={3000000000} result={2000000} fn={restAuto}></Button>
      </div>
      </div>
    </div>
    </>

  );
}

export default App;
