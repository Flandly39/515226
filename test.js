//HTTP GETをハンドリングする
function doGet(e) {

    //リクエストパラメータ名"text"の値を取得する
    var text = e.parameter.text;
    var value;
    if (text) {
        value = "You say " + text;
    } else {
        value = "Please say something!";
    }
    var result = {
        message: value
    }

    var out = ContentService.createTextOutput();

    //Mime TypeをJSONに設定
    out.setMimeType(ContentService.MimeType.JSON);

    //JSONテキストをセットする
    out.setContent(JSON.stringify(result));

    return out;
}
