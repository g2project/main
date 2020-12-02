$(function(){
    $(document).on('click', '.sb_it button', function(){
        $('.sb_it button').removeClass('sb_btn_active');
        $('.sb_it button').find('svg').removeClass('sb_svg_active');
        $(this).toggleClass('sb_btn_active');
        $(this).find('svg').toggleClass('sb_svg_active');
    });

    
});



