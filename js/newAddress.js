/**
 * Created by HP on 2017/9/10.
 */
$(function(){
    var flag=true;
    $(".checkbox").click(function(){
        if(flag){
            $(this).css("background","#F18300");
            flag=false;
        }else{
            $(this).css("background","#ffffff");
            flag=true;
        }
    })
});