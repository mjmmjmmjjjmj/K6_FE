 

document.addEventListener("DOMContentloaded", ()=> {


    //const randomNum = Math.floor(math.random()*(6-1));
    //    button가져오기
    const bt1 = document.querySelector("#bt1");
    //const bt1 = document.querySelector("div>button 아니면 button");도 됨
    
    //버튼의 이벤트 달기
    bt1.addEventListener("click", ()=> {
        console.log("click")
    });
});


const rollthedice = () => {
    const n = Math.floor(Math.random()*6) +1 ;
    console.log("click", n)
}


/*const rollthedice = (n) => {
    let randomNum1 = Math.floor(math.random()*(6-1));
}

document.querySelector("#button1").innerHTML = 
`<h2>${msg}</h2>`;
*/
