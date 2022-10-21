player1_name = localStorage.getItem("player1_name_input");
player2_name = localStorage.getItem("player2_name_input");

var player1_points = 0
var player2_points = 0

document.getElementById("player1_name").innerHTML = player1_name +":"
document.getElementById("player2_name").innerHTML = player2_name +":"
document.getElementById("player1_score").innerHTML = player1_points
document.getElementById("player2_score").innerHTML = player2_points
document.getElementById("player_question").innerHTML = player1_name
document.getElementById("player_answer").innerHTML = player2_name

function send() {
    var player_word_save = document.getElementById("word").value
    var minus_word_save = player_word_save.toLowerCase()
    var save_letter1 = minus_word_save.charAt(1)
    var save_haft_of_word = Math.floor(minus_word_save.length / 2)
    var save_letter2 = minus_word_save.charAt(save_haft_of_word)
    var calculate_length = minus_word_save.length -1
    var save_letter3 = minus_word_save.charAt(calculate_length)
    var replace_letter1 = minus_word_save.replace(save_letter1," _ ")
    var replace_letter2 = replace_letter1.replace(save_letter2," _ ")
    var replace_letter3 = replace_letter2.replace(save_letter3," _ ")
    var read_word = "<h2 id='readed_word'> Palabra "+ replace_letter3+ "</h2>"
    var save_player_answer = "<br> respuesta : <input id='answer' type='text'>"
    var save_button = "<br> <button id='button' onclick = 'Conprovar()'> Conprovar </button>"
    var save_result = read_word + save_player_answer + save_button
    document.getElementById("output").innerHTML = save_result
    document.getElementById("word").value = ""
}
 var question_turn = "player1_name_input" 
 var answer_turn = "player2_name_input" 

 function Conprovar() {
    var player_answer_save = document.getElementById("answer").value
    var minus_answer_save = player_answer_save.toLowerCase()
    if(minus_answer_save == minus_word_save) {
      console.log(minus_answer_save)
       console.log(minus_word_save)
     if(answer_turn == "player1_name_input") {
        player1_points = player1_points +1
        document.getElementById("player1_score").innerHTML=player1_points
     }
     else {
        player2_points = player2_points +1
        document.getElementById("player2_score").innerHTML=player2_points
     }
    }
   if(question_turn == "player1_name_input"){
    question_turn = "player2_name_input"
    document.getElementById("player_question").innerHTML=player2_name
   }
   else {
    question_turn = "player1_name_input"
    document.getElementById("player_question").innerHTML=player1_name
   }
   if(answer_turn == "player1_name_input"){
    answer_turn = "player2_name_input"
    document.getElementById("player_answer").innerHTML=player2_name
   }
   else {
    answer_turn = "player1_name_input"
    document.getElementById("player_answer").innerHTML=player1_name
   }
   document.getElementById("output").innerHTML = ""
 }
