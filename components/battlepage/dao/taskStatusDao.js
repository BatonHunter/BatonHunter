
/* ServerConfig => config/server_config.js
 * profile => personalpage/data/profile_data.js
 */

var taskComplete =(function(serverConfig,profile){
	
	function SendCompleteTask(){
		var email = profile.getEmail(),
			para=getPara.get(),
			jobId = para.jobId,
			taskId = para.taskId,
			_dfr ;
		var url = serverConfig.putTaskCompleteUrl(email,jobId,taskId);
		 
		_dfr = $.Deferred();

		$.ajax({
			url:url,
			method:'PUT'
		}).done(function(rs){
			console.log(rs);
			if(rs){
				return _dfr.resolve();
			}
		});

	    return _dfr.promise();	
	}

	return {
		send:SendCompleteTask
	}

})(ServerConfig,Profile);
