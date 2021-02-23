function motion() {
  ++politicsAI; //ストーリー進展をカウントする。
  
  motion_case(player1, army, politics, study, diplomacy, civil, value);
  AI();
  if (app == 1) {
    motion_case(1, 4, politicsAI, 2, diplomacy, 1, false);
    motion_case(2, army, politicsAI, study, diplomacy, civil, false); //帝都
    motion_case(3, 3, politicsAI, study, diplomacy, 1, false);
    motion_case(4, 2, politicsAI, study, diplomacy, 1, false);
  } else if (app == 2) {

  } else if (app == 3) {
    motion_case(2, army, politicsAI, study, diplomacy, civil, false); //帝都
  } else if (app == 4) {
    motion_case(2, army, politicsAI, study, diplomacy, civil, false); //帝都
  }
}

function AI(player, ArmyAI, StudyAI, DiplomacyAI, CivilAI, WarsAI) { //AIの制御
  if (data.wars[AI] == 10) {
    
  } else if (data.wars[AI] != 10) {
   
  }
}

function wars(V, Y, X, player, value) {
  if (value == V && map[Y][X] != data.color[player] && data.army_population[player] > 0 && data.oil[player] > 0) {
    map_war = map[Y][X];
    if (data.army_population[player] * (data.rifle[player] * data.rifle_study[player]) >= data.defense[map_war] * (data.rifle[map_war] * data.rifle_study[map_war])) {
      data.wars[map_war] = player; //宣戦布告
      R(10);
      data.rifle[map_war] -= r;
      R(3);
      data.defense[map_war] -= r;
      R(1.5);
      data.army_population[player] -= r;
      map[Y][X] = data.color[player];
      inf = data.name[player] + 'が、侵攻';
    } else {

      data.wars[map_war] = player; //宣戦布告
      R(6);
      data.army_population[player] -= r + 1;
      R(10);
      data.rifle[player] -= r + 5;
      R(3);
      data.defense[map_war] -= r;
      R(5);
      data.rifle[map_war] -= r;
      inf = data.name[player] + '軍が、侵攻作戦を失敗。' + '\n' + '以下の事実が、発覚' + '\n' + data.name[map_war] + 'の国防軍は、' + data.defense[map_war] + '\n' + '武器は、' + data.rifle[map_war];
    }
  }
}

