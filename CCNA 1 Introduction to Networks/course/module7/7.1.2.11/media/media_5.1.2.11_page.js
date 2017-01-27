loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 770;
var STAGE_HEIGHT = 388;

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

    var buttons = [{compId:"ID_b02_DS",
						x:4.5,
						y:85.4,
						width:167.95,
						height:36,
						size:11,
						tag:2,
						textAlign:"center"},
						
					{compId:"ID_b05_DS",
						x:4.5,
						y:142.95,
						width:167.95,
						height:36,
						size:11,
						tag:2,
						textAlign:"center"},
						
					{compId:"ID_b03_DS",
						x:4.5,
						y:200.5,
						width:167.95,
						height:36,
						size:11,
						tag:2,
						textAlign:"center"},
						
					{compId:"ID_a03_DS",
						x:4.5,
						y:258.05,
						width:167.95,
						height:36,
						size:11,
						tag:1,
						textAlign:"center"},
						
					{compId:"ID_a05_DS",
						x:4.5,
						y:315.6,
						width:167.95,
						height:36,
						size:11,	
						tag:1,
						textAlign:"center"},
						
					{compId:"ID_b01_DS",
						x:178,
						y:85.4,
						width:167.95,
						height:36,
						size:11,
						tag:2,
						textAlign:"center"},
						
					{compId:"ID_a02_DS",
						x:178,
						y:142.95,
						width:167.95,
						height:36,
						size:11,	
						tag:1,
						textAlign:"center"},
						
					{compId:"ID_b04_DS",
						x:178,
						y:200.5,
						width:167.95,
						height:36,
						size:11,
						tag:2,
						textAlign:"center"},
						
					{compId:"ID_a04_DS",
						x:178,
						y:258.05,
						width:167.95,
						height:36,
						size:11,
						tag:1,
						textAlign:"center"},
						
					{compId:"ID_a01_DS",
						x:178,
						y:315.6,
						width:167.95,
						height:36,
						size:11,
						tag:1,
						textAlign:"center"}];
						

    var dropBox = [{compId:"a1_dt",
							x:370.5,
							y:85.4,
							width:167.95,
							height:36,
							size:11,
							answer:1,
							textAlign:"center"},
						
					{compId:"a2_dt",
							x:370.5,
							y:142.95,
							width:167.95,
							height:36,
							size:11,
							answer:1,
							textAlign:"center"},
						
					{compId:"a3_dt",
							x:370.5,
							y:200.5,
							width:167.95,
							height:36,
							size:11,
							answer:1,
							textAlign:"center"},
						
					{compId:"a4_dt",
							x:370.5,
							y:256.2,
							width:167.95,
							height:36,
							size:11,
							answer:1,
							textAlign:"center"},
						
					{compId:"a5_dt",
							x:370.5,
							y:315.6,
							width:167.95,
							height:36,
							size:11,
							answer:1,
							textAlign:"center"},
				/* Second col */
					{compId:"b1_dt",
							x:584.05,
							y:85.4,
							width:167.95,
							height:36,
							size:11,
							answer:2,
							textAlign:"center"},
						
					{compId:"b2_dt",
							x:584.05,
							y:142.95,
							width:167.95,
							height:36,
							size:11,
							answer:2,
							textAlign:"center"},
						
					{compId:"b3_dt",
							x:584.05,
							y:200.5,
							width:167.95,
							height:36,
							size:11,
							answer:2,
							textAlign:"center"},
						
					{compId:"b4_dt",
							x:584.05,
							y:256.2,
							width:167.95,
							height:36,
							size:11,
							answer:2,
							textAlign:"center"},
						
					{compId:"b5_dt",
							x:584.05,
							y:315.6,
							width:167.95,
							height:36,
							size:11,
							answer:2,
							textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [	];
    var slide_texts = [{compId:"ID_inst",
								x:2,
								y:1, 
								width:292,
								height:17,
								size:11,							
								textAlign:"left"},
							
						{compId:"ID_drop_header",
								x:369.65,
								y:32, 
								width:405.85,
								height:17,
								size:11,							
								textAlign:"center"},
							
						{compId:"ID_drag_header",
								x:4.35,
								y:79.85-15, 
								width:345.95,
								height:17,
								size:11,							
								textAlign:"center"},
		
						{compId:"ID_header01",
								x:409.2,
								y:54.85, 
								width:111.15,
								height:17,
								size:11,							
								textAlign:"center"},

						{compId:"ID_header02",
								x:622.6,
								y:54.85, 
								width:111.15,
								height:17,
								size:11,							
								textAlign:"center"}];

    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
							name:"bg.png",
							x:354.65,
							y:51,
							width:403.6,
							height:314.95,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_image02",
							name:"drag_bg.png",
							x:-1,
							y:98-20,
							width:351.95,
							height:282}];


   var submit_buttons = [{compId:"ID_CHECK",
								x:569,
								y:377,
								width:90,
								height:21,
								size:11,
								normalSkinImage:"../../../common/images/btn_normal.png",
								textAlign:"center"},
								
						{compId:"ID_RESET",
								x:684,
								y:377,
								width:90,
								height:21,
								size:11,
								normalSkinImage:"../../../common/images/btn_normal.png",
								textAlign:"center"}];
				
    var feedbackObj = [{compId:"ID_FEEDBACK",
							x:66,
							y:128,
							width:152,
							height:10,
							size:12,
							image:"../../../common/images/feedback.png",
							textAlign:"left"}];
							
    var instobj = {ansType:"many-one",clue:1};
    
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_texts,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
		instobj:instobj};

}


