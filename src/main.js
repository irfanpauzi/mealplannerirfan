const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

btnCreate.addEventListener('click', function() { //creating text file when user click CREATE button
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err) { //param1: text file yg kita nak write, param2: apa yg kita nk write ke text file
        if(err) {
            alert("An error occurred creating the file" + err.message)
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value 
        alert(txtfile + "text file was created")
        console.log("The file was created")   
    })
})

btnRead.addEventListener('click', function(){ //read contents of the created text file
    let file = path.join(pathName, fileName.value)

    fs.readFile(file, function(err, data) { 
        if(err) {
            return console.log(err)
        }
        fileContents.value = data
        console.log("The file was read!")
    })
})
    
btnDelete.addEventListener('click', function(){ //delete contents
    let file = path.join(pathName, fileName.value)

    fs.unlink(file, function(err){ 
        if(err){
            alert("An error occurred deleting the file" + err.message)
            return console.log(err)
        }
        alert(txtfile + "text file was deleted")
        fileName.value = ""
        fileContents.value = ""
        console.log("The file was deleted!")
    })
})

btnUpdate.addEventListener('click', function() { //update contents of the created text file
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value

    fs.writeFile(file, contents, function(err) { //param1: text file yg kita nak write, param2: apa yg kita nk write ke text file
        if(err) {
            return console.log(err)
        }
        alert(fileName.value + "text file was updated")
        console.log("The contents of file was updated")   
    })
})
function goBack() {
  window.location.href = "index.html";
}