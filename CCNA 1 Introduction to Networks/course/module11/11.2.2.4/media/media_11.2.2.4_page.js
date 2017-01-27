//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

	function getData()
	{
	
	var template_type = "MULTI_BAR";
	var commonTexts = [];						
	
	var slide_1_type = "IMAGE";
	var slide_1_tables = [{compId:"ID_s1_table",
							x:7.6,
							y:30.35, 
							width:424.7,
							height:109,
							type:""}];
	var slide_1_images = [{name:"11_2_2_4_A.png",
							x:1,
							y:177.4, 
							width:439.35,
							height:163.1,
							type:""}];								
	var slide_1_texts = [	{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:7.6,
							y:380.4, 
							width:420.1,
							height:17,
							size:11,
							expand:"up",
							textAlign:"left"}
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							images:slide_1_images,
							texts:slide_1_texts};
	
	
	var slide_2_type = "INTERACTIVEANIM";
			
			var slide_2_texts = {compId:"ID_s2_title",
			x:0,
			y:2,
			width:430,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_2_object = {templateType:slide_2_type,
			x:0,
			y:0,
			animId:1,
			texts:slide_2_texts};
			
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"11_2_2_4_C.png",
							x:82.7,
							y:49.5, 
							width:241,
							height:287.2,
							type:""}];								
	var slide_3_texts = [	{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:1.7+23,
							y:73.5+4, 
							width:79.85,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s3_txt02",
							x:311.25+24,
							y:93.85-7+31, 
							width:124.55,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s3_txt03",
							x:312.05+24,
							y:180.7-8+24, 
							width:123.7,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s3_txt04",
							x:1.7+19,
							y:247.2, 
							width:79.85,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s3_txt05",
							x:325.2+24,
							y:306.35, 
							width:84.6,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s3_txt06",
							x:278.45+23,
							y:117.75+7+28, 
							width:46.8,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s3_txt07",
							x:278.45+23,
							y:204.25+6+27, 
							width:46.8,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s3_txt08",
							x:283.25+23,
							y:329.35+5, 
							width:46.8,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"}];	
							
	var slide_graphics = [{	x:275,
							y:85,
							length:136,
							thickness:2.6,
							color:"#5FBC21",
							rotation:186,
							type:"arrow"},
							{	x:275,
							y:95,
							length:136,
							thickness:2.6,
							color:"#5FBC21",
							rotation:186,
							type:"arrow"},
							{	x:275,
							y:105,
							length:136,
							thickness:2.6,
							color:"#5FBC21",
							rotation:186,
							type:"arrow"},
							{	x:275,
							y:115,
							length:136,
							thickness:2.6,
							color:"#5FBC21",
							rotation:186,
							type:"arrow"},
							{	x:143,
							y:140,
							length:136,
							thickness:2.6,
							color:"#652C8A",
							rotation:353,
							type:"arrow"},
							{	x:143,
							y:150,
							length:136,
							thickness:2.6,
							color:"#652C8A",
							rotation:353,
							type:"arrow"},
							{	x:143,
							y:160,
							length:136,
							thickness:2.6,
							color:"#652C8A",
							rotation:353,
							type:"arrow"},
							{	x:143,
							y:170,
							length:136,
							thickness:2.6,
							color:"#652C8A",
							rotation:353,
							type:"arrow"},
							{	x:275,
							y:292,
							length:136,
							thickness:2.6,
							color:"#5FBC21",
							rotation:186,
							type:"arrow"},
							];	
													
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts,
							graphics:slide_graphics,};
							
    var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"11_2_2_4_D.png",
							x:3.3,
							y:40.15, 
							width:373.25,
							height:333.45,
							type:""}];								
	var slide_4_texts = [	{compId:"ID_s4_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_s4_txt01",
							x:209.3+22,
							y:43.1+3, 
							width:74.45,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s4_txt02",
							x:319.1+34,
							y:152.4, 
							width:60.45,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s4_txt03",
							x:378.1+22,
							y:248.9, 
							width:60.45,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s4_txt04",
							x:132.4+22,
							y:375.95, 
							width:104,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s4_txt05",
							x:20,
							y:386, 
							width:432.5,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"}
							];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"11_2_2_4_E.png",
							x:4.65,
							y:65, 
							width:427.75,
							height:316.6,
							type:""}];								
	var slide_5_texts = [	{compId:"ID_s5_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"},
							{compId:"ID_s5_txt01",
							x:49.65+11-45,
							y:56-10, 
							width:57,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s5_txt04",
							x:333.95+18,
							y:87.6+12, 
							width:103,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"left"},
							{compId:"ID_s5_txt02",
							x:383.6+9,
							y:173.35, 
							width:57,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"ID_s5_txt03",
							x:96.5+15,
							y:291.65, 
							width:122.95,
							height:17,
							size:11,
							expand:"up+down",
							textAlign:"center"},
							{compId:"static_txt01",
							bodyText:"209.165.200.225",
							x:341.75,
							y:201.35, 
							width:88.85,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"static_txt02",
							bodyText:"<b>ICMP REPLY D=209.165.200.225 S=172.18.1.2</b>",
							x:98.15,
							y:87.2, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"},
							{compId:"static_txt03",
							bodyText:"<b>ICMP REPLY D=209.165.200.225 S=172.18.1.3</b>",
							x:98.15,
							y:121.8, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"},
							{compId:"static_txt04",
							bodyText:"<b>ICMP REPLY D=209.165.200.225 S=172.18.1.4</b>",
							x:98.15,
							y:156.4, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"},
							{compId:"static_txt05",
							bodyText:"<b>ICMP REPLY D=209.165.200.225 S=172.18.1.5</b>",
							x:98.15,
							y:191, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"},
							{compId:"static_txt06",
							bodyText:"<b>ICMP REPLY D=209.165.200.225 S=172.18.1.6</b>",
							x:98.15,
							y:225.6, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"},
							{compId:"static_txt07",
							bodyText:"<b>ICMP REPLY D=209.165.200.225 S=172.18.1.7</b>",
							x:98.15,
							y:260.1, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"},
							{compId:"static_txt08",
							bodyText:"<b>ICMP REQ D=172.18.255.255 S=209.165.200.225</b>",
							x:146.85-28,
							y:362.95, 
							width:242.8,
							height:17,
							size:11,
							color:"white",
							textAlign:"left"}];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};	
	
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
	
	return {templateType:template_type,
	textObject:commonTexts,
	slideObject:slides};
	
	}

loadScript("../../../common/scripts/swfobject.js", registerSWF);