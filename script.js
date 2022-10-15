let main = document.getElementById('main');
let show = document.getElementById('hid');
let btnSelect =document.querySelectorAll('.btnSelect');
let num = document.getElementById('num');
let btn = document.getElementById('btn')

function number(){
  btnSelect.forEach(e=>{
    e.onclick = function(){
      num.innerHTML = e.value;
    }
  })
};
number();

// validation(must select rating)
function btnSubmit() {
  if (num.innerHTML != "") {
    main.style.display = "none";
    show.style.cssText = "display:flex; justify-content: center; align-items: center";
  }
} 
btn.addEventListener('click', btnSubmit);
