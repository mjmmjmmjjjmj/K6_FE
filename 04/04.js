document.addEventListener("DOMContentLoaded", () => {
    
    //    button가져오기
    const bt1 = document.querySelector("#bt1");
    //const bt1 = document.querySelector("div>button 아니면 button");도 됨
    
    //버튼의 이벤트 달기
    bt1.addEventListener("click", ()=> {
        rollthedice1();
    });

})


const rollthedice1 = () => {    
    const n = Math.floor(Math.random()*6) +1 ;
    const img = document.querySelector("#img1");
    img.setAttribute("src",`./dicepic/${n}.png`)
    console.log("click", n)
}
