var fruits = ["Banana", "Orange", "Mango", "Apple"];

function loadFruits(){
    document.getElementById("fruits").innerHTML=fruits;
}

function myFunction(){
    var fruit = prompt("Whats Your Favorite Fruit");
    fruits[fruits.length] = fruit;
    document.getElementById("fruits").innerHTML = fruits;
}