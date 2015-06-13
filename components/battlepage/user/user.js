var user=(function(){
	
	
    var userName="";
    var jobs=[];
    var currentjob={};

    function fakeDataInit(){
    	userName="Ian";

    };

    return{
	getInstance:function(){
		if(!instance){
			instance=fakeDataInitnit();
		}
		return instance;

	},
    	getName:function(){
		return userName;
	},
	getCurrentJob:function(){
	    	return currentJob;
	},
        
    };

})();

