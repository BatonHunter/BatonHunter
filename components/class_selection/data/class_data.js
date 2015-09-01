var ClassData = (function() {
	var result;

	var getGameDataFromSever = function(prefix){
		var url = "https://baton-huner-restful-server.herokuapp.com/" + prefix;
		$.ajax({
            url: url,
            method: 'GET',
            async: false,
            crossDomain: true,
            dataType: 'json',
            error: function(response) {
                console.log('something went wrong');
            },
            success: function(responseData, textStatus, jqXHR) {
                console.log('Successfully');
            }
            }).done(function(data){
            	result = data;
            });
	}

	var getResult = function(){
		var arr = [];
		$.each(result, function(index, item){
			arr.push(item.title);
		});
		return arr;
	}
		
	var getCategory = function() {
		getGameDataFromSever("categories");
		return getResult();
	}
	
	var getSubCategory = function(category_name) {
		getGameDataFromSever("categories/" + category_name + "/subcategory");
		return getResult();
	}
	
	var getClass = function(subCategory_name) {
		getGameDataFromSever("categories/經營管理/subcategory/" + subCategory_name + "/job");
		return result;
	}
	
	return {
		getCategory: getCategory,
		getSubCategory: getSubCategory,
		getClass: getClass
	}
})();
