import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from './data';

function Detail(props)
{
  
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(Number(id)+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{Data[id].title}</h4>
          <p>{Data[id].content}</p>
          <p>{Data[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{ navigate('/') }}>뒤로가기</button> 
        </div>
      </div>
</div> 
  );
}
export default Detail;