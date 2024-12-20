let arr = [10,15,25,40];

arr.map(()=>{ // map은 반복실행 하면서 return 가능
    console.log('arr map');
});

arr.forEach(()=>{ // 반복문 내부에 코드실행
    console.log('arr forEach');
});

arr.map((item)=>{ // map 내부 함수 매개변수 (item) 배열 안에 값주입
    console.log(item);
});

arr.map((item , index)=>{ // map 내부 함수 매개 변수 (item, index ) 배열안에 값과 인덱스 주입
    console.log('값:' + item + ' index:' + index + ' 배열[index]:' + arr[index]);
});

let result1 = arr.map(()=>{
    return 99;
});
console.log(result1);

let result2 = arr.map((item)=>{// return이 없어 undifined
    console.log(item);
});
console.log(result2);

let result3 = arr.map((item)=>{// return이 없어 undifined
    return item + 100 ; // 10 20 30 40 > [0 0 0 0]
});
console.log(result3);

let result4 = arr.map((item)=>{// return이 없어 undifined
    return '보유한 값:' + item
});
console.log(result4);

let menuArr = ['우동', '라면', '김밥']
let result5 = menuArr.map((item, index)=>{
    return '<p>' + item + '</p>';
})
console.log(result5);

                    // ()=> {return data} ()=> data
let result6 = menuArr.map((item, index)=>'<p>' +item+'</p>');
console.log(result6);

//2 filter
//let arr = [10,20,30,40];

let result7=arr.filter((value)=>{  //10 30 40
    return value != 20; // 조건 결과가 참인 값만 return
});
console.log(result7);

//3 find
let result8 = arr.find((value)=>{ //찾는 값이 없으면 undifined
    return value == 30;
});
console.log(result8);

//4 findindex

let result9 = arr.findIndex((value, index)=>{ //찾는 값이 없으면 -1
    return value == 20;
});
console.log(result9);

let [n1, n2, n3] = [10, 20, 30];
console.log(n1);
console.log(n2);
console.log(n3);

let obj = {
    num1 : 30, num2 : 50
};

let { num1, num2 } = obj;
console.log(num1);
console.log(num2);


