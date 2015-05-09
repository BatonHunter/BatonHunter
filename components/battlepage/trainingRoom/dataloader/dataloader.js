


var thingsStatus = [
{      
    "id":1,
	"status":true
},
{      
    "id":2,
    "status":false
},
{      
    "id":3,
    "status":false
}];

   var DataLoader = (function(){
        
       function getstatusString(isSuccess){
         var result ="";
	   if(isSuccess){
              result="Complete";
	  }
	   return result;
       }	 

        function getUserTutorialStatus(tutorialId,user){
          var user_tutorials = user.getTutorialsStatus;

          for (var i = 0; i < user_tutorials.lenght; i++) {
          	if (tutorialId == user_tutorials[i].Id){
                    var isSuccess = user_tutorials[i].status; 
		    return isSuccess; 
		}
          }
          return null;
	}	    

	

	return {
	    loadTutorials:function(dom_id,user){
                var tutorials = training_data.getDatas();
		var tutorialsCount = tutorials.lenght;
		var tutorialsHtml = "";

		    
		for (var i=0;i<turtialsCount;i++){
                  var tutorialStatus = getUserTutorialStatus(tutorials[i].id,user);
		  var tutorialStatusString = getstatusString(tutorisalStatus);
		  var tutorialTitle = tutorials[i].title; 
		     
                  tutorialsHtml += "<li class='list-group-item'>";
	          turtialshHtml += "<span class='badge'" + tutorialStatusString +"</span>"; 
		  tutorialsHtml += tutorialTitle;
		  tutorialsHtml += "</li>";
		}
		$(dom_id).empty();
		$(dom_id).append(tutorialsHtml);	        
	    }

	 };


    })();
