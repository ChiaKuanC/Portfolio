$(function () {
  const carouselArea = document.querySelector(".portfolio .works");
  const carousels = document.querySelectorAll(".portfolio .work");
  let count = 1;

  // Check Carousel every 10s
  setInterval(function () {
    carousel(carouselArea, carousels, count);
  }, 10000);
  // Check Carousel when change windows width
  window.addEventListener("resize", function () {
    carousel(carouselArea, carousels);
  });

  function carousel(Area, Single) {
    let carouselWidth = Area.clientWidth;
    let singleWidth = carouselWidth / 3;
    let carouselAmounts = Single.length;
    if (count < carouselAmounts) {
      Area.style.transform = 'translateX(' + (singleWidth * -count) + 'px)';
      count++;
    } else {
      Area.style.transform = 'translateX(' + 0 + 'px)';
      count = 1;
    }
  }

  // Next Section Btn animation
  $('.hero .nextBtn').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.portfolio').offset().top
    }, 2000);
  });
  $('.portfolio .nextBtn').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.cases').offset().top
    }, 2000);
  });
  $('.cases .nextBtn').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.personal').offset().top
    }, 2000);
  });

  // Load skill data
  $.get('src/js/skills.json', function (data) {
    let frontEndData = document.getElementsByTagName('b');
    for (let i = 0; i < frontEndData.length; i++) {
      let listData = frontEndData[i].innerText;
      for (let j = 0; j < data.frontEnd.length; j++) {
        setTimeout(function () {
          let jsonData = data.frontEnd[j].name;
          let barWidth = data.frontEnd[j].percent;
          if (listData == jsonData) {
            console.log(barWidth)
            frontEndData[i].parentNode.parentNode.children[1].style.width = barWidth + "%";
            frontEndData[i].parentNode.innerHTML = "<b>"+jsonData+"</b>"+ barWidth + "%";
            frontEndData[i].parentNode.style.opacity = "1";
          }
        }, j * 100);
      }
    }
  });

});