// 交差を監視する要素を準備
const targets = document.querySelectorAll("section");

// 範囲の設定
const options = {
  root: null,
  rootMargin: "-49% 0px",
  threshold: 0,
};

// Intersection Observerを使えるようにする
const observer = new IntersectionObserver(intersect, options);

// 対象の要素をそれぞれ監視する
targets.forEach((target) => {
  observer.observe(target);
});

// 交差したときに実行する関数
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
