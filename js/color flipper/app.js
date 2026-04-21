let codeElement = document.getElementById("code");
let buttonElement = document.getElementById("Button");
let containerElement = document.getElementById("Container");


let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
buttonElement.addEventListener("click", function(){
     let color='#'
    for(let i=0; i<6; i++){
        
    let randColor=Math.floor(Math.random()*16);
      color+=arr[randColor];
    }

      containerElement.style.backgroundColor=color;
    codeElement.innerText = `Color Flipper - ${color}`;
    })
 