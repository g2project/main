$(function(){
    var $aside = $('.page-main > aside');
    var $asideButton = $('.page-main > button').on('click',function(){         //find:앞에있는 요소의 하위태그
        $aside.toggleClass('open');         //toggleClass:현재 상태의 반대
        if($aside.hasClass('open')){
            $aside.stop().animate({left:0},300,'easeOutBack')
            $asideButton.stop().animate({left:'402px'},300,'easeOutBack')   //속성,시간,속도         
        }else{
            $aside.stop(true).animate({left: '-420px'}, 300, 'easeInBack') 
            $asideButton.stop(true).animate({left: '-10px'}, 300, 'easeInBack')      //stop옆의 (true):없어도 동일한 효과
        }
    }); 
    $(".star").on('click',function(){
        var idx = $(this).index();
        $(".star").removeClass("on");
          for(var i=0; i<=idx; i++){
             $(".star").eq(i).addClass("on");
        }
      });
});