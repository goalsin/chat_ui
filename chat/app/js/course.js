$(function(){
	//$('#url_pjax_chat').trigger('click');
 	
	function get_courses_list_url(token){
		return 'http://www.at35.com:3000/api/v1/courses?token=' + token;
	}
	
	/**
	 * 获取课程列表
	 */
	function get_courses_list(){
		var token = "6aba70ab22296cd862266fc5ff61547d";
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
						+ "<a href='/view/76'>"
		                + "<img src='http://img.mukewang.com/5344ead10001ec2506000338-300-170.jpg' width='100%' height='170' title='案例：慕课网2048私人订制' alt='案例：慕课网2048私人订制'>"
		                + "<h5>"+ course.name +"</h5>"
		                + "<p>"+ course.desciption +"</p>"
		                + "<div class='tips'><span class='l'>1536人参加</span><span class='r'>课程时长：2小时</span></div>"
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