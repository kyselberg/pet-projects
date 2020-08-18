const hex = document.querySelector('.background-hex')
const background = document.querySelector('.background')
const button = document.querySelector('.button')

const genColor = () => {
    const arrColor = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    const newArr = []
    for (let i = 0; i < 6; i++) {
        const arrEl = arrColor[Math.ceil(Math.random()*15)]
        newArr.push(arrEl)
    }
    return `#${newArr.join('')}`
}

const setColor = () => {
    const color = genColor()
    background.style.backgroundColor = color
    hex.textContent = color.toUpperCase()
    hex.style.color = color
}

button.addEventListener('click', setColor)
