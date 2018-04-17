function init(){
  // 参加者追加('add-btn'をクリック)
  $('.add-btn').click(function(){
    // 追加する人の氏名を取得
    var name_txt = $('#name_sel option:selected').text();

    // 追加する人の役割を取得
    var role_txt = $('#role_sel option:selected').text();

    var elm = $('.person')[0];
    elm = $(elm).clone().removeClass('template');

    // 氏名及び役割の選択状態を識別
    if (name_txt === "" || role_txt === "") {
      alert('『氏名』及び『役割』を選択して下さい。');
    } else {
      // 該当箇所に選択中の氏名、役割を代入。
      $(elm).find('.person_name').html(name_txt);
      $(elm).find('.person_role').html(role_txt);

      //加工した要素を追加
      $(elm).appendTo('.participants');
    }

  });

  // 要素削除
  $(document).on('click', '.del-btn', function(){
    console.log($(this).text());
    $(this).parents('.person').remove();
  });
}

$(function(){
  init();
});

