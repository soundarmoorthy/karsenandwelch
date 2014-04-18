var sms_sender_mobile1='';
function sms_limitText(sms_limitField, sms_limitNum)
{
    	if (sms_limitField.value.length > sms_limitNum)
	{
		sms_limitField.value = sms_limitField.value.substring(0, sms_limitNum);
	}
	else
	{
		var sms_remchar=160-parseInt(sms_limitField.value.length);
		document.getElementById('Descstatus').innerHTML='Remaining Characters : '+sms_remchar;
	}
};

var sms_myWidth = 0, sms_myHeight = 0;
function sms_bhw1()
{
/* alert("====");*/
if( typeof( window.innerWidth ) == 'number' ) {
sms_myWidth = window.innerWidth;
sms_myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
{
sms_myWidth = document.documentElement.clientWidth;
sms_myHeight = document.documentElement.clientHeight;
}
else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
sms_myWidth = document.body.clientWidth;
sms_myHeight = document.body.clientHeight;
}
var h_sms = window.pageYOffset ||
document.body.scrollTop ||
document.documentElement.scrollTop;
var sms_browserName=navigator.appName;

var sms_imagedivheight=sms_myHeight-93;
var test = sms_myWidth*24/100;
var sms_divwidth = sms_myWidth-test;
var sms_widthformizilla = sms_myWidth-538;
var sms_mozillawidth = sms_widthformizilla-sms_divwidth;
var sms_iewidth = sms_myWidth-390;

var sms_mozillawidth1 = sms_mozillawidth/2;
var sms_iewidth1 = sms_iewidth/2;

var sms_mtop = h_sms+7;
var sms_aboveheight = sms_myHeight-500;
var sms_aboveheight1 = sms_aboveheight/2+h_sms;


/* alert(sms_aboveheight1);*/
document.getElementById('divscroll_sms').style.height="476px";
document.getElementById('divscroll_sms').style.width="390px";
document.getElementById('message_sms1').style.top=sms_aboveheight1+"px";
document.getElementById('message_sms1').style.left=sms_iewidth1+"px";
document.getElementById('message_sms3').style.top=sms_aboveheight1+"px";
document.getElementById('message_sms3').style.left=sms_iewidth1+"px";
document.getElementById('divscroll_sms').name="miniwin";
};

/* function blowup_call()
 {
 sms_bhw();
  document.getElementById('message_call').className="don";
 document.getElementById('message_sms1').className="doff";
  document.getElementById('mx_call').className="doff";
  document.getElementById('mx1_call').className="doff";
 };
*/

function blowup_sms()
{
send_sms_captcha();
document.sms_dataform.sms_query_message.value = "";
sms_bhw1();
document.getElementById('message_sms1').className="don";
};


function blowup_sms_off()
{
document.getElementById('message_sms1').className="doff";
};

function blowup_sms_off1()
{
document.getElementById('message_sms1').className="doff";
document.getElementById('message_sms3').className="doff";
};




function check_count_change_sms()
{
	var val = document.sms_dataform.sms_country.options[document.sms_dataform.sms_country.selectedIndex].value;

	if(val != document.sms_dataform.country_iso_sms.value)
	{
		if(phonecode_sms[document.sms_dataform.sms_country.selectedIndex] != '')
		{
			var reg_sms=new RegExp("-");
			if(reg_sms.test(phonecode_sms[document.sms_dataform.sms_country.selectedIndex]))
			{
				var ph_arr_new=phonecode_sms[document.sms_dataform.sms_country.selectedIndex].split('-');
				document.sms_dataform.s_cmobile_sms.value ='+'+ph_arr_new[0];
			}
			else
			{
				document.sms_dataform.s_cmobile_sms.value = '+'+phonecode_sms[document.sms_dataform.sms_country.selectedIndex];
			}
		}
		else
		{
			document.sms_dataform.s_cmobile_sms.value = '';
		}
	}
	document.sms_dataform.country_iso_sms.value = val;
	document.sms_dataform.sender_country.value = document.sms_dataform.sms_country.options[document.sms_dataform.sms_country.selectedIndex].text;

};

