var button_no = document.getElementById('button_no');
var contador = 0


button_no.onmousemove = function(){

  if(contador <= 10){
  let left = String(parseInt(Math.random() * 501));
  let right = String(parseInt(Math.random() * 501));
  let bottom = String(parseInt(Math.random() * 301));
  let top = String(parseInt(Math.random() * 301));
  
  button_no.style.left = `${left}px`;
  button_no.style.right = `${right}px`;
  button_no.style.top = `${top}px`;
  button_no.style.bottom = `${bottom}px`;

  contador+= 1

  }

  if(contador > 10){
    button_no.style.left = `0px`;
    button_no.style.right = `0px`;
    button_no.style.top = `0px`;
    button_no.style.bottom = `0px`;

  }
  
  
}