function motion_case(player, army, politics, study, diplomacy, civil, value) {
  R(20);
  data.oil[player] -= r;
  R(15);
  data.food[player] -= r;
  R(3);
  data.navy[player] -= r;
  data.food[player] += data.farm[player] / 2;
  data.iron[player] += data.iron_factory[player] / 2;
  data.oil[player] += data.oil_factory[player] / 2;
  if (army == 1) { //造船
    if (data.iron[player] > 18) {
      data.iron[player] -= 18;
      data.navy[player] += 3;
    } else {
      inf = data.name[player] + 'は、鉄不足が深刻化している。';
    }
  } else if (army == 2) { //動員命令
    if (data.population[player] > 20) {
      --data.population[player];
      ++data.army_population[player];
    } else {
      inf = data.name[player] + '軍内部で、反戦デモ';
    }
  } else if (army == 3) { //防衛
    if (data.population[player] > 10) {
      --data.population[player]
        ++data.defense[player];
    } else {
      inf = data.name[player] + '軍内部で、反戦デモ';
    }
  } else if (army == 4) {
    if (data.iron[player] > 5) {
      data.iron[player] -= 5;
      ++data.rifle[player];
    } else {
      inf = data.name[player] + 'で、鉄不足によりライフル銃製造中止';
    }
  }

  if (politics == 1) { //

  } else if (politics == 2) { //

  } else if (politics == 3) { //

  } else if (politics == 4) { //

  } else if (politics == 5) { //

  }

  if (study == 1) { //説明
    inf = '日付について' + '\n' + '日付は、日は行動までの秒数をしめします。' + '\n' + '軍事について' + '\n' + '造船は、鉄(10)を使い巡視船を作ります。侵攻軍動員命令は、侵攻の時使える兵隊を増やします。国防軍動員命令は、防衛の時使える兵隊を増やします。ライフル製造は、鉄(5)を使い作る、攻防時に必須です。研究で、強化できる。' + '\n' + '侵攻について' + '\n' + '攻めたい番号をmapから見て指定する。' + '\n' + '外交について' + '\n' + 'このゲームの国交を結ぶは、講和という意味だと思ってください。' + '\n' + '民事について' + '\n' + '農場は、食料自給率を上げる。人口は、食料を100消費して人口を増やす。精製施設は、石油産出量を増やす。石油が、ないと侵攻できない。';
  } else if (study == 2) { //ライフルを強くする
   data.rifle_study[player] += 0.1;
   console.log(data.rifle_study);
  } else if (study == 3) { //

  } else if (study == 4) { //

  } else if (study == 5) { //

  }

  if (diplomacy == 1) { //
    data.wars[0] = 10;
  } else if (diplomacy == 2) { //
    data.wars[1] = 10;
  } else if (diplomacy == 3) { //
    data.wars[2] = 10;
  } else if (diplomacy == 4) { //
    data.wars[3] = 10;
  } else if (diplomacy == 5) { //
    data.wars[4] = 10;
  } else if (diplomacy == 6) { //
    inf = data.name[player] + 'が、シングル協定に参加した。' + '\n' + 'この協定参加国は、石油が一方の国で無くなった場合、鉄と石油を交換する協定';
    data.alliance[player] = 1;
  } else if (diplomacy == 7) { //
    inf = data.name[player] + 'が、マルチ協定に参加した。' + '\n' + 'この協定参加国は、食料が一方の国で無くなった場合、鉄と食料を交換する協定';
    data.alliance[player] = 2;
  } else if (diplomacy == 8) { //
    inf = data.name[player] + 'が、すべての協定から離脱した。';
    data.alliance[player] = 0;
  }

  if (civil == 1) { //農場を建設
    ++data.farm[player];
  } else if (civil == 2) { //人口を増やす
    if (data.food[player] > 100) {
      data.food[player] -= 100;
      data.population[player] += 10;
    } else {
      inf = data.name[player] + '国民は、国内の食料不足に懸念あり。';
    }
  } else if (civil == 3) { //精製施設を建設
    ++data.oil_factory[player];
  } else if (civil == 4) { //工場を建設
    ++data.iron_factory[player];
  } else if (civil == 5) { //義勇軍
    if (data.population[player] > 30) { //三十万人いたら義勇軍が湧く
      data.population[player] -= 10;
      data.defense[player] += 1;
    } else {
      inf = data.name[player] + 'で、市民の反戦デモ';
    }
  } else if (civil == 6) {
    if (data.iron[player] > 15) {
      data.iron[player] -= 15;
      ++data.rifle[player];
    } else {
      inf = data.name[player] + 'で、鉄不足によりライフル銃製造中止';
    }
  }
  wars(1, 0, 0, player, value);
  wars(2, 0, 1, player, value);
  wars(3, 0, 2, player, value);
  wars(4, 0, 3, player, value);
  wars(5, 0, 4, player, value);
  wars(6, 0, 5, player, value);
  wars(7, 0, 6, player, value);
  wars(8, 0, 7, player, value);
  wars(9, 1, 0, player, value);
  wars(10, 1, 1, player, value);
  wars(11, 1, 2, player, value);
  wars(12, 1, 3, player, value);
  wars(13, 1, 4, player, value);
  wars(14, 1, 5, player, value);
  wars(15, 1, 6, player, value);
  wars(16, 1, 7, player, value);
  wars(17, 2, 0, player, value);
  wars(18, 2, 1, player, value);
  wars(19, 2, 2, player, value);
  wars(20, 2, 3, player, value);
  wars(21, 2, 4, player, value);
  wars(22, 2, 5, player, value);
  wars(23, 2, 6, player, value);
  wars(24, 2, 7, player, value);
  wars(25, 3, 0, player, value);
  wars(26, 3, 1, player, value);
  wars(27, 3, 2, player, value);
  wars(28, 3, 3, player, value);
  wars(29, 3, 4, player, value);
  wars(30, 3, 5, player, value);
  wars(31, 3, 6, player, value);
  wars(32, 3, 7, player, value);
  wars(33, 4, 0, player, value);
  wars(34, 4, 1, player, value);
  wars(35, 4, 2, player, value);
  wars(36, 4, 3, player, value);
  wars(37, 4, 4, player, value);
  wars(38, 4, 5, player, value);
  wars(39, 4, 6, player, value);
  wars(40, 4, 7, player, value);
  wars(41, 5, 0, player, value);
  wars(42, 5, 1, player, value);
  wars(43, 5, 2, player, value);
  wars(44, 5, 3, player, value);
  wars(45, 5, 4, player, value);
  wars(46, 5, 5, player, value);
  wars(47, 5, 6, player, value);
  wars(48, 5, 7, player, value);
  wars(49, 6, 0, player, value);
  wars(50, 6, 1, player, value);
  wars(51, 6, 2, player, value);
  wars(52, 6, 3, player, value);
  wars(53, 6, 4, player, value);
  wars(54, 6, 5, player, value);
  wars(55, 6, 6, player, value);
  wars(56, 6, 7, player, value);
  wars(57, 7, 0, player, value);
  wars(58, 7, 1, player, value);
  wars(59, 7, 2, player, value);
  wars(60, 7, 3, player, value);
  wars(61, 7, 4, player, value);
  wars(62, 7, 5, player, value);
  wars(63, 7, 6, player, value);
  wars(64, 7, 7, player, value);
}

/*for (let AI = 0; AI < 10; AI++) {
   ++politicsAI; //ストーリー進展をカウントする。
   if (data.wars[AI] == 10) {
     //army, study, diplomacy, civil
   } else if (data.wars[AI] != 10) {
     
     for (var Y3 = 0; Y3 < 8; Y3++) {
       for (var X3 = 0; X3 < 8; X3++) {
         if (map[Y3][X3] == data.wars[AI]) {
           X3 = 9;
           Y3 = 9;
           inf = 'せ'
         }
       }
     }
   }
   
 }*/