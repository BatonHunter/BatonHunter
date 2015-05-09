var training_datas= (function(){
    var datas = [{
	"id":1,
    "type":"imagePlusText",
    "title":"111",
    "content":"空姐必須知道的一件事",
    "imagePath": "1.jpg"
    },
    {
	"id":2,
    "type":"text",
    "title":"222",     
    "content":"222-content"
    },
    {
	"id":3,
    "type":"imagePlusText",
    "title":"333",
    "content":"333-content",
    "imagePath": "3.jpg"
    },
    {
	"id":4,
	"type":"text",
	"title":"444",
	"content":"444-content"

    },
    {
	"id":5,
	"type":"imagePlusText",
	"title":"555",
	"content":"555-content",
	"imagePath": "5.jpg"
    },
    {
	"id":6,
	"type":"text",
	"title":"666",
	"content":"666-content"

    },
    {
	"id":7,
	"type":"imagePlusText",
	"title":"777",             
	"content":"777-content",
	"imagePath": "7.jpg"
    },
    {
	"id":8,
	"type":"imagePlusText",
	"title":"888",
	"content":"888-content",
	"imagePath": "8.jpg"
    },
    {
	"id":9,
	"type":"imagePlusText",
	"title":"999",		
	"content":"999-content",
	"imagePath": "9.jpg"
    },
    {
	"id":10,
	"type":"imagePlusText",
	"title":"10",
	"content":"10-content",
	"imagePath": "10.jpg"
    }];

return{
    getDatas:function(){
	return data;
    },
    getData:function(id){       
       var datasCount = data.length;
       for (var i = 0; i < datasCount; i++) {
       	    if(datas[i].id === id){
                return data[i];
	    }
       }
       return null;
    }
};
})();
