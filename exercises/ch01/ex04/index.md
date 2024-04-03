まず、連想配列（変数:life）をシャローコピー（let afterLife = {...life}）する。
次に、1つ目のlifeとは別にした変数:afterLifeのanswerキーの値に0を代入し、それを２回目のconsole.logで表示させる。
    let life = { answer: 42 };
    console.log(life);
    let afterLife = {...life};
    afterLife.answer = 0;
    console.log(afterLife);