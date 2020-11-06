$(function(){
  
    $(".pf_wp").on("click",function(){
        var foodnum = $(this).index();

        $(".fd_cn").css("display","block");
        $(".fd_tt").css("display","none");
        $(".fd_tt").eq(foodnum).css("display","inline-block");

    });
    

});