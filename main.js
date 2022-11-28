function next()
{
    player1_name = document.getElementById("input1").value;
    player2_name = document.getElementById("input2").value;
    localStorage.setItem("name1" , player1_name);
    localStorage.setItem("name2" , player2_name);
    window.location = "game_page.html"
}