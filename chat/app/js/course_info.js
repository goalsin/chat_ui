$(function(){
	//$('#url_pjax_chat').trigger('click');
 	
	function get_course_info_by_id(id, token){
		return api_host + 'api/v1/courses/'+id+'?token=' + token;
	}
	
	/**
	 * 获取课程列表
	 */
	function get_course_info(){
		
		var id = getParameterByName('id');
		// alert(id);
		var url = get_course_info_by_id(id ,token);
		
		$.get(url,function(res){
			console.log(res.data);
			
			// login succ
			if(res.data){
				// alert(res.data);
				var course_html = '';			
				var course = res.data;
<<<<<<< HEAD
				
				course_html += "<li>"
					+ ""
	                + "<img src='" + course.image + "' width='100%' height='370' title='案例：慕课网2048私人订制' alt='案例：慕课网2048私人订制'>"
	                + "<h5>"+ course.name +"</h5>"
	                + "<p>"+ course.desc.substring(0,30) +"</p>"
	                + "<div class='tips'><span class='l'>讲师：" + course.author + "</span> <span class='r'>课程时长：" + course.week + "周</span></div>"
	                + ""
	                + "</li>";
				
				$('#home>.card').html(course_html);
				
				
				var tclass_html = res.tclass.length<= 0 ?'<h1>no class</h1>':'';
				
				for(var i = 0; i<res.tclass.length; i++){
					var cls = res.tclass[i];
					
					tclass_html += "<li>"
						+ "<a href='course.html?id=" + cls.id + "'>"
		                + "<h5>"+ cls.name +"</h5>"
		                + "<p>"+ cls.desc.substring(0,130) +"</p>"
						
		                + "<div class='tips'><span class='l'>start：" + cls.start + "</span> <span class='r'>end：" + cls.end + "</span></div>"
		                + "</a>"
		                + "</li>";
				}
				
				
				
				$('#profile>.card').html(tclass_html);
				
				
				var author_html ='';
				var author = res.author;
				
				author_html += "<li>"
					+ ""
	                + "<h5>"+ author.email +"</h5>"
	                + "<p>"+ author.email.substring(0,30) +"</p>"
	        
=======
				
				course_html += "<li>"
					+ ""
	                + "<img src='" + course.image + "' width='100%' height='370' title='案例：慕课网2048私人订制' alt='案例：慕课网2048私人订制'>"
	                + "<h5>"+ course.name +"</h5>"
	                + "<p>"+ course.desc.substring(0,30) +"</p>"
	                + "<div class='tips'><span class='l'>讲师：" + course.author + "</span> <span class='r'>课程时长：" + course.week + "周</span></div>"
	                + ""
>>>>>>> 7697cbb... add course info
	                + "</li>";
				
				$('#settings>.card').html(author_html);
				
			}else{
				alert('还没有课程吧 ~ :  ' + res.data.error);
			}
		});
	}
	
	
	//main 
	get_course_info();
	// $('#myTab a:last').tab('show')
});