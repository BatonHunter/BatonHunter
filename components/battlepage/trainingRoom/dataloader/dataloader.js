var DataLoader=(function(){	
	var current_data;

	var fakeData;
	var fakeContent
	return {
		loadData:function(dom_id){
			//$(dom_id).find('p')empty();


			$("#"+dom_id).find('p').html("helloworld");
			
			current_data=training_data.getData();

			//fake data

			fakeData=current_data[0];

			//
			switch(fakeData.type){
				case 'imagePlusText':
					fakeContent=fakeData.content;
					$("#"+dom_id).find('p').html(fakeContent);
				break;

				case 'text':
				break;

				default:
				break;
			}
		}
	}
})();