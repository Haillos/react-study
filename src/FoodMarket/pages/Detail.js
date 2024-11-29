import { Container, Row, Col, Button } from "react-bootstrap";
import { Form, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import './Detail.css';

function Detail({ foods }) {

    let { id } = useParams();

    let [orderCount, setOrderCount] = useState(0);

    const [smShow, setSmShow] = useState(true);

    let [viewStatus, setViewStatus] = useState('');
    // setViewStatus('end'); <- 때문에 무한루프

    // foods 안에 id가 파라미터로 넘어온 id와 같은 데이터 찾기
    let food = foods.find((item) => {
        return item.id == id; // 매개변수의 id와 파라미터로 넘어온 id 비교 ?? 같으면 리턴
    })
    //let index = foods.findIndex(()=>{
    //    return item.id == id;
    //})

    //useEffect(실행할 함수, 의존성 배열)
    //useEffect(실행할 함수{return ()={clean up funtion}, 의존성 배열 )
    useEffect(() => {
        console.log('useEffect [] 실행');
        setViewStatus('end')
    }, []) //의존성 배열 비어있음 →  로딩(mount)

    useEffect(() => {
        console.log('useEffect 실행');
    }) //의존성 배열 X  → 로딩(mount), 업데이트

    useEffect(() => {
        console.log('useEffect[orderCount] 실행');

        return () => { //clean up
            console.log('useEffect[orderCount] return 실행')
        };
    }, [orderCount]);useEffect(() => {
        let tmout = setTimeout(()=>{
            setSmShow(false);//true -> false
        },2000);//ms 시간이 지난 뒤에 함수 실행

        //setTimeout
        //setInterval
        //비동기처리

        //clearTimeout
        //clearInterval
        return ()=>{
            clearTimeout(tmout);
        }
    }, []) //2초 후 smShow값을 false로 변경

const redTextStyle = {
    color : "red"
};

const blueTextStyle = {
    color : "blue"
};

const styles = {
    redStyle : { //styles.redStyle
        color : "red"
    },
    blueStyle:{ //styles.blueStyle
        color : "blue"
    },
    fontBigBold:{ //styles.fontBigBold
        fontSize:"2rem",
        fontWeight:"bold"
    }
}
    //detail/2
    //  2: index
    //foods[index]
    if (food == undefined || food == null) {
        return (
            <div><h1>잘못된 접근입니다.</h1></div>
        )
    }

    /* 
    조건에 따라서 다른 스타일 적용
    가격표시
        1만원 이상 -> 빨간색
        1만원 미만 -> 파란색

        1) js 객체

            const priceTextStyle = {
            color : food.price >= 10000 ? 'red' : 'blue'
            }

            <p style={priceTextStyle}>{food.price}</p>

        2) js 함수 형태
        
            const priceTextStyleFunc = (price)=>{
            if(price >= 10000){
                return { color : 'red' };
            } else {
                return { color : 'blue' };
            }

            <p style={priceTextStyleFunc()}>{food.price}</p>

        3) css 클래스 연계 활용

        //단일
        <p className={food.price >= 10000 ? 'price-red' : 'price-blue' }>{food.price}</p>
        
        //여러개
        <p className={ 'text-strong (띄어쓰기 필수)'+ (food.price >= 10000 ? 'price-red' : 'price-blue') }>
        {food.price}</p>

        //join 함수
        <p className={ ['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue')].join("  ") }>
        {food.price}</p>

        //백틱 문자 활용

        //변수 활용
        const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue'

        <p className={'text-strong ' + priceClass}>{food.price}</p>
        
    */
    
        const priceClass = food.price >= 10000 ? 'price-red' : 'price-blue'



    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p style={styles.blueStyle}>{food.content}</p>
                    <p className={'text-strong ' + priceClass}>{food.price}</p>
                    {/*
                    <h4 style={{ paddingTop: '30px' }}>{foods[index].title}</h4>
                    <p>{foods[index].content}</p>
                    <p>{foods[index].price}</p>
                    */}
                    <p>
                        <Button variant="dark" onClick={() => {
                            if (orderCount > 0) {
                                setOrderCount(orderCount - 1)
                            }
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1)
                        }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        환영합니다~
                    </Modal.Title>
                </Modal.Header>
            </Modal>

        </Container>
    );
}

export default Detail;