
/*
**************************
(C)2010-2015 phpMyWind.com
update: 2012-10-16 14:31:32
person: Feng
**************************
*/


$(function(){
	$(".input").focus(function(){
		$(this).attr("class","inputon");
	}).blur(function(){
		$(this).attr("class","input");
	});

	$(".sub").mouseover(function(){
		$(this).attr("class","subon");
	}).mouseout(function(){
		$(this).attr("class","sub");
	}).mousedown(function(){
		$(this).attr("class","subdown");
	});

	$("#username").focus();


	$(".class_input").focus(function(){
		$(this).attr("class","class_input_on");
	}).blur(function(){
		$(this).attr("class","class_input");
	});

	$(".class_areatext").focus(function(){
		$(this).attr("class","class_areatext_on");
	}).blur(function(){
		$(this).attr("class","class_areatext");
	});

});

function CheckReg()
{
	var ckupwd = /^[0-9a-zA-Z_-]+$/;
	if($("#password").val() == "")
	{
		alert("密码不能为空！");
		$("#password").focus();
		return false;
	}
	else if($("#password").val().length < 6 || $("#password").val().length > 16)
	{
		alert("密码长度为6~16位字符！");
		$("#password").focus();
		return false;
	}
	else if(!ckupwd.test($("#password").val()))
	{
		alert("请使用[数字/字母/中划线/下划线]！");
		$("#password").focus();
		return false;
	}


	if($("#repassword").val() == "")
	{
		alert("确认密码不能为空！");
		$("#repassword").focus();
		return false;
	}
	else if($("#password").val() != $("#repassword").val())
	{
		alert("两次输入的密码不相同！");
		$("#repassword").focus();
		return false;
	}

	if($("#validate1").val() == "")
	{
		alert("验证码不能为空！");
		$("#validate1").focus();
		return false;
	}
	if($("#isvalidate1").val() != $("#validate1").val())
	{
		alert("验证码错误");
		$("#validate1").focus();
		return false;
	}

}

function CheckLog()
{
	if($("#username").val() == "")
	{
		alert("请输入用户名！");
		$("#username").focus();
		return false;
	}


	if($("#password").val() == "")
	{
		alert("请输入密码！");
		$("#password").focus();
		return false;
	}

	if($("#validate").val() == "")
	{
		alert("请输入验证码！");
		$("#validate").focus();
		return false;
	}
}

function CheckFind()
{
	if($("#username").val() == "")
	{
		alert("请输入用户名！");
		$("#username").focus();
		return false;
	}

	if($("#validate").val() == "")
	{
		alert("请输入验证码！");
		$("#validate").focus();
		return false;
	}
	if($("#isvalidate0").val() != $("#validate").val())
	{
		alert("验证码错误");
		$("#validate").focus();
		return false;
	}
}

function CheckFindQues()
{
	if($("#question").val() == "-1")
	{
		alert("请选择验证问题！");
		$("#question").focus();
		return false;
	}
	if($("#answer").val() == "")
	{
		alert("请输入问题答案！");
		$("#answer").focus();
		return false;
	}
}

function CheckFindMail()
{
	var ckmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if($("#email").val() == "")
	{
		alert("请输入E-mail！");
		$("#email").focus();
		return false;
	}
	else if(!ckmail.test($("#email").val()))
	{
		alert("E-mail格式不正确！");
		$("#email").focus();
		return false;
	}
}

function CheckNewPwd()
{
	var ckupwd = /^[0-9a-zA-Z_=]+$/;
	if($("#password").val() == "")
	{
		alert("密码不能为空！");
		$("#password").focus();
		return false;
	}
	else if($("#password").val().length < 6 || $("#password").val().length > 16)
	{
		alert("密码长度为6~16位字符！");
		$("#password").focus();
		return false;
	}
	else if(!ckupwd.test($("#password").val()))
	{
		alert("请使用[数字/字母/中划线/下划线]！");
		$("#password").focus();
		return false;
	}


	if($("#repassword").val() == "")
	{
		alert("确认密码不能为空！");
		$("#repassword").focus();
		return false;
	}
	else if($("#password").val() != $("#repassword").val())
	{
		alert("两次输入的密码不相同！");
		$("#repassword").focus();
		return false;
	}
}

