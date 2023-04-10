/*---------------- Focus a ---------------- */
let li = document.querySelectorAll("a");


/* li.forEach((item) =>{
    item.addEventListener("click",()=>{
        let active = document.querySelector(".active2");
        if(active.className == "nav-link active2"){
            console.log(active);
            active.classList.remove("active2");
            console.log("burdayam");
        }
        item.classList.add("active2");
    })
}) */

li.forEach((item) =>{
    item.addEventListener("click",()=>{
        let active = document.querySelector(".active2");
        if(active.className == "nav-link active2"){
            console.log(active);
            active.className = active.className.replace("active2","")
            console.log(active.className.replace("active2",""));
        }
        item.classList.add("active2");
    })
})


/* --------------------Burger Menu ------------------ */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


/* Slick Slide */
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.respons').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });