var ClassData = (function() {
	
	var
	category = [
		'人文及創作', '軍警公教', '民生服務', '經營管理', 
		'製造與加工', '電資與機械', '規劃與建造', '生醫農糧'
	], 
	subCategory = {
		'人文及創作': ['器物工藝', '戲劇電影', '文字創作'], /*人文及創作 */
		'軍警公教': ['小學教師', '中學教師', '大學教師'], /*軍警公教*/
		'民生服務': ['旅遊休閒', '人力仲介', '照護安養'], /*民生服務*/
		'經營管理': ['會計財務', '企劃管理', '行銷廣告'], /*經營管理*/
		'製造與加工': ['化學相關', '儀器醫材', '育樂用品'], /*製造與加工*/
		'電資與機械': ['電信通訊', '電腦週邊', '光學光電'], /*電資與機械*/
		'規劃與建造': ['土木工程', '裝潢設計', '不動產業'], /*規劃與建造*/
		'生醫農糧': ['護理復健', '農業生產', '畜養漁獲']  /*生醫農糧*/
	},
	className = {
		'器物工藝': ['職業1', '職業2', '職業3'],
		'戲劇電影': ['職業4', '職業5', '職業6'],
		'文字創作': ['職業7', '職業8', '職業9']
	};
	var  = function(){

	}

		
	var getCategory = function() {
		return category;
	}
	
	var getSubCategory = function(category_name) {
		
		if (!subCategory.hasOwnProperty(category_name)) {
			return [];
		}
		
		return subCategory[category_name];
	}
	
	var getClass = function(subCategory_name) {
		
		if (!className.hasOwnProperty(subCategory_name)) {
			return [];
		}
		
		return className[subCategory_name];
	}
	
	return {
		getCategory: getCategory,
		getSubCategory: getSubCategory,
		getClass: getClass
	}
})();