function cfm_upmember()
{
	if($("#password").val() != "")
	{
		var ckupwd = /^[0-9a-zA-Z_-]+$/;
		if($("#password").val() == "")
		{
			alert("密码不能为空！");
			$("#password").focus();
			return false;
		}
		else if($("#password").val().length < 6 || $("#password").val().length > 16)
		{
			alert("密码长度为6~16位字符！");
			$("#password").focus();
			return false;
		}
		else if(!ckupwd.test($("#password").val()))
		{
			alert("请使用[数字/字母/中划线/下划线]！");
			$("#password").focus();
			return false;
		}

		if($("#repassword").val() == "")
		{
			alert("确认密码不能为空！");
			$("#repassword").focus();
			return false;
		}
		else if($("#password").val() != $("#repassword").val())
		{
			alert("两次输入的密码不相同！");
			$("#repassword").focus();
			return false;
		}

		var ckmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if($("#email").val() == "")
		{
			alert("E-mail不能为空！");
			$("#email").focus();
			return false;
		}
		else if(!ckmail.test($("#email").val()))
		{
			alert("E-mail格式不正确！");
			$("#email").focus();
			return false;
		}
	}
	else
	{
		var ckmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if($("#email").val() == "")
		{
			alert("E-mail不能为空！");
			$("#email").focus();
			return false;
		}
		else if(!ckmail.test($("#email").val()))
		{
			alert("E-mail格式不正确！");
			$("#email").focus();
			return false;
		}
	}
}



/*
 * 级联获取城市
 *
 * @access   public
 * @val      string  选择的省枚举值
 * @input    string  返回的select
 * @return   string  返回的option
 */

function SelProv(val,input)
{
	$("#"+input+"_country").html("<option>--</option>");

	$.ajax({
		url : "?a=getarea&datagroup=area&level=1&areaval="+val,
		type:'get',
		dataType:'html',
		success:function(data){
			$("#"+input+"_city").html(data);
		}
	});
}


/*
 * 级联选择区县
 *
 * @access   public
 * @val      string  选择的市枚举值
 * @input    string  返回的select
 * @return   string  返回的option
 */

function SelCity(val,input)
{
	$.ajax({
		url : "?a=getarea&datagroup=area&level=2&areaval="+val,
		type:'get',
		dataType:'html',
		success:function(data){
			$("#"+input+"_country").html(data);
		}
	});
}


//选择所有
function CheckAll(value)
{
	$("input[type='checkbox'][name^='checkid']").attr("checked",value);
}


//删除选中提示
function ConfDelAll(i)
{
	var tips = Array();
	tips[0] = "确定要删除选中的信息吗？";
	tips[1] = "系统会自动删除类别下所有子类别以及信息，确定删除吗？";
	tips[2] = "系统会自动删除类别下所有子类别，确定删除吗？";

	if($("input[type='checkbox'][name!='checkid'][name^='checkid']:checked").size() > 0)
	{
		if(confirm(tips[i])) return true;
		else return false;
	}
	else
	{
		alert('没有任何选中信息！');
		return false;
	}
}

//删除所有(不包含子分类)
function DelAllNone(url)
{
	$("#form").attr("action", url).submit();
}


//绑定账号
function cfm_binding()
{
	var ckuname = /^[0-9a-zA-Z_@\.-]+$/;
	if($("#username").val() == "")
	{
		alert("用户名不能为空！");
		$("#username").focus();
		return false;
	}
	else if($("#username").val().length < 6 || $("#username").val().length > 16)
	{
		alert("用户名长度为6~16位字符！");
		$("#username").focus();
		return false;
	}
	else if(!ckuname.test($("#username").val()))
	{
		alert("请使用[数字/字母/中划线/下划线/@.]！");
		$("#username").focus();
		return false;
	}

	var ckupwd = /^[0-9a-zA-Z_-]+$/;
	if($("#password").val() == "")
	{
		alert("密码不能为空！");
		$("#password").focus();
		return false;
	}
	else if($("#password").val().length < 6 || $("#password").val().length > 16)
	{
		alert("密码长度为6~16位字符！");
		$("#password").focus();
		return false;
	}
	else if(!ckupwd.test($("#password").val()))
	{
		alert("请使用[数字/字母/中划线/下划线]！");
		$("#password").focus();
		return false;
	}
}


