/**
 * Created by Administrator on 2017/8/24.
 */
$(function () {
    var $navMenu=$("#nav-menu");
    $navMenu.bFlag=false;
    $navMenu.on("click", function () {
        if($navMenu.bFlag==false){
            $("li",$(this)).eq(0).addClass("icon-up");
            $("li",$(this)).eq(2).addClass("icon-down");
            $("#sub-menu").css("display","block");
        }else{
            $("li",$(this)).eq(0).removeClass("icon-up");
            $("li",$(this)).eq(2).removeClass("icon-down");
            $("#sub-menu").css("display","none");
        }
        console.log($navMenu.bFlag);
        $navMenu.bFlag=!$navMenu.bFlag;
    });
});