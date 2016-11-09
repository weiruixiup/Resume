window.onload = function()
{

	/*执行JS严格模式
	====================================================*/

	"use strict";

	/*让滚动条到Skill的时候显示animation
	====================================================*/

	var Height = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
	var Width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
	var span = document.querySelectorAll(".skill_r .bar-expand");
	var myAnimationName = ["myhtml","css","javascript","jquery","node","bootstrap"];

	window.onscroll = function()
	{
		/*让滚动条到300的时候显示导航条和显示回到顶部按钮
		====================================================*/
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		var nav = document.getElementById("nav");
		var newTop = top;

		var goTop = document.getElementById("gotop");


		if(top > 300)
		{
			nav.style.cssText = "position:fixed; top:0; left:0; z-index:999;";
			goTop.style.cssText = "opacity:1; cursor:pointer; visibility:visible;"
		}
		else if(top == 0)
		{
			nav.style.cssText = "position:none;";
		}
		else
		{
			goTop.style.cssText = "opacity:0; cursor:default; visibility:hidden;"
		}

		/*当滚动条距离顶部的高度大于(Height * 2 + 200)时执行animation
		====================================================*/

		if(newTop > (Height * 2 + 200))
		{
			for(var i = 0 ; i < span.length ; i ++)
			{
				span[i].style.cssText = "animation:" + myAnimationName[i] + " 3s ease running";
			}
		}
		else
		{
			for(var i = 0 ; i < span.length ; i ++)
			{
				span[i].style.cssText = "animation:" + myAnimationName[i] + " 3s ease paused";
			}
		}

	}


	/*当页面宽度大于800PX时取消checkbox的checked
	====================================================*/
	var btn_checkbox = document.getElementById("btn_checkbox");
	window.onresize = function()
	{
		if(Width > 800)

			btn_checkbox.checked = false;
	}


	/*选择页面语言，然后重新加载页面
	====================================================*/
}
function changeLanguage(lan)
{
	window.location.replace(lan + ".html");
}