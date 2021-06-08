const counter = document.getElementById("counter")
const add = document.getElementById("add")
const entry = document.getElementById("entry")
const save = document.getElementById("save")


counter.innerText = 0
function Increment(){
    counter.innerText++
}

function store(){
    entry.innerText = entry.innerText + ` ${counter.innerText},`
    counter.innerText = 0
}

add.addEventListener("click", Increment)
save.addEventListener("click",  store)