const handleclick = () => {    
    const bts = document.querySelectorAll("img");
   
    bts.forEach((bt)=>{
        const n =  Math.floor(Math.random()*6) +1 ;
        bt.setAttribute("src",`./dicepic2/${n}.png`);
        
        console.log("click", n)
    });
   
}
