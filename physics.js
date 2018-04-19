var button = document.getElementById("solve");
button.addEventListener("click", () => {
    document.getElementById('solutions').textContent = solve()
});

function solve() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;

    var result1 = (a * c)  ;



    var result2 = (b* Math.PI /180 )
    var result3 =(Math.cos(result2))

 if (isNaN(a)|| isNaN(b) || isNaN(c) || a==0)
  {
        changeElementClass("solutions", "invalid");
        return "You entered an incorrect value for either N, M, or the Angle degree. Please try again.";
    } else if (isNaN(result1 + result2)) {
        changeElementClass("solutions", "no_real");
        return "There are no real solutions";

    } else {
        changeElementClass("solutions", "real");
        return + result3 ;
    }
}

function changeElementClass(id, cssclass) {
    var el = document.getElementById(id);
    el.className = cssclass;
}

