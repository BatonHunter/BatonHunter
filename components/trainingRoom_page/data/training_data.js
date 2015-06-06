
var training_datas= (function(questions){
    var datas = [{
	"id":1,
    "type":"imagePlusText",
    "title":"錢是甚麼?",
    "content":"錢是一種可以「交換」的價值。在沒有錢的概念之前,人們只能用「以物易物」來交換價值。從古至今,錢可以用各種形式存在,比如說,黃金。重點是,只要「大家都同意」這是可以交換的價值,那這東西就可以當作錢來使用。現在的世界上,貨幣(像美金)就是錢,是以國家的「信用」為擔保,讓大家都能同意那是可以拿來交換的價值。",
    "imagePath": "./components/trainingRoom_page/data/img/cat.gif"
    },
    {
	"id":2,
    "type":"text",
    "title":"資本主義是啥?",
    "content":"錢是投資中必須要知道的一種交換價值,而投資中必須要知道的一種根本概念是資本主義,這是一種基本假設。資本主義(Capitalism),特色是私人擁有資本財產(生產工具),且投資活動是由個人決策左右,而非由國家所控制,經濟行為則以尋求利潤為目標。主要經濟模式包括自由的資本和雇傭流動、市場競爭、以及價格機制的運行。一般普遍認為資本主義在西方世界的封建制度崩壞之後成為了最主要的經濟模式。",
    "imagePath": "./components/trainingRoom_page/data/img/littlepony.png"
    },
    {
	"id":3,
    "type":"imagePlusText",
    "title":"企業是甚麼?",
    "content":"在資本主義的經濟中,企業是最重要的一種組織形式。企業,主要指獨立的盈利性組織,並可進一步分為公司和非公司企業,公司有各種形式的存在,具有法律上的權利。企業是現代經濟最重要的元素,有了企業,才有正式的組織,分工,也能更有效率的讓經濟運作。目前我們所知道的幾乎所有商品與服務,都是企業這樣的組織型態所生產出來的。",
    "imagePath":  "./components/trainingRoom_page/data/img/girl.jpg"
    },
    {
	"id":4,
	"type":"text",
	"title":"商業模式是甚麼?",
	"content":"企業要賺錢,就要有商業模式。商業模式就是企業通過什麼途徑或方式來賺錢? 商業模式是一種概念性系統,包含了一系列要素及其關係,用以闡明某種商業邏輯。它描述了公司所能提供的價值、客戶、合作伙伴網路和關係資本等藉以實現商業過程,這一過程可產生企業的營利收入。"

    },
    {
	"id":5,
	"type":"imagePlusText",
	"title":"財務報表:資產負債表 (Balance Sheet)",
	"content":"要了解企業的狀況,一定要從財務數字來看,財務三大表其中之一,是資產負債表(Balance Sheet)。功能是讓所有閱讀者於瞭解企業在某個時間點上其擁有的資產,負債的狀況。 利用會計平衡原則,將交易科目分為“資產”和“負債及股東權益”兩大區塊,以特定日期的靜態企業情況為基準,濃縮成一張報表。",
	"imagePath": "5.jpg"
    },
    {
	"id":6,
	"type":"text",
	"title":"財務報表:損益表 (Income Statement)",
	"content":"要了解企業的狀況,一定要從財務數字來看,財務三大表其中之一,損益表,目的是讓讀者了解一間企業在特定時間範圍內,有沒有實現營利,還是虧損的一種財務報表。主要元素有營收(所有的收入),營業利益(營收-營業成本),稅前淨利(營業利益+業外收益),稅後淨利(稅前淨利-稅)。每股盈餘(每一股平均賺到多少錢)"
    },
    {
	"id":7,
	"type":"imagePlusText",
	"title":"財務報表:現金流量表 (Cash Flow Statement)",
	"content":"要了解企業的狀況,一定要從財務數字來看,財務三大表其中之一,現金流量表,反映企業在一定會計期間現金和現金等價物流入和流出,主要功能是呈現企業短期內現金流動的狀況,這可反應償債的能力。 現金流量表所表達的是在一固定期間(通常是每季或每年)內,一家企業或機構的現金 (包含銀行存款) 增滅變動的情況。主要是想反映出資產負債表中各個項目對現金流量的影響,並根據其用途劃分為經營、投資及融資三個活動分類。",
	"imagePath": "7.jpg"
    },
    {
	"id":8,
	"type":"imagePlusText",
	"title":"債的效用",
	"content":"現代企業營運,重要基礎財務概念就是借債,借債就是以某些事物抵押,去借錢來用。舉債是企業充實營運資金的重要方式。企業可以藉由借債,取得資金,去作各種投資,讓企業可以營運。借債與槓桿是同步的,企業負債佔總資產越多,槓桿比率就越高。",
	"imagePath": "8.jpg"
    },
    {
	"id":9,
	"type":"imagePlusText",
	"title":"槓桿的效用",
	"content":"現代企業營運的重要工具就是借債,使用債務就是使用槓桿,其意義就是 用一塊錢(淨值),可以借到多少錢(負債)來用。如果企業負債是5,淨值是1,那槓桿就是負債/淨值=5/1=5倍。 槓桿會放大所有的效果,若槓桿比率是5倍,那企業賺錢可以多五倍,但賠錢也是賠五倍。",
	"imagePath": "9.jpg"
    },
    {
	"id":10,
	"type":"imagePlusText",
	"title":"投資與賭博的差別",
	"content":"投資,是理性的,是對想要購買的資產進行研究,憑藉分析,並且了解其內容與發展前景,然後才買進。賭博是感性的,是憑感覺,甚至是謠言,而決定買進或是賣出一項資產。",
	"imagePath": "http://animalia-life.com/data_images/dog/dog1.jpg"
    }];

return{
    getDatas:function(){
	return datas;
    },
    getData:function(id){
       var datasCount = datas.length;
       var training_data_question = questions.getQuestions(id); 
       for (var i = 0; i < datasCount; i++) {
       	    if(datas[i].id === id){
              datas[i]["questions"] = training_data_question;
                return datas[i];
	    }
       }
       return null;
    }
};
})(questions);

