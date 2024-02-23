/*
함수작성 2 : 화살표 함수
상수로 함수를 정의할 수 있음. 원래 상수에는 값만 넣는데...*/

//Dom tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded", ()=>{
    //콜백?홀백? 함수
    console.log("DOMContentLoaded ok");

    //버튼생성 : const랑 let 두개만
    const bt3=document.createElement("button") ;
    const bt3Txt=document.createTextNode("button 3");
    bt3.appendChild(bt3Txt);
    bt3.setAttribute("id", "bt3");

    const bt4=document.createElement("button");
    const bt4Txt=document.createTextNode("button 4");
    bt4.appendChild(bt4Txt);
    bt4.setAttribute("id", "bt4");

    //버튼추가하기
    document.querySelector("#btArea2").append(bt3);
    document.querySelector("#btArea2").append(bt4);

    //버튼 이벤트 달기
    bt3.addEventListener("click", ()=>{
        handleClick(3) ;
    });
    bt4.addEventListener("click", ()=>{
        handleClick(4) ;
    });
})
//화살표함수 유용하군...

const handleClick = (n) => {
    let msg ;
    if (n == 1) msg ="<h2>hi</h2>"
    else if (n==2) msg = "<h2>Bye</h2>";
    else if (n==3)msg ="<h2>메롱~~</h2>";
    else msg = "<h2>하하~~ </h2>"

    document.querySelector ("#msgArea").innerHTML = `<h2>${msg}</h2>`;
}
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