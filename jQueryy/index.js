
//tak settaš value
//$("h1").css("color","red");

// tak gettaš value
//alert($("h1").css("color"));


//use snippets!
//maš jq pa ti pokaže vse
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");


$("h1").text("Bye");

$("button").text("do not click me");
$("button").html("<em>Hey</em>");


$("img").attr("src");

$("a").attr("href","https://www.yahoo.com");

//glej jquery on dokumentacijo
$("h1").on("click", function () {
    $("h1").addClass("big-title");
});

//! zapomni si DOCUMENT -> CELA STRAN
$(document).on("keypress", function (event) {
    $("h1").text(event.key);
});


$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

$("h1").on("mouseleave", function () {
    $("h1").css("color", "yellow");
});
