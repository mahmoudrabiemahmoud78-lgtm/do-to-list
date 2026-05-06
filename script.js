let btnsend = document.getElementById('btnsend')
let inputtext = document.getElementById('inputtext')
let table = document.getElementById('down-div-four')

let array = []

window.onload = () => {
    if (localStorage.getItem('task')) {
        array = JSON.parse(localStorage.getItem('task'))
    }
    showdata()
}


// تحميل البيانات من localStorage
if (localStorage.getItem('task')) {
    array = JSON.parse(localStorage.getItem('task'))
    showdata()
}

// إضافة task
btnsend.addEventListener('click', _ => {

    if (inputtext.value != '') {

        let text = inputtext.value

        array.push({
            text: text,
            done: false
        })

        localStorage.setItem('task', JSON.stringify(array))

        showdata()

        inputtext.value = ''
    }
})


// عرض البيانات
function showdata() {
    table.innerHTML = ''

    array.forEach((task, i) => {
        table.innerHTML += `
        <div>
            <div>
                <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggle(${i})">
                <h3>${task.text}</h3>
            </div>

            <span>
                <i onclick="deletindex(${i})" class="fa-solid fa-trash-can"></i>
            </span>
        </div>
        `
    })
}


// تغيير حالة checkbox
function toggle(i) {
    array[i].done = !array[i].done
    localStorage.setItem('task', JSON.stringify(array))
    showdata()
}


// حذف task
function deletindex(i) {
    array.splice(i, 1)
    localStorage.setItem('task', JSON.stringify(array))
    showdata()
}


// Dark / Light mode
let btndark = document.getElementById('btndark')
let btnlight = document.getElementById('btnlight')

btndark.onclick = () => {
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
}

btnlight.onclick = () => {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
}