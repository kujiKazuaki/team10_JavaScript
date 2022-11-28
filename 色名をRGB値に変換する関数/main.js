const canvas = document.getElementById("canvas");
let df1;
let g, w, h, rgb;

function init() {
  df1 = document.form;
  loadCanvas();
}

// 色の帯を表示させる
function loadCanvas() {
  g = canvas.getContext("2d");
  g.font = "12px";
  w = canvas.width;
  h = canvas.height;
}

function conv() {
  g.clearRect(0, 0, w, h);

  let c = df1.cname.value;

  const hex = getRGB2(c);

  g.fillStyle = "blue";
  g.fillText(c + " : " + hex, w / 4, h / 2 - 5);
  g.fillStyle = c;
  g.fillRect(w / 4, h / 2, (w * 3) / 4 - 5, h / 2 - 3);
}

// 色⇒rgbaにするコード
function getRGB2(c) {
  g.fillStyle = c;
  return g.fillStyle;
}
