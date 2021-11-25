function trijsturis() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  var perimeter = a + b + c
  var efect = area / perimeter

  var result = document.getElementById("result");
  result.innerHTML = ' ' + perimeter;

  var result1 = document.getElementById("result1");
  result1.innerHTML = ' ' + area;

  var result2 = document.getElementById("result2");
  result2.innerHTML = ' ' + efect;
}