/*
  Layout
 */

const swiper = new Swiper("#brands .swiper", {
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

/*
  Main Content
 */

/*
  Home Page
 */

/*
  Out Latest Projects
 */

const projectsFiltersBtns = document.querySelectorAll(
  "#latest-projects [data-filter]"
);

const projects = document.querySelectorAll("#latest-projects [data-cat]");

function projectFilterClickHandler(e) {
  const clickedBtn = e.target;
  const projectSelector = clickedBtn.getAttribute("data-filter");

  if (projectSelector === "all")
    return projects.forEach(function (project) {
      project.classList.remove("hide");
    });

  const relatedProjects = document.querySelectorAll(
    `#latest-projects [data-cat="${projectSelector}"]`
  );

  projects.forEach(function (project) {
    project.classList.add("hide");
  });

  relatedProjects.forEach(function (project) {
    project.classList.remove("hide");
  });
}

projectsFiltersBtns.forEach(function (projectFilterBtn) {
  projectFilterBtn.addEventListener("click", projectFilterClickHandler);
});

// plans and prices

var priceCards = document.querySelectorAll(".plan-card");
var priceh = document.querySelectorAll(".bottomCard h1");
var pricebtn = document.querySelectorAll(".price-btn");

priceCards.forEach(function (priceCard, index) {
  priceCard.addEventListener("mouseover", function () {
    priceCard.classList.add("cardSelected");
    priceh[index].classList.add("hidePrice");
    pricebtn[index].classList.add("showButton");
  });
  priceCard.addEventListener("mouseleave", function () {
    priceCard.classList.remove("cardSelected");

    priceh.forEach(function (head) {
      head.classList.remove("hidePrice");
    });
    pricebtn.forEach(function (btn) {
      btn.classList.remove("showButton");
    });
  });
});

// post blog

var allpost = document.querySelectorAll(".post");
var imgs = document.querySelectorAll(".postImg");
var links = document.querySelectorAll(".postlink");

allpost.forEach(function (post, index) {
  post.addEventListener("mouseover", function () {
    imgs[index].classList.add("postImghover");
    links[index].classList.add("postLinkhover");
  });
  post.addEventListener("mouseleave", function () {
    imgs[index].classList.remove("postImghover");
    links[index].classList.remove("postLinkhover");
  });
});

// allpost.addEventListener("mouseover", function () {
//   img.classList.add("postImg");
//   link.classList.add("postLink");
// });
// allpost.addEventListener("mouseleave", function () {
//   img.classList.remove("postImg");
//   link.classList.remove("postLink");
// });
