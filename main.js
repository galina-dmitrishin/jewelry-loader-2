document.body.onload = function()
{
   // $(".dot-1").css("animation", "dot-light 2s 0s forwards");
   // $(".dot-2").css("animation", "dot-light 2s 0.75s forwards");
   // $(".dot-3").css("animation", "dot-light 2s 1.5s forwards");
   // $(".dot-4").css("animation", "dot-light 2s 2.25s forwards");
    setTimeout(function(){$(".logo").css({"opacity":"1"});}, 800);
    //setTimeout(function(){$(".item-1-left").css("transform", "translateX(-100%)");}, 4000);
    //setTimeout(function(){$(".item-1-right").css("transform", "translateX(100%)");}, 4000);
    setTimeout(function(){$(".item-1").css("opacity", "0");}, 3500);    
    setTimeout(function(){$(".item-2").css("opacity", "0");}, 4700);
   // setTimeout(function(){$(".item-3").css("height", "0");}, 5300);
   // setTimeout(function(){$(".item-4").css("height", "0");}, 5500);
 
    setTimeout(function(){$(".header").css({"opacity":"1", "transform":"translate(0)"});}, 6100);
    setTimeout(function(){$(".p-1").css({"opacity":"1", "transform":"translate(0)"});}, 6300);
    setTimeout(function(){$(".p-2").css({"opacity":"1", "transform":"translate(0)"});}, 6500);
    setTimeout(function(){$(".p-3").css({"opacity":"1", "transform":"translate(0)"});}, 6700);
 
    //setTimeout(function(){$(".preloader").css("visibility", "hidden");}, 7000);
    setTimeout(function(){$(".preloader").css("display", "none");}, 7000);
}