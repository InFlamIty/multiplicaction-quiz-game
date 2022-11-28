player1_name =  localStorage.getItem("name1")
player2_name = localStorage.getItem("name2")
player1_score = 0
player2_score = 0
question_turn = "player1"
answer_turn = "player2"

document.getElementById("player1_name").innerHTML = player1_name + " : "
document.getElementById("player2_name").innerHTML = player2_name + " : "

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name

function answering_question()
{
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
   question = num1 + "X" + num2
   word = Number(num1 * num2)

    

    question_word = "<h4 id='word_display'> Q. " + question + "</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>"
    row = question_word + input_box + check_button
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}
function check()
{
    get_answer = document.getElementById("input_check_box").value
    if (get_answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score +1
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else {
            player2_score = player2_score +1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player2_name

    }
    else
    {
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question turn - " + player1_name
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name

    }
    else
    {
        answer_turn = "player1"
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player1_name
}
document.getElementById("output").innerHTML = ""
}
