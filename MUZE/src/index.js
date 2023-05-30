import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import restData from "../src/components/map/data.json"
import { Provider } from 'react-redux';



const defaultState = {
  reslist1 : restData.restList,
  markerPosition: [{lat:52, lng:24}]
}


const reducer  = (state = defaultState, action) => {
  switch(action.type){
    case "ADD_RES": 
      return {...state, reslist1:[...state.reslist1, action.payload]}
    case "FIND":
      return {...state, markerPosition:[ action.payload]}
    default:
      return state
  }
}

const store = createStore(reducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


