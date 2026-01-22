const colors = [`Red`, `Blue`, `Yellow`, `Purple`, `Green`]
const btn = document.getElementById(`btn`)

btn.addEventListener(`click`, function(){
    document.body.style.background = colors[getRandomColorsIndex()]
    //document.getElementById()
})

function getRandomColorsIndex() {
    return Math.floor(Math.random() * colors.length)
}