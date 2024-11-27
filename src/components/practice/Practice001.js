import logo from './logo.svg';
import './Practice001.css';
import { useState } from "react";

function Practice001() {

    let [txt, setTxt] = useState("하나");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {txt}
                </p>
                <button onClick={()=>{
                    if(txt == '하나')
                        setTxt ("둘");
                    else if (txt == '둘')
                        setTxt("셋");
                    else
                        setTxt('하나');
                }}>변경버튼</button>
            </header>
        </div>
    );
}

export default Practice001;