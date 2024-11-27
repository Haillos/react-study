import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal.js';
function NewsBlogprac() {

    let title = 'React Study';
    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [cnt1, setCnt1] = useState(0);
    let [cnt2, setCnt2] = useState(0);
    let [cnt3, setCnt3] = useState(0);
    
    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    // 글 제목 3개
    let [cnt, setCnt] = useState([0, 0, 0]);
    //좋아요 갯수 3개
    let [checkflag, setCheckFlag] = useState(false);
    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>

            {
                news.map((item, index)=>{
                    return (
                        <div>
                            <h4 onClick={()=>{
                                setCheckFlag(!setCheckFlag);
                            }}>{news[index]}<span onClick={(event)=>{
                                event.stopPropagation();
                                let temp = [...cnt];
                                temp[index]++;
                                setCnt(temp);
                            }}>♥</span> {cnt[index]} </h4>
                            <p>내용 무</p>
                            <hr/>
                        </div>
                    )
                })
            }
            <button onClick={()=>{
                let temp = [...news];
                temp[0] = 'Today News';
                setNews(temp);
            }}>제목변경</button>
            {
                checkflag == true ? <Modal news={news} /> : null
            }
        </div>

    )
}

export default NewsBlogprac;