function cfm_perfect()
{
	var ckuname = /^[0-9a-zA-Z_@\.-]+$/;
	if($("#username").val() == "")
	{
		alert("用户名不能为空！");
		$("#username").focus();
		return false;
	}
	else if($("#username").val().length < 6 || $("#username").val().length > 16)
	{
		alert("用户名长度为6~16位字符！");
		$("#username").focus();
		return false;
	}
	else if(!ckuname.test($("#username").val()))
	{
		alert("请使用[数字/字母/中划线/下划线/@.]！");
		$("#username").focus();
		return false;
	}



	var ckupwd = /^[0-9a-zA-Z_-]+$/;
	if($("#password").val() == "")
	{
		alert("密码不能为空！");
		$("#password").focus();
		return false;
	}
	else if($("#password").val().length < 6 || $("#password").val().length > 16)
	{
		alert("密码长度为6~16位字符！");
		$("#password").focus();
		return false;
	}
	else if(!ckupwd.test($("#password").val()))
	{
		alert("请使用[数字/字母/中划线/下划线]！");
		$("#password").focus();
		return false;
	}


	if($("#repassword").val() == "")
	{
		alert("确认密码不能为空！");
		$("#repassword").focus();
		return false;
	}
	else if($("#password").val() != $("#repassword").val())
	{
		alert("两次输入的密码不相同！");
		$("#repassword").focus();
		return false;
	}



	var ckmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if($("#email").val() == "")
	{
		alert("E-mail不能为空！");
		$("#email").focus();
		return false;
	}
	else if(!ckmail.test($("#email").val()))
	{
		alert("E-mail格式不正确！");
		$("#email").focus();
		return false;
	}
}

function MathRand() 
{ 
	var Num=""; 
	for(var i=0;i<6;i++){ 
		Num+=Math.floor(Math.random()*10); 
	} 
	return Num;
} 

function ajaxList(val)
{
	$.ajax({
		url : "show.php"+val,
		type:'get',
		dataType:'html',
		success:function(data){
			$("#tmd2").html(data);
		}
	});
}

function SendSms(val)
{
	var textNumber = MathRand();
	$.ajax({
		url : "send.php?action=sendsms&mobile="+val+"&textNumber="+textNumber,
		type:'post',
		dataType:'html',
		success:function(result){
			if(parseInt(result)>0){
				alert("验证码已发到手机，请输入验证码完成验证");
				$("#captcha0").html("<input name='isvalidate0' id='isvalidate0' type='hidden' value='"+textNumber+"'>");
				$("#captcha1").html("<input name='isvalidate1' id='isvalidate1' type='hidden' value='"+textNumber+"'>");
				$("#captcha2").html("<input name='isvalidate2' id='isvalidate2' type='hidden' value='"+textNumber+"'>");
				$("#captcha3").html("<input name='isvalidate3' id='isvalidate3' type='hidden' value='"+textNumber+"'>");
			}else if(result=="0"){
				alert("失败");
			}else if(result=="-1"){
				alert("用户名或者密码不正确");
			}else if(result=="-2"){
				alert("必填选项为空");
			}else if(result=="-3"){
				alert("短信内容0个字节");
			}else if(result=="-4"){
				alert("0个有效号码");
			}else if(result=="-5"){
				alert("余额不够");
			}else if(result=="-10"){
				alert("用户被禁用");
			}else if(result=="-11"){
				alert("短信内容超过500字");
			}else if(result=="-12"){
				alert("无扩展权限");
			}else if(result=="-13"){
				alert("IP校验错误");
			}else if(result=="-14"){
				alert("内容解析异常");
			}else if(result=="-24"){
				alert("手机号码超过限定个数");
			}else if(result=="-25"){
				alert("没有提交权限");
			}else if(result=="-990"){
				alert("未知错误");
			}
		}
	});
}


function cfm_upmember1()
{
	reg = /^[\u4E00-\u9FA5]{2,4}$/;
	var val=$('input:radio[name="sex"]:checked').val();
    if(val==null){
		alert("请选择性别！");
		$("#sex").focus();
		return false;
	}
	
	if($("#address").val() == "")
	{
		alert("联系地址不能为空！");
		$("#address").focus();
		return false;
	}
	if($("#cnname").val() == "")
	{
		alert("真实姓名不能为空！");
		$("#cnname").focus();
		return false;
	}
	if(!reg.test($("#cnname").val())){
			alert("真实姓名必须是2-4个汉字！");
			$("#cnname").focus();
			return false;
	}
	var card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
	if($("#cardid").val() == "")
	{
		alert("身份证或营业执照不能为空！");
		$("#cardid").focus();
		return false;
	}
	if(!card.test($("#cardid").val()))
	{
		alert("身份证或营业执照不正确！");
		$("#cardid").focus();
		return false;
	}
	var tel = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)|(13\d{9}$)|(15[0135-9]\d{8}$)|(18[12679]\d{8}$)/;
	if($("#mobile").val()==''){
		alert("手机号码不能为空");
		$("#mobile").focus();
		return false;
	}
	if(!tel.test($("#mobile").val())){
		alert("手机号码格式不正确");
		$("#mobile").focus();
		return false;
	}
	if($("#validate2").val() == "")
	{
		alert("验证码不能为空！");
		$("#validate2").focus();
		return false;
	}
	if($("#isvalidate2").val() != $("#validate2").val())
	{
		alert("验证码错误");
		$("#validate2").focus();
		return false;
	}
}

