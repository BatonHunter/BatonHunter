
var training_datas= (function(serverConfig){
	 var datas;

	return{
    getDatas:function(jobId){
		var _dfr,
			url ;

		_dfr = $.Deferred();
		
		//目前之有jobId為１才有資料
	 	jobId = '1';	
		url = serverConfig.getJobTasks(jobId);
	    $.getJSON(url,function(data){
			datas = data;
			return _dfr.resolve(data);
		})
	    return _dfr.promise();	
    },
    getData:function(taskId){
       var datasCount = datas.length;
       for (var i = 0; i < datasCount; i++) {
       	    if(datas[i].taskId === taskId ){
                return datas[i];
	    }
       }
       return null;
    }
};
})(ServerConfig);
