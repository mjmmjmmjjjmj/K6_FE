//자바스크립트 데이터 타입
//기본 타입
//list와 arr 순서가 중요 시퀀스형
//dict와 obj는 키의 값으로 구분함 
//list와 tuple은 [] {} T쓰는 걸로 구별+ tuple : 수정이 안됨
//list tuple dict 중요 개념 구별 

// let n1 = 10;            //정수
// let n2 = 10.5;          //실수
// let s1 = "안녕하세요";   //문자열

// console.log("정수: ", n1);
// console.log("실수: ", n2);
// console.log("문자열: ", s1);

// //배열 순회
// console.log("배열 for in: ") ;

// //문자열 순회
// for (let i in s1) {
//     console.log("문자열: ", s1[i])
//     //키 값 0부터 값을 가져옴
// }

// console.log("배열 for of: ")
// for(let c of s1) {
//     console.log("문자열: ", c)
//     //요소값 그대로를 가지고 옴
// }


//배열
//tailing 쉼표 사용가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3] ;
console.log("배열 : ", arr) ;
console.log("배열의 요소접근 : ", arr[1]);

//map을 생성해서 나오게 되면 return 계수는 똑같음. 

//arr1 만들기 
let arr1  = [0,0,0,0,0,2];
for(let i in arr) {
    arr1[i] = arr[i];
}
console.log("반복문 첨자로 arr1= ", arr1);

//arr2 만들기
let arr2  = [];
console.log("arr2= ", arr);

//반복문으로
for(let item of arr) {
    arr2.push(item) //복사해서 뭘 만듦. 얕은 복사 
}
console.log("반복문으로 arr2= ", arr)

//배열 map 함수
console.log("배열 map 함수")
/*const 대신 let 씀 밑에 콜백함수 때문에*/


// arr2 = arr.map((v, i) => {
//     console.log("map=>v:",v , "map=>i:",i) ;
//     // console.log("map=>i:",i) ;
    
//     return v + "👍" ;
// });
console.log ("arr2 = ", arr2) ;


//callbackj 함수의 문법
console.log("배열 map함수: 콜백")
//콜백의 인수가 1개일 경우 () 생략가능
//콜백의 body에 실행문이 없고 return문만 있을 경우 중괄호와 return 생략 가능

arr2 = arr.map((v, i) => v + "💖"); 
console.log ("map.arr2 = ", arr2) ;

arr2 = arr.map((v, i) => v + "💖" + i);
console.log ("map.arr2 = ", arr2) ;

//filter
let arr21 = [] ;
for(let item of arr) {
    if (!isNaN(item)) arr21.push(item)
}
console.log("반복문 Filter arr21 = ", arr21)

//비교하기
arr.filter((v) => 
    // if (!isNaN(item)) console.log(v);
    isNaN(v) );
    console.log("Filter arr21 = ", arr21)

//전개연산자
let arr22 = [...arr] ;
console.log("전개연산자 : ", arr22)

// //배열의 정렬
// arr.sort((a,b) => a-b) 오름차순
// arr.sort((a,b) => b-a) 내림차순 정렬

// //배열요소 찾기
// arr.indexOf()

// // 배열 합치기
// arr.join('')

//---------------------
//map(), filter() 배열에만 사용
//obj에서는 못 씀 그치만 써야한다면...?
//배열 형태로 바꿔야 쓸 수 있음. 
//key랑 value 머 따로든 같이든 뽑아낼 수 있음. 
//---------------------

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

//구조분의 할당
for(let [k, v] of Object.entries(obj)) {
    console.log("obj: ", k);
    console.log("obj키: ", v);
    //요소값 그대로를 가지고 옴
}


//map이랑 filter 쓸 수 있ㅇ므 
console.log ("오브젝트 키배열 : ", Object.keys(obj));
//let arr3 = Object.keys(obj).map((v, i) => v + i)
let arr3 = Object.keys(obj).map(k => k + obj[k])
console.log("arr3 = ", arr3)