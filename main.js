let canvas = document.getElementById('main');
canvas.width = window.innerWidth; //幅
canvas.height = window.innerHeight; //高さ
let text = canvas.getContext('2d');
text.font = '8px serif';
text.fillStyle = 'orange';
color_block = new Image;
color_block.src = '/Republic/img/color_block.png';
let T = document.getElementById('text');
let news = document.getElementById('news');
let country = document.getElementById('country'); //国の情報 "\n"は改行文字
let army = document.getElementById('army').value; //valueを取得
let politics = document.getElementById('politics').value; //valueを取得
let civil = document.getElementById('civil').value; //valueを取得
let study = document.getElementById('study').value; //valueを取得
let diplomacy = document.getElementById('diplomacy').value; //valueを取得
let value = document.getElementById('value').value; //valueを取得
let time = 0;
let ms = 60;
let s = 30;
let m = 0;
let inf = '情報は、ありません。';
let player1 = 0; //player1の操作
let r; //ランダム乱数
let map = [
  [0, 0, 0, 0, 3, 3, 3, 3],
  [0, 0, 0, 0, 3, 3, 3, 3],
  [0, 0, 0, 3, 3, 3, 3, 3],
  [0, 0, 1, 2, 2, 3, 3, 3],
  [1, 0, 1, 2, 2, 4, 4, 4],
  [1, 1, 1, 4, 4, 4, 4, 4],
  [1, 1, 1, 1, 4, 4, 4, 4],
  [1, 1, 1, 1, 4, 4, 4, 4]
  ];
let map_war; //motionの戦争に使う
let politicsAI = 10;//ストーリー進展をカウントする。

window.onload = function() {
  setInterval(function() { Timer() }, 33); //この行だけ引用
}

function Timer() {

  app = document.getElementById('app').value; //国を選択
  if (app == 1) {
    player1 = 0;
  } else if (app == 2) {
    player1 = 1;
  } else if (app == 3) {
    player1 = 2;
  } else if (app == 4) {
    player1 = 3;
  } else if (app == 5) {
    player1 = 4;
  }
  army = document.getElementById('army').value; //valueを取得
  politics = document.getElementById('politics').value; //valueを取得
  civil = document.getElementById('civil').value; //valueを取得
  study = document.getElementById('study').value; //valueを取得
  diplomacy = document.getElementById('diplomacy').value; //valueを取得
  value = document.getElementById('value').value; //valueを取得
  for (y = 0; y < 7; y++) { //map
    for (x = 0; x < 8; x++) {
      text.drawImage(color_block, 32 * map[y][x], 0, 32, 32, 64 * x, 64 * y, 64, 64);
      text.fillText(x + '' + y, x * 64, y * 64);
    }
  } //map
  --ms; //時間
  if (ms == 0) {
    s--;
    ms = 30;
    if (s == 0) {
      m++;
      s = 30;
      motion();
      
      for (let LostCost = 0; LostCost < 10; ++LostCost) {
        if (data.army_population[LostCost] < 0) { //兵士のマイナスを防ぐ
          data.army_population[LostCost] = 0;
        }
      }
      
    } //時間
  }
  T.innerText = '次の月まで' + s + '日　' + m + 'ヶ月経過　';
  country.innerText = '国名:' + data.name[player1] + '　人口(万人):' + data.population[player1] + '　侵攻軍(万人):' + data.army_population[player1] + '　食料:' + data.food[player1] + '　農場:' + data.farm[player1] + '\n' + '(鉄) :' + data.iron[player1] + '　工場:' + data.iron_factory[player1] + '　武器🔫:' + data.rifle[player1] + '　石油:' + data.oil[player1] + '　石油精製施設:' + data.oil_factory[player1] + '　巡視船:' + data.navy[player1] + '　国防軍(万人):' + data.defense[player1];
  news.innerText = inf;
}

function 決定() { //skip button
  s = 1;
}

function R(A) {
  r = Math.floor(Math.random() * A); //ランダム
}
