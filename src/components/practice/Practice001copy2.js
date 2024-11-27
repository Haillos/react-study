import logo from './logo.svg';
import './Practice001.css';
import { useState } from "react";

function Practice001() {

    let txtArr = ['하나', '둘', '셋'];
    
    let [index, setIndex] = useState(0);

    return (
        <div className="app">
            <header>
            <img src={logo} classNamne="App-logo" alt="logo"></img>
            <p>
                {txtArr[index]}
            </p>
            <button ocClick={()=>{
                
                setIndex( (index+1)%3 );
                
                /*
                let value = (index +1) == 3 ? 0: (index+1);
                setIndex(value);
                */  

                /*
                index++;
                if(index > 2){
                    index - 0;
                }
                setIndex(index);
                */
            }}>변경버튼</button>
            </header>
        </div>
    )
}

export default Practice001;