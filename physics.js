var button = document.getElementById("solve");
button.addEventListener("click", solve);

function solve() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value;
    var f = document.getElementById('f').value;
    var solution1 = document.getElementById('solution1');
    var solution2 = document.getElementById('solution2');
    var work1 = document.getElementById('work1');
    var work2 = document.getElementById('work2');
    var work3 = document.getElementById('work3');
    var work4 = document.getElementById('work4');
    var work5 = document.getElementById('work5');
    var work6 = document.getElementById('work6');
    var work7 = document.getElementById('work7');
    var work8 = document.getElementById('work8');




    var result1 = (a * b);
    var result2 = (c * Math.PI / 180);
    var result3 = (Math.cos(result2) * result1);
    var result4 = (d * e);
    var result5 = (f * Math.PI / 180);
    var result6 = (Math.cos(result5) * result4);
    var result7 = (result3 + result6);
    var result8 = (Math.round(result7));




    if (isNaN(a) || isNaN(b) || isNaN(c) || a == 0) {

        solution1.textContent = "You entered an incorrect value for either N, M, or the Angle degree. Please try again.";
    } else if (isNaN(result1 + result2)) {
        solution1.textContent = "There are no real solutions";

    } else {

        solution1.textContent = result7 + " N/m ";
        solution2.textContent = " Rouded " + result8;
        work1.textContent = " Step 1";
        work2.textContent = "Multiply your first N & m " + '\xa0\xa0\xa0' + a + "*" + b + '\xa0\xa0\xa0' + "is" + '\xa0\xa0\xa0' + result1;

        work3.textContent = result1 + '\xa0\xa0\xa0' + "Then multiply by the angle degree (cos) which is" + '\xa0\xa0\xa0' + result3;

        work4.textContent = " Step 2";
        work5.textContent = " Multiply your second N & m " + d +'\xa0\xa0\xa0' + "*" + e + '\xa0\xa0\xa0' + "is" + '\xa0\xa0\xa0' + result4;
        work6.textContent = result4 + '\xa0\xa0\xa0' + " Then multiply by the angle degree (cos) which is " + '\xa0\xa0\xa0' + result6;
        work7.textContent = " Then  sum  both  sums  of  the  angle "  +'\xa0\xa0\xa0'+result3+ "+" + result6 +'\xa0\xa0\xa0'+ " which is " + result7;
        work8.textContent =" Which rounded up is " +result8;



    }
}
