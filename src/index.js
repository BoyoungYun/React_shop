import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let initialState = [
  {id:0, name:"nike", quan:2},
  {id:1, name:"newbalance", quan:3},
  {id:2, name:"adidas", quan:5}
];
function reducer(state = initialState, action)
{
  if(action.type=='plus')
  {
    let newState = [...state];
    newState[action.index].quan++;
    return newState;
  }
  else if(action.type=='minus' && state[action.index].quan>0)
  {
    let newState = [...state];
    newState[action.index].quan--;
    return newState;
  }
  else
  {
    return state;
  }
}
let store = createStore(reducer);
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