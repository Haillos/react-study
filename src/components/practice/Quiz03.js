import { useState } from 'react';
import  './Quiz03.css';
import Colorbox from './ColorBox.css';

function Quiz03() {

    let [redbox, setredbox] = useState([<div className='red-b'></div>]);
    let [greenbox, setgreenbox] = useState([<div className='green-b'></div>]);
    let [bluebox, setbluebox] = useState([<div className='blue-b'></div>]);
    let [blackbox, setblackbox] = useState([<div className='black-b'></div>]);

    let [box, setBoxes] = useState(['red', 'blue', 'green', 'black']);
    
    return(
    <div>
        <div>
            <button onClick={() => {
                let temp = ['red',...box];
                //temp.unshift(<div className='red-b'></div>);
                setBoxes(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => { 
                let temp = ['blue',...box];
                //temp.unshift(<div className='blue-b'></div>);
                setBoxes(temp);
            }}>앞파란박스추가</button>

            <button onClick={() => { 
                let temp = ['green',...box];
                //temp.unshift(<div className='green-b'></div>);
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...box,'red'];
                //temp.push(<div className='red-b'></div>);
                setBoxes(temp);
            }}>뒤빨간박스추가</button>

            <button onClick={() => {
                let temp = [...box,'blue'];
                //temp.push(<div className='blue-b'></div>);
                setBoxes(temp);
            }}>뒤파란박스추가</button>

            <button onClick={() => {
                let temp = [...box,'green'];
                //temp.push(<div className='green-b'></div>);
                setBoxes(temp);
            }}>뒤초록박스추가</button>
            <button onClick={() => { 
                let temp = [...box];
                temp.shift();
                setBoxes(temp);
            }}>앞 박스 삭제</button>
            <button onClick={() => { 
                let temp = [...box];
                temp.pop();
                setBoxes(temp);
            }}>뒤 박스 삭제</button>
        </div>

    </div>

    
    )
}

export default Quiz03;
