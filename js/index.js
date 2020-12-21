
$(".zh-tw").css("display", "none");

$(document).scroll(function(){
    var scroH = $(document).scrollTop();  //æ»¾å??é«?åº?
    var viewH = $(window).height();  //??¯è??é«?åº? 
    var contentH = $(document).height();  //??§å®¹é«?åº?
    // console.log(scroH);
    if(scroH > 100 && scroH < 650){
        $(".language").css("color", "white");
    }else if(scroH < 100){
        $(".language").css("color", "black");
    }else if(scroH > 650){
        $(".language").css("color", "black");
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


// $(document).ready(function(){
//     $(window).resize(function() {
//         var wdth=$(window).width();
//         // console.log(wdth)
//         if(wdth < 1200){
//             $(".carousel, header, .index, footer").removeClass("container")
//         }else if(wdth >= 1200){
//             $(".carousel, header, .index, footer").addClass("container")
//         }
//     });
// });



