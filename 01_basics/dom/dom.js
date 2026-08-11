const container = document.querySelector("#container");

const display = container.firstElementChild;
//select the first child of #container => .display
console.log(display);

const controls = document.querySelector(".controls");

//selects the prior sibling => .display
const  display2 = controls.previousElementSibling;
console.log(display2);


// element creation

const div = document.createElement("div");

// Append elements

//parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.

// Remove elements

// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.

div.setAttribute("style", "color: blue; background: white;");


// editing attribute
// if id exists, update it to "theDiv", else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// return value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specifief attribute

div.removeAttribute("id");



// working with classes


div.classList.add("new");
div.classList.remove("new");
div.classList.toggle("active");  // if div doesn't have class "active" then add it, or if it does, then remove it


// adding textContent
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World! ";

// adding HTML content
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

//note: Using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potential security risks. 

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);