const input = document.getElementById('inputText');
input.addEventListener("keypress", onEnter)

function addToDo(todo) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const button = document.createElement("button");

    const liText = document.createTextNode(todo);
    const buttonText = document.createTextNode('x');

    input.setAttribute('type', 'checkbox');
    button.appendChild(buttonText)
    button.addEventListener("click", onDelete)
    button.classList.add("buttons")

    li.appendChild(input);
    li.appendChild(liText);
    li.appendChild(button)

    const list = document.getElementById('lista-de-cosas');
    list.appendChild(li);
}

function onEnter(event) {
    if(event.key === "Enter") {
        const input = event.target;
        const loQueEscribi = input.value;
        addToDo(loQueEscribi)
        input.value = "" 
    }
}

function onDelete(event) {
    const deletebutton = event.target;
    deletebutton.parentElement.remove()      
}
