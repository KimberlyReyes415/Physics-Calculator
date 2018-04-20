var button = document.getElementById("solve");
button.addEventListener("click", () => {
    document.getElementById('solutions').textContent = solve()
});

function solve() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
      var e = document.getElementById('e').value;
      var f = document.getElementById('f').value;

    var result1 = (a * b)  ;
 var result2 = (c* Math.PI /180 );
    var result3 =(Math.cos(result2) * result1);
    var result4=  ( d* e) ;
 var result5 = (f* Math.PI /180 );
    var result6 =(Math.cos(result5) * result4) ;
    var result7 = (result3 + result6);
    var result8 = (Math.round(result7));




 if (isNaN(a)|| isNaN(b) || isNaN(c) || a==0)
  {
        changeElementClass("solutions", "invalid");
        return "You entered an incorrect value for either N, M, or the Angle degree. Please try again.";
    } else if (isNaN(result1 + result2)) {
        changeElementClass("solutions", "no_real");
        return "There are no real solutions";

    } else {
        changeElementClass("solutions", "real");
        return +result7 +"n/m" +"Or round is" +result8 ;
    }
}

function changeElementClass(id, cssclass) {
    var el = document.getElementById(id);
    el.className = cssclass;
}