/*if form field exists*/
var phonecode_sms = new Array();
phonecode_sms[0] = "";
phonecode_sms[1] = "61";
phonecode_sms[2] = "43";
phonecode_sms[3] = "32";
phonecode_sms[4] = "1";
phonecode_sms[5] = "45";
phonecode_sms[6] = "420";
phonecode_sms[7] = "49";
phonecode_sms[8] = "33";
phonecode_sms[9] = "52";
phonecode_sms[10] = "64";
phonecode_sms[11] = "47";
phonecode_sms[12] = "34";
phonecode_sms[13] = "41";
phonecode_sms[14] = "44";
phonecode_sms[15] = "1";
phonecode_sms[16] = "";
phonecode_sms[17] = "93";
phonecode_sms[18] = "355";
phonecode_sms[19] = "213";
phonecode_sms[20] = "1-684";
phonecode_sms[21] = "376";
phonecode_sms[22] = "244";
phonecode_sms[23] = "1-264";
phonecode_sms[24] = "672";
phonecode_sms[25] = "1-268";
phonecode_sms[26] = "54";
phonecode_sms[27] = "7";
phonecode_sms[28] = "297";
phonecode_sms[29] = "61";
phonecode_sms[30] = "43";
phonecode_sms[31] = "994";
phonecode_sms[32] = "1-242";
phonecode_sms[33] = "973";
phonecode_sms[34] = "880";
phonecode_sms[35] = "1-246";
phonecode_sms[36] = "375";
phonecode_sms[37] = "32";
phonecode_sms[38] = "501";
phonecode_sms[39] = "229";
phonecode_sms[40] = "1-441";
phonecode_sms[41] = "975";
phonecode_sms[42] = "591";
phonecode_sms[43] = "387";
phonecode_sms[44] = "267";
phonecode_sms[45] = "";
phonecode_sms[46] = "55";
phonecode_sms[47] = "246";
phonecode_sms[48] = "673";
phonecode_sms[49] = "359";
phonecode_sms[50] = "226";
phonecode_sms[51] = "257";
phonecode_sms[52] = "855";
phonecode_sms[53] = "237";
phonecode_sms[54] = "1";
phonecode_sms[55] = "238";
phonecode_sms[56] = "1-345";
phonecode_sms[57] = "236";
phonecode_sms[58] = "235";
phonecode_sms[59] = "56";
phonecode_sms[60] = "86";
phonecode_sms[61] = "852";
phonecode_sms[62] = "853";
phonecode_sms[63] = "61";
phonecode_sms[64] = "672";
phonecode_sms[65] = "57";
phonecode_sms[66] = "269";
phonecode_sms[67] = "242";
phonecode_sms[68] = "243";
phonecode_sms[69] = "682";
phonecode_sms[70] = "506";
phonecode_sms[71] = "225";
phonecode_sms[72] = "385";
phonecode_sms[73] = "53";
phonecode_sms[74] = "357";
phonecode_sms[75] = "420";
phonecode_sms[76] = "45";
phonecode_sms[77] = "253";
phonecode_sms[78] = "1-767";
phonecode_sms[79] = "1-809";
phonecode_sms[80] = "";
phonecode_sms[81] = "593";
phonecode_sms[82] = "20";
phonecode_sms[83] = "503";
phonecode_sms[84] = "240";
phonecode_sms[85] = "291";
phonecode_sms[86] = "372";
phonecode_sms[87] = "251";
phonecode_sms[88] = "500";
phonecode_sms[89] = "298";
phonecode_sms[90] = "679";
phonecode_sms[91] = "358";
phonecode_sms[92] = "33";
phonecode_sms[93] = "594";
phonecode_sms[94] = "689";
phonecode_sms[95] = "262";
phonecode_sms[96] = "241";
phonecode_sms[97] = "220";
phonecode_sms[98] = "995";
phonecode_sms[99] = "49";
phonecode_sms[100] = "233";
phonecode_sms[101] = "350";
phonecode_sms[102] = "30";
phonecode_sms[103] = "299";
phonecode_sms[104] = "1-473";
phonecode_sms[105] = "590";
phonecode_sms[106] = "1-671";
phonecode_sms[107] = "502";
phonecode_sms[108] = "224";
phonecode_sms[109] = "245";
phonecode_sms[110] = "592";
phonecode_sms[111] = "509";
phonecode_sms[112] = "672";
phonecode_sms[113] = "504";
phonecode_sms[114] = "36";
phonecode_sms[115] = "354";
phonecode_sms[116] = "91";
phonecode_sms[117] = "62";
phonecode_sms[118] = "98";
phonecode_sms[119] = "964";
phonecode_sms[120] = "353";
phonecode_sms[121] = "972";
phonecode_sms[122] = "39";
phonecode_sms[123] = "1-876";
phonecode_sms[124] = "81";
phonecode_sms[125] = "962";
phonecode_sms[126] = "7";
phonecode_sms[127] = "254";
phonecode_sms[128] = "686";
phonecode_sms[129] = "82";
phonecode_sms[130] = "850";
phonecode_sms[131] = "965";
phonecode_sms[132] = "996";
phonecode_sms[133] = "856";
phonecode_sms[134] = "371";
phonecode_sms[135] = "961";
phonecode_sms[136] = "266";
phonecode_sms[137] = "231";
phonecode_sms[138] = "218";
phonecode_sms[139] = "423";
phonecode_sms[140] = "370";
phonecode_sms[141] = "352";
phonecode_sms[142] = "389";
phonecode_sms[143] = "261";
phonecode_sms[144] = "265";
phonecode_sms[145] = "60";
phonecode_sms[146] = "960";
phonecode_sms[147] = "223";
phonecode_sms[148] = "356";
phonecode_sms[149] = "692";
phonecode_sms[150] = "596";
phonecode_sms[151] = "222";
phonecode_sms[152] = "230";
phonecode_sms[153] = "269";
phonecode_sms[154] = "52";
phonecode_sms[155] = "691";
phonecode_sms[156] = "373";
phonecode_sms[157] = "377";
phonecode_sms[158] = "976";
phonecode_sms[159] = "382";
phonecode_sms[160] = "1-664";
phonecode_sms[161] = "212";
phonecode_sms[162] = "258";
phonecode_sms[163] = "95";
phonecode_sms[164] = "264";
phonecode_sms[165] = "674";
phonecode_sms[166] = "977";
phonecode_sms[167] = "599";
phonecode_sms[168] = "687";
phonecode_sms[169] = "64";
phonecode_sms[170] = "505";
phonecode_sms[171] = "227";
phonecode_sms[172] = "234";
phonecode_sms[173] = "683";
phonecode_sms[174] = "672";
phonecode_sms[175] = "1-670";
phonecode_sms[176] = "47";
phonecode_sms[177] = "968";
phonecode_sms[178] = "92";
phonecode_sms[179] = "680";
phonecode_sms[180] = "507";
phonecode_sms[181] = "675";
phonecode_sms[182] = "595";
phonecode_sms[183] = "51";
phonecode_sms[184] = "63";
phonecode_sms[185] = "872";
phonecode_sms[186] = "48";
phonecode_sms[187] = "351";
phonecode_sms[188] = "1";
phonecode_sms[189] = "974";
phonecode_sms[190] = "262";
phonecode_sms[191] = "40";
phonecode_sms[192] = "7";
phonecode_sms[193] = "250";
phonecode_sms[194] = "290";
phonecode_sms[195] = "1-869";
phonecode_sms[196] = "1-758";
phonecode_sms[197] = "508";
phonecode_sms[198] = "1-784";
phonecode_sms[199] = "685";
phonecode_sms[200] = "378";
phonecode_sms[201] = "239";
phonecode_sms[202] = "966";
phonecode_sms[203] = "221";
phonecode_sms[204] = "381";
phonecode_sms[205] = "248";
phonecode_sms[206] = "232";
phonecode_sms[207] = "65";
phonecode_sms[208] = "421";
phonecode_sms[209] = "386";
phonecode_sms[210] = "677";
phonecode_sms[211] = "252";
phonecode_sms[212] = "27";
phonecode_sms[213] = "995";
phonecode_sms[214] = "34";
phonecode_sms[215] = "94";
phonecode_sms[216] = "249";
phonecode_sms[217] = "597";
phonecode_sms[218] = "47";
phonecode_sms[219] = "268";
phonecode_sms[220] = "46";
phonecode_sms[221] = "41";
phonecode_sms[222] = "963";
phonecode_sms[223] = "886";
phonecode_sms[224] = "992";
phonecode_sms[225] = "255";
phonecode_sms[226] = "66";
phonecode_sms[227] = "31";
phonecode_sms[228] = "228";
phonecode_sms[229] = "690";
phonecode_sms[230] = "676";
phonecode_sms[231] = "1-868";
phonecode_sms[232] = "216";
phonecode_sms[233] = "90";
phonecode_sms[234] = "993";
phonecode_sms[235] = "1-649";
phonecode_sms[236] = "688";
phonecode_sms[237] = "256";
phonecode_sms[238] = "380";
phonecode_sms[239] = "971";
phonecode_sms[240] = "44";
phonecode_sms[241] = "1";
phonecode_sms[242] = "1";
phonecode_sms[243] = "598";
phonecode_sms[244] = "998";
phonecode_sms[245] = "678";
phonecode_sms[246] = "379";
phonecode_sms[247] = "58";
phonecode_sms[248] = "84";
phonecode_sms[249] = "1-284";
phonecode_sms[250] = "1-340";
phonecode_sms[251] = "681";
phonecode_sms[252] = "212";
phonecode_sms[253] = "967";
phonecode_sms[254] = "38";
phonecode_sms[255] = "260";
phonecode_sms[256] = "263";

/* for text value start*/
function RegValue_sms(FieldName_sms)
{
	if(FieldName_sms.value == 'First Name' || FieldName_sms.value == 'Your Name')
	{
		FieldName_sms.value = '';
		FieldName_sms.className='txtf';
	}
	else
	{
		FieldName_sms.className='txtf';
	}
};

function RegValue_sms1(FieldName_sms1)
{
	if(FieldName_sms1.value == 'Last Name')
	{
		FieldName_sms1.value = '';
		FieldName_sms1.className='txtf';
	}
	else
	{
		FieldName_sms1.className='txtf';
	}
};
function RegValue_sms11(FieldName_sms1)
{
	if(FieldName_sms1.value == '')
	{
		FieldName_sms1.value = 'Last Name';
		FieldName_sms1.className='txtfa';
	}
	else
	{
		FieldName_sms1.className='txtf';
	}
};

function RegValue1_sms(FieldName_sms1)
{
	if(FieldName_sms1.value == '')
	{
		FieldName_sms1.value = 'First Name';
		FieldName_sms1.className='txtfa';
	}
	else
	{
		FieldName_sms1.className='txtf';
	}
};

function send_sms_captcha()
{
var d1_sms = new Date(); 
var epoch_time_sms =(d1_sms.getTime()-d1_sms.getMilliseconds())/1000; 
var randomnumber1_sms=Math.floor(Math.random()*9999); 
var randomnumber11_sms=Math.floor(Math.random()*9999);
var ran_num1=randomnumber1_sms+"."+epoch_time_sms+"."+randomnumber11_sms;
var url1_sms="/cgi/get_captcha.cgi?cref="+ran_num1+"&style=2";
var new_ran_num_sms = ran_num1;
try {
document.getElementById("captcha_rannum1").value = new_ran_num_sms;
document.getElementById("sms_captcha").src = url1_sms;
} catch ( err ) {
	}
}


var cap_sms;
var ran_num12_sms=0;
var url12_sms='';
var sender_mobile_no=0;
var receiver_mobile_no=0;
var contact_person = 'Mrs. V. Archana';
var receiver_mobile_no = '+919283671008';
var reciever_email = '';
var company_name = 'Karsen &amp; Welch Cleantech Industries';
var subject = '';
var rec_glid = '3936150';

