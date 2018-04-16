function init(){
  // 参加者追加('add-btn'をクリック)
  $('.add-btn').click(function(){
    // 追加する人の氏名を取得
    var name_obj = document.getElementById("name_sel");
    var idx = name_obj.selectedIndex;      //選択されている氏名のidを取得
    var name_txt = name_obj.options[idx].text;    
    console.log('氏名：' + name_txt + '  idx:' + idx);    //値取得確認用 

    // 追加する人の役割を取得
    var user_role_obj = document.getElementById("role_sel");
    var idx = user_role_obj.selectedIndex;
    var user_role_txt = user_role_obj.options[idx].text;
    console.log('役割：' + user_role_txt + '  idx:' + idx);    //値取得確認用

    var elm = $('.person')[0];
    elm = $(elm).clone().removeClass('template');

    
    $(elm).appendTo('.participants');


  });

  // del-btn クリック
  $('.del-btn').click(function(){
    console.log('del-btn click');
  });
}

$(function(){
  init();
});

