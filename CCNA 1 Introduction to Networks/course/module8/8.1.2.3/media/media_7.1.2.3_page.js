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
	var slide_1_images = [{name:"7_1_2_3.png",
							x:44.15,
							y:58.4, 
							width:305.75,
							height:223.4,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.254</b>",
							x:184.05,
							y:69.4, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.12</b>",
							x:258.15,
							y:124.95, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.11</b>",
							x:258.15,
							y:185.65+16, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.10</b>",
							x:186.05,
							y:254.75, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>G0/0<br/>10.1.1.1/24</b>",
							x:112.4,
							y:90.15+45, 
							width:64.3,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"s1Txt",
							bodyText:"<b>R2</b>",
							x:71.25,
							y:174.4, 
							width:21.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"left"}];	
							
	var graphic_1_slide = [{centerX:230,
							centerY:170, 
							radius:135,
							bgcolor:'#E6EBA8',
							borderColor:"#E6EBA8",
							lineWidth:2,
							type:"circle"}];
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:graphic_1_slide};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_1_2_3.png",
							x:44.15,
							y:58.4, 
							width:305.75,
							height:223.4,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_bubble01",
							x:344.95+15,
							y:254.7+12, 
							width:51,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt01",
							x:82.35,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt02",
							x:321.3-21,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.254</b>",
							x:184.05,
							y:69.4, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.12</b>",
							x:258.15,
							y:124.95, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.11</b>",
							x:258.15,
							y:185.65+16, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.10</b>",
							x:186.05,
							y:254.75, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>G0/0<br/>10.1.1.1</b>",
							x:112.4,
							y:90.15+45, 
							width:64.3,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"s2Txt",
							bodyText:"<b>R2</b>",
							x:71.25,
							y:174.4, 
							width:21.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>10<br/>00001010</b>",
							x:57.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:143.6+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:230.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>0<br/>00000000</b>",
							x:312.85+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"}];	
							
	var graphic_2_slide = [{centerX:230,
							centerY:170, 
							radius:135,
							bgcolor:'#E6EBA8',
							borderColor:"#E6EBA8",
							lineWidth:2,
							type:"circle"},
							{x:42.15,
							y:327.05, 
							width:259.85,
							height:63.55,
							color:"#E6EBA8",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:301.45,
							y:327.05, 
							width:79.7,
							height:63.55,
							color:"#98D3D1",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:370,
							y:310,
							length:30,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:260.75,
							y:307.1,
							length:30,
							thickness:3,
							color:"#F68026",
							rotation:40,
							type:"arrow"},
							];
							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphic_2_slide};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"7_1_2_3.png",
							x:44.15,
							y:58.4, 
							width:305.75,
							height:223.4,
							type:""}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s3_bubble01",
							x:344.95+15,
							y:254.7+12, 
							width:70,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s3_txt01",
							x:82.35,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s3_txt02",
							x:321.3-21,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"s3Txt",
							bodyText:"<b >10.1.1.254</b>",
							x:184.05,
							y:69.4, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b>10.1.1.12</b>",
							x:258.15,
							y:124.95, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b>10.1.1.11</b>",
							x:258.15,
							y:185.65+16, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b style='color:#F68026;'>10.1.1.10</b>",
							x:186.05,
							y:254.75, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b>G0/0<br/>10.1.1.1</b>",
							x:112.4,
							y:90.15+45, 
							width:64.3,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"s3Txt",
							bodyText:"<b>R2</b>",
							x:71.25,
							y:174.4, 
							width:21.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"s3Txt",
							bodyText:"<b style='letter-spacing:1px;'>10<br/>00001010</b>",
							x:57.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:143.6+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:230.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s3Txt",
							bodyText:"<b style='letter-spacing:1px;'>10<br/>00001010</b>",
							x:312.85+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"}];	
							
	var graphic_3_slide = [{centerX:230,
							centerY:170, 
							radius:135,
							bgcolor:'#E6EBA8',
							borderColor:"#E6EBA8",
							lineWidth:2,
							type:"circle"},
							{x:42.15,
							y:327.05, 
							width:259.85,
							height:63.55,
							color:"#E6EBA8",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:301.45,
							y:327.05, 
							width:79.7,
							height:63.55,
							color:"#98D3D1",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:370,
							y:310,
							length:30,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:245.75,
							y:285.1,
							length:49,
							thickness:3,
							color:"#F68026",
							rotation:60,
							type:"arrow"},
							];
							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts,
							graphics:graphic_3_slide};
							
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"7_1_2_3.png",
							x:44.15,
							y:58.4, 
							width:305.75,
							height:223.4,
							type:""}];								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s4_bubble01",
							x:344.95+15,
							y:254.7+12, 
							width:70,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s4_txt01",
							x:82.35,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s4_txt02",
							x:321.3-21,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"s4Txt",
							bodyText:"<b ><span style='color:#F68026;'>10.1.1</span>.254</b>",
							x:184.05,
							y:69.4, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b><span style='color:#F68026;'>10.1.1</span>.12</b>",
							x:258.15,
							y:124.95, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b><span style='color:#F68026;'>10.1.1</span>.11</b>",
							x:258.15,
							y:185.65+16, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b><span style='color:#F68026;'>10.1.1</span>.10</b>",
							x:186.05,
							y:254.75, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b>G0/0<br/><span style='color:#F68026;'>10.1.1</span>.1</b>",
							x:112.4,
							y:90.15+45, 
							width:64.3,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"s4Txt",
							bodyText:"<b>R2</b>",
							x:71.25,
							y:174.4, 
							width:21.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"s4Txt",
							bodyText:"<b style='letter-spacing:1px;'>10<br/>00001010</b>",
							x:57.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:143.6+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:230.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s4Txt",
							bodyText:"<b style='letter-spacing:1px;'>255<br/>11111111</b>",
							x:312.85+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"}];	
							
	var graphic_4_slide = [{centerX:230,
							centerY:170, 
							radius:135,
							bgcolor:'#E6EBA8',
							borderColor:"#E6EBA8",
							lineWidth:2,
							type:"circle"},
							{x:42.15,
							y:327.05, 
							width:259.85,
							height:63.55,
							color:"#E6EBA8",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:301.45,
							y:327.05, 
							width:79.7,
							height:63.55,
							color:"#98D3D1",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:370,
							y:310,
							length:30,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:245.75,
							y:305.1,
							length:23,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"},
							];
							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts,
							graphics:graphic_4_slide};
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];						
											
	
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}