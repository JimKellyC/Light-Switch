const btnOn = document.getElementById("myImageOn")
const btnOff = document.getElementById("myImageOff")

btnOn.addEventListener('click', () => {
    document.getElementById('myImage').src="images/pic_bulbon.gif"
    document.body.style.backgroundColor = "black"
    document.querySelector("h2").style.color = "white"
})

btnOff.addEventListener('click', () => {
    document.getElementById('myImage').src="images/pic_bulboff.gif"
    document.body.style.backgroundColor = "lightblue"
    document.querySelector("h2").style.color = "black"
})