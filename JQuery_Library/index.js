$("h1").addClass("big-title margin-50");
$("h1").text("Bye dude");
//addClass
//removeClass
//toggle
//hasClass

$("h1").html("<em>Bye buddy</em>")

$("img").attr("src")
$("a").attr("href", "https://www.gmail.com")

//classes are also attributes

$("button").click(function () { 
    //$("h1").css("color", "purple"); 
    $("h1").slideToggle();     //fadeToggle() //slideToggle

    //$("h1").animate({margin: "20%"})
});

$("input").keypress(function (e) { 
    $("h1").text(e.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
})

$("h1").before("<button>Submit</button>");
$("h1").after("<button>Submit</button>");
$("h1").prepend("<button>Submit</button>");
$("h1").append("<button>Submit</button>");