player_1name = localStorage.getItem("player_1name");
 player_2name = localStorage.getItem("player_2name");

 player1_score = 0;
 player2_score = 0;

 document.getElementById("player_1name").innerHTML = player_1name + ":" ;
 document.getElementById("player_2name").innerHTML = player_2name + ":" ;
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
document.getElementById("player_Q").innerHTML = "Question turn " + player_1name ;
document.getElementById("player_A").innerHTML = "Answer turn " + player_2name ;

function sent(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log ("lower case = " + word);
    charAt1 = word.charAt(1);
    console.log (charAt1);

    length_divideTo = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divideTo);
    console.log (charAt2);
    length_minus1 = word.length - 1 ;
    charAt3 = word.charAt ( length_minus1);
    remove_charAt1 = word.replace(charAt1, "_");
     remove_charAt2 = remove_charAt1.replace(charAt2, "_");
      remove_charAt3 = remove_charAt2.replace(charAt3, "_");
       console.log(remove_charAt3);


       question_word  = "<h4 id = 'word_display'> Q." + remove_charAt3 + "</h4>";
       input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>";
       check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> check_</button>";
       row = question_word + input_box + check_button ;
       document.getElementById("output").innerHTML = row;
};

answer_turn = "player_2";
question_turn = "player_1";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log ("ans is lower case  = " + answer);

    if(answer == word)
    {
       
        if (answer_turn == "player_1"){
            player1_score = player1_score + 1 ;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    
    }
    if (question_turn == "player_1"){
        question_turn = "player_2";
        console.log ("question_turn -" + player_2name);
        document.getElementById("player_Q").innerHTML = "Question Turn = " + player_2name;
    }
    else{
       question_turn = "player_1";
       console.log ("question turn -"+ player_1name);
       document.getElementById("player_Q").innerHTML = "Questionn turn = " + player_1name;
    }
    
    if (answer_turn == "player_1"){
        answer_turn = "player_2";
        console.log ("Answer turn = " + player_2name);
        document.getElementById("player_A").innerHTML = "Answer turn = " + player_2name;
    }
    else{
        answer_turn = "player_1";
        console.log ("Answer Turn =" + player_1name);
        document.getElementById("player_A").innerHTML = "Answer turn = " + player_1name;
    }
     
    document.getElementById("output").innerHTML = "";

}




