$(function () {
  function carousel() {
    let carouselWidth = $('.portfolio .works').width();
    let singleWidth = carouselWidth / 3;
    let marginLeftNow = parseInt($('.portfolio .works').css('margin-left'));
    if (marginLeftNow < -(singleWidth * 2 - 25)) {
      $('.portfolio .works').css({
        'margin-left': '-25px'
      });
    } else {
      $('.portfolio .works').css({
        'margin-left': (marginLeftNow - singleWidth) + 'px'
      });
    }
  }
  setInterval(function () {
    carousel();
  }, 8000);

  $('.hero .nextBtn').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.portfolio').offset().top
    }, 2000);
  }); 
  $('.portfolio .nextBtn').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.cases').offset().top
    }, 2000);
  });
  $('.cases .nextBtn').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.personal').offset().top
    }, 2000);
  });

  $.get('src/js/skills.json', function (data) {
    let frontEndData = document.getElementsByTagName('b');
    for (let i = 0; i < frontEndData.length; i++) {
      let listData = frontEndData[i].innerText;
      console.log(frontEndData[i].parentNode.parentNode.children[1]);
      for (let j = 0; j < data.frontEnd.length; j++) {
        let jsonData = data.frontEnd[j].name;
        let barWidth = data.frontEnd[j].percent;
        if (listData == jsonData) {
          console.log(barWidth)
          frontEndData[i].parentNode.parentNode.children[1].style.width = barWidth + "%";
        }
      }
    }
  });

});