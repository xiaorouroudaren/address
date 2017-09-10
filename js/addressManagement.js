/**
 * Created by HP on 2017/9/10.
 */
$(function(){
    var $checkbox = $(".radioButton");
    $checkbox.eq(0).css("background","#F18300");
    $checkbox.eq(0).parent().parent().css("color","#F18300");
    $checkbox.click(function(){
        if($(this).css("background-color")==="rgba(0, 0, 0, 0)"){
            $checkbox.css("background","");
            $checkbox.parent().parent().css("color","");
            $(this).css("background-color","#F18300");
            $(this).parent().parent().css("color","#F18300")
        } else{
        }
    })
});
