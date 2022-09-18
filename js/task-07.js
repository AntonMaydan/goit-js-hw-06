const inputChange = document.querySelector('#font-size-control')
const abracadabra = document.querySelector('#text')

inputChange.addEventListener('change', input => {
    abracadabra.style.fontSize = `${input.currentTarget.value }px`
})