const btn = document.querySelector(".secret--bg button")
btn.addEventListener("click",()=> {
    document.querySelector(".secret--bg").style.display = "block"
})
const close = document.querySelector(".secret--bg div")
close.addEventListener("click",() => {
    document.querySelector(".secret--bg").style.display = "none"
})