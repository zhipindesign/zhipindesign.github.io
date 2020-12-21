
$(".zh-tw").css("display", "none");

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
    if($(document).scrollTop() > 65){
        if (scrolltop[i] > scrolltop[i-1]) {
            $("header").hide(2000)
        }else{
            $("header").show(2000)
        };
    }

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
    window.location.replace('./coworkshop.html');
}
function printing(){
    window.location.replace('./3D-printing.html');
}
function laser(){
    window.location.replace('./Laser-cutting.html');
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



