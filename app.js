var list = document.getElementById("list")

function addItem(){
    
    var todoItems = document.getElementById("items")
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItems.value)
    li.appendChild(liText)
    list.appendChild(li)
    

    var delBTN = document.createElement("button")
    var delTxt = document.createTextNode("DELETE")
    delBTN.setAttribute("class","dltBtn")
    delBTN.setAttribute("onclick","deleteBtn(this)")
    delBTN.appendChild(delTxt)


    var editBTN = document.createElement("button")
    var editTxt = document.createTextNode("EDIT")
    editBTN.setAttribute("class","editBtn")
    editBTN.setAttribute("onclick","editBtn(this)")
    editBTN.appendChild(editTxt)


    li.appendChild(editBTN)
    li.setAttribute("class","todoTask")
    li.appendChild(delBTN)

    todoItems.value = ""
}

function deleteBtn(e){
    e.parentNode.remove()
}

function delItem(){
    list.innerHTML=""
}

function editBtn(a){
    var val = a.parentNode.firstChild.nodeValue
   var editvalue = prompt("Enter value",val)
   a.parentNode.firstChild.nodeValue = editvalue
}