const Submit = document.querySelector("#butt")
Submit.addEventListener('click', ()=>{
    if (confirm("is this your Final Answer")){
        let q1 =document.forms['form2']['a'].value
        let q2 =document.forms['form2']['b'].value
        let q3 =document.forms['form2']['c'].value
        let q4=document.forms['form2']['d'].value
        let q5 =document.forms["form2"]['e'].value
        
        let away = []
        if (q1=="live"){
        away.push("1")
        }
        if (q2=="life"){
        away.push("1")
        }
        if (q3=="let"){
        away.push("1")
        }
        if (q4=="lee"){
        away.push("1")
        }
        if (q5=="left"){
        away.push("1")
        }
      hit = document.querySelector("#at")
       hit.innerHTML=("you got " + away.length + " out of 5 correctly")
       if ( away.length <= 2 ){
        document.querySelector("#money").innerHTML =("You don't know me well")

    }
    else if(away.length >=4)
    document.querySelector("#money").innerHTML = ("You tried")
    }
    else if(away.length ==5){
        document.querySelector("#money").innerHTML = ("You know me so well")
    }
    else{
        document.querySelector("#money").innerHTML = ("OMO")
    }
   
   

})
