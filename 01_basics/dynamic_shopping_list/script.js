const button = document.querySelector("button");
const input= document.querySelector("input");
const list = document.querySelector("ul")


button.addEventListener("click",(event)=>{
    event.preventDefault()
    const inputValue = input.value

    input.value= ""

    const listItem = document.createElement("li")
    
    const span = document.createElement("span")
    span.textContent = inputValue;
    
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    
    
    list.appendChild(listItem)
    listItem.appendChild(span)
    listItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    })
    input.focus();
});




