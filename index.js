// 参加者追加 ('add-btn'をクリック)
function AddMember() {
  // ユーザー名(表示値)を取得
  var user_name_obj = document.getElementById("user_name_sel");
  var idx = user_name_obj.selectedIndex;
  var txt = user_name_obj.options[idx].text;
  console.log('氏名：' + txt);    //デバッグ確認用

  // 役割(表示値)を取得
  var user_role_obj = document.getElementById("user_role_sel");
  var idx = user_role_obj.selectedIndex;
  var txt = user_role_obj.options[idx].text;
  console.log('役割：' + txt);    //デバッグ確認用
  

  // var user_role = document.getElementById("user_role");
  // console.log('役割：' + user_role.text);
  // 参加者のクローンを作成する
  // 参加者フォームをclassで指定 -> Clone作成 -> 参加者枠に追加？
}

// 参加者削除('del-btn'をクリック)
function DelMember() {
  console.log("del-btn click...");
}
