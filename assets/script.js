// ============================== Task 1 ============================

let icons=document.querySelectorAll(".icons img")
let container=document.querySelector(".task-one-container")
let image=document.querySelector(".image")
let colors=["#c82525","rgb(54, 115, 249)","rgb(27, 25, 25)","rgb(204, 122, 63)","rgb(221, 150, 27)"]

const change_mobile=(icons)=>{
    for (let i = 0; i < icons.length; i++) {
        icons[i].onclick=()=>{
            container.style.backgroundColor=colors[i]
            image.innerHTML=icons[i].outerHTML
        }
    }
}
change_mobile(icons)

// ============================== Task 2 ============================

let mode_icon_container=document.querySelector("#mode-icon")
let task2_container=document.querySelector("#task-two-content")

const change_mode=(mode_icon)=>{
    let count=0
    mode_icon.addEventListener("click",()=>{
        count++
        if (count%2!=0) {
            task2_container.classList.add("light-theme")
            mode_icon.innerHTML=`<img src="../assets/images/icons/moon.svg">` 
        }
        else{
            task2_container.classList.remove("light-theme")
            mode_icon.innerHTML=`<img src="../assets/images/icons/sun.svg">`
        }
    })
}
change_mode(mode_icon_container)

// ============================== Task 3 ============================

let question_div=document.querySelectorAll(".question-box")
let answer_div=document.querySelectorAll(".answer")

const show_tab=(question_div)=>{
    for (let i = 0; i < question_div.length; i++) {
        question_div[i].onclick=()=>{
            if (answer_div[i].style.display!="block") {
                answer_div[i].style.display="block"
            } else {
                answer_div[i].style.display="none"
            }
        }
    }
    }
    show_tab(question_div)

// ============================== Task 4 ============================

let stars_container=document.querySelectorAll(".fa-star")
let experiance=document.querySelector(".description")
let expressions=["I just hate it 😡","I dont like it 😒","It's aowesome 😌","I love it 😍","I love it 😍"]
const rating=(stars)=>{
    let s;
    stars.forEach(element=>{
        element.onclick=()=>{
            s=[...stars].indexOf(element)
            if (!(element.classList.contains("active"))) {
                experiance.innerHTML=expressions[s]
                for (s ; s >=0; s--) {
                    stars[s].classList.add("active")
                }
            }
            else {
                for(s;s>=0;s--){
                    if (s==stars.length-1) {
                        stars[s].classList.remove("active")
                    }
                    else if (stars[s+1].classList.contains("active")) {
                        continue
                    }
                    stars[s].classList.remove("active")
                    experiance.innerHTML="Describe your rating"
                }
            }
        }
    })
}
rating(stars_container)

// ============================== Task 5 ============================

let male_div=document.querySelector(".male-tab")
let female_div=document.querySelector(".female-tab")
let both=document.querySelector(".both") 
let male=document.querySelector(".male")
let female=document.querySelector(".female")

both.addEventListener("click",()=>{
    male_div.style.display="block"
    female_div.style.display="block"
})
male.addEventListener("click",()=>{
    both.classList.remove("active")
    male_div.style.display="block"
    female_div.style.display="none"
})
female.addEventListener("click",()=>{
    female_div.style.display="block"
    male_div.style.display="none"
})

// ============================== Task 6 ============================

let prev=document.querySelector("#prev")
let next=document.querySelector("#next")
let slider_buttons=[next,prev]
let images=document.querySelectorAll(".carousel img")

const slider=(slider_buttons)=>{
    let img_count=0
    slider_buttons[0].onclick=()=>{
        if (img_count==images.length-1) {
            img_count=0
        }
        else {img_count++}
        images.forEach(e=>{
            e.style.transform="translatex(-"+100*img_count+"%)"
        })
    }
    slider_buttons[1].onclick=()=>{
        if (img_count==0) {
            img_count=images.length-1
        }
        else {img_count--}
        images.forEach(e=>{
            e.style.transform="translatex(-"+100*img_count+"%)"
        })
    }
}
slider(slider_buttons)

// ============================== Task 7 ============================

let small_images=document.querySelectorAll(".small-col")
let main_image=document.querySelector("#mainImg")
let main_image_srcs=["./assets/images/f4.png","./assets/images/f2.png","./assets/images/f3.png","./assets/images/f1.png"]

const headphone_projector=(small_images)=>{
    for (let i = 0; i < small_images.length; i++) {
        small_images[i].onclick=()=>{
            main_image.src=main_image_srcs[i]
        }
    }
}
headphone_projector(small_images)