function sms_validation()
{
	var iChars = "!@#$%&^*()+=-[]\';/{}|\":<>?";
	var iChars1 = "!@#$%^*()+=[]1234567890\';,./{}|\":<>?";
	var iChars2 = "!#$%^&*()+=-[]\';,/{}|\":<>?";
	var iChars3 = "!#$%^&*()+=-[]\';,{}|\"<>?";
	var iChars4 = "!@#$%^*+=[]\';,/{}|\":<>?";
	var iChars5 = "!@#$%^*+=-[]\';,{}|\"<>?";
/* 	var iChars = "!@#$%^&*()+=-[]\';,./{}|\":<>?";*/

	var reWhiteSpace = new RegExp(/^\s+$/);

	if(document.sms_dataform.sms_query_message.value == '')
	{
		alert("Please Enter Your Buying Requirements By SMS");
		document.sms_dataform.sms_query_message.focus();
		return false;
	}
	
	if(reWhiteSpace.test(document.sms_dataform.sms_query_message.value))
	{	
		alert("Space not allowed in description field");
		document.sms_dataform.sms_query_message.value = '';
		document.sms_dataform.sms_query_message.focus();
		return false;
	}

	for (var i = 0; i < document.sms_dataform.sms_query_message.value.length; i++)
	{
		if (iChars.indexOf(document.sms_dataform.sms_query_message.value.charAt(i)) != -1) 
		{
			alert("Special symbol not allowed in description field.");
			document.sms_dataform.sms_query_message.focus();
			return false;
		}
	 }

	if(document.sms_dataform.sms_fname.value == '' || document.sms_dataform.sms_fname.value == 'First Name')
	{
		alert("Please Enter Your First Name");
		document.sms_dataform.sms_fname.focus();
		return false;
	}

	if(reWhiteSpace.test(document.sms_dataform.sms_fname.value))
	{	
		alert("Space not allowed in First Name");
		document.sms_dataform.sms_fname.value = '';
		document.sms_dataform.sms_fname.focus();
		return false;
	}

	for (var i = 0; i < document.sms_dataform.sms_fname.value.length; i++)
	{
		if (iChars1.indexOf(document.sms_dataform.sms_fname.value.charAt(i)) != -1) 
		{
			alert("Special symbols and numeric values not allowed in First Name.");
			document.sms_dataform.sms_fname.focus();
			return false;
		}
	}
	
	for (var i = 0; i < document.sms_dataform.sms_lname.value.length; i++)
	{
		if (iChars1.indexOf(document.sms_dataform.sms_lname.value.charAt(i)) != -1) 
		{
			alert("Special symbol and numeric values not allowed in Last Name.");
			document.sms_dataform.sms_lname.focus();
			return false;
		}
	}
	
	for (var i = 0; i < document.sms_dataform.smsemail.value.length; i++)
	{
		if (iChars2.indexOf(document.sms_dataform.smsemail.value.charAt(i)) != -1) 
		{
			alert("Special symbol not allowed in Email.");
			document.sms_dataform.smsemail.focus();
			return false;
		}
	}
	if(document.sms_dataform.smsemail.value == '')
	{
		alert("Please Enter Your Email Id");
		document.sms_dataform.smsemail.focus();
		return false;
	}
        if (!(/^[a-z][_.a-z0-9-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}\.?[a-zA-Z]{0,4}$/.test(document.sms_dataform.smsemail.value))) {
			alert("Invalid Email ID. Kindly enter the correct ID.");
			document.sms_dataform.smsemail.focus();
			return (false);
	         }
          if(document.sms_dataform.smsemail.value.length >60)
	  {
		alert("Kindly enter your Email ID within the limit of 60 characters.");
		document.sms_dataform.smsemail.focus();
		return false;
	  }

	if(document.sms_dataform.sms_country.value == '')
	{
		alert("Please Select Your Country");
		document.sms_dataform.sms_country.focus();
		return false;
	}
	if(document.sms_dataform.sms_sender_mobile.value == '')
	{
		alert("Please Enter Your Mobile Number");
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
	}
	if((document.sms_dataform.s_cmobile_sms.value == "+91") && (document.sms_dataform.sms_sender_mobile.value.length != 10))
	{
		alert("Please Check Your Mobile Number Length");
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
         }
        for (var i = 0; i < document.sms_dataform.sms_sender_mobile.value.length; i++)
	{
		if (((document.sms_dataform.sms_sender_mobile.value).indexOf(' '))>-1)
                 {
			alert("Space not allowed in mobile number.");
			document.sms_dataform.sms_sender_mobile.focus();
			return false;
		}
	}
	if(isNaN(document.sms_dataform.sms_sender_mobile.value))
	{
		alert("Please Enter Valid Mobile Number");
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
	}
	
	if(reWhiteSpace.test(document.sms_dataform.sms_sender_mobile.value))
	{	
		alert("Space not allowed in Mobile Number");
		document.sms_dataform.sms_sender_mobile.value = '';
		document.sms_dataform.sms_sender_mobile.focus();
		return false;
	}

	for (var i = 0; i < document.sms_dataform.sms_website.value.length; i++)
	{
		if (iChars3.indexOf(document.sms_dataform.sms_website.value.charAt(i)) != -1) 
		{
			alert("Special symbol not allowed in Company URL.");
			document.sms_dataform.sms_website.focus();
			return false;
		}
	}
          if(document.sms_dataform.sms_city.value.length >50)
	{
		alert("Kindly enter your City within the limit of 50 characters.");
		document.sms_dataform.sms_city.focus();
		return false;
	}
	if(document.sms_dataform.sms_captcha_text.value == '')
	{
		alert("Please Enter Image Code");
		document.sms_dataform.sms_captcha_text.focus();
		return false;
	}
	if (document.sms_dataform.sms_lname.value == "Last Name")
	{
		document.sms_dataform.sms_lname.value="";
	}

	var sms_query_message = document.sms_dataform.sms_query_message.value;
	var sms_fname=document.sms_dataform.sms_fname.value;
	var sms_lname=document.sms_dataform.sms_lname.value;
	var sms_captcha_text = document.sms_dataform.sms_captcha_text.value;
	var sms_captcha_ref = document.sms_dataform.sms_captcha_ref.value;
	var sms_email = document.sms_dataform.smsemail.value;
	var sms_country = document.sms_dataform.sms_country.value;
	var sms_sender_mobile = document.sms_dataform.sms_sender_mobile.value;
	var sms_website = document.sms_dataform.sms_website.value;
	var sms_company = document.sms_dataform.sms_company.value;
	var sms_city = document.sms_dataform.sms_city.value;
	var sms_modid = document.sms_dataform.sms_modid.value;
	var s_cmobile_sms = document.sms_dataform.s_cmobile_sms.value;
	var sender_country = document.sms_dataform.sender_country.value;
	var country_iso_sms = document.sms_dataform.country_iso_sms.value;

	sender_mobile_no = s_cmobile_sms+sms_sender_mobile;

	function getXMLHTTP()
	{
		var xhr = false;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
var sms_strURL='';
var ref_url=document.referrer;
sms_strURL="/cgi/new_sms_script_centralized.mp?query_message="+sms_query_message+"&sms_fname="+sms_fname+"&sms_lname="+sms_lname+"&smsemail="+sms_email+"&sms_country="+sms_country+"&sms_website="+sms_website+"&sms_company="+encodeURIComponent(sms_company)+"&sms_city="+encodeURIComponent(sms_city)+"&sms_captcha_text="+sms_captcha_text+"&sms_captcha_ref="+sms_captcha_ref+"&sms_modid="+sms_modid+"&recievergl_id="+rec_glid+"&reciever_email="+reciever_email+"&reciever_mobile="+receiver_mobile_no+"&sender_mobile="+sms_sender_mobile+"&subject="+subject+"&s_cmobile_sms="+s_cmobile_sms+"&reciever_name="+contact_person+"&country_iso_sms="+country_iso_sms+"&sender_country="+sender_country+"&ref_url="+ref_url;
if(sender_mobile_no == receiver_mobile_no)
	{
		alert("Kindly enter your number");
	}
	else
	{
	var req = getXMLHTTP();
	if (req)
	{
		req.onreadystatechange = function()
		{
			if (req.readyState == 4) /* only if "OK"*/
			{
				if (req.status == 200)
				{
					var res = (req.responseText);
					var str = res.search("Captch_Result=N");

					if(str > 0)
					{
						document.getElementById('message_sms3').className="doff";
						document.getElementById('first_img').style.display='none';
						document.getElementById('wrong_captcha11').style.display='inline';
						document.getElementById('resultid').style.display='inline';
						document.getElementById('resultid').innerHTML="You input wrong captcha!";
						var d = new Date();
						var epoch_time =(d.getTime()-d.getMilliseconds())/1000;
						var randomnumber=Math.floor(Math.random()*9999);
						var randomnumber1_sms=Math.floor(Math.random()*9999);
						ran_num12_sms=randomnumber+"."+epoch_time+"."+randomnumber1_sms;
						url12_sms="/cgi/get_captcha.cgi?cref="+ran_num12_sms+"&style=2";

						cap_sms = '<img src="'+url12_sms+'"   WIDTH="120" HEIGHT="30";>';
						document.getElementById('wrong_captcha11').innerHTML=cap_sms;
						new_ran_num_sms = ran_num12_sms;
						document.sms_dataform.sms_captcha_ref.value=ran_num12_sms;
					}
					else
					{ 
						var receiver_mobile_no1 = "Contact No. "+receiver_mobile_no;
						document.getElementById('sender_mobile_no_id').innerHTML=sender_mobile_no;
						document.getElementById('receiver_mobile_no_id').innerHTML=company_name;
						
						document.getElementById('resultid').style.display='none';
						document.getElementById('message_sms1').className="doff";
						document.getElementById('message_sms3').className="don";
					}
				}
				else 
				{
					alert("There was a problem while using XMLHTTP:" + req.statusText);
				}
			}
		};
		req.open("GET", sms_strURL, true);
		req.send(null);
	}
	}
};

document.write('<form name="sms_dataform" action="cgi/new_sms_script_centralized.mp"   method="post">');
var img_path='';
img_path='http://im.imimg.com/template-mdc/';
var new_ran_num_sms=0;
document.write('<DIV ID="message_sms1" STYLE="position: absolute; top: 100px; left: 0px; z-index: 2000"; class="doff"><input type="hidden" name="native_captcha" value="1"><input type="hidden" name="display" value="1"><input type="hidden" name="sms_modid" value="MDC"><table ID="tableheight" BORDER="0" CELLPADDING="0" CELLSPACING="0" class="main_s"><tr><TD ID="divscroll_sms" class="fnt_1_s"><div class="clw2_s"><table width="100%" cellpadding="0" cellspacing="0" ><tr><td valign="middle" width="100%" class="cbc_1_s fnt4_s">Send SMS Enquiry</td><td valign="top" class="cbc_1_s"><p class="clsp_s cu_s" ONCLICK="blowup_sms_off()"></p></td><td><p class="cmr_1_s"></p></td></tr></table>      <div class="cbc_3_s">    <p class="cbp1_s"></p> <div class="clbg_s"><p class="cltp1_s fnt_1_s fnt5_s"><font class="qstar_s">*</font>Enter your Message</p></div><div class="clbg1_s"><div align="right" class="cc_s"><textarea name="sms_query_message"    style="width:100%;height:60px;" class="txtfn_s" onkeydown="sms_limitText(this,160);" onkeyup="sms_limitText(this,160);"></textarea><div id="Descstatus">Remaining Characters : 160</div></div></div><div class="clbg2_s"></div><p class="cbp1_s"></p><div class="clbg_s"><p class="cri_2_s fr_s"></p><p class="cli_2_s fl_s"></p><p class="cltp1_s fnt_1_s fnt5_s">Provide Your Contact Details</p></div><div class="clbg1_s"><table WIDTH="100%" ALIGN="CENTER" CELLPADDING="0" CELLSPACING="0" class="fnt_1_s"><tr><td align="right" class="mr_s" width="100"><font class="qstar_s">*</font>Name:</td><TD VALIGN="TOP" ALIGN="LEFT"><table BORDER="0" CELLPADDING="0" CELLSPACING="0"><tr><TD><select name="S_salute"   class="mr3_s"><option value="Mr." selected ="SELECTED">Mr. </option><option value="Ms.">Ms. </option><option value="Mrs.">Mrs. </option><option value="Dr.">Dr. </option></select></TD><TD><img src="'+img_path+'zero.gif"   WIDTH="5" HEIGHT="1"></TD><TD><input name="sms_fname"   ONFOCUS="javascript:RegValue_sms(this);" value="First Name"   ONBLUR="javascript:RegValue1_sms(this);" STYLE="width:90px;" CLASS="txtfa_s"></TD><TD><img src="'+img_path+'zero.gif"   WIDTH="5" HEIGHT="1"></TD><TD><input name="sms_lname" value="Last Name"   ONFOCUS="javascript:RegValue_sms1(this);" ONBLUR="javascript:RegValue_sms11(this);" type="text"   STYLE="width:90px;" CLASS="txtfa_s"></TD></tr></table></TD></tr><tr><td align="right" class="mr_s mr1_s"><font class="qstar_s">*</font>Email:</td><TD VALIGN="TOP" class="mr2_s"><input name="smsemail"   STYLE="width:242px; " value=""   CLASS="txtfn_s"></TD></tr><tr><td align="right" class="mr_s mr1_s"><font class="qstar_s">*</font>Country:</TD><TD VALIGN="TOP" class="mr3" style="padding-top:8px;"><DIV><select name="sms_country"   ONCHANGE="javascript:check_count_change_sms();" STYLE="width:244px;border:1px solid #aed2f3;height:24px;font-family:arial;font-size:12px;"><option value=""   DISABLED="DISABLED" selected>---Choose One---</option><option value="AU">Australia</option> <option value="AT">Austria</option> <option value="BE">Belgium</option> <option value="CA">Canada</option> <option value="DK">Denmark</option> <option value="CZ">Czech Republic</option> <option value="DE">Germany</option> <option value="FR">France</option> <option value="MX">Mexico</option> <option value="NZ">New Zealand</option> <option value="NO">Norway</option> <option value="ES">Spain</option> <option value="CH">Switzerland</option> <option value="UK">United Kingdom</option> <option value="US">United States of America</option> <option value="">-----------------------------------------------</option> <option value="AF">Afghanistan</option> <option value="AL">Albania</option> <option value="DZ">Algeria</option> <option value="AS">American Samoa</option> <option value="AD">Andorra</option> <option value="AO">Angola</option> <option value="AI">Anguilla</option> <option value="AQ">Antarctica</option> <option value="AG">Antigua And Barbuda</option> <option value="AR">Argentina</option> <option value="AM">Armenia</option> <option value="AW">Aruba</option> <option value="AU">Australia</option> <option value="AT">Austria</option> <option value="AZ">Azerbaijan</option> <option value="BS">Bahamas, The</option> <option value="BH">Bahrain</option> <option value="BD">Bangladesh</option> <option value="BB">Barbados</option> <option value="BY">Belarus</option> <option value="BE">Belgium</option> <option value="BZ">Belize</option> <option value="BJ">Benin</option> <option value="BM">Bermuda</option> <option value="BT">Bhutan</option> <option value="BO">Bolivia</option> <option value="BA">Bosnia and Herzegovina</option> <option value="BW">Botswana</option> <option value="BV">Bouvet Island</option> <option value="BR">Brazil</option> <option value="IO">British Indian Ocean Territory</option> <option value="BN">Brunei</option> <option value="BG">Bulgaria</option> <option value="BF">Burkina Faso</option> <option value="BI">Burundi</option> <option value="KH">Cambodia</option> <option value="CM">Cameroon</option> <option value="CA">Canada</option> <option value="CV">Cape Verde</option> <option value="KY">Cayman Islands</option> <option value="CF">Central African Republic</option> <option value="TD">Chad</option> <option value="CL">Chile</option> <option value="CN">China</option> <option value="HK">China (Hong Kong S.A.R.)</option> <option value="MO">China (Macau S.A.R.)</option> <option value="CX">Christmas</option> <option value="CC">Cocos (Keeling) Islands</option> <option value="CO">Colombia</option> <option value="KM">Comoros</option> <option value="CG">Congo</option> <option value="CD">Congo, Democractic Republic of</option> <option value="CK">Cook Islands</option> <option value="CR">Costa Rica</option> <option value="CI">Cote D Ivoire (Ivory Coast)</option> <option value="HR">Croatia (Hrvatska)</option> <option value="CU">Cuba</option> <option value="CY">Cyprus</option> <option value="CZ">Czech Republic</option> <option value="DK">Denmark</option> <option value="DJ">Djibouti</option> <option value="DM">Dominica</option> <option value="DO">Dominican Republic</option> <option value="TP">East Timor</option> <option value="EC">Ecuador</option> <option value="EG">Egypt</option> <option value="SV">El Salvador</option> <option value="GQ">Equatorial Guinea</option> <option value="ER">Eritrea</option> <option value="EE">Estonia</option> <option value="ET">Ethiopia</option> <option value="FK">Falkland Islands (Islas Malvin)</option> <option value="FO">Faroe Islands</option> <option value="FJ">Fiji Islands</option> <option value="FI">Finland</option> <option value="FR">France</option> <option value="GF">French Guiana</option> <option value="PF">French Polynesia</option> <option value="TF">French Southern Territories</option> <option value="GA">Gabon</option> <option value="GM">Gambia, The</option> <option value="GE">Georgia</option> <option value="DE">Germany</option> <option value="GH">Ghana</option> <option value="GI">Gibraltar</option> <option value="GR">Greece</option> <option value="GL">Greenland</option> <option value="GD">Grenada</option> <option value="GP">Guadeloupe</option> <option value="GU">Guam</option> <option value="GT">Guatemala</option> <option value="GN">Guinea</option> <option value="GW">Guinea-Bissau</option> <option value="GY">Guyana</option> <option value="HT">Haiti</option> <option value="HM">Heard and McDonald Islands</option> <option value="HN">Honduras</option> <option value="HU">Hungary</option> <option value="IS">Iceland</option> <option value="IN" selected>India</option> <option value="ID">Indonesia</option> <option value="IR">Iran</option> <option value="IQ">Iraq</option> <option value="IE">Ireland</option> <option value="IL">Israel</option> <option value="IT">Italy</option> <option value="JM">Jamaica</option> <option value="JP">Japan</option> <option value="JO">Jordan</option> <option value="KZ">Kazakhstan</option> <option value="KE">Kenya</option> <option value="KI">Kiribati</option> <option value="KR">Korea</option> <option value="KP">Korea, North</option> <option value="KW">Kuwait</option> <option value="KG">Kyrgyzstan</option> <option value="LA">Laos PDR</option> <option value="LV">Latvia</option> <option value="LB">Lebanon</option> <option value="LS">Lesotho</option> <option value="LR">Liberia</option> <option value="LY">Libya</option> <option value="LI">Liechtenstein</option> <option value="LT">Lithuania</option> <option value="LU">Luxembourg</option> <option value="MK">Macedonia</option> <option value="MG">Madagascar</option> <option value="MW">Malawi</option> <option value="MY">Malaysia</option> <option value="MV">Maldives</option> <option value="ML">Mali</option> <option value="MT">Malta</option> <option value="MH">Marshall Islands</option> <option value="MQ">Martinique</option> <option value="MR">Mauritania</option> <option value="MU">Mauritius</option> <option value="YT">Mayotte</option> <option value="MX">Mexico</option> <option value="FM">Micronesia</option> <option value="MD">Moldova</option> <option value="MC">Monaco</option> <option value="MN">Mongolia</option> <option value="ME">Montenegro</option> <option value="MS">Montserrat</option> <option value="MA">Morocco</option> <option value="MZ">Mozambique</option> <option value="MM">Myanmar</option> <option value="NA">Namibia</option> <option value="NR">Nauru</option> <option value="NP">Nepal</option> <option value="AN">Netherlands Antilles</option> <option value="NC">New Caledonia</option> <option value="NZ">New Zealand</option> <option value="NI">Nicaragua</option> <option value="NE">Niger</option> <option value="NG">Nigeria</option> <option value="NU">Niue</option> <option value="NF">Norfolk Island</option> <option value="MP">Northern Mariana Islands</option> <option value="NO">Norway</option> <option value="OM">Oman</option> <option value="PK">Pakistan</option> <option value="PW">Palau</option> <option value="PA">Panama</option> <option value="PG">Papua new Guinea</option> <option value="PY">Paraguay</option> <option value="PE">Peru</option> <option value="PH">Philippines</option> <option value="PN">Pitcairn Island</option> <option value="PL">Poland</option> <option value="PT">Portugal</option> <option value="PR">Puerto Rico</option> <option value="QA">Qatar</option> <option value="RE">Reunion</option> <option value="RO">Romania</option> <option value="RU">Russia</option> <option value="RW">Rwanda</option> <option value="SH">Saint Helena</option> <option value="KN">Saint Kitts And Nevis</option> <option value="LC">Saint Lucia</option> <option value="PM">Saint Pierre and Miquelon</option> <option value="VC">Saint Vincent And The Grenadin</option> <option value="WS">Samoa</option> <option value="SM">San Marino</option> <option value="ST">Sao Tome and Principe</option> <option value="SA">Saudi Arabia</option> <option value="SN">Senegal</option> <option value="RS">Serbia</option> <option value="SC">Seychelles</option> <option value="SL">Sierra Leone</option> <option value="SG">Singapore</option> <option value="SK">Slovakia</option> <option value="SI">Slovenia</option> <option value="SB">Solomon Islands</option> <option value="SO">Somalia</option> <option value="ZA">South Africa</option> <option value="GS">South Georgia</option> <option value="ES">Spain</option> <option value="LK">Sri Lanka</option> <option value="SD">Sudan</option> <option value="SR">Suriname</option> <option value="SJ">Svalbard And Jan Mayen Islands</option> <option value="SZ">Swaziland</option> <option value="SE">Sweden</option> <option value="CH">Switzerland</option> <option value="SY">Syria</option> <option value="TW">Taiwan</option> <option value="TJ">Tajikistan</option> <option value="TZ">Tanzania</option> <option value="TH">Thailand</option> <option value="NL">The Netherlands</option> <option value="TG">Togo</option> <option value="TK">Tokelau</option> <option value="TO">Tonga</option> <option value="TT">Trinidad And Tobago</option> <option value="TN">Tunisia</option> <option value="TR">Turkey</option> <option value="TM">Turkmenistan</option> <option value="TC">Turks And Caicos Islands</option> <option value="TV">Tuvalu</option> <option value="UG">Uganda</option> <option value="UA">Ukraine</option> <option value="AE">United Arab Emirates</option> <option value="UK">United Kingdom</option> <option value="UM">United States Minor Outlying I</option> <option value="US">United States of America</option> <option value="UY">Uruguay</option> <option value="UZ">Uzbekistan</option> <option value="VU">Vanuatu</option> <option value="VA">Vatican City State (Holy See)</option> <option value="VE">Venezuela</option> <option value="VN">Vietnam</option> <option value="VG">Virgin Islands (British)</option> <option value="VI">Virgin Islands (US)</option> <option value="WF">Wallis And Futuna Islands</option> <option value="EH">Western Sahara</option> <option value="YE">Yemen</option> <option value="YU">Yugoslavia</option> <option value="ZM">Zambia</option> <option value="ZW">Zimbabwe</option></select><input type="Hidden" name="country_iso_sms" value="IN"   ID="txtCountry"><input type="Hidden" name="sender_country" value="India"></DIV></TD></tr><tr><td align="right" class="mr_s mr1_s"><font class="qstar_s">*</font><span> Mobile: </span></td><td valign="TOP" align="LEFT" class="mr3" style="heightL:18px;padding-top:8px;"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><input type="TEXT" name="s_cmobile_sms"   class="txtfn_s" size="5" readonly="READONLY" style="width:30px;height:18px;" value="+91"></td><td><img src="'+img_path+'zero.gif"   width="6" height="1"></td><td><input type="TEXT" name="sms_sender_mobile"   MAXLENGTH(10) id="S_mobile"  size="20" class="txtfn_s" style="width: 202px;" value=""></td></tr></tbody></table></td></tr><tr><td align="right" class="mr_s mr1_s">Website:</td><td valign="TOP" class="mr2_s"><input name="sms_website"   style="width:242px; " value=""   class="txtfn_s"></td></tr><tr><td align="right" class="mr_s mr1_s">Company:</td><td valign="TOP" class="mr2_s"><input name="sms_company"   style="width:242px; " value=""   class="txtfn_s"></td></tr><tr><td align="right" class="mr_s mr1_s">City:</td><td valign="TOP" class="mr2_s"><input name="sms_city" value=""   style="width:242px;" class="txtfn_s"></td></tr><tr><td align="left" class="mr_s mr1_s"><font class="qstar_s">*</font>Enter the code:</td><td valign="TOP" align="LEFT" class="mr2_s"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><input type="TEXT" name="sms_captcha_text"   size="5" style="width:115px;height:18px;" class="txtfn_s" value=""><input type="HIDDEN" name="sms_captcha_ref" value=""  id="captcha_rannum1"></td><td><img src="'+img_path+'zero.gif"   width="6" height="1"></td><div class="black_overlay"></div>');

document.write('<td><DIV id="first_img" style="display:inline;">');
document.write('<img WIDTH="120" HEIGHT="30" id="sms_captcha" src="">');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript"> document.sms_dataform.sms_captcha_ref.value = new_ran_num_sms;</SCRIPT>');
document.write('</DIV></td>');

document.write('<td><DIV ID="wrong_captcha11" style="display:none;"><SCRIPT TYPE="text/javascript">document.write(cap_sms);</SCRIPT>');
document.write('</DIV></td>');

document.write('</tr></tbody></table></td></tr><tr><td></td><td valign="middle">');
document.write('<FONT COLOR="RED"><DIV ID="resultid" STYLE="display:none;"></DIV></FONT>');
document.write('<div class="w6_s"><a href="javascript:void(0);"   onclick="sms_validation();"><div class="fsms6_s"></div></A></div></td></tr></table></div><div class="clbg2_s"></div> <p class="cbp1_s"></p> <div class="pad_1_s_s"></div></div>  <p class="fl_s cbc1_5_s"></p></div></TD></tr></table></DIV>');


document.write('<DIV ID="message_sms3" STYLE="position: absolute; top: 100px; left: 0px; z-index: 2000"; class="doff"><input type="hidden" name="native_captcha" value="1"><input type="hidden" name="display" value="1"><table ID="tableheight" BORDER="0" CELLPADDING="0" CELLSPACING="0" class="main_s"><tr><TD ID="divscroll_sms" class="fnt_1_s"><div class="clw2_s"><table width="100%" cellpadding="0" cellspacing="0" ><tr><td><td valign="middle" width="100%" class="cbc_1_s fnt4_s">Send SMS Enquiry</td><td valign="top" class="cbc_1_s"><p class="clsp_s cu_s" ONCLICK="blowup_sms_off1()"></p></td><td><p class="cmr_1_s"></p></td></tr></table><div class="cbc_3_s"><br><br>  <p class="thk_1_s">Thank you for using SMS Service</p><br><table width="390"><tr><td align="center"><div class="byr_s"></div></td></tr></table><p class="thkt_1_s" align="center">');
document.write('<div id="sender_mobile_no_id" align="center"></div>');
document.write('</p> <br><p align="center" class="txt11_p"><img src="'+img_path+'conn4.gif"   height="93" width="20"></p><br><table width="390"><tr><td align="center"><div class="byr_s"></div></td></tr></table><p class="thkt_1_s" align="center">');
document.write('<div id="receiver_mobile_no_id" align="center"></div>');
document.write('</p> <br><br><p class="thk_1_s">SMS has been sent successfully ! </p><br><br>  </div><div class="pad_1_s_s"></div></div>   <p class="fl_s cbc1_5_s"></p> <div class="black_overlay"></div></div></TD></tr>  </table></form></DIV></form>');function openchildts1(thisurl) 
{
browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;
if (condition == true  )
CanAnimate = true;
else
CanAnimate = false;
if ( CanAnimate ) {
var windowHeight; var windowWidth; var windowTop; var windowLeft;
if (browserName == 'Microsoft Internet Explorer')
{
        windowWidth="550px";
}
else
{
        windowWidth="553px";
/*      windowWidth=(screen.width*(57/100)-200);*/
}
windowHeight=(screen.height*(80/100))*0.85;
windowTop=(screen.height*(20/100))*0.8; windowLeft=screen.width*(40.2/100);
msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,top='+windowTop+',left='+windowLeft+',width='+windowWidth+',height='+windowHeight);
msgWindow.focus(); msgWindow.location.href = thisurl; }
else {
msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=510,height=420'); } 
};function tollfree() 
	{
	var myDate = new Date();
		var gmt = -myDate.getTimezoneOffset()/60;
		if(gmt == 5.5)
		{
			document.getElementById('tollfree').innerHTML = 'Call Us:&nbsp<b> 08588850122</b>';
		}else
		{
		document.getElementById('tollfree').innerHTML = 'Call Us:&nbsp;<b>+(91)-8588850122</b>';
		}	
	};
/*pns number closed*/
/*for search box start*/
function searchCheck(){
var str='';
if(document.frm.ss.value=='' || document.frm.ss.value=='Search Products/Services'){
alert("Please enter some keyword to search.");
document.frm.ss.focus();
document.frm.ss.value='';
return false;}
if(document.frm.ss.value.length<3){
alert("Please Enter atleast 3 character");
document.frm.ss.focus();
return false;}
if(document.frm.ss.value){
var str1;
str1=document.frm.ss.value.replace(/^\s+/g,'').replace(/\s+$/g,'');
str1=str1.replace(/[^a-zA-Z0-9+]/g,' ');
str1=str1.replace(/\+/g,' ');
str1=str1.replace(/\s+/g,'+');
str+='ss='+str1;
window.location = "http://www.indiamart.com/karsenwelch/search.html?"+str;
return false;}};
function searchClear(){
if(document.frm.ss.value=='Search Products/Services'){
document.frm.ss.value='';}};
function settext(){
if(document.frm.ss.value==''){
document.frm.ss.value='Search Products/Services';}};
function settextvalue(){
document.frm.ss.value='Search Products/Services';};
function getDwsCookie(Name){
var search=Name+"=";
if(document.cookie.length>0){
offset=document.cookie.indexOf(search);
if(offset !=-1){
offset+=search.length;
end=document.cookie.indexOf(";",offset);
if(end==-1)end=document.cookie.length;
return unescape(document.cookie.substring(offset,end));}}
return "";};
function setDwsCookie(name,value)
{
    if(value.length>0)
        document.cookie=name+"="+escape(value)+";";
};
/*end of search box functions*/
/*for DWS cookies start*/
function getDwsCookie(Name)
{
	var search = Name + "=";
	if (document.cookie.length > 0)
	{ /* if there are any cookies*/
		offset = document.cookie.indexOf(search);
		if (offset != -1)
		{ /* if cookie exists*/
			offset += search.length;
			/* set index of beginning of value*/
			end = document.cookie.indexOf(";", offset);
			/* set index of end of cookie value*/
			if (end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		}
	}
	return "";
};
function setDwsCookie(name,value)
{
    if(value.length>0)
        document.cookie=name+"="+escape(value)+";";
};
/*end of DWS cookies*/
/*cookies for category page starts*/
function getCartCookie(Name)
{
    var search = Name + "=";
    if (document.cookie.length > 0)
    { /* if there are any cookies*/
        offset = document.cookie.indexOf(search);
        if (offset != -1)
        { /* if cookie exists*/
            offset += search.length;
            /* set index of beginning of value*/
            end = document.cookie.indexOf(";", offset);
            /* set index of end of cookie value*/
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
    }
    return "";
};
/*cookies for category page starts*/
/*drop.js start*/

/*drop.js ends*/
/* following js is used to convert language*/
;

/*scroller function start*/
var Imgs=[];
function ImgLoad(cls) 
{ 
	var as=zxcByClassName(cls); 
	for (var z0=0;z0<as.length;z0++) 
	{ 
		if (as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0]) 
		{ 
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')); Imgs.push(oop); 
		}
		else if(as[z0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0])
		{
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel')); Imgs.push(oop); 
		}
	} 
CkTop(); 
};
function Fade(img,src)
{ 
	this.img=img; this.src=src; this.opc=0; 
};
Fade.prototype.fade=function()
{ 
	if (this.opc==0) this.img.src=this.src; 
	var oop=this; 
};
function CkTop()
{ 
	for (var z0=0;z0<Imgs.length;z0++)
	{ 
		if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==0)
		{ 
			Imgs[z0].fade(); Imgs.splice(z0,1); z0--; 
		} 
	} 
};
function zxcWWHS(){ if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset]; else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop]; return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop]; };
function zxcPos(obj){ var rtn=[0,0]; while(obj){ rtn[0]+=obj.offsetLeft; rtn[1]+=obj.offsetTop; obj=obj.offsetParent; } return rtn; };
function zxcByClassName(nme,el,tag) 
{ 
	if (typeof(el)=='string') 
	el=document.getElementById(el);
	el=el||document;
	ary=[];
	if(nme != 'undefined') 
	{ 
		for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),z0=0; z0<els.length;z0++) 
		{ 
			if(reg.test(els[z0].className)) 
			ary.push(els[z0]); 
		} 
	} 

	return ary;
};
window.onscroll=CkTop;
/*thankyou and thankyou1 page functions start*/
function printit()
{
parent.contact.focus();
parent.contact.print();
};
function savebookmark()
{
if (window.sidebar) { /* Mozilla Firefox Bookmark*/
window.sidebar.addPanel("Karsen & Welch Cleantech Industries", "http://www.indiamart.com/karsenwelch/","");
} else if( window.external ) { /* IE Favorite*/
window.external.AddFavorite( "http://www.indiamart.com/karsenwelch/", "Karsen & Welch Cleantech Industries"); }
else if(window.opera && window.print) { /* Opera Hotlist*/
return true; }
};
function getCookie(Name)
{
var search = Name + "=";
if (document.cookie.length > 0)
{ /* if there are any cookies*/
offset = document.cookie.indexOf(search);
if (offset != -1)
{ /* if cookie exists*/
offset += search.length;
/* set index of beginning of value*/
end = document.cookie.indexOf(";", offset);
/* set index of end of cookie value*/
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(offset, end));
}
}
return "";
};
function get()
{
if( (cookie = getCookie("newImeshID")) > ""){
Values = cookie.split("|");
return (Values[1]);
}
else
{
return ("");
}
};
function goback() 
{
history.go(-1);
};
/*thankyou and thankyou1 page functions closed*/
/*scroller function closed*/
/*new zoomup starts*/
var _FG_tracker=null;function up_form_blow(c,b){var a=document.getElementById(b);a.style.display="block";var d=document.getElementById(c);d.style.display="block"}function fg_hideform_blow(d,c,a,f){var e=document.getElementById(d);e.style.display="none";var b=document.getElementById(c);b.style.display="none";document.getElementById("bimg"+f).src=a}function imgset(id){imgid=id;imgid1=id;inext=document.getElementById("inext"+id);ipre=document.getElementById("ipre"+id);iprname=document.getElementById("iprname");if((id==1)&&(id==dataref1.length)){ipre.style.display="none";inext.style.display="none"}else{if(id==dataref1.length){inext.style.display="none";ipre.style.display="block"}else{if(id==1){ipre.style.display="none";inext.style.display="block"}else{ipre.style.display="block";inext.style.display="block"}}}}function nextimg(){if(imgid<dataref1.length){imgid++}if(imgid<dataref1.length){var b=imgid;inext.style.display="block";ipre.style.display="block"}else{var b=imgid;inext.style.display="none";ipre.style.display="block"}set_big_img_path(b);if(document.getElementById(b)){var a=document.getElementById(b).alt;a=unescape(a)}else{var b=--imgid}}function previousimg(){if(imgid>1){imgid--}if(imgid<=1){var b=imgid;ipre.style.display="none";inext.style.display="block"}else{var b=imgid;ipre.style.display="block";inext.style.display="block"}set_big_img_path(b);var a=document.getElementById(b).alt;a=unescape(a)}function set_big_img_path(imgid){var k=dataref1.length-1;if(k>=0){var i=imgid-1;path=eval("dataref1["+i+"].img_path");document.getElementById("bimg"+imgid1).src=path;pname=eval("dataref1["+i+"].img_name");document.getElementById("bimgname"+imgid1).innerHTML=pname}}function fg_hideform(c,b){var d=document.getElementById(c);d.style.display="none";var a=document.getElementById(b);a.style.display="none"};
function ESCclose(e)
{
    if (!e) e = window.event;
    if ((e.keyCode || e.charCode) =='27' ) 
    {
     window.close();
    }
};
/*new zoomup ends*/function tollfree11() 
{
var myDate = new Date();
	var gmt = -myDate.getTimezoneOffset()/60;
	if(gmt == 5.5)
	{
		document.getElementById('tollfree11').innerHTML = '08588850122';
	}else
	{
	 document.getElementById('tollfree11').innerHTML = '+(91)-8588850122';
	}	
};
function tollfree1()
{
var myDate = new Date();
	var gmt = -myDate.getTimezoneOffset()/60;
	if(gmt == 5.5)
	{
		document.getElementById('tollfree1').innerHTML = '<a href="tel:+91 8588850122">08588850122</a>';
	}else
	{
	 document.getElementById('tollfree1').innerHTML = '<a href="tel:+91 8588850122">+(91)-8588850122</a>';
	}	
};
/*---------------search-------------------*/
function searchCheck2()
{
	var str = '';
	var temp2 =document.frm.ss.value;
	var temp3 = temp2.replace(/\s/gi,"");
	if (document.frm.ss.value=='' || document.frm.ss.value=='Search Products/Services' || temp3.length == 0)	{
		alert("Please enter some keyword to search.");
		document.frm.ss.focus();
                document.frm.ss.value='';
		return false;
	}

	if (document.frm.ss.value.length < 3) {
		alert("Please Enter atleast 3 character");
		document.frm.ss.focus();
		document.frm.ss.value='';
		return false;
        }

        if (document.frm.ss.value) {
	var str1;
	str1 = document.frm.ss.value.replace(/^\s+/g, '').replace(/\s+$/g, '');
	str1 = str1.replace(/[^a-zA-Z0-9+ ]/g, ' ');
	str1 = str1.replace(/\+/g, ' ');
	str1 = str1.replace(/\s+/g, '+');
	str += 'ss='+str1;
window.location = "http://www.indiamart.com/karsenwelch/search.html?"+str;
return false;
        }
}

