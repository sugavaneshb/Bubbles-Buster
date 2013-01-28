var score = 0;
var score_ui = document.getElementById("value");
var $left;
var timedif = 2000;
var fadeDuration = 4000;
var animDuration = 8000;
var counter;
var bubble_count = 0;
var mytimer;
var miss = 0;
var color;


$(document).ready(function() {

    $("#start").click(function(){
        startGame();
    });

    $("#stop").click(function(){
        stopGame();
    });

});

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function startGame(){
    mytimer = setInterval(bubbles, timedif);
}

function stopGame(){
    clearInterval(mytimer);
    alert("You have managed to hit " + score + " bubbles and missed " + miss );
    $(".char_bubble").remove();

    score = 0;
    bubble_count = 0;
    miss = 0;
    updateScore();

    var _continue = confirm("Do you want to continue playing? Press cancel otherwise");
    if(_continue)
        startGame();
    else
        alert("I hope u are satisfied with the game! :)");
}

function bubbles(){
    var letter = document.createElement("div");
    letter.className = "char_bubble";

    $left = Math.random()* 70 + "%";
    color = get_random_color();

    $(letter).css("margin-left",$left);
    $(letter).css("background-color", color);
    $("#game").append(letter);

    $(".char_bubble").animate({top:"45em"},{duration: animDuration});
    
    bubble_count++;

    $(".char_bubble").animate({opacity: 0}, {duration: fadeDuration, complete: function(){miss++; $(this).remove();}});

    

    $(letter).click(function(){
        console.log(bubble_count + "hrere");
        $(this).remove();
        score++;
        updateScore();        
    });
}

function updateScore(){
    $("#score").remove();
    $("#score_box").append("<p id='score'>" + score + "</p>");
    if(score == 100)
    {
        stopGame();
    }
}