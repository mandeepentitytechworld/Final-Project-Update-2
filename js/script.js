
if (localStorage.getItem("isLogin") == "yes") {
    $("#logOutNav").show();
    $("#accNav").show();
    $("#logInNav").hide();
}
else {
    $("#logOutNav").hide();
    $("#accNav").hide();
    $("#logInNav").show();
}

$("#logOutNav").click(function () {
    localStorage.setItem("isLogin", "no");
    localStorage.setItem("currentUserId", "");
    $("#logOutNav").hide();
    $("#logInNav").show();
    location.href = "price.html";
});
