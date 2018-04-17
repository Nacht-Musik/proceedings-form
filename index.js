function init(){
  // 会議カテゴリーの選択
  $('#meeting_category_sel').change(function() {
    // 選択オプションのvalueを取得
    var sel_val = $(this).val();

    if (sel_val === "open") {
      $('#meeting-form-1').removeClass('hidden');
    } else if (sel_val === 'close') {
      $('#meeting-form-1').addClass('hidden');
    } else {
      console.log('想定外');
    }
  }); 

  
  // 参加者追加('add-btn'をクリック)
  $('.add-btn').click(function(){
    // 追加する人の氏名を取得
    var name = $('#name_sel option:selected').text();

    // 追加する人の役割を取得
    var role = $('#role_sel option:selected').text();

    var elm = $('.person')[0];
    elm = $(elm).clone().removeClass('template');

    // 氏名及び役割の選択状態を識別
    if (name === "" && role === "") {
      $('#alert-disp').text('『氏名』及び『役割』を選択して下さい。');
    } else if (name === "") {
      $('#alert-disp').text('『氏名』を選択して下さい。');
    } else if (role === "") {
      $('#alert-disp').text('『役割』を選択して下さい。');
    } else {
      $('#alert-disp').text('');
      // 該当箇所に選択中の氏名、役割を代入。
      $(elm).find('.person_name').html(name);
      $(elm).find('.person_role').html(role);

      //加工した要素を追加
      $(elm).appendTo('.participants');
    }

  });

  // 要素削除
  $(document).on('click', '.del-btn', function(){
    $(this).parents('.person').remove();
  });
}

$(function(){
  init();
});

