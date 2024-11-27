import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal.js';
function NewsBlog() {

    let title = 'React Study';
    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [cnt1, setCnt1] = useState(0);
    let [cnt2, setCnt2] = useState(0);
    let [cnt3, setCnt3] = useState(0);

    let[cnt, setCnt] = useState([0,0,0]);
    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    let [flag, setFlag] = useState(false); 
    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>

            <div className="post-list" >
                <h4 onClick={()=>{
                    setFlag(true);
                    
                    //if(true){
                    //setFlag(false); 
                    //} else {
                    //setFlag(true);
                    //}               
                
                }
                }>{news[0]} <span onClick={() => {
                    setCnt(cnt[0] + 1);
                }}>♥</span><span>{setCnt1}</span></h4>
                <p>내용 무</p>
                <button onClick={()=>{
                    //news[0] = 'Today News'; // 오늘의 뉴스 > Today News
                    //setNews(news); // 배열 참조변수 주소 주소가 바뀌어야함
                    //setNews(['Today News', '어제의 뉴스', '내일의 뉴스']);

                    //temp.unshift();
                    //temp.unshift('Today News') // ['Today News],

                    //temp.sploce(0,1, 'Today News');
                    let temp = [...news];
                    temp[0] = 'Today News';
                    setNews(temp); //news = temp;
                }}>제목변경</button>
            </div>
            <div className="post-list">
            <h4>{news[1]} <span onClick={() => {
                    setCnt(cnt[1] + 1);
                }}>♥</span><span>{cnt[1]}</span></h4>
                <p>내용 무</p>
            </div>
            <div className="post-list">
            <h4>{news[2]} <span onClick={() => {
                    setCnt(cnt[2] + 1);
                }}>♥</span><span>{cnt[2]}</span></h4>
                <p>내용 무</p>
                {
                        flag == true ? <modal/> : null
                }
                
            </div>
        </div>
    )
}

export default NewsBlog;