$(function(){
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 550; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 120;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
   });
  });

$(function(){
  $(window).scroll(function (){
    let target = $('.contentsHeading')
    let tab = $('.contentsArea__contents__tabNav_tab a');
    let returnBtn = $('.return');

    target.each(function(){
          let targetNum =target.index(this);
          let position = $(this).offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > position - windowHeight + 500){
            tab.removeClass('show');
            tab.eq(targetNum).addClass('show');
          }
      });

    if($(window).scrollTop() < 200){
      returnBtn.fadeOut();
    } else {
      returnBtn.fadeIn();
    }
  });
});


$(function(){
  let clickBtn = $('.worksContainer__wrapper__contents');
  let closeBtn = $('.modal__contents__closeIcon');

  clickBtn.click(function(){
    let target = $(this).data('target');
    let modal = document.getElementById(target);
    $(modal).addClass('open');
    // modal.fadeIn();

    closeBtn.click(function(){
      $(modal).removeClass('open');
    });

  });
});