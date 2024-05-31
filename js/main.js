// メニュー現在位置
const targets = document.querySelectorAll("main section");

const options = {
  root: null,
  rootMargin: "-49% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(intersect, options);

targets.forEach((target) => {
  observer.observe(target);
});

function intersect(entries) {
  entries.forEach((entry) => {
    let targetId = entry.target.id;
    let navItem = document.querySelector(`a[href="#${targetId}"]`).parentNode;
    if (entry.isIntersecting) {
      navItem.classList.add("nav__item--active");
    } else {
      navItem.classList.remove("nav__item--active");
    }
  });
}

// モーダル
const workImages = document.querySelectorAll(".work__sect img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__image");
const modalClose = document.querySelector(".modal__close");

workImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    modal.style.display = "grid";
    modalImage.setAttribute("src", e.currentTarget.getAttribute("src"));
  });
});

// 画像外クリック時
document.addEventListener("click", (e)=> {
  if (e.target === modal) {
    modal.style.display = "none";
  }
  if (e.target === modalClose) {
    modal.style.display = "none";
  }
});
