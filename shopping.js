 let tab=document.getElementsByClassName("x");
 let prices=Array.from(document.getElementsByClassName("unit-price")).map(el=>Number(el.innerHTML));
 let sum= document.querySelector('.sum')
 console.log(prices)
 let somme=Number(document.getElementsByClassName("sum").innerHTML);
 for (let i of tab){
     i.addEventListener("click",function(){
         i.parentElement.parentElement.parentElement.remove()
     })
 }
 let tabp=Array.from(document.getElementsByClassName("plus")); 
 for (let i of tabp){
     i.addEventListener("click",function(){
       
         i.nextElementSibling.innerHTML++
        //  i.parentElement.nextElementSibling.innerHTML = i.nextElementSibling.innerHTML * prices[tabp.indexOf(i)] + '$'
         let x = Number(sum.innerHTML) + Number(i.parentElement.nextElementSibling.children[0].innerHTML)
         sum.innerHTML = x
        
        //   document.getElementsByClassName("sum").innerHTML=somme(i-1,i)
          
     })
 }
 let tabm=Array.from(document.getElementsByClassName("moin")); 
 for (let i of tabm){
     i.addEventListener("click",function(){
        
         let x= Number(i.previousElementSibling.innerHTML)
        
         if (x > 0){
         i.previousElementSibling.innerHTML--
        //  i.parentElement.nextElementSibling.innerHTML = i.previousElementSibling.innerHTML * Number(prices[tabm.indexOf(i)]) + '$'
         
        let x = Number(sum.innerHTML) - Number(i.parentElement.nextElementSibling.children[0].innerHTML)
        sum.innerHTML = x
        //  somme=tabp.reduce((a ,b)=>a+b)
        //  document.getElementsByClassName("sum").innerHTML=somme

        }
        
     })
 }