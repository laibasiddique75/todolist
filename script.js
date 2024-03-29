var inp = document.getElementById("txt");
var butt = document.getElementById("btn");
var addon = document.getElementById("lists");



butt.addEventListener("click", ()=>{
    if(inp.value === ""){
        alert("Please Enter Your Task");
    }else{ 
let newElemet = document.createElement("ul");
newElemet.innerHTML =  `${inp.value}<i class="fa-sharp fa-solid fa-trash"></i>`;

addon.appendChild(newElemet);
inp.value = "";

newElemet.querySelector("i").addEventListener("click",()=>{
    newElemet.remove();
});

    }
});



