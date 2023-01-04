let bar = document.getElementById("bar1")
let nav = document.getElementById("navheader")
if(bar){
 bar.addEventListener("onclick " , ()=>{
    nav.classList.add("active")
 })   
}