    

document.addEventListener ("DOMContentLoaded", () => {
    const bt = document.querySelector("button") ;
    const msg = document.querySelector("#msg")

    bt.addEventListener("click", (e)=> {
        e.preventDefault(); 
        
        const number = []
        while(number.length < 6) {
            let ran = Math.floor(Math.random() * 45)+1
            if (number.indexOf(ran) === -1) {
                number.push(ran)
            }
        }
        console.log("로또 번호는 :" , number);
        msg.innerHTML = ("로또 번호는 :" , number);
    })
    
})
