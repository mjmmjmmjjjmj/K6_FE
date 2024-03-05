document.addEventListener("DOMContentLoaded", () => {
    //DOM 생성 후에 img, input, button 가져오기
    const upDownImg = document.querySelector("img") ;
    // const numInput = document.querySelector("#num1") ;
    const numInput = document.getElementById("num1") ;
    const bt = document.querySelector("button") ;
    const msg = document.querySelector("#msg")
    
    //input focus
    numInput.focus();

    //랜덤 수 생성 변수
    let n ;
    let flag = false ;

    //버튼의 클릭이벤트 달기
    bt.addEventListener("click", (e)=>{
        e.preventDefault(); 
        //form을 html에서 설정하고 여기서 preventDefault까지 설정
        //자기 마음대로 넘어가지 않눈 거/엔터 치면 넘기는 게 가능해짐

        //if (flag ===false) {}
        if (!flag) {
            n = Math.floor(Math.random(100)*100) + 1; 
            //1에서 100까지
            //몇 개가 생길지는 곱하기로 적어줌
            console.log("n = ", n);
            flag = true    
            
            //입력 초기화
            numInput.style.display = "inline";
            numInput.value="" ;
            numInput.focus();
            bt.innerHTML= "확인";

        }

        //숫자 비교하기
        msg.innerHTML = ""
        if (n == parseInt(numInput.value)) {
            upDownImg.setAttribute("src", "./good.png")
            numInput.style.display = "none" ;
            bt.innerHTML = "재시작" ;
            flag = false ; 
        }
        
        //input 박스 내용 가져오기
        if (numInput.value < 1 || numInput.value > 100 ) {
            //alert("숫자를 입력하세요.")
            msg.innerHTML = "<span>1에서 100 사이의 숫자를 입력하세요.</span>"
            numInput.focus();
            return ;
        }

        else if (n > numInput.value) {
            // msg.innerHTML = "<span>Up</span>"
            upDownImg.setAttribute("src", "./up.png")
        }
        else {
            upDownImg.setAttribute("src", "./down.png")
            // msg.innerHTML = "<span>Down!</span>"
        }
    })

});