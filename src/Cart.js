import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
function Cart(props)
{
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
                props.state.map((s,index)=>{
                    return (
                    <tr key={index}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.quan}</td>
                        <td>
                            <button onClick={()=>{props.dispatch({type:'plus',index:s.id})}}>+</button>
                            <button onClick={()=>{props.dispatch({type:'minus',index:s.id})}}>-</button>
                        </td>
                    </tr>
                    )
                })
            }
        </Table>
    </div>
    );
}
function shoeData(state)
{
    return {
        state:state
    }
}
export default connect(shoeData)(Cart);