function greeting(){
    var Myname;
    Myname = prompt("Enter your name");
    document.getElementById("name").innerHTML = Myname;
}

function changeColor (mycolor){
    const ele = document.getElementById("name");
    ele.style.color=mycolor;
}