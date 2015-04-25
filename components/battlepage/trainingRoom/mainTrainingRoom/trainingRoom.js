

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



	return {
	    loadTutorials:function(dom_id){

		var tutorialsCount = thingsToKnowData.lenght;
		var tutorialsHtml = "";
		for (var i=0;i<=turtialsCount;i++){
                  tutorialsHtml += "<li class='list-group-item'>";
	          turtialshHtml += "<span class='badge'" + isSuccess +"</span>"; 
		  tutorialsHtml += tutorialTitle;
		  tutorialsHtml += "</li>";
		}
		$(dom_id).empty();
		$(dom_id).append(tutorialsHtml);	        
	    }

	 }


    })()
