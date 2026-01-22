const colors = [`Red`, `Blue`, `Yellow`, `Purple`, `Green`, `Black`]
const btn = document.getElementById(`btn`)
const color = document.querySelector(`.color`)

btn.addEventListener(`click`, function(){
    const randomColor = getRandomColor()
    document.body.style.background = randomColor
    color.textContent = randomColor
})

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}