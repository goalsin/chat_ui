FAYE_SERVER_URL = 'http://106.187.49.166:9200/faye'

//-------------------------------
function get_current_date_string(){
    var myDate = new Date();  

    return myDate.getFullYear()+'年' +
   	 	myDate.getMonth()+'月'+
   	 	myDate.getDate()+'日 '+
		myDate.getHours()+':'+
		myDate.getMinutes()+'    ';
}
 
var client = {};

/**
 * 点对点聊天
 */ 
function chat_with_person(channel,message_selector){
	client = new Faye.Client(FAYE_SERVER_URL,{
		timeout: 1200000000,
		retry: 5
	});
	client.channel = channel;
	
	client.send = function(text){
		if(client.channel){
			console.log('from_user = '+ client.from_user.name);		  
			client.publish('/'+client.channel, {
				'text': text,
				'user': client.from_user
			});
		}else{
			alert('send with no channel');
		}
	}
	
	//-------
	client.incoming = function(message, callback) {
	    console.log('incoming ', message);

	    for(var key in message){
		    if(key == 'data'){
				var user = message['data']['user'];
				
				// <div class="leftd">
				//     <div class="speech left"> 请把资料准备好! </div>
				// </div>
				if(user.nickname === client.from_user.nickname){
			    	var str = $('#income_msg').html() + '<br><div class=leftd>自己'+user.nickname+'-'+get_current_date_string() + '<br>'+
							'' +"<div class='speech left'>"+ message['data']['text']  +'</div></div>';
  
				     $('#income_msg').html('').append(str);
				 
					 var i = $('#income_msg').height();
				 
					 $('#income_msg').scrollTop(i);
				}else{
					// <div class="rightd">
					//   <div class="speech right"> 好的!</br>
					//     没问题!</br>
					//     搞定了 </div>
					// </div>
			    	var str = $('#income_msg').html() + "<br><div class=rightd>对方"+user.nickname+'-<br>'+get_current_date_string() + '<br>'+
							''+"<div class='speech right'>"+ message['data']['text'] + "</div></div>";
  
				     $('#income_msg').html('').append(str);
				 
					 var i = $('#income_msg').height();
				 
					 $('#income_msg').scrollTop(i);
				}
				 
		    }else{
				//TODO:
		    }
	  	}

	    callback(message);
	}

	client.outgoing = function(message, callback) {
		console.log('outgoing ', message);

		for(var key in message){
		    if(key == 'data'){
		     	 $('#outgo_msg').append('outgoing '+
			  	 	message['data']['text'] +'<br>');
			     $('#outgo_msg').append('<br><hr>'); 
		    }else{
		  	    //TODO:
		    }		  	 
		 }
 
		callback(message);
	}
	
	client.from_user = {
		name		: 	'alfred',
		nickname	: 	'桑桑',
		avatar		: 	'http://l.ruby-china.org/user/big_avatar/4491.jpg'
	};
	
	client.to_user = {
		name		: 	'zhangting',
		nickname	: 	'张婷',
		avatar		: 	'http://l.ruby-china.org/user/big_avatar/8904.jpg'
	};
	
	faye_seting(client);
	faye_subscribe(client);
	
	return client;
}

/**
 * 群组聊天
 */ 
function chat_with_channel(url,channel,message_selector){
	
}

function faye_seting(client){
	client.addExtension({
		incoming: client.incoming,
		outgoing: client.outgoing
	}); 
}

function faye_subscribe(client){
	client.subscribe('/'+client.channel, function(message) {
		// handle message
	    for(var key in message){
		    if(key == 'data'){		 
				console.log(message); 
		    	var str = $('#income_msg').html() + "<br><div style='float:right;background-color:red'>"+get_current_date_string() + 
						':' + message['data']['text'] +
						'</div><br>';

			     $('#income_msg').html('').append(str);
				 var i = $('#income_msg').height();
				 
				 $('#income_msg').scrollTop(i);
		    }else{
		  	  //TODO:
		    }
	  	}
	});	
}
