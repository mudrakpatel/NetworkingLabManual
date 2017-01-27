
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
	var commonTexts = [{compId:"pc1",
							bodyText:'PC1',
							x:11,
							y:25,
							width:38,
							height:17,
							size:10,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"pc2",
							bodyText:'PC2',
							x:11,
							y:95,
							width:38,
							height:17,
							size:10,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:33.55+6,
							y:32.1-10,
							width:29.4,
							height:17,
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:33.55+6,
							y:103-10,
							width:29.4,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'192.168.10.0/24',
							x:58,
							y:12,
							width:106,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'192.168.11.0/24',
							x:58.45,
							y:125,
							width:104,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'G0/0<br/>.1',
							x:90.1+10,
							y:30,
							width:51.25,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"staticTxt",
							bodyText:'.1<br/>G0/1',
							x:110.15,
							y:87,
							width:41.8,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"r1",
							bodyText:'R1',
							x:122.15+20,
							y:76,
							width:41.8,
							height:17,
                            size:10,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"r2",
							bodyText:'R2',
							x:272.05,
							y:76,
							width:41.8,
							height:17,
                            size:10,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.225<br/>S0/0/0',
							x:177,
							y:75,
							width:48.3,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.226',
							x:243.3,
							y:64,
							width:34.3,
							height:7.3,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'209.165.200.224 /30',
							x:155.45+16,
							y:42.95,
							width:119.5,
							height:13.5,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.1',
							x:308.1-16,
							y:43,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.1',
							x:293.25,
							y:90,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'10.1.1.0/24',
							x:320,
							y:14,
							width:93,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'10.1.2.0/24',
							x:320,
							y:123,
							width:93,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:390.25,
							y:23,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:390.9,
							y:91,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},];
	var commonImages = [{name:"6_4_2_2A.png",
							x:2,
							y:20, 
							width:438,
							height:135,
							type:""},
							{name:"6_4_2_2.png",
							x:2,
							y:153.4, 
							width:430,
							height:238,
							type:""}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [];								
	var slide_1_texts = [{compId:"ID_txt",
							bodyText:'<div id="container">R1#<span style="font-weight:bold;">show ip interface brief</span><table width="640" border="0" cellspacing="0" cellpadding="0"><tr><td width="139" height="40">Interface </td><td width="120">IP-Address</td><td width="33">OK?</td><td width="66">Method</td><td width="147">Status</td><td width="98">Protocol</td></tr><tr><td>GigabitEthernet0/0</td><td>192.168.10.1</td><td>YES</td><td>manual</td><td>up</td><td>up</td></tr><tr><td>GigabitEthernet0/1</td><td>192.168.11.1</td><td>YES</td><td>manual </td><td>up</td><td>up</td></tr><tr><td>Serial0/0/0</td><td>209.165.200.225</td><td>YES</td><td>manual</td><td>up</td><td>up</td></tr><tr><td>Serial0/0/1</td><td>unassigned</td><td>YES</td><td>NVRAM</td><td>administratively  down </td><td>down</td></tr><tr><td>Vlan1</td><td>unassigned </td><td>YES</td><td>NVRAM  </td><td>administratively  down </td><td>down</td></tr></table>R1#<br/>R1#<span style="font-weight:bold;">ping 209.165.200.226</span><br/><br/>Type escape sequence to abort.<br/>Sending 5, 100-byte ICMP Echos to 209.165.200.226, timeout is 2 seconds:<br/>!!!!!<br/>Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/9 ms<br/><br/>R1#</div>',

							x:20,
							y:162.4, 
							width:393.15,
							height:220,
							size:11,
							scroll:"yes",
							color:"#3c3d3f",
							textAlign:"left",
							},
							
							
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [];								
	var slide_2_texts = [{compId:"ID_txt1",
							bodyText:"<table width='502' border='0' cellpadding='0' cellspacing='0' style='font-family:'Courier New', Courier, monospace; font-size:10px;'><tr><td colspan='3'>R1#<span style='font-weight:bold;'>show ip route</span></td></tr><tr><td width='42'>Codes:</td><td colspan='2'>L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP</td></tr><tr><td>&nbsp;</td><td colspan='2'>D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</td></tr><tr><td>&nbsp;</td><td colspan='2'>N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2</td></tr><tr><td>&nbsp;</td><td colspan='2'>E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP</td></tr><tr><td>&nbsp;</td><td colspan='2'>i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area </td></tr><tr><td>&nbsp;</td><td colspan='2'>* - candidate default, U - per-user static route, o - ODR</td></tr><tr><td>&nbsp;</td><td colspan='2'>P - periodic downloaded static route</td></tr><tr><td colspan='3'>Gateway of last resort is not set</td></tr><tr><td colspan='3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks</td></tr><tr><td>D</td><td width='6'>&nbsp;</td><td width='330'>10.1.1.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0</td></tr><tr><td>D</td><td width='6'>&nbsp;</td><td width='330'>10.1.2.0/24 [90/2170112] via 209.165.200.226, 00:00:05, Serial0/0/0</td></tr><tr><td colspan='3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 192.168.10.0/24 is variably subnetted, 2 subnets, 3 masks</td></tr><tr><td>C</td><td width='6'>&nbsp;</td><td width='330'>192.168.10.0/24 is directly connected, GigabitEthernet0/0</td></tr><tr><td>L</td><td width='6'>&nbsp;</td><td width='330'>192.168.10.1/32 is directly connected, GigabitEthernet0/0</td></tr><tr><td colspan='3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 192.168.11.0/24 is variably subnetted, 2 subnets, 3 masks</td></tr><tr><td>C</td><td width='6'>&nbsp;</td><td width='330'>192.168.11.0/24 is directly connected, GigabitEthernet0/1</td></tr><tr><td>L</td><td width='6'>&nbsp;</td><td width='330'>192.168.11.1/32 is directly connected, GigabitEthernet0/1</td></tr><tr><td colspan='3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 209.165.200.0/24 is variably subnetted, 2 subnets, 3 masks</td></tr><tr><td>C</td><td width='6'>&nbsp;</td><td width='330'>209.165.200.224/30 is directly connected, Serial0/0/0</td></tr><tr><td>L</td><td width='6'>&nbsp;</td><td width='330'>209.165.200.225/32 is directly connected, Serial0/0/0</td></tr><tr><td colspan='3'>R1#</td></tr></table>",
							x:21,
							y:162.4, 
							width:393.15,
							height:250.05,
							size:11,
							scroll:"yes",
							color:"#3c3d3f",
							textAlign:"left",
							},
							
							
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
