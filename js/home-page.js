
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
