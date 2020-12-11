$(function(){
  
    $(".pf_wp").on("click",function(){
        var foodnum = $(this).index();

        $(".fd_cn").css("display","block");
        $(".fd_tt").css("display","none");
        $(".fd_tt").eq(foodnum).css("display","inline-block");

    });
    

});




$(function(){

    $('.pop_con').each(function(){
        var $container = $(this),              
            $slideGroup = $container.find('.slideshow-slides'),
            $slides = $slideGroup.find('.slide'),
            $nav = $container.find('.slideshow-nav'),
            // $indicator = $container.find('.slideshow-indicator'),


            slideCount = 4,                     
            indicatorHTML = '',
            currentIndex = 0,
            duration = 500,
            easing = 'easeInOutExpo',
            // interval = 7000,
            timer;

        $slides.each(function(i){
            $(this).css({left:20 * i + '%'});
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';     
        });

        function goToslide(index) {
            $slideGroup.animate({left:-20 * index + '%'}, duration, easing); //슬라이드 할 때 얼마나 이동하는지
            currentIndex = index;

            updateNav();
        }

        function updateNav(){
            var $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');

            if(currentIndex == 0){
                $navPrev.addClass('disabled');
            }else {
                $navPrev.removeClass('disabled');
            }

            if(currentIndex == slideCount - 1){
                $navNext.addClass('disabled');
            }else {
                $navNext.removeClass('disabled');
            }

            // $indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');

        }

        // function startTimer(){
        //     timer = setInterval(function(){
        //         var nextIndex = (currentIndex + 1) % slideCount;
        //         goToslide(nextIndex)
        //     },interval)
        // }

        // function stopTimer(){
        //     clearInterval(timer)
        // }

        // $container.on({
        //     mouseenter:stopTimer,           //마우스를 올렸을 때
        //     mouseleave:startTimer           //마우스를 땠을 때
        // });

        $nav.on('click','a',function(event){
            event.preventDefault();
            if($(this).hasClass('prev')){
                goToslide(currentIndex - 1);
            }else {
                goToslide(currentIndex + 1);
            }
        });

        // $indicator.on('click','a',function(event){
        //     event.preventDefault();
        //     if(!$(this).hasClass('active')){
        //         goToslide($(this).index());
        //     }
        // });


        goToslide(currentIndex);

        // startTimer();

    });

});