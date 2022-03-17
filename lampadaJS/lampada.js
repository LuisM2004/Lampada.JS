var lamp = document.getElementById("lamp")
var turnoff = document.getElementById("turnoff")
var turnon = document.getElementById("turnon")
var html = document.querySelector("html")
var cont = document.querySelector('.container')


turnoff.addEventListener('click', function(){
    lamp.src = "./lampada.img/ligada.jpg"
    if(turnoff.style.display = 'block'){
        turnoff.style.display = 'none'
        turnon.style.display = 'block'
        
    }
    html.style.backgroundColor = '#fff'
    cont.style.backgroundColor = '#fff'

})
turnon.addEventListener('click', function(){
    lamp.src = "./lampada.img/desligada1.png"
    if(turnon.style.display = 'block'){
        turnon.style.display = 'none'
        turnoff.style.display = 'block'
        
    }
    html.style.backgroundColor = '#000'
    cont.style.backgroundColor = '#000'

})



