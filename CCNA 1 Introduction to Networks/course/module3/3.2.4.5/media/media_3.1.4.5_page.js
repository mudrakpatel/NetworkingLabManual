loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 748;
var STAGE_HEIGHT = 400;
var TYPE = "MULTI_BAR";
var isDD = true;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [							
		];
	
	var slide_1_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/new-drag.png",
        overSkinImage:"../../../common/images/new-drag.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_osi_txt07",
		x:47,
        y:84,
        width:152,
        height:30,
        size:11,
        textAlign:"left"}, 
		{compId:"ID_osi_txt06",
		x:47,
        y:125,
        width:152,
        height:30,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt05",
		x:47,
        y:166,
        width:152,
        height:30,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt04",
		x:47,
        y:207,
        width:152,
        height:30,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt03",
		x:47,
        y:248,
        width:152,
        height:30,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt02",
		x:47,
        y:289,
        width:152,
        height:30,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt01",
		x:47,
        y:330,
        width:152,
        height:30,
        size:11,
        textAlign:"center"}/**/];
    var dropBox = [{compId:"ID_drop01",
        x:235.45,
        y:87.40,
        width:152,
        height:30,
        size:11,
		answer:3,
        textAlign:"center"},
		
		{compId:"ID_drop02",
        x:235.45,
        y:135.40,
        width:152,
        height:30,
		answer:6,
        size:11,
        textAlign:"center"},
		
		{compId:"ID_drop03",
        x:235.45,
        y:183.40,
        width:152,
        height:30,
		answer:2,
        size:11,
        textAlign:"center"},
		
		{compId:"ID_drop04",
        x:235.45,
        y:231.40,
        width:152,
        height:30,
		answer:5,
        size:11,
        textAlign:"center"},
		
		{compId:"ID_drop05",
        x:235.45,
        y:279.40,
        width:152,
        height:30,
        size:11,
		answer:7,
        textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_1_texts = [{compId:"ID_OSInum07",
        x:26.10,
        y:91.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_OSInum06",
        x:26.10,
        y:131.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_OSInum05",
        x:26.10,
        y:171.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_OSInum04",
        x:26.10,
        y:213.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_OSInum03",
        x:26.10,
        y:253.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_OSInum02",
        x:26.10,
        y:295.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_OSInum01",
        x:26.10,
        y:335.85,
        width:18.95,
        height:17,
        size:14,
      	color:"#00918E",
        textAlign:"center"},
		{compId:"ID_osi_txt07",
        x:88.10,
        y:93,
        width:18.95,
        height:17,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt06",
        x:88.10,
        y:134,
        width:18.95,
        height:17,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt05",
        x:93.10,
        y:175,
        width:18.95,
        height:17,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt04",
        x:88.10,
        y:216,
        width:18.95,
        height:17,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt03",
        x:93.10,
        y:257,
        width:18.95,
        height:17,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt02",
        x:88.10,
        y:298,
        width:50,
        height:17,
        size:11,
        textAlign:"center"},
		{compId:"ID_osi_txt01",
        x:88.10,
        y:339,
        width:19,
        height:17,
        size:11,
        textAlign:"center"},

		{compId:"ID_target1_header",
        x:395.50,
        y:62,
        width:300,
        height:17,
        size:13,
        textAlign:"left"},

		{compId:"ID_s1_q01",
        x:395.50,
        y:87.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s1_q02",
        x:395.50,
        y:135.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s1_q03",
        x:395.50,
        y:183.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s1_q04",
        x:395.50,
        y:231.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s1_q05",
        x:395.50,
        y:279.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s1_inst",
        x:22,
        y:2,
        width:490,
        height:17,
        size:11,
        textAlign:"left"},
		{compId:"ID_osi_header",
        x:22,
        y:62,
        width:176,
        height:17,
        size:13,
        textAlign:"center"}];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_1_images = [{compId:"ID_image01",
        name:"background.png",
        x:205,
        y:82,
        width:510,
        height:239,
        size:11,
        textAlign:"left"},
		{compId:"ID_image02",
        name:"textbox.png",
        x:16,
        y:76.50,
        width:194,
        height:49,
        size:11,
        textAlign:"left"},
		{compId:"ID_image03",
		name:"textbox.png",
		x:16,
        y:117.50,
        width:194,
        height:49,
        size:11,
		textAlign:"center"},
		{compId:"ID_image04",
		name:"textbox.png",
		x:16,
        y:158.50,
        width:194,
        height:49,
        size:11,
       textAlign:"center"},
		{compId:"ID_image05",
		name:"textbox.png",
		x:16,
        y:199.50,
        width:194,
        height:49,
        size:11,
       textAlign:"center"},
		{compId:"ID_image06",
		name:"textbox.png",
		x:16,
        y:240.50,
        width:194,
        height:49,
        size:11,
       textAlign:"center"},
	   {compId:"ID_image07",
		name:"textbox.png",
		x:16,
        y:281.50,
        width:194,
        height:49,
        size:11,
        textAlign:"center"},
		{compId:"ID_image08",
		name:"textbox.png",
		x:16,
        y:322.50,
        width:194,
        height:49,
        size:11,
        textAlign:"center"}];
		
    var submit_buttons = [{compId:"ID_s1_CHECK",
        x:570,
        y:365,
        width:80,
		height:23,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_s1_RESET",
             x:650,
			 y:365,
             width:80,
			 height:23,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:15,
        y:117,
        width:130,
        height:23,
        size:11,
        image:"../../../common/images/feedback-small.png",
        textAlign:"center"}];
    var instobj = {ansType:""};
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							textObject:commonTexts,
							buttonObject:buttonObject,
							slideObject:slide_1_texts,
							slideImages:slide_1_images,
							dropObject:dropObject,
							submitObject:submit_buttons,
							feedbackObj:feedbackObj,
                            instobj:instobj
    };
	
	
	
	
	/* Slide 2 */
	var slide_2_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_app2_DS",
		x:24,
        y:85,
        width:174,
		groups:[0,1,0,0,1],
        height:30,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_tra2_DS",
		x:24,
        y:125,
        width:174,
		groups:[1,0,0,0,0],
        height:30,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_int_DS",
		x:24,
        y:167,
        width:174,
		groups:[0,0,0,1,0],
        height:30,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_net2_DS",
		x:24,
        y:208,
        width:174,
		groups:[0,0,1,0,0],
        height:30,
        size:11,
        textAlign:"left"}]
   
   var dropBox = [{compId:"ID_drop01",
        x:235.45,
        y:87.40,
        width:174,
        height:30,
        size:11,
		answer:3,
        textAlign:"center"},
		
		{compId:"ID_drop02",
        x:235.45,
        y:135.40,
        width:174,
        height:30,
		answer:2,
        size:11,
        textAlign:"center"},
		
		{compId:"ID_drop03",
        x:235.45,
        y:183.40,
        width:174,
        height:30,
		answer:1,
        size:11,
        textAlign:"center"},
		
		{compId:"ID_drop04",
        x:235.45,
        y:231.40,
        width:174,
        height:30,
		answer:4,
        size:11,
        textAlign:"center"},
		
		{compId:"ID_drop05",
        x:235.45,
        y:279.40,
        width:174,
        height:30,
        size:11,
		answer:5,
        textAlign:"center"}];
		
    	
	var buttonObject = {style:buttonStyle,
        buttons:buttons};

 
    var slide_2_texts = [{compId:"ID_s1_q02",
        x:417.50,
        y:87.40,
        width:300,
        height:17,
        size:11,
		color:"#000000",
        textAlign:"left"},
		
		{compId:"ID_s2_q01",
        x:417.50,
        y:135.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s2_q05",
        x:417.50,
        y:183.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s2_q04",
        x:417.50,
        y:231.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_s2_q03",
        x:417.50,
        y:279.40,
        width:300,
        height:17,
        size:11,
        textAlign:"left"},		
		{compId:"ID_s2_inst",
        x:22,
        y:2,
        width:495,
        height:17,
        size:11,
        textAlign:"left"},
		{compId:"ID_tcpip_header",
        x:22,
        y:62,
        width:176,
        height:17,
        size:13,
        textAlign:"center"},
		{compId:"ID_target2_header",
        x:369,
        y:62,
        width:247,
        height:17,
        size:13,
        textAlign:"center"}];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_2_images = [{compId:"ID_image01",
        name:"background.png",
        x:205,
        y:82,
        width:510,
        height:239,
        size:11,
        textAlign:"left"},
		
		{compId:"ID_image02",
        name:"box2.png",
        x:16,
        y:76.50,
		width:194,
        height:50,
        size:11,
        textAlign:"left"},
		{compId:"ID_image03",
        name:"box2.png",
        x:16,
        y:117.50,
        width:194,
        height:50,
        size:11,
        textAlign:"left"},
		{compId:"ID_image04",
        name:"box2.png",
        x:16,
        y:158.50,
        width:194,
        height:50,
        size:11,
        textAlign:"left"},
		{compId:"ID_image04",
        name:"box2.png",
        x:16,
        y:199.50,
        width:194,
        height:50,
        size:11,
        textAlign:"left"}];
		
		
   var submit_buttons = [{compId:"ID_s1_CHECK",
        x:570,
        y:365,
        width:80,
		height:23,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
		
        {compId:"ID_s1_RESET",
             x:650,
			 y:365,
             width:80,
			 height:23,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}];
			
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:15,
        y:117,
        width:130,
        height:23,
        size:11,
        image:"../../../common/images/feedback-small.png",
        textAlign:"center"}];
	
    
	
    var instobj = {ansType:"one-many-group"};
	
 var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							textObject:commonTexts,
							buttonObject:buttonObject,
							slideObject:slide_2_texts,
							slideImages:slide_2_images,
							dropObject:dropObject,
							submitObject:submit_buttons,
							feedbackObj:feedbackObj,
                            instobj:instobj
    };
			
	
															
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides,
			buttonBarPos:{x:675}};
	
}



