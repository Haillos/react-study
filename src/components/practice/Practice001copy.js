import logo from './logo.svg';
import './Practice001.css';
import { useState } from "react";

function Practice001() {

    let [flag, setFlag] = useState(1);

    if(flag==1){
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    하나
                </p>
                <button onClick={()=>{
                    setFlag(2);
                }}>변경버튼</button>
            </header>
        </div>
    );
} else if ( flag == 2) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    둘
                </p>
                <button onClick={()=>{
                    setFlag(3);
                }}>변경버튼</button>
            </header>
        </div>
    );
} else if ( flag == 3) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    셋
                </p>
                <button onClick={()=>{
                    setFlag(1);
                }}>변경버튼</button>
            </header>
        </div>
    );
}


}

export default Practice001;