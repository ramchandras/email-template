var com=[];
let input=document.getElementById("Input1").value;
let text=document.getElementById("Textarea1").value;
let text2=document.getElementById("Textarea3").value;
let obj={
    email:input,
    text:text,
    text2:text,
};
let send=document.getElementById("sndbtn");
send.addEventListener( onclick);
    
function onclick()
{
    com.push('Input1');
    com.push('Textarea1');
    com.push('Textarea3');
    com.push(inbox);
};
  
  console.log(com);
    
