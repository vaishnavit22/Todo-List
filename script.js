let inputs = document.getElementById("inp");//target our id through getelementbyid
let text = document.querySelector(".text");//target our class through queryselector

function Add() {
    if (inputs.value == "") { // the value inside the imput tag is (empty) == "" shows alert box
        alert("Please Enter Task");
    } else {
        //add task  
        let newEle = document.createElement("ul");//creates new html element of type <ul>stands an unordered list.
        //newEle:  This element is not yet added to the document; it's just created and stored in the variable newEle.
        newEle.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        //newEle.innerHTML : is used to set the html content inside the <ul>element newEle
        //${input.value} : placeholder >`${}` means template literal > to insert.value into the html code.

        //to send into text class
        text.appendChild(newEle);//The appendChild() method is used to add a child element to the specified parent element in the DOM (Document Object Model).
        inputs.value = "";//empty string

        //delete
        newEle.querySelector("i").addEventListener("click", remove);//target i > addeventlistener click event or create fun 
        function remove() {
            newEle.remove();
        }
    }
}