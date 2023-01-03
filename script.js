var timer =0;
var flag =0;
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    if(flag===0){
    
    document.querySelector("h4").textContent ="Friend request send";
    document.querySelector("h4").style.color = "rgb(183, 147, 63)";

    document.querySelector("button").style.backgroundColor = "rgb(227, 22, 22)";
    document.querySelector("button").textContent = "Removefriend";

    timer = setTimeout(function(){
        document.querySelector("h4").textContent="Friends";
        document.querySelector("h4").style.color='rgb(21, 194, 21)';

    },2000)
    flag=1;
}
else{
    document.querySelector("h4").textContent="Strangers";
    document.querySelector("h4").style.color='rgb(227, 22, 22)';

    document.querySelector("button").style.backgroundColor="rgb(82, 82, 231)";
    document.querySelector("button").textContent="Add Friend";
   
   clearTimeout(timer);
    flag=0;   
 }
});

