let mainimg2 = document.getElementById("mainimg")

Array.from(document.getElementsByClassName('sub1')).forEach(element => {
// let anotherimg2 = document.getElementsByClassName("sub1")
let anotherimg = element.getElementsByClassName("sub3")
   anotherimg[0].onclick = ()=>{
      mainimg2.src = anotherimg[0].src
   }
});

 
 Array.from(document.getElementsByClassName('pro-continer')).forEach(element => {
   let f1 =element.getElementsByClassName('f1')
   f1[0].onclick = ()=>{
      f1[0] =window.location.href = 'sproduct.html'
   }
 });

