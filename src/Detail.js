import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from './data';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
`;
function Detail(props)
{
  let { id } = useParams();
  let navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(true)}, 2000)
    return ()=>{clearTimeout(timer)}
  },[]);

  return (
    <div className="container">
      <박스><제목 className="red">Detail</제목></박스>
      {
        alert === false
        ? (
        <div className="my-alert-yellow">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
        )
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(Number(id)+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{Data[id].title}</h4>
          <p>{Data[id].content}</p>
          <p>{Data[id].price}</p>
          <Info stock={props.stock} id={id}/>
          <button className="btn btn-danger" onClick={()=>{props.stock변경(order())}}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{ navigate('/') }}>뒤로가기</button> 
        </div>
      </div>
</div> 
  );
  function order()
  {
    let newStock = [...props.stock];
    newStock[id]--;
    return newStock;
  }
}
function Info(props)
{
  return <p>재고 : {props.stock[props.id]}</p>
}
export default Detail;