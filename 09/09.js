//자바스크립트 데이터 타입
//기본 타입
let n1 = 10;            //정수
let n2 = 10.5;          //실수
let s1 = "안녕하세요";   //문자열

console.log("정수: ", n1);
console.log("실수: ", n2);
console.log("문자열: ", s1);

//배열 순회
console.log("배열 for in: ") ;

//문자열 순회
for (let i in s1) {
    console.log("문자열: ", s1[i])
    //키 값 0부터 값을 가져옴
}

console.log("배열 for of: ")
for(let c of s1) {
    console.log("문자열: ", c)
    //요소값 그대로를 가지고 옴
}


//배열
//tailing 쉼표 사용가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3] ;
console.log("배열 : ", arr) ;
console.log("배열의 요소접근 : ", arr[1]);

//map을 생성해서 나오게 되면 return 계수는 똑같음. 

//배열 map 함수
console.log("배열 map 함수")
/*const 대신 let 씀 밑에 콜백함수 때문에*/ 
let arr2 = arr.map((v, i) => {
    console.log("map=>v:",v , "map=>i:",i) ;
    // console.log("map=>i:",i) ;
    
    return v + "👍" ;
});
console.log ("arr2 = ", arr2) ;


//callbackj 함수의 문법
console.log("배열 map함수: 콜백")
//콜백의 인수가 1개일 경우 () 생략가능
//콜백의 body에 실행문이 없고 return문만 있을 경우 중괄호와 return  생략 가능
arr2 = arr.map(v => v + "👍");
console.log ("arr2 = ", arr2) ;

arr2 = arr.map((v, i) => v + "👍" + i);
console.log ("arr2 = ", arr2) ;


//오브젝트
let obj  = {'🍎':1, '🥕': 2, '🍌': 3} ; 
console.log("오브젝트 : ", obj);
console.log("오브젝트 요소 접근 :", obj['🍎'])

//오브젝트 순회
console.log("오브젝트 for in")
for (let i in obj) {
    console.log("obj : ", obj[i]);
    //키 값 0부터 값을 가져옴
}

console.log("오브젝트 for of")
for(let c of Object.entries(obj)) {
    console.log("obj: ", c);
    console.log("obj키: ", c[0]);
    console.log("obj값: ", c[1]);
    //요소값 그대로를 가지고 옴
}
for(let [k, v] of Object.entries(obj)) {
    console.log("obj: ", k);
    console.log("obj키: ", v);
    //요소값 그대로를 가지고 옴
}

