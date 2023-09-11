const display  =  document.querySelector(".display");
const button   =  Array.from(document.getElementsByClassName("button"));


button.map( x => {
  x.addEventListener('click', (e) => {
      switch(e.target.innerText){
        case "C":
            display.innerText = "";
            break;

        case "←":
            if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
            }
            break;

        case "=":
            
            try{
                display.innerText = eval(display.innerText);
            }catch{
                display.innerText = "Syntax Error!";
            }

            break;
    
         default:
            display.innerText += e.target.innerText;    
      }
  })
})
























