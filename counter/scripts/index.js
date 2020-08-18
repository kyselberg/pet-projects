const countNumber = document.querySelector('.counter-number')
const buttons = document.querySelectorAll('button')

let count = 0 || localStorage.getItem('count')
countNumber.textContent = count

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease'))
            count--
        else if(styles.contains('increase'))
            count++
        else
            count = 0
        countNumber.textContent = count
        localStorage.setItem('count', count)
    })
})
