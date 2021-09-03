/*==================NavResponsive==================*/
const nav = document.getElementById("responsive-nav");
const navBtn = document.getElementById("responsive-btn");
console.log(nav);
console.log(navBtn)
navBtn.addEventListener("click",function(){
  if (nav.className === "right-nav") {
    nav.className += "min";
  } else {
    nav.className = "right-nav";
  }
})
const mediaQuery = window.matchMedia('(min-width: 800px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    nav.className = "right-nav";

  }
  /*else{
    menu.style.display = "none"
  }*/
}

/////////////////////////REVIWES//////////////////
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "1.jpeg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "3.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "2.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },

  ];
const img = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 2;
window.addEventListener("DOMContentLoaded", function(){
    viewPerson()

})
function viewPerson(){
    const items = reviews[currentItem];
    img.src = items.img;
    name.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text; 
}
nextBtn.addEventListener("click", function(){
    currentItem++
    if (currentItem > reviews.length -1){
        currentItem = 0 ;
    }
    viewPerson();
})
prevBtn.addEventListener("click", function(){
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length -1  ;
    }
    viewPerson();
})


randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);

    viewPerson();
})
