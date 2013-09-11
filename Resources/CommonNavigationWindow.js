/*
 * created by fvi@
 * 
 * created @ 201303010936
 * 
 * 
 * 
 * 
 */

exports.createCommonNavigationWindow = function(){
	var uiconfig = require('/uiconfig');
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(255,235,205)',
		exitOnClose : true,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
		win_touch_p:{x:0,y:0}
	});
	
	
	var option_view = Titanium.UI.createView({
		
		backgroundColor:'red',
		width:width,
		height:height,
		
		center:{x:-0.5*width,y:0.5 *height},
		
	});
	
	base_window.add(option_view);
	
	
	var underRibbon = Titanium.UI.createImageView({
			image:'/images/underRibbon/underRibbon2.png',
			width:Titanium.UI.FILL,
			height:height *0.2,
			top:height *0.88
	});
	
		base_window.add(underRibbon);
		
	var upperRibbon = Titanium.UI.createImageView({
			image:uiconfig.COMMON_UP_BAR_IMAGE_PATH,
			width:width,
			height:height *0.12,
			top:-0.03 * height,
			bottom:0.15 * height
	});
	
		base_window.add(upperRibbon);
		
	base_window.upperRibbon = upperRibbon;
	base_window.underRibbon = underRibbon;
	
	function moveOptionView(move){
		if(move == 'open'){
			base_window.animate({center:{x:width *1.2,y:height *0.5},duration:uiconfig.OPT_VIEW_MOVE_ANIMATION_OPEN_DURING});
		}
		if(move == 'close'){
			base_window.animate({center:{x:width * 0.5,y:height *0.5},duration:uiconfig.OPT_VIEW_MOVE_ANIMATION_CLOSE_DURING});
		}
	}
	
	
	var option_button = Ti.UI.createButton({
		title:'opt',
		center:{x:width *0.15,y:height * 0.05},
		width:width *0.1,
		height:height *0.05,
	});
	
	base_window.add(option_button);
	
	option_button.addEventListener('click',function(event){
		if(option_view.center.x < 0){
			moveOptionView('open');
		}else{
			moveOptionView('close');
		}
	});
	

	
	/*
	 * スワップのスタートポイントを記録し、話した時の差分からスワップ処理を行うか否かの判断を行う
	 * 
	 */
	base_window.addEventListener('touchstart',function(event){
		base_window.win_touch_p.x = event.x;
		base_window.win_touch_p.y = event.y;
		
	});
	
	base_window.addEventListener('touchend',function(event){
		/*
		 * 左右のスワップにおける差分から水平スワップを検出する
		 */
		if(event.x - base_window.win_touch_p.x > width *0.3){
			moveOptionView('open');
			//option_view.center = {x:width *0.45,y:height *0.5};	
		}
		
		if(base_window.win_touch_p.x - event.x > width *0.3){
			
			moveOptionView('close');
			//option_view.center = {x:width * -0.5,y:height *0.5};
		}
		
		/*
		 * 上下のスワップにおける差分から鉛直スワップを検出する
		 */
		if(event.y- base_window.win_touch_p.y > height *0.3){
			alert('up swapped');
		}
		
		if(base_window.win_touch_p.y - event.y > height *0.3){
			alert('up UN swapped');
		}
		

		base_window.win_touch_p = {x:0,y:0};
		
		
	});
	
	var home_button = Ti.UI.createButton({
		title:'home',
		center:{x:width *0.2,y:height *0.95},
		width:width *0.15,
		height:height *0.1,
	});
	
	base_window.add(home_button);
	
	var list_button = Ti.UI.createButton({
		title:'list',
		center:{x:width*0.5,y:height *0.95},
		width:width *0.15,
		height:height*0.1,
	});
	
	base_window.add(list_button);
	
	var people_button = Ti.UI.createButton({
		title:'people',
		center:{x:width*0.8,y:height *0.95},
		width:width *0.15,
		height:height *0.1,
	});
	
	base_window.add(people_button);

	
	return base_window;
};
