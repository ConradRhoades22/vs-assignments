const form = document.getElementById('add-todo')

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const userInput = form.user.value
    form.user.value = ""

    const li = document.createElement('li')

    const textDiv = document.createElement('div')
    textDiv.textContent = userInput
    li.append(textDiv)

    const buttonDiv = document.createElement("div")

    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.addEventListener("click", function(){
        textDiv.contentEditable = true;
        textDiv.style.backgroundColor = "#dddbdb";
    })
    editButton.addEventListener("submit", function(){
        textDiv.contentEditable = false;
        textDiv.style.backgroundColor = "default"
    })
    buttonDiv.append(editButton)

    const removeButton = document.createElement('button')
    removeButton.innerText = 'X'
    removeButton.addEventListener("click", function(){
        li.remove(0)
    })
    buttonDiv.append(removeButton)
    li.append(buttonDiv)
    document.getElementById("list").prepend(li)
})
