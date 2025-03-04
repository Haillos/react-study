import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// let [username,setUsername] = useState('tom');
// setUsername
let userSlice = createSlice({
    name: 'username',
    initialState: 'tom',
    reducers: {
        saveUserName(state, action) {

            console.log(action.payload);
            // action.payload = 매개변수로 들어온 'abc'
            return action.payload;
        },
        clearUserName(state) {
            return "clean";
        },
        saveUserInfo(state, action) {
            console.log(action.payload);
            console.log(action.payload.id);
            console.log(action.payload.name);

            let { id, name } = action.payload;
            console.log(id);
            console.log(name);
            return state;
        }
    }
})

export let { saveUserName, clearUserName, saveUserInfo } = userSlice.actions;
//actions = 상태 관리하는 slice(변수)에 속한 상태변경 함수가 모여있는 객체

let weather = createSlice({
    name: 'weather',
    initialState: {
        weather: "snowy",
        temparature: "2",
        hmdt: "70"
    },
    reducers: {
        setWeatherInfo(state, action) {
            let { weather, temperature, hmdt } = action.payload;
            console.log(weather);
            console.log(temperature);
            console.log(hmdt);

            state.weather = weather;
            state.temparature = temperature;
            state.hmdt = hmdt;
            /*
            return{
                weather: weather,
                temperature : temperature,
                hmdt : hmdt
            };
            */
        }
    }
})

export let { setWeatherInfo } = weather.actions;

export default configureStore(
    {
        reducer: {
            user: userSlice.reducer,
            weather: weather.reducer
        }
    }
);

let companySlice = createSlice({
    name: "company",
    initialState: {
        name: "qwerComp",
        sid: "10248832",
        address: "어디어디"
    },
    reducers: {
        changeAddress(state, action) {
            state.address = action.payload; // changeAddress('어디주소')
            state.address = action.payload.address; // {address'어디주소'}
            //dispatch(changeAddress( {address : '어디주소'} ));
        }
    }
})

export let { changeAddress } = companySlice.actions;
//useSelector((state)=>{return state.company})