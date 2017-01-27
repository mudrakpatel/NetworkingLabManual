loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 769;
var STAGE_HEIGHT = 390;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        //dropNormalSkinImage:"../../../common/images/drop_normal.png",
		dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_i_DS",
            x:19,
            y:217,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[0,1,0,1],
            textAlign:"center"},
			{compId:"ID_c_DS",
            x:90,
			y:217,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[1,0,0,1],
            textAlign:"center"},
			{compId:"ID_f_DS",
			x:161,
            y:217,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[1,0,0,1],
            textAlign:"center"},
			{compId:"ID_e_DS",
            x:19,
            y:270.5,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[1,0,0,1],
            textAlign:"center"},
			{compId:"ID_h_DS",
			x:90,
			y:270.5,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[0,1,0,1],
            textAlign:"center"},
			{compId:"ID_g_DS",
			x:161,
            y:270.5,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[0,1,0,1],
            textAlign:"center"},
			{compId:"ID_b_DS",
			x:19,
            y:324,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[1,0,0,1],
            textAlign:"center"},
			{compId:"ID_d_DS",
			x:90,
            y:324,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[1,0,0,1],
            textAlign:"center"},
			{compId:"ID_a_DS",
			x:161,
            y:324,
            width:45,
            height:30,
            size:11,
			color:"#393536",
			groups:[1,0,0,1],
            textAlign:"center"}];


    var dropBox = [
		/*Application*/
		{compId:"w1_dt",
        x:318,
        y:80,
        width:45,
        height:30,
        size:11,
        answer:1,
        textAlign:"center"},
		{compId:"w2_dt",
		x:386,
        y:80,
        width:45,
        height:30,
        size:11,
        answer:1,
        textAlign:"center"},
		{compId:"w3_dt",
		x:453,
        y:80,
        width:45,
        height:30,
        size:11,
        answer:1,
        textAlign:"center"},
		{compId:"w4_dt",
		x:318,
        y:116,
        width:45,
        height:30,
        size:11,
        answer:1,
        textAlign:"center"},
		{compId:"w5_dt",
		x:386,
        y:116,
        width:45,
        height:30,
        size:11,
        answer:1,
        textAlign:"center"},
		{compId:"w6_dt",
		x:453,
        y:116,
        width:45,
        height:30,
        size:11,
        answer:1,
        textAlign:"center"},
		/*Presentation*/
		{compId:"x1_dt",
        x:318,
        y:183,
        width:45,
        height:30,
        size:11,
        answer:2,
        textAlign:"center"},
		{compId:"x2_dt",
		x:386,
        y:183,
        width:45,
        height:30,
        size:11,
        answer:2,
        textAlign:"center"},
		{compId:"x3_dt",
		x:453,
        y:183,
        width:45,
        height:30,
        size:11,
        answer:2,
        textAlign:"center"},
		{compId:"x4_dt",
		x:318,
        y:218,
        width:45,
        height:30,
        size:11,
        answer:2,
        textAlign:"center"},
		{compId:"x5_dt",
		x:386,
        y:218,
        width:45,
        height:30,
        size:11,
        answer:2,
        textAlign:"center"},
		{compId:"x6_dt",
		x:453,
        y:218,
        width:45,
        height:30,
        size:11,
        answer:2,
        textAlign:"center"},
		/*Session*/
		{compId:"y1_dt",
        x:318,
        y:286,
        width:45,
        height:30,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"y2_dt",
		x:386,
        y:286,
        width:45,
        height:30,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"y3_dt",
		x:453,
        y:286,
        width:45,
        height:30,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"y4_dt",
		x:318,
        y:322,
        width:45,
        height:30,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"y5_dt",
		x:386,
        y:322,
        width:45,
        height:30,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"y6_dt",
		x:453,
        y:322,
        width:45,
        height:30,
        size:11,
        answer:3,
        textAlign:"center"},
		/*Application2*/
		{compId:"v1_dt",
        x:582,
        y:132,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v2_dt",
		x:650,
        y:132,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v3_dt",
		x:718,
        y:132,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v4_dt",
		x:582,
        y:192,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v5_dt",
		x:650,
        y:192,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v6_dt",
		x:718,
        y:192,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v7_dt",
		x:582,
        y:252,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v8_dt",
		x:650,
        y:252,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"v9_dt",
		x:718,
        y:252,
        width:45,
        height:30,
        size:11,
        answer:4,
        textAlign:"center"}]
		
    	
	var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_texts = [{compId:"ID_inst",
							x:2,
							y:1,
							width:250,
							height:17,
                            size:11,
						textAlign:"left"},
							
						{compId:"ID_osi_header",
							x:296,
							y:33,
							width:210,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_OSInum05",
							x:305,
							y:266,
							width:13,
							height:17,
							size:16,
							textAlign:"left",
							color:"#00918E"},
							{compId:"ID_OSInum06",
							x:305,
							y:162,
							width:13,
							height:17,
							size:16,
							textAlign:"left",
							color:"#00918E"},
							{compId:"ID_OSInum07",
							x:305,
							y:57.6,
							width:13,
							height:17,
							size:16,
							textAlign:"left",
							color:"#00918E"},
							{compId:"ID_osi_txt07",
							x:373,
							y:57.6,
							width:107,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_osi_txt06",
							x:369,
							y:163,
							width:107,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_osi_txt05",
							x:385,
							y:266,
							width:107,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_tcpip_header",
							x:561,
							y:33,
							width:210,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_tcpip_txt04",
							x:561,
							y:61,
							width:210,
							height:17,
							size:12,
							textAlign:"center"},
						];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [
	{compId:"ID_image03",
        name:"4.1.1.8C.png",
        x:296,
        y:51.2,
        width:473,
        height:308.1,
        size:12,
        textAlign:"left"},	
	{compId:"ID_image01",
        name:"4.1.1.8A.png",
        x:561,
        y:51,
        width:210,
        height:309,
        size:12,
        textAlign:"left"},
		{compId:"ID_image02",
        name:"4.1.1.8B.png",
        x:296,
        y:51,
        width:210,
        height:101,
        size:12,
        textAlign:"left"},
		{compId:"ID_image02",
        name:"4.1.1.8B.png",
        x:296,
        y:155.5,
        width:210,
        height:101,
        size:12,
        textAlign:"left"},
		{compId:"ID_image02",
        name:"4.1.1.8B.png",
        x:296,
        y:259.5,
        width:210,
        height:101,
        size:12,
        textAlign:"left"}];
   var submit_buttons = [{compId:"ID_CHECK",
        x:600,
        y:370,
        width:81,
        height:21,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
          x:680,
          y:370,
			width:81,
			height:21,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}];

    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:45,
        y:130,
        width:172,
        height:10,
        size:12,
        image:"../../../common/images/feedback2.png",
        textAlign:"left"}];
    
	
   var instobj = {ansType:"one-many-group", clue:1};
	
	return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_texts,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
		instobj:instobj
    };

}



