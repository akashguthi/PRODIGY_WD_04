let home = document.querySelector("#home-button")
let about = document.querySelector("#about-button");
let education = document.querySelector("#education-button");
let skills = document.querySelector("#skills-button");
let home_d = document.querySelector(".home-d");
let about_d = document.querySelector(".about-d");
let education_d = document.querySelector(".education-d");
let skills_d = document.querySelector(".skills-d");

let defaultContent = document.querySelector(".demo-d");

home.addEventListener("click",()=>{
    home_d.classList.remove("hide");
    about_d.classList.add("hide");
    education_d.classList.add("hide");
    skills_d.classList.add("hide");
    defaultContent.classList.add("hide");
})
about.addEventListener("click",()=>{
    home_d.classList.add("hide");
    about_d.classList.remove("hide");
    education_d.classList.add("hide");
    skills_d.classList.add("hide");
    defaultContent.classList.add("hide");
})
education.addEventListener("click",()=>{
    home_d.classList.add("hide");
    about_d.classList.add("hide");
    education_d.classList.remove("hide");
    skills_d.classList.add("hide");
    defaultContent.classList.add("hide");
})
skills.addEventListener("click",()=>
{
    home_d.classList.add("hide");
    about_d.classList.add("hide");
    education_d.classList.add("hide");
    skills_d.classList.remove("hide");
    defaultContent.classList.add("hide");
})