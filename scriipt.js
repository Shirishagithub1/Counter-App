let Increment =document.getElementById("btn-1");
let Reset =document.getElementById("btn-2");
let Decrement =document.getElementById("btn-3");
let headingValue =document.getElementById("value");

Decrement.addEventListener('click',() => {

    let value =headingValue.textContent;

    value -=1; //compound operator;

    headingValue.textContent = value

});


Increment.addEventListener('click', ()=> {
    let IncrementValue = Number(headingValue.textContent);

    IncrementValue +=1;


    headingValue.textContent =IncrementValue


});

Reset.addEventListener('click',()=>headingValue.textContent =0)


function changeColor(){


        let random1 = Math.random() * 255;
        let actualValue = Math.floor(random1);
    
         let random2 = Math.random() * 255;
         let actualValue2 = Math.floor(random2);
    
         let random3 = Math.random() * 255;
         let actualValue3 = Math.floor(random3);
    
    
         document.body.style.backgroundColor = `rgb(${actualValue}, ${actualValue2}, ${actualValue3})`
     }
    

     function changeColor1(){


        let random1 = Math.random() * 255;
        let actualValue = Math.floor(random1);
    
         let random2 = Math.random() * 255;
         let actualValue2 = Math.floor(random2);
    
         let random3 = Math.random() * 255;
         let actualValue3 = Math.floor(random3);
    
    
         document.body.style.backgroundColor = `rgb(${actualValue}, ${actualValue2}, ${actualValue3})`
     }
    

     function changeColor2(){


        let random1 = Math.random() * 255;
        let actualValue = Math.floor(random1);
    
         let random2 = Math.random() * 255;
         let actualValue2 = Math.floor(random2);
    
         let random3 = Math.random() * 255;
         let actualValue3 = Math.floor(random3);
    
    
         document.body.style.backgroundColor = `rgb(${actualValue}, ${actualValue2}, ${actualValue3})`
     }
    
    
    