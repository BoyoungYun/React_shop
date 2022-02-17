import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from './data';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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
  const [tab, setTab] = useState(0);
  const [animation, setAnimation] = useState(false);

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
          <button className="btn btn-danger" onClick={()=>{
            props.stock변경(order());
            props.dispatch({type:'add', payload:{id:Number(id)+3, name:Data[id].title, quan:1}});
            navigate('/cart');
            }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{ navigate('/') }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{setAnimation(false); setTab(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{setAnimation(false); setTab(1)}}>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{setAnimation(false); setTab(2)}}>Option 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={animation} classNames="wow" timeout={500}>
      <TabContent tab={tab} setAnimation={setAnimation}/>
      </CSSTransition>
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
function TabContent(props)
{
  useEffect(()=>{
    props.setAnimation(true);
  });
  if(props.tab===0)
  {
    return <div>0번째 내용입니다</div>
  }
  else if(props.tab===1)
  {
    return <div>1번째 내용입니다</div>
  }
  else
  {
    return <div>2번째 내용입니다</div>
  }
}
function stateToProps(state)
{
  return {
    state:state.reducer,
    alertState:state.reducer2
  }
}

export default connect(stateToProps)(Detail);