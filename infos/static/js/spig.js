/* spig.js */
//右键菜单
jQuery(document).ready(function ($) {
	$("#spig").mousedown(function (e) {
		if(e.which==3){
		showmessagePig("秘密通道:<br /><a href=\"http://note.cfyqy.com/atom.xml\" title=\"订阅\">订阅</a>    <a href=\"http://note.cfyqy.com\" title=\"首页\">首页</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
	return false;
});
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
	$("#messagePig").hover(function () {
	   $("#messagePig").fadeTo("100", 1);
	 });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
	//$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
	$(".mumu").mouseover(function () {
	   $(".mumu").fadeTo("300", 0.3);
	   msgs = ["本宝宝隐身了，你看不到本宝宝", "本宝宝会隐身哦！嘿嘿！", "本宝宝很可爱,别动手动脚的！", "把手拿开本宝宝才出来！"];
	   var i = Math.floor(Math.random() * msgs.length);
		showmessagePig(msgs[i]);
	});
	$(".mumu").mouseout(function () {
		$(".mumu").fadeTo("300", 1)
	});
});

//开始
jQuery(document).ready(function ($) {
	if (isindex) { //如果是主页
		var now = (new Date()).getHours();
		if (now > 0 && now <= 6) {
			showmessagePig(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
		} else if (now > 6 && now <= 11) {
			showmessagePig(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
		} else if (now > 11 && now <= 14) {
			showmessagePig(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺本宝宝呀！', 6000);
		} else if (now > 14 && now <= 18) {
			showmessagePig(visitor + ' 中午的时光真难熬！还好有你在！', 6000);
		} else {
			showmessagePig(visitor + ' 快来逗本宝宝玩吧！', 6000);
		}
	}
	else {
		showmessagePig('欢迎' + visitor + '来到代码笔记《' + title + '》', 6000);
	}
	$(".spig").animate({
		top: $(".spig").offset().top + 300,
		left: document.body.offsetWidth - 160
	},
	{
		queue: false,
		duration: 1000
	});
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
	$('h2 a').click(function () {//标题被点击时
		showmessagePig('正在努力地加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
	});
	$('.infoHead').mouseover(function () {
		showmessagePig('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇文章么？');
	});
	$('#prev-page').mouseover(function(){
		showmessagePig('要翻到上一页吗?');
	});
	$('.next').mouseover(function(){
		showmessagePig('要翻到下一页吗?');
	});
	$('#index-links li a').mouseover(function () {
		showmessagePig('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
	});
	$('.comments').mouseover(function () {
		showmessagePig('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
	});
	$('#submit').mouseover(function () {
		showmessagePig('确认提交了么？');
	});
	$('#s').mouseover(function () {
		showmessagePig('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
	});
	$('#go-prev').mouseover(function () {
		showmessagePig('点它可以后退哦！');
	});
	$('#go-next').mouseover(function () {
		showmessagePig('点它可以前进哦！');
	});
	$('#refresh').mouseover(function () {
		showmessagePig('点它可以重新载入此页哦！');
	});
	$('#go-home').mouseover(function () {
		showmessagePig('点它就可以回到首页啦！');
	});
	$('#addfav').mouseover(function () {
		showmessagePig('点它可以把此页加入书签哦！');
	});
	$('#nav-two a').mouseover(function () {
		showmessagePig('嘘，从这里可以进入控制面板的哦！');
	});
	$('.post-category a').mouseover(function () {
		showmessagePig('点击查看此分类下得所有文章');
	});
	$('.post-heat a').mouseover(function () {
		showmessagePig('点它可以直接跳到评论列表处.');
	});
	$('#tho-shareto span a').mouseover(function () {
		showmessagePig('你知道吗?点它可以分享本文到'+$(this).attr('title'));
	});
	$('#switch-to-wap').mouseover(function(){
		showmessagePig('点击可以切换到手机版博客版面');
	});
});


//无聊讲点什么
jQuery(document).ready(function ($) {

	window.setInterval(function () {
		msgs = ["播报明日天气<iframe name=\"xidie\" src=\"http://m.weather.com.cn/mweather/101230201.shtml\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "陪本宝宝聊天吧！", "<a href=\"http://note.cfyqy.com/atom.xml\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"订阅乱了感觉\" alt=\"Feed\" src=\"/wp-content/themes/chromeStyle/images/rss.png\"></a>", "好无聊哦，你都不陪本宝宝玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "本宝宝可爱吧！嘻嘻!~^_^!~~","哈哈哈！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
		var i = Math.floor(Math.random() * msgs.length);
		showmessagePig(msgs[i], 10000);
	}, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
	window.setInterval(function () {
		msgs = ["播报明日天气<iframe name=\"xidie\" src=\"http://m.weather.com.cn/mweather/101230201.shtml\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "快快订阅本宝宝的博客吧！<a href=\"http://note.cfyqy.com/atom.xml\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"订阅乱了感觉\" alt=\"Feed\" src=\"/wp-content/themes/chromeStyle/images/rss.png\"></a>", "乾坤大挪移！", "本宝宝飘过来了！~", "本宝宝飘过去了", "本宝宝得意地飘！~飘！~"];
		var i = Math.floor(Math.random() * msgs.length);
		s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
		var i1 = Math.floor(Math.random() * s.length);
		var i2 = Math.floor(Math.random() * s.length);
			$(".spig").animate({
			left: document.body.offsetWidth/2*(1+s[i1]),
			top:  document.body.offsetHeight/2*(1+s[i1])
		},
			{
				duration: 2000,
				complete: showmessagePig(msgs[i])
			});
	}, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
	$("#author").click(function () {
		showmessagePig("留下你的尊姓大名！");
		$(".spig").animate({
			top: $("#author").offset().top - 70,
			left: $("#author").offset().left - 170
		},
		{
			queue: false,
			duration: 1000
		});
	});
	$("#email").click(function () {
		showmessagePig("留下你的邮箱，不然就是无头像人士了！");
		$(".spig").animate({
			top: $("#email").offset().top - 70,
			left: $("#email").offset().left - 170
		},
		{
			queue: false,
			duration: 1000
		});
	});
	$("#url").click(function () {

		showmessagePig("快快告诉本宝宝你的家在哪里，好让本宝宝去参观参观！");
		$(".spig").animate({
			top: $("#url").offset().top - 70,
			left: $("#url").offset().left - 170
		},
		{
			queue: false,
			duration: 1000
		});
	});
	$("#comment").click(function () {
		showmessagePig("认真填写哦！不然会被认作垃圾评论的！本宝宝的乖乖~");
		$(".spig").animate({
			top: $("#comment").offset().top - 70,
			left: $("#comment").offset().left - 170
		},
		{
			queue: false,
			duration: 1000
		});
	});
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
	var f = $(".spig").offset().top;
	$(window).scroll(function () {
		$(".spig").animate({
			top: $(window).scrollTop() + f +300
		},
		{
			queue: false,
			duration: 1000
		});
	});
});

//鼠标点击时
jQuery(document).ready(function ($) {
	var stat_click = 0;
	$(".mumu").click(function () {
		if (!ismove) {
			stat_click++;
			if (stat_click > 4) {
				msgs = ["你有完没完呀？", "你已经摸本宝宝" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
				var i = Math.floor(Math.random() * msgs.length);
				//showmessagePig(msgs[i]);
			} else {
				msgs = ["筋斗云！~本宝宝飞！", "本宝宝跑呀跑呀跑！~~", "别摸本宝宝!", "惹不起你，本宝宝还躲不起你么？", "不要摸本宝宝了！", "干嘛动本宝宝呀！小心本宝宝咬你！"];
				var i = Math.floor(Math.random() * msgs.length);
				//showmessagePig(msgs[i]);
			}
		s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
		var i1 = Math.floor(Math.random() * s.length);
		var i2 = Math.floor(Math.random() * s.length);
			$(".spig").animate({
			left: document.body.offsetWidth/2*(1+s[i1]),
			top:  document.body.offsetHeight/2*(1+s[i1])
			},
			{
				duration: 500,
				complete: showmessagePig(msgs[i])
			});
		} else {
			ismove = false;
		}
	});
});
//显示消息函数
function showmessagePig(a, b) {
	if (b == null) b = 10000;
	jQuery("#messagePig").hide().stop();
	jQuery("#messagePig").html(a);
	jQuery("#messagePig").fadeIn();
	jQuery("#messagePig").fadeTo("1", 1);
	jQuery("#messagePig").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
	$("#spig").mousedown(function (e) {
		_move = true;
		_x = e.pageX - parseInt($("#spig").css("left"));
		_y = e.pageY - parseInt($("#spig").css("top"));
	 });
	$(document).mousemove(function (e) {
		if (_move) {
			var x = e.pageX - _x;
			var y = e.pageY - _y;
			var wx = $(window).width() - $('#spig').width();
			var dy = $(document).height() - $('#spig').height();
			if(x >= 0 && x <= wx && y > 0 && y <= dy) {
				$("#spig").css({
					top: y,
					left: x
				}); //控件新位置
			ismove = true;
			}
		}
	}).mouseup(function () {
		_move = false;
	});
});