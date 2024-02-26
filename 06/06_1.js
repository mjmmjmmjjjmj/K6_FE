const handleclick = (n) => {
    const computer = document.querySelector("#computer");
    const user = document.querySelector("#user");

    const nc = Math.floor(Math.random() * 6) + 1;

    computer.setAttribute("src", `./dicepic2/${nc}.png`);
    user.setAttribute("src", `./dicepic2/${n}.png`);

    if (n == nc) {
    document.querySelector("#msg").innerHTML="맞음";
    } else {
        document.querySelector("#msg").innerHTML="틀림";
    }
}
//button에 onclick=handleclick(1 or 2 or 3 or ...6) 있어야 작동