
//사진 슬라이드 
// $(function(){

//     $('.ma_dt_wp').each(function(){
//         var $container = $(this),              
//             $slideGroup = $container.find('.slideshow-slides'),
//             $slides = $slideGroup.find('.ma_dt_ec'),
//             $nav = $container.find('.slideshow-nav'),


//             slideCount = 4,                     
//             indicatorHTML = '',
//             currentIndex = 0,
//             duration = 500,
//             easing = 'easeInOutExpo',
//             timer;

//         $slides.each(function(i){
//             $(this).css({left:20 * i + '%'});
//             indicatorHTML += '<a href="#">' + (i + 1) + '</a>';     
//         });

//         function goToslide(index) {
//             $slideGroup.animate({left:-20 * index + '%'}, duration, easing); //슬라이드 할 때 얼마나 이동하는지
//             currentIndex = index;

//             updateNav();
//         }

//         function updateNav(){
//             var $navPrev = $nav.find('.prev'),
//                 $navNext = $nav.find('.next');

//             if(currentIndex == 0){
//                 $navPrev.addClass('disabled');
//             }else {
//                 $navPrev.removeClass('disabled');
//             }

//             if(currentIndex == slideCount - 1){
//                 $navNext.addClass('disabled');
//             }else {
//                 $navNext.removeClass('disabled');
//             }

//         }


//         $nav.on('click','a',function(event){
//             event.preventDefault();
//             if($(this).hasClass('prev')){
//                 goToslide(currentIndex - 1);
//             }else {
//                 goToslide(currentIndex + 1);
//             }
//         });


//         goToslide(currentIndex);

//     });

// });





$(function(){
    $(document).on('click', '.sb_it button', function(){
        $('.sb_it button').removeClass('sb_btn_active');
        $('.sb_it button').find('svg').removeClass('sb_svg_active');
        $(this).toggleClass('sb_btn_active');
        $(this).find('svg').toggleClass('sb_svg_active');
    });

    
});


//향토음식 스크립트
$(function(){
  
    $(".pf_wp").on("click",function(){
        var foodnum = $(this).index();

        $(".fd_cn").css("display","block");
        $(".fd_tt").css("display","none");
        $(".fd_tt").eq(foodnum).css("display","inline-block");

    });
    

});



//sights 스크립트
var scriptArray = ["first_layer_script", "second_layer_script", "third_layer_script","fourth_layer_script",
                            "fifth_layer_script", "sixth_layer_script","seventh_layer_script","eighth_layer_script","ninth_layer_script","tenth_layer_script","eleventh_layer_script","twelfth_layer_script","thirteenth_layer_script",
                            "fourteenth_layer_script","fifteenth_layer_script","sixteenth_layer_script","seventeenth_layer_script"];
        scriptArray.forEach(function(obj){
            var scpt = document.getElementById(obj);
            scpt.style.visibility = 'hidden';
            scpt.style.opacity = '0';
            scpt.style.height = '0';
            scpt.style.width = '0';
            scpt.style.transition = 'height 0.3s, width 0s, padding 0.3s, visibility 0.3s, opacity 1s ease-out';
        })

            var a = ["first_layer_01", "first_layer_02", "first_layer_03",];
            a.forEach(function(item){
                var obj = document.getElementById("first_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var b = ["second_layer_01", "second_layer_02", "second_layer_03"];
            b.forEach(function(item){
                var obj = document.getElementById("second_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var c = ["third_layer_01", "third_layer_02", "third_layer_03"];
            c.forEach(function(item){
                var obj = document.getElementById("third_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var d = ["fourth_layer_01", "fourth_layer_02", "fourth_layer_03"];
            d.forEach(function(item){
                var obj = document.getElementById("fourth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var e = ["fifth_layer_01", "fifth_layer_02", "fifth_layer_03"];
            e.forEach(function(item){
                var obj = document.getElementById("fifth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var f = ["sixth_layer_01", "sixth_layer_02", "sixth_layer_03"];
            f.forEach(function(item){
                var obj = document.getElementById("sixth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var g = ["seventh_layer_01", "seventh_layer_02", "seventh_layer_03"];
            g.forEach(function(item){
                var obj = document.getElementById("seventh_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var h = ["eighth_layer_01", "eighth_layer_02", "eighth_layer_03"];
            h.forEach(function(item){
                var obj = document.getElementById("eighth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var i = ["ninth_layer_01", "ninth_layer_02", "ninth_layer_03"];
            i.forEach(function(item){
                var obj = document.getElementById("ninth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var j = ["tenth_layer_01", "tenth_layer_02", "tenth_layer_03"];
            j.forEach(function(item){
                var obj = document.getElementById("tenth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var k = ["eleventh_layer_01", "eleventh_layer_02", "eleventh_layer_03"];
            k.forEach(function(item){
                var obj = document.getElementById("eleventh_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var l = ["twelfth_layer_01", "twelfth_layer_02", "twelfth_layer_03"];
            l.forEach(function(item){
                var obj = document.getElementById("twelfth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var m = ["thirteenth_layer_01", "thirteenth_layer_02", "thirteenth_layer_03"];
            m.forEach(function(item){
                var obj = document.getElementById("thirteenth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var n = ["fourteenth_layer_01", "fourteenth_layer_02", "fourteenth_layer_03"];
            n.forEach(function(item){
                var obj = document.getElementById("fourteenth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var o = ["fifteenth_layer_01", "fifteenth_layer_02", "fifteenth_layer_03"];
            o.forEach(function(item){
                var obj = document.getElementById("fifteenth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var p = ["sixteenth_layer_01", "sixteenth_layer_02", "sixteenth_layer_03"];
            p.forEach(function(item){
                var obj = document.getElementById("sixteenth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

            var q = ["seventeenth_layer_01", "seventeenth_layer_02", "seventeenth_layer_03"];
            q.forEach(function(item){
                var obj = document.getElementById("seventeenth_layer_script");
                var dtl = document.getElementById(item);

                dtl.addEventListener('click', function(){
            if (obj.style.visibility == 'hidden') {
                obj.style.visibility = 'visible';
                obj.style.opacity = '1';
                obj.style.height = '580px';
                obj.style.width = '100%';
            } else {
                obj.style.visibility = 'hidden';
                obj.style.opacity = '0';
                obj.style.height = '0';
                obj.style.width = '0';
            }
            })
            })

           
