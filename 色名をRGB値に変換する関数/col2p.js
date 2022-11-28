//-------------------------------------
// col: colorName to RGB conversion
//-------------------------------------
let df1;
let g, w, h, rgb;

//..........................
function init() {
  //..........................
  df1 = document.form1;
  loadCanvas();
}

//..........................
function loadCanvas() {
  //..........................
  const canvas = document.getElementById("canvas");
  if (!canvas.getContext) {
    alert("not supported");
    return;
  }

  g = canvas.getContext("2d");
  g.lineWidth = 1;
  g.font = "12px 'ＭＳ 明朝'";
  w = canvas.width;
  h = canvas.height;
}

//....................................
function conv() {
  //
  //....................................
  g.clearRect(0, 0, w, h);

  let c = df1.cname.value;

  const hex = getRGB2(c);

  g.fillStyle = "blue";
  g.fillText(c + " : " + hex, w / 4, h / 2 - 5);
  g.fillStyle = c;
  g.fillRect(w / 4, h / 2, (w * 3) / 4 - 5, h / 2 - 3);
}

//......................................
function getRGB2(c) {
  // color ->#RGB
  //......................................
  g.fillStyle = c;
  return g.fillStyle;
}
