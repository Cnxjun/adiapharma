;(function () {
	'use strict';
	var sliderMain = function() {
		
	  	$('.flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 4000, //展示时间间隔ms
		    animationSpeed: 400, //滚动时间ms
		    touch: true, //是否支持触屏滑动
			directionNav: true
	  	});
		
		$('.newslider').flexslider({
			animation: "fade",
			slideshowSpeed: 4000, //展示时间间隔ms
		    animationSpeed: 400, //滚动时间ms
		    touch: true, //是否支持触屏滑动
			directionNav: true
	  	});

	};

	$(function(){

		sliderMain();
		
		//内容加载后的运动效果
	    dataAnimate();	

	});


}());
