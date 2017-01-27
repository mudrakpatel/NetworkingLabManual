//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"3_1_4_1.png",
        x:0,
        y:0,
        width:470,
        height:400,
        type:""},
        {name:"3_1_4_1_A.png",
            x:0,
            y:0,
            width:470,
            height:400,
            type:""}];

    var slide_texts = [{compId:"ID_txt01",
            x:140,
            y:17,
            width:211,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_header",
            x:60,
            y:130,
            width:65,
            height:17,
            size:12,
            textAlign:"left"},
        {compId:"ID_txt02",
            x:175,
            y:130,
            width:126,
            height:17,
            size:12,
            textAlign:"left"},
        {compId:"ID_tcpip_header",
            x:358,
            y:130,
            width:88,
            height:17,
            size:12,
            textAlign:"left"},
        {compId:"ID_txt03",
            x:170,
            y:216,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt04",
            x:170,
            y:279,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt05",
            x:170,
            y:303.50,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt06",
            x:170,
            y:350.50+9,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},

        {compId:"ID_osi_txt07",
            x:20,
            y:186,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_txt06",
            x:20,
            y:218,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_txt05",
            x:20,
            y:250,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_txt04",
            x:20,
            y:282,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_txt03",
            x:20,
            y:312,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_txt02",
            x:20,
            y:344,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_osi_txt01",
            x:20,
            y:375,
            width:140,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_tcpip_txt04",
            x:320+4,
            y:216,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_tcpip_txt03",
            x:320+4,
            y:281,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_tcpip_txt02",
            x:320+4,
            y:312,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_tcpip_txt01",
            x:320+4,
            y:360,
            width:150,
            height:17,
            size:12,
            textAlign:"center"}

        ];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
