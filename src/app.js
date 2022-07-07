let menu = document.getElementById("menuMobile");
let closeMenu = document.getElementById("close");
let menuDes = document.getElementById("menu-des");

let features = document.getElementById("features");
let featuresList = document.getElementById("featuresList");
let company = document.getElementById("company");
let companyList = document.getElementById("companyList");

menu.addEventListener("click", ()=>{
    menuDes.classList.add("desplegar");
});
closeMenu.addEventListener("click", ()=>{
    menuDes.classList.remove("desplegar");
})

features.addEventListener("click", ()=>{
        featuresList.classList.toggle("display-block");
});
company.addEventListener("click", ()=>{
    companyList.classList.toggle("display-block");
});