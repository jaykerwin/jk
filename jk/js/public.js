$(function () {
    //当前页面的导航高亮显示
    // var path = location.href.split("/")[location.href.split("/").length - 1].substr(0, 4)
    var path = location.href.split("/")[location.href.split("/").length - 1]
    // console.log(path);
    // var path=location.href.substring(location.href.lastIndexOf("/")+1)

    //.parent为往上一层
    // $(".header_menu li a[href^='" + path + "')").parent().addClass("active");
    $(".header_menu li a[href^='" + path + "']").addClass("active");
})