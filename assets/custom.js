// alert("テスト");

/* ドロワー
=========================== */
const drawerBtn = document.getElementById("js-drawer");
const drawerContents = document.getElementById("js-drawer__contents")

drawerBtn.addEventListener("click",function (e) {
  e.preventDefault();
  drawerBtn.classList.toggle("is-checked");
  drawerContents.classList.toggle("is-checked");
});

/* スワイパー
=========================== */
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
