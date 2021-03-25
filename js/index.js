
$(".en").css("display", "none");

$(".borderOn").hide();
$(".borderClose").hide();
$(document).scroll(function(){
    var scroH = $(document).scrollTop();  
    var viewH = $(window).height();  
    var contentH = $(document).height();  
    if(scroH > 100 && scroH < 650){
        $(".language").css("color", "white");
    }else if(scroH < 100){
        $(".language").css("color", "black");
    }else if(scroH > 650){
        $(".language").css("color", "black");
    }
})


var scrolltop = new Array();
var i = 0;
scrolltop[0] = 0;
$(document).scroll(function(){
    i++;
    scrolltop[i] = $(document).scrollTop();
    if($(document).scrollTop() > 50){
        if (scrolltop[i] > scrolltop[i-1]) {
            $("nav").hide(2000)
        }else{
            $("nav").show(2000)
        };
    }

})

// var wdth=$(window).width();
// $(".title1").css("margin-top", (wdth - 1060)/4)

// $(document).ready(function(){
//     $(window).resize(function() {
//         var wdth=$(window).width();
//         console.log(wdth)
//         console.log($(".title1").css("margin-top"))
//         // if(wdth > 1060){
//         // console.log(wdth -1060)
//             $(".title1").css("margin-top", (wdth - 1060)/4)
//         // }
//     });
// });
let lan = localStorage.getItem('language');
if(lan == 'en'){
    $(".languageZh").addClass("text_opacity");
    $(".languageEn").removeClass("text_opacity");
    $(".zh-tw").hide();
    $(".en").show();
    $(".header_mid").find("ul").css("width","45%");
}else if(lan == 'zh-tw'){
    $(".languageEn").addClass("text_opacity");
    $(".languageZh").removeClass("text_opacity");
    $(".zh-tw").show();
    $(".en").hide();
    $(".header_mid").find("ul").css("width","");
}
$(".languageEn").on("click", function(){
    $(".languageZh").addClass("text_opacity");
    $(".languageEn").removeClass("text_opacity");
    $(".zh-tw").hide();
    $(".en").show();
    $(".header_mid").find("ul").css("width","45%");
    window.localStorage.setItem("language", "en");
})
$(".languageZh").on("click", function(){
    $(".languageEn").addClass("text_opacity");
    $(".languageZh").removeClass("text_opacity");
    $(".zh-tw").show();
    $(".en").hide();
    $(".header_mid").find("ul").css("width","");
    window.localStorage.setItem("language", "zh-tw");
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

$(document).on("change","#colorSelectorIcon", function(){
    let color = $("#colorSelectorIcon").val();
    $(".item .wrap .draggable_new .icon_new").css("background-color", color);
})
$(document).on("change","#colorSelectorTshirt", function(){
    let color = $("#colorSelectorTshirt").val();
    $(".item .wrap .shirt-bg").css("background-color", color);
})


$(document).on("click", ".bot", function(){

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
function form(){
    window.open('https://forms.gle/nbG6k4j6g2W1PbbF7');
}



$(function(){
    $(".draggable").on("mousedown", function(){
        $(this).clone().appendTo(".drag_wrap").addClass("draggable_new");
        $(".draggable_new").draggable();
    })
    // $( "#droppable" ).droppable({
    //     activeClass: "ui-state-hover",
    //     hoverClass: "ui-state-active",
    //     drop: function( event, ui ) {
    //       $( this )
    //         .addClass( "ui-state-highlight" )
    //         .find( "> p" )
    //           .html( "Dropped!" );
    //       return false;
    //     }
    // });
});


// $(function(){     
//     print();  
// });  
// function print(){     
//     html2canvas( $(".shirt-wrap") ,{            
//         onrendered: function(canvas){  
//             $('#down_button').attr( 'href' , canvas.toDataURL() ) ;  
//             $('#down_button').attr( 'download' , 'myjobdeer.png' ) ;  
//         }  
//     });  
// }

$(".stl").addClass("d-none");
$(document).on("click", ".imgText", function(){
    $(".img").addClass("d-none");
    $(".stl").removeClass("d-none");
})
$(document).on("click", ".stiFileText", function(){
    $(".stl").addClass("d-none");
    $(".img").removeClass("d-none");
})



$(".other_img_wrap1").on("mouseover",function(){
    $(".soon").removeClass("d-none");
    $(".img_text_co").addClass("d-none");
})
$(".other_img_wrap1").on("mouseout",function(){
    $(".img_text_co").removeClass("d-none");
    $(".soon").addClass("d-none");
})
$(".other_img_wrap2").on("mouseover",function(){
    $(".soon1").removeClass("d-none");
    $(".img_text_vacuum").addClass("d-none");
})
$(".other_img_wrap2").on("mouseout",function(){
    $(".img_text_vacuum").removeClass("d-none");
    $(".soon1").addClass("d-none");
})
$(".step_img_STL_file").on("mouseover",function(){
    $(".file_soon").removeClass("d-none");
    $(".img_text_file").addClass("d-none");
})
$(".step_img_STL_file").on("mouseout",function(){
    $(".file_soon").addClass("d-none");
    $(".img_text_file").removeClass("d-none");
})
$(".step_img_No_file").on("mouseover",function(){
    $(".file_soon1").removeClass("d-none");
    $(".img_text_file").addClass("d-none");
})
$(".step_img_No_file").on("mouseout",function(){
    $(".file_soon1").addClass("d-none");
    $(".img_text_file").removeClass("d-none");
})
$(".title, .main, .equipment, .start_your_project, .boxWrap, .ourService, .box, .box1, .box_img, .tool1, .tool2, .other_services").css("border", "none");
$(document).on("click", ".borderOn", function(){
    $(".title, .main, .equipment, .start_your_project, .boxWrap, .ourService, .box, .box1, .box_img, .tool1, .tool2, .other_services").css("border", "1px solid red");
})
$(document).on("click", ".borderClose", function(){
    $(".title, .main, .equipment, .start_your_project, .boxWrap, .ourService, .box, .box1, .box_img, .tool1, .tool2, .other_services").css("border", "none");
})

$(document).on("click", ".toggle-on", function(){
    $("header").css("background-color", "#E9E9E9");
    $("#Path_56").attr("fill", "#717474")
    $("header, .bot, .logo_text").css("color", "#3E4141")
})
$(document).on("click", ".toggle-off", function(){
    $("header").css("background-color", "#3E4141");
    $("#Path_56").attr("fill", "#FFFFFF")
    $("header, .bot, .logo_text").css("color", "#FFFFFF")
})
$(".box_text_content_okay").hide();
$(".box_text_content_submit").hide();
$(document).on("mouseover", ".svg_noFile", function(){
    $(".box_text_content_old").hide(1);
    $(".box_text_content_okay").show(1);
})
$(document).on("mouseout", ".box", function(){
    $(".box_text_content_old").show(1);
    $(".box_text_content_okay").hide(1);
})
$(document).on("mouseover", ".svg_stlFile, .svg_laserFile", function(){
    $(".box_text_content_old").hide(1);
    $(".box_text_content_submit").show(1);
})
$(document).on("mouseout", ".box", function(){
    $(".box_text_content_old").show(1);
    $(".box_text_content_submit").hide(1);
})
$(document).on("click", ".closeMenu", function(){
    $(".mobileMenu").find("path:nth-child(1)").css("display","none");
    $(".mobileMenu").find("path:nth-child(2)").css({"transform": "rotate(45deg) translate(40px,-25px)","transition": ".5s"});
    $(".mobileMenu").find("path:nth-child(3)").css({"transform": "rotate(-45deg) translate(-200px,-50px)","transition": ".5s"});
    $("nav").css({"background": "#111313","transition": "0"});
    $(".mobileMenu").addClass("openMenu");
    $(".mobileMenu").removeClass("closeMenu");
    console.log('open')
});
$(document).on("click", ".openMenu", function(){
    $(".mobileMenu").find("path:nth-child(1)").css("display","block");
    $(".mobileMenu").find("path:nth-child(2)").css({"transform": "rotate(0) translate(0)","transition": ".5s"});
    $(".mobileMenu").find("path:nth-child(3)").css({"transform": "rotate(-0) translate(0)","transition": ".5s"});
    $(".mobileMenu").addClass("closeMenu");
    $(".mobileMenu").removeClass("openMenu");
    // setTimeout($("nav").css({"background": "#3e4141","transition": ".2s"}), 500);
    setTimeout(function(){$("nav").css({"background": "#3e4141","transition": ".3s"});},280);
    console.log('close')
});






