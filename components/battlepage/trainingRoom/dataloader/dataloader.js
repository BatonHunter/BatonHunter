

var thingsToKnowData =
[{
    "id":1,
    "title":"111",
    "content":"111-content",
    "imagePath": "1.jpg"
},
{
    "id":2,
    "title":"222",
    "content":"222-content",
    "imagePath": "2.jpg"
},
{
    "id":3,
    "title":"333",
    "content":"333-content",
    "imagePath": "3.jpg"
}
];

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
},

    (function(){
        

       function getstatus(isSuccess){
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
		}
          };

	}	    

	

	return {
	    loadTutorials:function(dom_id,user){
                
		var tutorialsCount = thingsToKnowData.lenght;
		var tutorialsHtml = "";
		for (var i=0;i<turtialsCount;i++){
                  var tutorisalStatus = getstatus(thingsStatus[i].status)
		    
                  tutorialsHtml += "<li class='list-group-item'>";
	          turtialshHtml += "<span class='badge'" + tutorisalStatus +"</span>"; 
		  tutorialsHtml += tutorialTitle;
		  tutorialsHtml += "</li>";
		}
		$(dom_id).empty();
		$(dom_id).append(tutorialsHtml);	        
	    }

	 }


    })()
