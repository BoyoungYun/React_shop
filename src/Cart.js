import React from 'react';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import "./Detail.scss";
function Cart()
{
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    console.log(state);
    return (
    <div>
        <Table responsive="sm">
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
            </tr>
            {
                state.reducer.map((s,index)=>{
                    return (
                    <tr key={index}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.quan}</td>
                        <td>
                            <button onClick={()=>{dispatch({type : 'plus', payload : {id : s.id}})}}>+</button>
                            <button onClick={()=>{dispatch({type : 'minus', payload : {id : s.id}})}}>-</button>
                        </td>
                    </tr>
                    )
                })
            }
        </Table>
        {
            state.reducer2 === true
            ? <div className="my-alert-yellow">
                <p>지금 구매하시면 신규할인 20%</p>
                <button onClick={()=>{dispatch({type:'close'})}}>닫기</button>
            </div>
            : null
        }
        
        
    </div>
    );
}

/*function shoeData(state)
{
    return {
        state:state.reducer,
        alertState:state.reducer2
    }
}*/
export default Cart;