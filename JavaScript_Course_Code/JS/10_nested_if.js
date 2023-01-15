var yourname = prompt("What is your name?")

if (yourname.length != 0){
    if (yourname == "Vivek")
      document.write("What a beautiful name");
    else
      document.write("Hello " +  yourname);
    
}
else
   document.write("Feeling shy?");
 /*As soon as a conditional is matched, the rest can be skipped*/