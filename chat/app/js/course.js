$(function(){
	//$('#url_pjax_chat').trigger('click');
	// $('#pjax-container').load('app/pages/messages.html');
	
	// $('#url_pjax_chat').click(function(){
// 		$('#pjax-container').load('app/pages/messages.html');
// 	});
// 	
// 	$('#url_pjax_write').click(function(){
// 		$('#pjax-container').load('app/pages/write.html');
// 	});
	
	// 聊天多用户tab
	$('.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
	
});