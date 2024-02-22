/*
함수작성 2 : 화살표 함수
상수로 함수를 정의할 수 있음. 원래 상수에는 값만 넣는데...

*/
const handleClick = (n) => {
    let msg ;
    if (n == 1) msg ="Hello"
    else msg = "GoodBye"

    document.querySelector ("#msgArea").innerHTML = `<h2>${msg}</h2>`;
    /*let msg ;
    if (n == 1) msg =<h2>"Hello"</h2>
    else msg = <h2>"GoodBye"</h2>
    document.querySelector ("#msgArea").innerHTML = msg;
}*/
/*함수작성 1 */
/* alert("안녕하세요~")
// function handleClick(n) {
    //메세지 영역 가져오기 1
    //document.getElementById("msgArea").innerHTML = "안녕하세요";\
    
    //메세지 영역 가져오기 2
    //document.querySelector ("#msgArea").innerHTML = "<h2>button "+ n +"이 눌러졌습니다</h2>";
    // document.querySelector ("#msgArea").innerHTML = `<h2>button ${n}이 눌러졌습니다</h2>`;
}*/