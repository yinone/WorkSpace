/*
 * 
 * @authors yinone
 * @date    2014-10-24 16:23:25
 * @version 1.00
 */

$(function(){

	//init scroller
	var myScroll = new IScroll('#wrapper', {
		snap: true,
		bounceEasing: 'circular',
		probeType: 3,
		momentum: false,
		hScrollbar: false,
		deceleration: 0.0003,
		bounceTime: 1000
	}),

	$page = $('.page'),
	$wrapper = $('.wrapper'),
	$scroller = $('#scroller'),
	imgHeight = $page.height(),
	totalPages = $('.page').length,
	currentPage = 0, direction = 0, currentZoom = 1;

	//动态获取zoom
	var getZoom = function(){

		var distance = $scroller.css('transform');
		distance = Math.abs(parseInt(distance.slice(15, 20)));
		//console.dir(currentPage);
		var nowZoom = 1-Math.abs(distance - currentPage*imgHeight)/imgHeight;
		return nowZoom;
	};

	//init
	var init = function (){

		console.log(currentZoom);

		if(direction == 1){

			if(currentPage == totalPages - 1){
				$page.eq(currentPage).css({
					'-webkit-transform': 'scale(1)'
				});
			}else{
				$page.eq(currentPage).css({
					'-webkit-transform': 'scale('+currentZoom+')'
				});
				$page.eq(currentPage).next().css({
					'-webkit-transform': 'scale(1)'
				});
			}
		}

		if(direction == -1){

			if(currentPage == 0){
				$page.eq(0).css({
					'-webkit-transform': 'scale(1)'
				});
			}else{
				$page.eq(currentPage).css({
					'-webkit-transform': 'scale('+currentZoom+')'
				});
				$page.eq(currentPage).prev().css({
					'-webkit-transform': 'scale(1)'
				});
			}
		}
	};


	//获取当前所在Page
	myScroll.on('beforeScrollStart', function(){
		currentPage = this.currentPage.pageY;
	});

	//获取滑动方向
	myScroll.on('scrollStart', function(){
		direction = this.directionY;
	});

	//监听滚动
	myScroll.on('scroll', function(){
		currentZoom = getZoom();
		init();
	});

	myScroll.on('scrollEnd', function(){

		// alert(1);
	});


	//slider
	var Deg = 0.3;
	var $slider = $('.img-container li');

	$slider.on('tap', function(){

		var _this = $(this);
		_this.addClass('slider-hide');
		var  changeDeg = function(){
			_this.next().css({
				'-webkit-transform': 'rotate'
			});
		};
	 	setTimeout('console.log(_this)', 2000);
		var currentHTML = $(this).html();

		slideEnd = function(){

			console.log();

			_this.removeClass('slider-hide');
		};

		if(_this.index())

	});

	//setHtml
	
});