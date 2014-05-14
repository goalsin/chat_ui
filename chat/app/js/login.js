$(function(){
	//$('#url_pjax_chat').trigger('click');
 	
	function get_url(email,passwd){
		return 'http://www.at35.com:3000/api/v1/login?email=' + email + '&password=' + passwd + '';
	}
	// 聊天多用户tab
	$('#login_btn').off('click').click(function (e) {
		e.preventDefault()
		
		var email = $('#user_email').val();
		var password = $('#user_passwd').val();
		var url = get_url(email,password);
		
		
		$.get(url,function(data){
			console.log(data);
			
			// login succ
			if(data.token){
				alert(data.token);
			}else{
				alert('login failed:  ' + data.error);
			}
		});
	})
	
});