function searchClear2()
{
	if (document.frm.ss.value=='Search Products/Services')	{
		document.frm.ss.value='';
	}
}

function settext2()
{
	if (document.frm.ss.value=='')  {
		document.frm.ss.value='Search Products/Services';
	}
}

function settextvalue2()
{
	document.frm.ss.value='Search Products/Services';
}

function searchCheck1()
{
	var str = '';
	var temp21 =document.frm1.ss1.value;
	var temp31 = temp21.replace(/\s/gi,"");
	if (document.frm1.ss1.value=='' || document.frm1.ss1.value=='Search Products/Services' || temp31.length == 0)	{
		alert("Please enter some keyword to search.");
		document.frm1.ss1.focus();
                document.frm1.ss1.value='';
		return false;
	}

	if (document.frm1.ss1.value.length < 3) {
		alert("Please Enter atleast 3 character");
		document.frm1.ss1.focus();
		document.frm1.ss1.value='';
		return false;
        }

        if (document.frm1.ss1.value) {
	var str1;
	str1 = document.frm1.ss1.value.replace(/^\s+/g, '').replace(/\s+$/g, '');
	str1 = str1.replace(/[^a-zA-Z0-9+ ]/g, ' ');
	str1 = str1.replace(/\+/g, ' ');
	str1 = str1.replace(/\s+/g, '+');
	str += 'ss='+str1;
window.location = "http://www.indiamart.com/karsenwelch/search.html?"+str;
return false;
        }
}
function searchClear1()
{
	if (document.frm1.ss1.value=='Search Products/Services')	{
		document.frm1.ss1.value='';
	}
}

