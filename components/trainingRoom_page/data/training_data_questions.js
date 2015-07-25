var questions = (function(){
     var datas = [
     {
       "id":1,
       "trainingId":1,
       "type" : "tf",
       "title":"錢是甚麼?",
       "content":"錢是一種可以拿來「賭博」的價值。",
       "hint":"NO~~~~",
       "ans" : "No"
     },     
     {
       "id":2,
       "trainingId":1,
       "type" : "tf",
       "title":"錢是甚麼?",
       "content":"只要大家都同意,甚麼事物都可以拿來當錢使用。",
       "hint":"NO~~~~",
       "ans" : "Yes"
     },
    {

       "id":3,
       "trainingId":1,
       "type" : "ch",
       "title":"錢是甚麼?",
       "content":"在沒有錢的觀念以前,人們可能用甚麼方式來交換價值?",
       "hint":"NO~~~~",
       "anslist":["以物易物","以暴制暴","以牙還牙","契約合同"],
       "ans" : ["1"]
     }  
    ]

   return {
      getQuestions:function(id){
         var count = datas.length;
         var result = [];
         for (var i=0; i<count ;i++){
            if(datas[i].trainingId == id){
              result.push(datas[i]);
           }
         }
         return result;             
      }
   }


})()
