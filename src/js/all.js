$(function () {
  setInterval(function () {
    carousel();
  }, 8000);

  function carousel() {
    let carouselWidth = $('.portfolio .works').width();
    let singleWidth = carouselWidth / 3;
    let marginLeftNow = parseInt($('.portfolio .works').css('margin-left'));
    console.log(marginLeftNow-singleWidth)
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
});