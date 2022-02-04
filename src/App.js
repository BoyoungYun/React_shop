/*eslint-disable*/

import './App.css';
import React, {useState} from 'react';
import Data from './data';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Detail from "./Detail";
import { Link, Route, Routes } from 'react-router-dom';


function App() {
  let [shoes, shoes변경] = useState(Data);
  return(
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Main shoes={shoes}/>}></Route>
        <Route exact path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
      </Routes>
    </div>
  );
}
function Main(props)
{
  return (
    <div className="App">
      <div className="background">
        <h1 className="display-4"><b>20% Sales Off</b></h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
      
      <div className="container">
      <div className="row">
        {
          props.shoes.map((s,index)=>{
            return <Md shoes={props.shoes[index]} index={index} />
          })
        }
      </div>
    </div>
    </div>
  );
}
function Md(props){
  return (
      <div className="col-md-4">
        <img src={"https://codingapple1.github.io/shop/shoes"+(props.index+1)+".jpg"} width="100%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
  );
}
export default App;
/* 출처 : 코딩애플 - React 리액트 기초부터 쇼핑몰 프로젝트까지! */