textUpdate = () =>{
 
   let text = document.getElementById("text-input").value;

   document.getElementById("text-output").textContent = text;
}



makeBold = (elem) => {

    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("bold");
}

makeItalic = (elem) => {

    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("italic");
}

/*
makeUnderline = (elem) => {
    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("underline");
}

*/

makeUnderline = (elem) => {
    elem.classList.toggle("active");
    let editedText = document.getElementById("text-output");

    if(editedText.classList.contains("underline")){
        editedText.classList.remove("underline");
    }else{
        editedText.classList.add("underline");
    };
}


alignText = (elem, alignType) => {

    
    // console.log(alignType);
    document.getElementById("text-output").style.textAlign = alignType;

    let buttonList = document.getElementsByClassName("align");

    /*
    for (i = 0; i < buttonList.length; i++){
        // console.log(buttonList[i]);
        buttonList[i].classList.remove("active");
    } 

    elem.classList.toggle("active");

    

//    let newButtons = Array.from(buttonList);

    newButtons.forEach = (button) => {
    button.classList.remove("active");

}
*/

for(button of buttonList){
    button.classList.remove("active");
}

    elem.classList.toggle("active");

}



