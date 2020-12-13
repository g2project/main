var dot = $("#dot > ul > li");
var cont = $("#contents > div");

dot.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  //alert(index);
  var section = cont.eq(index);
  var offset = section.offset().top;
  $("html,body").animate({ scrollTop:offset },600,"easeInOutCirc");
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(wScroll >= cont.eq(0).offset().top){
    dot.removeClass("active");
    dot.eq(0).addClass("active");
  }
  if(wScroll >= cont.eq(1).offset().top){
    dot.removeClass("active");
    dot.eq(1).addClass("active");
  }
  if(wScroll >= cont.eq(2).offset().top){
    dot.removeClass("active");
    dot.eq(2).addClass("active");
  }
  if(wScroll >= cont.eq(3).offset().top){
    dot.removeClass("active");
    dot.eq(3).addClass("active");
  }
  if(wScroll >= cont.eq(4).offset().top){
    dot.removeClass("active");
    dot.eq(4).addClass("active");
  }
  if(wScroll >= cont.eq(5).offset().top){
    dot.removeClass("active");
    dot.eq(5).addClass("active");
  }
  //Text Animation
if(wScroll >= cont.eq(0).offset().top - $(window).height()/3 ){
  cont.eq(0).addClass("show");
  } if(wScroll >= cont.eq(1).offset().top - $(window).height()/3 ){
  cont.eq(1).addClass("show");
  } if(wScroll >= cont.eq(2).offset().top - $(window).height()/3 ){
  cont.eq(2).addClass("show");
  } if(wScroll >= cont.eq(3).offset().top - $(window).height()/3 ){
  cont.eq(3).addClass("show");
  } if(wScroll >= cont.eq(4).offset().top - $(window).height()/3 ){
  cont.eq(4).addClass("show");
  } if(wScroll >= cont.eq(5).offset().top - $(window).height()/3 ){
  cont.eq(5).addClass("show");
  } 
});
