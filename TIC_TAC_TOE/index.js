function my_fun() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9
    b1 = document.getElementById('1').value
    b2 = document.getElementById('2').value
    b3 = document.getElementById('3').value
    b4 = document.getElementById('4').value
    b5 = document.getElementById('5').value
    b6 = document.getElementById('6').value
    b7 = document.getElementById('7').value
    b8 = document.getElementById('8').value
    b9 = document.getElementById('9').value
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player X won');
    } else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player X won');
    } else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        window.alert('Player X won');
    } else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        window.alert('Player X won');
    } else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        window.alert('Player X won');
    } else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player X won');
    } else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player X won');
    } else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player X won');
    }

    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or not and after that disabled all the other fields
    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player 0 won');
    } else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player 0 won');
    } else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        window.alert('Player 0 won');
    } else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        window.alert('Player 0 won');
    } else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        window.alert('Player 0 won');
    } else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player 0 won');
    } else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player 0 won');
    } else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert('Player 0 won');
    }

    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') && (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') && (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    } else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        } else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }

}
var flag = 1

function my_fun1() {
    if (flag == 1) {
        document.getElementById('1').value = 'X'
        document.getElementById('1').disabled = true
        flag = 0
    } else {
        document.getElementById('1').value = '0'
        document.getElementById('1').disabled = true
        flag = 1
    }
}

function my_fun2() {
    if (flag == 1) {
        document.getElementById('2').value = 'X'
        document.getElementById('2').disabled = true
        flag = 0
    } else {
        document.getElementById('2').value = '0'
        document.getElementById('2').disabled = true
        flag = 1
    }
}

function my_fun3() {
    if (flag == 1) {
        document.getElementById('3').value = 'X'
        document.getElementById('3').disabled = true
        flag = 0
    } else {
        document.getElementById('3').value = '0'
        document.getElementById('3').disabled = true
        flag = 1
    }
}

function my_fun4() {
    if (flag == 1) {
        document.getElementById('4').value = 'X'
        document.getElementById('4').disabled = true
        flag = 0
    } else {
        document.getElementById('4').value = '0'
        document.getElementById('4').disabled = true
        flag = 1
    }
}

function my_fun5() {
    if (flag == 1) {
        document.getElementById('5').value = 'X'
        document.getElementById('5').disabled = true
        flag = 0
    } else {
        document.getElementById('5').value = '0'
        document.getElementById('5').disabled = true
        flag = 1
    }
}

function my_fun6() {
    if (flag == 1) {
        document.getElementById('6').value = 'X'
        document.getElementById('6').disabled = true
        flag = 0
    } else {
        document.getElementById('6').value = '0'
        document.getElementById('6').disabled = true
        flag = 1
    }
}

function my_fun7() {
    if (flag == 1) {
        document.getElementById('7').value = 'X'
        document.getElementById('7').disabled = true
        flag = 0
    } else {
        document.getElementById('7').value = '0'
        document.getElementById('7').disabled = true
        flag = 1
    }
}

function my_fun8() {
    if (flag == 1) {
        document.getElementById('8').value = 'X'
        document.getElementById('8').disabled = true
        flag = 0
    } else {
        document.getElementById('8').value = '0'
        document.getElementById('8').disabled = true
        flag = 8
    }
}

function my_fun9() {
    if (flag == 1) {
        document.getElementById('9').value = 'X'
        document.getElementById('9').disabled = true
        flag = 0
    } else {
        document.getElementById('9').value = '0'
        document.getElementById('9').disabled = true
        flag = 1
    }
}

function myfun_10() {
    location.reload();
    document.getElementById("1").value = '';
    document.getElementById("2").value = '';
    document.getElementById("3").value = '';
    document.getElementById("4").value = '';
    document.getElementById("5").value = '';
    document.getElementById("6").value = '';
    document.getElementById("7").value = '';
    document.getElementById("8").value = '';
    document.getElementById("9").value = '';

}