import { useState } from 'react';
import Box from './Box';

function Props02() {
    //point -> 배열이 state 변수 처리 -> 재렌더링이 일어나도 데이터가 유지
    let [textArr, setTextArr] = useState(['아침', '점심', '저녁', '야식']);
    let [detailArr, setDetailArr] = useState(['배고프다', '졸리다', '피곤하다', '행복하다']);
    //let [num, setNum] = useState(0);

    return (
        <div>
            {
                textArr.map((item, index) => {
                    //return <Box text={item} detail={detailArr[index]} />
                    return <Box text={textArr[index]} detail={detailArr[index]} />
                })
            }

            <button onClick={() => {
                textArr.push('두번째야식');
                detailArr.push('살찐다');

                //재렌더링을 위해서 state 변수 변경 (set함수를 통해서)
                //setNum(num +1); // 기본타입 변수 (숫자형 변수)
                setTextArr(textArr); // 참조타입 변수 (배열)
                setDetailArr(detailArr);
            }}>추가</button>
        </div >

    )
}

export default Props02;