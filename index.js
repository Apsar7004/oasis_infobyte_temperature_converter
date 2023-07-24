let enteredValue;
let enteredTemp;
let Temp;

function submit(){
  
  enteredTemp=document.getElementById("mySelect").value; 
  enteredValue=document.getElementById("value").value;
  if(enteredValue!=''){
    if(enteredTemp=="Celsius"){
        Temp=enteredValue*1.8+32;
        document.getElementById("result").innerHTML=`Converted to ${Temp}&deg;F`;

        setTimeout(() => {
            window.location.reload();  
        }, 3000);

    }else{
        Temp=(enteredValue-32)/1.8;
        document.getElementById("result").innerHTML=`Converted to ${Temp}&deg;C`;

        setTimeout(() => {
            window.location.reload();  
        }, 3000);


    }
    
  }else{
    document.getElementById("value").classList.add("error");
    document.getElementById("result").innerHTML="Give the inputs";
    setTimeout(() => {
        document.getElementById("value").classList.remove("error");
        document.getElementById("result").innerHTML="";
    }, 3000);
    
  }

}