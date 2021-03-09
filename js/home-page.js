
$(".en").css("display", "none");
$(".addEn").css("display", "none");

$(".languageEn").on("click", function(){
    $(".languageZh").addClass("text_opacity");
    $(".languageEn").removeClass("text_opacity");
    $(".zh-tw").hide();
    $(".en").show();
    $(".header_mid").find("ul").css("width","65%");
})
$(".languageZh").on("click", function(){
    $(".languageEn").addClass("text_opacity");
    $(".languageZh").removeClass("text_opacity");
    $(".zh-tw").show();
    $(".en").hide();
    $(".header_mid").find("ul").css("width","50%");
})
$(".language1").on("click", function(){
    $(".zh-tw").css("display", "");
    $(".en").css("display", "none");
})
$(".language2").on("click", function(){
    $(".en").css("display", "");
    $(".zh-tw").css("display", "none");
})
$(document).on("click", ".menu", function(){
    $(".header_list_bot_600").css("display", "block");
    $(".menu").addClass("clickOn");
});
$(document).on("click", ".clickOn", function(){
    $(".header_list_bot_600").css("display", "none");
    $(".menu").removeClass("clickOn");
});

$(document).on("click", ".toggle-on", function(){
    $(".mainIndex").css("background-color", "#E9E9E9");
    $("#Path_56, .s-icon").attr("fill", "#717474")
    $("header, .bot, .logo_text").css("color", "#717474")
})
$(document).on("click", ".toggle-off", function(){
    $(".mainIndex").css("background-color", "#1D1D1F");
    $("#Path_56, .s-icon").attr("fill", "#FFFFFF")
    $("header, .bot, .logo_text").css("color", "#FFFFFF")
})

function uploadFile(){
    window.open('https://driveuploader.com/upload/P3bXC1HZlF/');
}
function noFile(){
    window.open('./no_file.html');
}
function home(){
    window.location.replace('./index.html');
}
function coworkshop(){
    window.location.replace('./Co-Workshop.html');
}
function printing(){
    window.location.replace('./3D-Printing-Home.html');
}
function laser(){
    window.location.replace('./Laser-Cutting-Engraving-Home.html');
}
function Vacuum(){
    window.location.replace('./Vacuum-Forming-Home.html');
}


// $('.main-gallery').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true,
//     wrapAround:true
// });
// $(document).ready(function(){
//     if($(window).width() < 700){
//         $(document).on("click", ".our", function(){
//             console.log($(window).width())
//             $(".our").parent().parent().parent().css("transform", "translateX(-4.6%)")
//         })   
//     }
// });
// function animation() {
//     const tl = new TimelineMax();
    
//       // Ground
//       tl.staggerFrom(['.mobileMenu> path:nth-child(1)','.mobileMenu> path:nth-child(2)','.mobileMenu> path:nth-child(3)'], 1, {x: 100,scaleY:0, scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut, stagger:0.2})
//   }
$(document).on("click", ".closeMenu", function(){
    $(".mobileMenu").find("path:nth-child(1)").css("display","none");
    $(".mobileMenu").find("path:nth-child(2)").css({"transform": "rotate(45deg) translate(40px,-25px)","transition": "1s"});
    $(".mobileMenu").find("path:nth-child(3)").css({"transform": "rotate(-45deg) translate(-200px,-50px)","transition": "1s"});
    $(".mobileMenu").addClass("openMenu");
    $(".mobileMenu").removeClass("closeMenu");
    console.log('open')
});
$(document).on("click", ".openMenu", function(){
    $(".mobileMenu").find("path:nth-child(1)").css("display","block");
    $(".mobileMenu").find("path:nth-child(2)").css({"transform": "rotate(0) translate(0)","transition": "1s"});
    $(".mobileMenu").find("path:nth-child(3)").css({"transform": "rotate(-0) translate(0)","transition": "1s"});
    $(".mobileMenu").addClass("closeMenu");
    $(".mobileMenu").removeClass("openMenu");
    console.log('close')
});
