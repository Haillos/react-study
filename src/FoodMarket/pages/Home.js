import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import FoodCard from '../components/FoodCard.js'


function Home({foods}) {
    return (
        <div>
            <div>
                {/*<div className='main-bg' style={{ backgroundImage: 'url(/image/banner_bg.jpg)' }}></div> */}
                <div className='main-bg' style={{ backgroundImage: 'url(/image/banner_bg.jpg)' }}></div>

                <Container>

                    <Row>
                        {
                            foods.map((food, index) => {
                                return (<Col md={4} sm={2} key={index}><FoodCard food={food} index={index} foods={foods} /></Col>
                                )
                            })
                        }
                    </Row>

                </Container>

            </div>
        </div>
    )
}

export default Home;
