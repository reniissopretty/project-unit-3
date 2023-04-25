/* Declare variables below to save the different sections (divs) of your story*/

let elementToChange=document.querySelector(".option-one-screen")
let elementToClick=document.querySelector(".paris-button")
let elementToButton=document.querySelector(".option-two-screen")
let elementToClicker=document.querySelector(".brussels-button")
let elementToChangeTwo=document.querySelector(".option-one-end")                     
let elementToClickTwo=document.querySelector(".effieltowerbutton")                 
let elementToChangeThree=document.querySelector(".option-two-end") 
let elementToClickThree= document.querySelector(".option-two")
elementToClick.onclick=function(){
 elementToChange.style.display="block";
}
  elementToClicker.onclick=function(){
 elementToButton.style.display="block";
}

elementToClickTwo.onclick=function(){
  elementToChangeTwo.style.display= "block";
                                    }
elementToClickThree.onclick=function() {
  elementToChangeThree.style.display="block";}

 

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
