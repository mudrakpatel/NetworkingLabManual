//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5.1.2.7A.png",
        x:2.45,
        y:26.3,
        width:463,
        height:46,
        type:""},
		{name:"5.1.2.7A.png",
        x:2.45,
        y:309.3,
        width:463,
        height:46,
        type:""},
		{name:"5.1.2.7B.png",
        x:141.6,
        y:160.6,
        width:181.55,
        height:53.65,
        type:""},
		{name:"5.1.2.7C.png",
        x:290.3,
        y:19.5,
        width:72,
        height:85,
		divId:"commonImageText",
		scrollable:"YES",
        type:""},
		{name:"5.1.2.7C.png",
        x:290.3,
        y:302,
        width:72,
        height:85,
		divId:"commonImageText",
		scrollable:"YES",
        type:""},
		{name:"gra.png",
        x:6,
        y:71.5,
        width:460.4,
        height:88.8,
        type:""},
		{name:"gra1.png",
        x:6,
        y:213,
        width:460.4,
        height:88.8,
        type:""}]

    var slide_texts = [
		
	{compId:"ID_txt01",
            x:12,
            y:28,
            width:86.05,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:98.3,
            y:28,
            width:93,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt03",
            x:189.5,
            y:28,
            width:58,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt04",
            x:247,
            y:28,
            width:60,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt05",
            x:307.5,
            y:28,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt06",
            x:341,
            y:28,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt07",
            x:375.45,
            y:28,
            width:57,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt08",
            x:433.55,
            y:28,
            width:37.05,
            height:17,
            size:10,
            textAlign:"center"},

{compId:"ID_txt09",
            x:12,
            y:310,
            width:86.05,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt10",
            x:98.3,
            y:310,
            width:93,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt11",
            x:189.5,
            y:310,
            width:58,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt12",
            x:247,
            y:310,
            width:60,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt13",
            x:307.5,
            y:310,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt14",
            x:341,
            y:310,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt15",
            x:375.45,
            y:310,
            width:57,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt16",
            x:433.55,
            y:310,
            width:37.05,
            height:17,
            size:10,
            textAlign:"center"},		
		{compId:"ID_txt17",
            x:4,
            y:152,
            width:140,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt18",
            x:4,
            y:185.8,
            width:140,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt19",
            x:333.9,
            y:152,
            width:128.55,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt20",
            x:333.9,
            y:185.8,
            width:128.55,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt21",
            x:180,
            y:96.7,
            width:128.55,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt22",
            x:180,
            y:281.7,
            width:128.55,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt23",
            x:12,
            y:71.5,
            width:86.05,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt24",
            x:98.3,
           y:71.5,
            width:93,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt25",
            x:193.5,
            y:71.5,
            width:58,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt26",
            x:250,
           y:71.5,
            width:60,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt27",
            x:307.5,
            y:71.5,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt28",
            x:341,
           y:71.5,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt29",
            x:12,
            y:356.5,
            width:86.05,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt30",
            x:98.3,
			y:356.5,
            width:93,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt31",
            x:193.5,
            y:356.5,
            width:58,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt32",
            x:250,
           y:356.5,
            width:60,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt33",
            x:307.5,
            y:356.5,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
		{compId:"ID_txt34",
            x:341,
           y:356.5,
            width:35,
            height:17,
            size:10,
            textAlign:"center"},
			{compId:"ID_txt35",
            x:135,
            y:216.1,
            width:100.4,
            height:17,
            size:10,
            textAlign:"center"},
			{compId:"ID_txt36",
            x:245.75,
            y:216.1,
            width:100.4,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt37",
            x:226.5,
            y:165,
            width:34,
            height:17,
            size:10,
            textAlign:"center"},
	{compId:"ID_txt38",
            x:226.5,
            y:193.8,
            width:34,
            height:17,
            size:10,
            textAlign:"center"},
		]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