function settext1()
{
	if (document.frm1.ss1.value=='')  {
		document.frm1.ss1.value='Search Products/Services';
	}
}

function settextvalue1()
{
	document.frm1.ss1.value='Search Products/Services';
}
/*-----------------end--------------*/
/* load view port*/
function LoadSliderImage() {
		var a = parseInt(jQuery(".bodyscroll").offset().left);
		var windowTopvar = (window.pageYOffset!=undefined)?window.pageYOffset:window.document.documentElement.scrollTop;
		var b = Math.abs(jQuery(".bodyscroll").offset().left) + parseInt(jQuery(".bodyscroll").css("width"));
		if (parseInt(jQuery("#slider").offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery("#slider").offset().top) + parseInt(jQuery("#slider").height())) > (parseInt(windowTopvar))) {
		jQuery(".inside_2 a img").each(function () {
		if (parseInt(jQuery(this).offset().left) > a && parseInt(jQuery(this).offset().left) < b) {
		oop = new Fade(this, this.getAttribute("rel"));
		Imgs.push(oop);
}
})
}
CkTop();
};
var Imgs=[];
function ImgLoad(cls) 
{ 
	var as=zxcByClassName(cls); 
	for (var z0=0;z0<as.length;z0++) 
	{ 
		if (as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0]) 
		{ 
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')); Imgs.push(oop); 
		}
		else if(as[z0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0])
		{
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel')); Imgs.push(oop); 
		}
	} 
