//Update the text on the "formatted text section" when a user types

textUpdate = () =>{
 
   let text = document.getElementById("text-input").value;

   document.getElementById("text-output").textContent = text;
}



//Add a bold class to the "formatted text" when clicked

makeBold = (elem) => {

    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("bold");
}



//Add an Italic class to the "formatted text" when clicked

makeItalic = (elem) => {

    elem.classList.toggle("active");
    document.getElementById("text-output").classList.toggle("italic");
}



//Add underline class to the "formatted text" when clicked using if/else statement

makeUnderline = (elem) => {
    elem.classList.toggle("active");
    let editedText = document.getElementById("text-output");

    if(editedText.classList.contains("underline")){
        editedText.classList.remove("underline");
    }else{
        editedText.classList.add("underline");
    };
}



//Add a textAlign class to the "formatted text" when clicked so formatted text can align to right, center, left.

textAlign = (elem, alignType) => {

    document.getElementById("text-output").style.textAlign = alignType;

    let buttonList = document.getElementsByClassName("align");

    /*
    for (i = 0; i < buttonList.length; i++){
        // console.log(buttonList[i]);
        buttonList[i].classList.remove("active");
    } 

    elem.classList.toggle("active");


}
    */

for(button of buttonList){
    button.classList.remove("active");
}

    elem.classList.toggle("active");

}



