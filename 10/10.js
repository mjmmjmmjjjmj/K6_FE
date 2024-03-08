// document.addEventListener ("DOMContentLoaded", () => {
//     const bt = document.querySelector("button") ;
//     const msg = document.querySelector("#msg")

//     bt.addEventListener("click", (e)=> {
//         e.preventDefault(); 

//         const number = []
//         while(number.length < 6) {
//             let ran = Math.floor(Math.random() * 45)+1
//             if (number.indexOf(ran) === -1) {
//                 number.push(ran)
//             }
//         }
//         console.log("로또 번호는 :" , number);
//         msg.innerHTML = ("로또 번호는 :" , number);
//     })

// })




document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("button");
    const numDisp = document.querySelector("#numDisp");

    let nums = [];

    bt.addEventListener("click", (e) => {
        e.preventDefault();
        //배열 초기화
        // nums = [];
        nums.length = 0;
        // 1~45 랜덤 수 중복없이 7개 만들기
        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            // nums.push(n);
            if (!nums.includes(n)) nums.push(n)
        }
        nums = nums.map((v) => 
        `<span class = "sp${parseInt(v / 10)}">${v}</span>`
    );

    nums.splice(6, 0, '<span> + </span>');
    numDisp.innerHTML = nums.toString().replaceAll(',', '');
    
    console.log(nums)

        // let tags = '' ;
        // nums.map((v, i) => {
        //     tags = tags + `<span class = "sp${parseInt(v/10)}">${v}</span>`;
        //     if (i === 5) 
        //         tags = tags +`<span> + </span>`
        // });
        // numDisp.innerHTML = tags
        // 이렇게 해도 되는데 

        // let tags = [] ; 


        // tags = nums.map((v, i) =>
        //     `<span class = "sp${parseInt(v / 10)}">${v}</span>`
        // );
        // tags.splice(6, 0, '<span> + </span>')
        // let s = tags.toString().replaceAll(',', '')

        // console.log(s);
        // numDisp.innerHTML = s
        //이건 문자열로 하는 법
    })

});