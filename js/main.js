$(document).ready(function(){
    // 메인슬라이드
    var swiper1 = new Swiper(".swiper1", {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      /* 슬라이드 영역에 마우스 오버 시 슬라이드 멈춤,
      슬라이드 영역세엇 마우스 오버 시 다시 슬라이드 자동 실행 */
      $('.swiper1').mouseenter(function(){
        swiper1.autoplay.stop();
      });
      $('.swiper1').mouseleave(function(){
        swiper1.autoplay.start();
      });
      // cr slider
      var swiper2 = new Swiper(".swiper2", {
        // 화면에 슬라이드가 보여지는 개수
        slidesPerView: 2.5,
        spaceBetween: 40,
        freeMode: true,
      });
      var swiper3 = new Swiper(".swiper3", {
        // 화면에 슬라이드가 보여지는 개수
        slidesPerView: 2.5,
        spaceBetween: 40,
        freeMode: true,
      });

}); /*document*/


// 배너2 (코스특징)
window.addEventListener("scroll", () => {
  const courseFeaturesBanner = document.querySelector(".banner.cf .banner_img");

  const topDiv = window.innerHeight;

  const courseFeaturesBannerPositionTop = courseFeaturesBanner.getBoundingClientRect().top;

  const courseFeaturesImages = courseFeaturesBanner.querySelectorAll("div");

  if (courseFeaturesBannerPositionTop < topDiv) {
    courseFeaturesImages[0].classList.remove("visible");
    courseFeaturesImages[1].classList.add("visible");
  } else {
    courseFeaturesImages[0].classList.add("visible");
    courseFeaturesImages[1].classList.remove("visible");
  }
});




// 마지막 배너 _시설안내

window.addEventListener("scroll", () => {
  const bannerImages = document.querySelectorAll(".banner_img > div");

  for (let i = 0; i < bannerImages.length; i++) {
    const topDiv = window.innerHeight * 0.8;
    const positionTop = bannerImages[i].getBoundingClientRect().top;

    if (positionTop < topDiv) {
      bannerImages[i].classList.add("scrollReveal");
    }
  }
});