CkTop(); 
};
function Fade(img,src)
{ 
	this.img=img; this.src=src; this.opc=0; 
};
Fade.prototype.fade=function()
{ 
	if (this.opc==0) this.img.src=this.src; 
	var oop=this; 
};
function CkTop()
{ 
	for (var z0=0;z0<Imgs.length;z0++)
	{ 
		if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==0)
		{ 
			Imgs[z0].fade(); Imgs.splice(z0,1); z0--; 
		} 
	} 
};
function zxcWWHS(){ if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset]; else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop]; return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop]; };
function zxcPos(obj){ var rtn=[0,0]; while(obj){ rtn[0]+=obj.offsetLeft; rtn[1]+=obj.offsetTop; obj=obj.offsetParent; } return rtn; };
function zxcByClassName(nme,el,tag) 
{ 
	if (typeof(el)=='string') 
	el=document.getElementById(el);
	el=el||document;
	ary=[];
	if(nme != 'undefined') 
	{ 
		for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),z0=0; z0<els.length;z0++) 
		{ 
			if(reg.test(els[z0].className)) 
			ary.push(els[z0]); 
		} 
	} 

	return ary;
};
function offsettop(options) {
	core_strundefined = typeof undefined;
	

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = options,
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	

	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

function getWindow( elem ) {
	return (elem != null && elem == elem.window)?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
function Windowheight() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
  
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
   
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
  
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  
  return myHeight;
}
function LoadImageinViewPort() {
var windowTopvar = (window.pageYOffset!=undefined)?window.pageYOffset:window.document.documentElement.scrollTop;

if (typeof jQuery == 'undefined') {
	var LazyImages = document.getElementsByTagName('img');
	var imageLink = "";
	
	for(i=0;i<LazyImages.length;i++){
		imageLink="";	
			
			if (parseInt(offsettop(LazyImages[i]).top) <= (parseInt(windowTopvar) + parseInt(Windowheight())) && (parseInt(offsettop(LazyImages[i]).top) + parseInt(Windowheight())) > (parseInt(windowTopvar))) {
				if(LazyImages[i].getAttribute('rel')!=null && LazyImages[i].getAttribute('rel')!=""){
					imageLink = LazyImages[i].getAttribute("rel");
				}else if(LazyImages[i].parentNode.getAttribute('rel')!=null && LazyImages[i].parentNode.getAttribute('rel')!=""){
					imageLink = LazyImages[i].parentNode.getAttribute("rel");
				}
				if(imageLink!=""){
					oop = new Fade(LazyImages[i], imageLink);
					Imgs.push(oop);
				}
			}
		
	}
} else {
    	jQuery("img[rel]").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())) > (parseInt(windowTopvar))) {
			oop = new Fade(this, this.getAttribute("rel"));
			Imgs.push(oop);
		}
	});
	jQuery("a[rel] img").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())) > (parseInt(windowTopvar))) {
			oop = new Fade(this, jQuery(this).parent("a[rel]").attr("rel"));
			Imgs.push(oop)
		}
	});
}
if (window.addEventListener)
window.addEventListener("scroll", bindFunctionOnScroll, false);
else if (window.attachEvent)
window.attachEvent("onscroll", bindFunctionOnScroll);
else window.onscroll = bindFunctionOnScroll;
CkTop();

};
var timer; 
function bindFunctionOnScroll(){ 	
	clearTimeout(timer); 
	timer = setTimeout( LoadImageinViewPort , 150 );
	};
