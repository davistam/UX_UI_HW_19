console.log("your index.js file is loaded correctly");

const navlinks=document.getElementById("navlinks");

navlinks.addEventListener("mouseover", (event) => {
    event.target.style.color = "darkgreen";
    event.target.style.fontWeight = "800";
}, false);


navlinks.addEventListener("mouseout", (event) =>{
    event.target.style.color = "";
    event.target.style.fontWeight = "";
}, false)

const foot=document.getElementById("foot");
foot.addEventListener("mouseover", (event) => {
    event.target.style.color = "gray";
    event.target.style.fontWeight = "800";
}, false);


foot.addEventListener("mouseout", (event) =>{
    event.target.style.color = "";
    event.target.style.fontWeight = "";
}, false)

const vap=document.getElementById("vap");
vap.addEventListener("mouseover", (event) => {
    event.target.style.color = "lightseagreen";
    event.target.style.fontWeight = "900";
}, false);


vap.addEventListener("mouseout", (event) =>{
    event.target.style.color = "";
    event.target.style.fontWeight = "";
}, false)