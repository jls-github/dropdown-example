const cars = document.getElementById('cars')
const dropdownBtn = document.getElementById('dropdown-btn')


const createCoolDiv = () => {
    const div = document.createElement('div')
    div.innerText = "The currently selected value is " + cars.value
    if (cars.value === "volvo") {
        div.style = "color: green;"
    }
    document.getElementsByTagName('body')[0].append(div)
}

dropdownBtn.addEventListener('click', () => {
    createCoolDiv()
})