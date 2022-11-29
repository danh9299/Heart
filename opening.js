let nameInput = document.getElementById("nameInput");
let btn = document.getElementById("btn");
let linkk = document.getElementById("linkk");
btn.addEventListener("click", alertname);
function alertname(){
if (nameInput.value == "Chi"){
    alert("Tên của cậu đúng rồi!");
    linkk.href="heart.html";
}
else{
    alert("Sai tên rồi, nhập lại đi! Thử: Chi");
}
}