// alert("テスト");

/* ==========================================================================
  カスタムJS：ページごとのスクリプト制御
  - FAQページのアコーディオン
  - ページ内アンカースクロール補正
  - トップページのSwiperスライダー
========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------
  // Swiper（トップページなど）
  // --------------------------------------------------------
  const initSwiper = () => {
    const swiperEl = document.querySelector('.swiper');
    if (!swiperEl) return; // ← swiperが存在しないページではスキップ

    const swiper = new Swiper('.swiper', {
      loop: true,
      effect: 'fade',
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

   // 画像位置の反映
  const setImagePosition = () => {
    const images = document.querySelectorAll('.fv-img');
    const isSp = window.matchMedia('(max-width: 768px)').matches;

    images.forEach(img => {
      const x = isSp ? img.dataset.spX : img.dataset.pcX;
      const y = isSp ? img.dataset.spY : img.dataset.pcY;
      if (x && y) {
        img.style.objectPosition = `${x}% ${y}%`;
      }
    });
  };

  initSwiper();
  setImagePosition();
  window.addEventListener('resize', setImagePosition);


  // --------------------------------------------------------
  // FAQアコーディオン
  // --------------------------------------------------------
  const initFAQ = () => {
    const faq = document.getElementById('js-faq');
    if (!faq) return; // ← FAQページ以外ではスキップ

    faq.querySelectorAll('.accordion-a').forEach(content => {
      content.style.maxHeight = '0px';
      content.style.paddingTop = '0';
      content.style.paddingBottom = '0';
    });

    faq.querySelectorAll('.accordion-q').forEach(trigger => {
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
  };

  // --------------------------------------------------------
  // アンカースクロール補正（ヘッダー高さ調整付き）
  // --------------------------------------------------------
  const initAnchorScroll = () => {
    const headerHeight = 100; // ← 固定ヘッダーの高さを調整
    const anchors = document.querySelectorAll('a[href*="#"]');
    if (!anchors.length) return; // アンカーが無いページではスキップ

    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // 外部リンクや別ページはスキップ
        if (!href || href === "#" || href.startsWith('http') || href.includes('/pages/')) return;

        const targetId = href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        e.preventDefault();
        const offset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      });
    });

    // ページロード時に #付きURLがある場合も補正
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: offset, behavior: 'instant' });
      }
    }
  };

  // --------------------------------------------------------
  // 初期化呼び出し（ページ存在チェック付き）
  // --------------------------------------------------------
  initSwiper();
  initFAQ();
  initAnchorScroll();
});