/******** Load View Port End******************/
//blowup
var _FG_tracker=null;
function up_form_blow(formdiv_id,bg_div_id)
{
var bgdiv = document.getElementById(bg_div_id);
bgdiv.style.display="block";
var formdiv = document.getElementById(formdiv_id);
formdiv.style.display="block";
}
function fg_hideform_blow(formdiv_id,bg_div_id,img,id)
{
var formdiv = document.getElementById(formdiv_id);
formdiv.style.display="none";
var bgdiv = document.getElementById(bg_div_id);
bgdiv.style.display="none";
document.getElementById('bimg'+id).src=img;
}
function imgset(id){imgid=id;imgid1=id;inext=document.getElementById('inext'+id);ipre=document.getElementById('ipre'+id)
iprname=document.getElementById('iprname'+id);if((id==1) && (id==dataref1.length)){ipre.style.display='none';inext.style.display='none';}else{if(id==dataref1.length){inext.style.display='none';ipre.style.display='block';}else if(id==1){ipre.style.display='none';inext.style.display='block';}else{ipre.style.display='block';inext.style.display='block';}};}
function nextimg(){if(imgid<dataref1.length){imgid++;}if(imgid<dataref1.length){var newImg=imgid;inext.style.display='block';ipre.style.display='block';}else{var newImg=imgid;inext.style.display='none';ipre.style.display='block';}set_big_img_path(newImg);if(document.getElementById(newImg)){var productName=document.getElementById(newImg).alt;productName=unescape(productName);
}else{var newImg=--imgid;}}
function previousimg(){if(imgid>1){imgid--;}if(imgid<=1){var newImg=imgid;ipre.style.display='none';inext.style.display='block';}else{var newImg=imgid;ipre.style.display='block';inext.style.display='block';}set_big_img_path(newImg);var productName=document.getElementById(newImg).alt;productName=unescape(productName);
}
function set_big_img_path(imgid){var k=dataref1.length-1;if(k>=0){var i=imgid-1;path=eval("dataref1["+i+"].img_path");document.getElementById('bimg'+imgid1).src=path;pname=eval("dataref1["+i+"].img_name");document.getElementById('bimgname'+imgid1).innerHTML=pname;}}

