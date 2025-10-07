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

/* FAQページ アコーディオン
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#js-faq .accordion-a').forEach(content => {
    content.style.maxHeight = '0px';
    content.style.paddingTop = '0';
    content.style.paddingBottom = '0';
  });

  document.querySelectorAll('#js-faq .accordion-q').forEach(trigger => {
    const content = trigger.nextElementSibling;

    trigger.addEventListener('click', function () {
      const isActive = trigger.classList.contains('active');

      if (isActive) {
        trigger.classList.remove('active');
        content.style.maxHeight = '0px';
        content.style.paddingTop = '0';
        content.style.paddingBottom = '0';
      } else {
        trigger.classList.add('active');
        content.style.paddingTop = '14px';
        content.style.paddingBottom = '14px';
        content.style.maxHeight = (content.scrollHeight + 30) + 'px';
      }
    });
  });
});
