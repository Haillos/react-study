
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './FoodMarket.css';// 1번방법
import banner_bg from './banner_bg.jpg'; // 2번 방법
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import foodsData from '../data/foodsData.js';
import { useState } from 'react';
import FoodCard from './components/FoodCard.js';

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home.js';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate(); //경로 조작함수


    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail")}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}>Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            
            {
                /*
                1. css 이미지경로
                
                2. js에서는 import후 사용
                <img src={banner_bg}/>

                3. public 폴더에 저장 후 사용
                img src = {'./food1.jpg'}
                img src = {process.env.PUBLIC_URL + './food1.jpg'}

                pakage.json
                "homepage" : "/newurlpath" 상세경로
                */
            }


            
            <Routes>
                <Route path="/" element={<Home foods={foods}/>} />
                <Route path="/detail" element={<h1>detail page</h1>} />
                <Route path="/info" element={<h1>info page</h1>} />
            </Routes>


            {/*
            <Container>
                <Row>
                    <Col md={4} sm={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>{foods[0].title}</Card.Title>
                                <Card.Text>{foods[0].content}</Card.Text>
                                <Card.Text>{foods[0].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={2}> 
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/image/food2.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[1].title}</Card.Title>
                                <Card.Text>{foods[1].content}</Card.Text>
                                <Card.Text>{foods[1].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={8}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                            <Card.Title>{foods[2].title}</Card.Title>
                                <Card.Text>{foods[2].content}</Card.Text>
                                <Card.Text>{foods[2].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
        </div>
    )
}




export default FoodMarket;