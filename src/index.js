import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let initialState = [
  {id:0, name:"nike", quan:2},
  {id:1, name:"newbalance", quan:3},
  {id:2, name:"adidas", quan:5}
];

function reducer(state = initialState, action)
{
  if(action.type==='plus')
  {
    let newState = [...state];
    newState[action.payload.id].quan++;
    return newState;
  }
  else if(action.type==='minus' && state[action.payload.id].quan>0)
  {
    let newState = [...state];
    newState[action.payload.id].quan--;
    return newState;
  }
  else if(action.type==='add')
  {
    let newState = [...state];
    let found=state.findIndex((a)=>{return a.name===action.payload.name});
    if(found>=0)
    {
      newState[found].quan++;
      return newState;
    }
    newState.push(action.payload);
    return newState;
  }
  else
  {
    return state;
  }
}
let initialAlert = true;

function reducer2(state = initialAlert, action)
{
  if(action.type==='close')
  {
    state = false;
    return state;
  }
  else
  {
    return state;
  }
}
let store = createStore(combineReducers({reducer, reducer2}));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);