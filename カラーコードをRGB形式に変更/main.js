const convert = document.getElementById("convert");
const color = document.getElementById("color");
const before = document.getElementById("before");
const beforecode = document.getElementById("before-code");
const after = document.getElementById("after");
const aftercode = document.getElementById("after-code");

// 変換ボタンをクリックしたとき
convert.addEventListener(
  "click",
  function () {
    // 入力した値を取得
    const colorcode = color.value;
    // 変換した値を取得
    const rgbArr = convert_colorcode_to_rgb(colorcode);

    // 変換に失敗したときは処理終了
    if (!rgbArr) {
      alert("変換に失敗しました");
      return false;
    }

    // 変換前と変換後を結果に反映
    if (colorcode.split("")[0] !== "#") {
      colorcode = "#" + colorcode;
    }
    const rgb = "rgb(" + rgbArr[0] + ", " + rgbArr[1] + ", " + rgbArr[2] + ")";

    before.style.backgroundColor = colorcode;
    beforecode.innerHTML = colorcode;
    after.style.backgroundColor = rgb;
    aftercode.innerHTML = rgb;
  },
  false
);

// カラーコードをrgbに変換する関数
function convert_colorcode_to_rgb(colorcode) {
  // 先頭に#が含まれている場合は除外
  if (colorcode.split("")[0] === "#") {
    colorcode = colorcode.substring(1);
  }

  // カラーコードが省略されている場合は6桁に戻す
  if (colorcode.length === 3) {
    const codeArr = colorcode.split("");
    colorcode =
      codeArr[0] +
      codeArr[0] +
      codeArr[1] +
      codeArr[1] +
      codeArr[2] +
      codeArr[2];
  }

  // カラーコードが6桁でない場合
  if (colorcode.length !== 6) {
    return false;
  }
  let r = parseInt(colorcode.substring(0, 2), 16);
  let g = parseInt(colorcode.substring(2, 4), 16);
  let b = parseInt(colorcode.substring(4, 6), 16);
  return [r, g, b];
}
