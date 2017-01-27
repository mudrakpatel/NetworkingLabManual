loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	var commonImages = [];
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"7_2_3_4_A.png",
							 x:35,
							 y:55.95, 
							 width:393.05,
							 height:311.55,
							 type:""},
							 ];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt01",
							x:74-26,
							y:61.95, 
							width:180,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt02",
							x:258.95-30,
							y:61.95, 
							width:179,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt03",
							x:53,
							y:40.95, 
							width:104,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s1_txt04",
							bodyText:"FE80::1/64",
							x:229.95,
							y:145.15, 
							width:78,
							height:30,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt05",
							bodyText:"FE80::AAAA/64",
							x:26,
							y:265.15, 
							width:87,
							height:30,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt06",
							bodyText:"FE80::BBBB/64",
							x:114.95,
							y:368.55, 
							width:81.95,
							height:30,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt07",
							bodyText:"FE80::CCCC/64",
							x:272.95,
							y:368.55, 
							width:86,
							height:30,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt08",
							bodyText:"FE80::DDDD/64",
							x:339.95,
							y:252.15, 
							width:86,
							height:30,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt09",
							bodyText:"FE80::AAAA",
							x:74-26,
							y:74.4, 
							width:180,
							height:30,
							size:11,
							font:"bold",
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s1_txt10",
							bodyText:"FE80::DDDD",
							x:259.85-30,
							y:73.25, 
							width:180,
							height:32,
							size:11,
							font:"bold",
							textAlign:"center",
							expand:"right"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_2_3_4_B.png",
							 x:21.35,
							 y:130, 
							 width:403,
							 height:94,
							 type:""},
							 ];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt01",
							x:28.35,
							y:124.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s2_txt02",
							x:149.35,
							y:113.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s2_txt03",
							x:290.3,
							y:124.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s2_txt04",
							x:300.3+10,
							y:173.15-2, 
							width:104,
							height:20.4,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s2_txt05",
							x:297,
							y:209, 
							width:104,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s2_txt06",
							bodyText:"1111 1110 10",
							x:44-1-15,
							y:173.15-2, 
							width:100.3,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_s2_txt07",
							bodyText:"FE80::/10",
							x:55,
							y:215.15, 
							width:105,
							height:30,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s2_txt08",
							bodyText:"/64",
							x:248,
							y:147.05, 
							width:36,
							height:30,
							size:11,
							textAlign:"center",
							expand:"right"}
							];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	
							
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}