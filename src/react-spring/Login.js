import { useState } from "react";
import axios from 'axios';

function Login() {

    let [id, setId] = useState("");
    let [pw, setPw] = useState("");
        return (
        <div>
            <h1>React Spring Login</h1>

            id : <input type="text" onChange={(e)=>{
                setId(e.target.value);
            }}></input> <br/>

            pw : <input type="password" onChange={(e)=>{
                setPw(e.target.value);
            }}></input> <br/>
            <button onClick={()=>{
                axios.post(
                    "/api/login",
                    {
                        id : id,
                        pw : pw
                    },
                    {
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }
                )
                .then(response => {
                    console.log(response.data);
                    if(response.data == 'ok'){
                        //로그인 성공
                        //어디페이지로 갈지
                        //ReactRouterDom -> navigate("/")
                        //뭐 보여줄지
                    } else {

                    }
                })
                .catch(error => {
                    console.log(error);
                })

            }}>로그인</button><br/>
            
            <button onClick={()=>{

                axios.post(
                    "/api/loginCheck"
                )
                .then(response => {
                    console.log(response.data);
                    if(response.data == 'ok'){
                        //로그인 성공
                        //어디페이지로 갈지
                        //ReactRouterDom -> navigate("/")
                        //뭐 보여줄지
                    } else {

                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }}>로그인 여부 체크</button><br/>

<button onClick={()=>{
                axios.post(
                    "/api/loginJWT",
                    {
                        id : id,
                        pw : pw
                    },
                    {
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }
                )
                .then(response => {
                    console.log(response.data); // 로그인 성공
                    let accessToken = response.data;//accessToken JWT
                    //토큰은 localStorage 저장 해둔다
                    //다음에 API 요청 할 때 사용 할 수 있게
                    localStorage.setItem("accessToken", accessToken);
                    //로그인 성공한 토큰 저장

                    //로그인 성공 시 해야하는 처리 -> 페이지전환, 성공메시지
                })
                .catch(error => {
                    console.log(error);
                })

            }}>로그인JWT</button><br/>
            
            <button onClick={()=>{
                console.log(localStorage.getItem("accessToken"));

                axios.post(
                    "/api/loginCheckJWT",
                    {
                        param1:"abc"
                    },
                    {
                        headers : {
                            "Content-Type" : "application/json",
                            "Authorization" : "Bearer " + localStorage.getItem("accessToken")
                        }
                    }
                // body엔 필요한 매개변수 header엔 token
                )
                .then(response => {
                    console.log(response.data);
                    //후처리 -> 화면 갱신 state 변수 설정...
                })
                .catch(error => {
                    console.log(error);
                })
            }}>로그인 여부 체크JWT</button><br/>

        </div>
    )
}
export default Login;