function cfm_upmember3()
{
	if($("#password").val() != "")
	{
		var ckupwd = /^[0-9a-zA-Z_-]+$/;
		if($("#password").val() == "")
		{
			alert("密码不能为空！");
			$("#password").focus();
			return false;
		}
		else if($("#password").val().length < 6 || $("#password").val().length > 16)
		{
			alert("密码长度为6~16位字符！");
			$("#password").focus();
			return false;
		}
		else if(!ckupwd.test($("#password").val()))
		{
			alert("请使用[数字/字母/中划线/下划线]！");
			$("#password").focus();
			return false;
		}

		if($("#repassword").val() == "")
		{
			alert("确认密码不能为空！");
			$("#repassword").focus();
			return false;
		}
		else if($("#password").val() != $("#repassword").val())
		{
			alert("两次输入的密码不相同！");
			$("#repassword").focus();
			return false;
		}

	}

	if($("#validate3").val() == "")
	{
		alert("验证码不能为空！");
		$("#validate3").focus();
		return false;
	}
	if($("#isvalidate3").val() != $("#validate3").val())
	{
		alert("验证码错误");
		$("#validate3").focus();
		return false;
	}
}


function cfm_risk1()
{
	if($("#username1").val() == "")
	{
		alert("客户姓名不能为空！");
		$("#username1").focus();
		return false;
	}
	if($("#telephone1").val() == "")
	{
		alert("联系电话不能为空！");
		$("#telephone1").focus();
		return false;
	}
	
}

function cfm_risk2()
{
	if($("#username2").val() == "")
	{
		alert("客户姓名不能为空！");
		$("#username2").focus();
		return false;
	}
	if($("#telephone2").val() == "")
	{
		alert("联系电话不能为空！");
		$("#telephone2").focus();
		return false;
	}
	
}


function cfm_buy()
{
	if($("#username").val() == "")
	{
		alert("申请人姓名不能为空！");
		$("#username").focus();
		return false;
	}
	if($("#cardnum").val() == "")
	{
		alert("证件号码不能为空！");
		$("#cardnum").focus();
		return false;
	}
	if($("#telephone").val() == "")
	{
		alert("联系方式不能为空！");
		$("#telephone").focus();
		return false;
	}
	if($("#submoney").val() == "")
	{
		alert("认购金额不能为空！");
		$("#submoney").focus();
		return false;
	}
	if($("#banknum").val() == "")
	{
		alert("银行卡卡号不能为空！");
		$("#banknum").focus();
		return false;
	}
	if($("#mailaddress").val() == "")
	{
		alert("合同邮寄地址不能为空！");
		$("#mailaddress").focus();
		return false;
	}
	if($("#contacttime").val() == "")
	{
		alert("合适的联系时间不能为空！");
		$("#contacttime").focus();
		return false;
	}
}


function cfm_send()
{
	if($("#username").val() == "")
	{
		alert("客户姓名不能为空！");
		$("#username").focus();
		return false;
	}
	if($("#telephone").val() == "")
	{
		alert("联系电话不能为空！");
		$("#telephone").focus();
		return false;
	}
	if($("#buymoney").val() == "")
	{
		alert("预约金额不能为空！");
		$("#buymoney").focus();
		return false;
	}
	$("#formindex").submit();
}



function cfm_buyadd()
{
	
	if($("#addmoney").val() == "")
	{
		alert("追加金额不能为空！");
		$("#addmoney").focus();
		return false;
	}
}


function cfm_buydel()
{
	
	if($("#addmoney").val() == "")
	{
		alert("赎回金额不能为空！");
		$("#addmoney").focus();
		return false;
	}
}