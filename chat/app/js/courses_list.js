$(function(){
	//$('#url_pjax_chat').trigger('click');
 	
	function get_courses_list_url(token){
		return api_host + 'api/v1/courses?token=' + token;
	}
	
	/**
	 * 获取课程列表
	 */
	function get_courses_list(){
		var token = "7975cd5c649f38e46752c95e86aba1d8";
		var url = get_courses_list_url(token);
		
		$.get(url,function(res){
			console.log(res.data);
			
			// login succ
			if(res.data.length > 0){
				// alert(res.data);
				var course_html = '';
				for(var i = 0; i<res.data.length; i++){
					var course = res.data[i];
					
					course_html += "<li>"
						+ "<a href='course.html?id=" + course.id + "'>"
		                + "<img src='" + course.image + "' width='100%' height='170' title='案例：慕课网2048私人订制' alt='案例：慕课网2048私人订制'>"
		                + "<h5>"+ course.name +"</h5>"
		                + "<p>"+ course.desc.substring(0,30) +"</p>"
		                + "<div class='tips'><span class='l'>讲师：" + course.author + "</span> <span class='r'>课程时长：" + course.week + "周</span></div>"
		                + "</a>"
		                + "</li>";
				}
				
				$('.card').html(course_html);
				
			}else{
				alert('还没有课程吧 ~ :  ' + res.data.error);
			}
		});
	}
	
	
	//main 
	get_courses_list();
});