//blowup end
//start
var persistmenu="yes" //"yes" or "no". Make sure each DIV content contains an incrementing ID starting at 1 (id="sub1", id="sub2", etc)
var persisttype="sitewide" //enter "sitewide" for menu to persist across site, "local" for this page only

if (document.getElementById){ //DynamicDrive.com change
document.write('<style type="text/css">\n')
document.write('.hn{display: none;}\n')
document.write('.sub{display: none;}\n')
document.write('.sub1_p{display: none;}\n')
document.write('.sub-1_p{display: none;}\n')
document.write('.tbq{display: none;}\n')
document.write('</style>\n')
}
function SwitchMenu(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv").getElementsByTagName("div"); //DynamicDrive.com change
		if(el.style.display != "inline"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="tbq") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "inline";
		}
	}
}
function SwitchMenu2(obj){
	if(document.getElementById){
		var el = document.getElementById(obj);
		var ar = document.getElementById("masterdiv2").getElementsByTagName("div"); //DynamicDrive.com change
		if(el.style.display != "inline"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="sub1") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "inline";}
			else{
				el.style.display = "none";
			}
	}
}
function SwitchMenu3(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv3").getElementsByTagName("table"); //DynamicDrive.com change
		if(el.style.display != "block"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="sub-1_p") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "block";}
			else{
			el.style.display = "none";
		}
	}
}
function SwitchMenu4(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv4").getElementsByTagName("table"); //DynamicDrive.com change
		if(el.style.display != "block"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="sub1_p") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "block";}
			else{
			el.style.display = "none";
		}
	}
}
//closed
function showcontact(co, im , im1)
{
if (document.getElementById(co).className=="doff")
{
document.getElementById(co).className="don";
document.getElementById(im).src="ts/zero.gif";
document.getElementById(im).className=" b cu co6 txr doff";
document.getElementById(im1).className=" b cu co6 txr don";
}
else
{
document.getElementById(co).className="doff";
document.getElementById(im).src="ts/zero.gif";
document.getElementById(im).className="b cu co6 txr don";
document.getElementById(im1).className="b cu co6 txr doff";
}
}
/* hide show closed */
//  on this page drop/drop1.js,language converter.js,callfree.js, plus/minus for pages, scroller function ,category page cookie,search condition,pns function//
function CellValue_r(FieldName) {
	if(FieldName.value == 'Mobile Number' ||  FieldName.value == 'Mobile / Cell Phone Number')
	{
	FieldName.value = '';
	FieldName.className='txtf mobile_p mbl_s1';
	}
	else
	{
		FieldName.className='txtf mobile_p mbl_s1';
	}
};
function CellValue_r11(FieldName) {
	if(FieldName.value == 'Mobile Number' ||  FieldName.value == 'Mobile / Cell Phone Number')
	{
	FieldName.value = '';
	FieldName.className='mobile_p  mbl_s1';
	}
	else
	{
		FieldName.className='mobile_p  mbl_s1';
	}
};
function CellValue1_r(FieldName) {
	if(FieldName.value == '')
	{
		FieldName.value = 'Mobile Number';
		FieldName.className='txtfa mobile_p mbl_s1';
	}
	else
	{
		FieldName.className='txtf mobile_p mbl_s1';
	}
};
function CellValue1_r11(FieldName) {
	if(FieldName.value == '')
	{
		FieldName.value = 'Mobile Number';
		FieldName.className='mobile_p mbl_s1';
	}
	else
	{
		FieldName.className='mobile_p mbl_s1';
	}
};