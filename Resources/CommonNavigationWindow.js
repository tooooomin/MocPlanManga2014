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
		
		backgroundColor:'gray',
		width:Ti.UI.FILL,
		height:height *0.9,
		
		center:{x:width * -0.5,y:height *0.5},
		
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
			image:'/images/underRibbon/underRibbon2.png',
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
			option_view.animate({center:{x:width *0.45,y:height *0.5},duration:1000});
		}
		if(move == 'close'){
			option_view.animate({center:{x:width * -0.5,y:height *0.5},duration:500});
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

		if(event.x - base_window.win_touch_p.x > width *0.3){
			moveOptionView('open');
			//option_view.center = {x:width *0.45,y:height *0.5};	
		}
		
		if(base_window.win_touch_p.x - event.x > width *0.3){
			
			moveOptionView('close');
			//option_view.center = {x:width * -0.5,y:height *0.5};
		}
		
		base_window.win_touch_p = {x:0,y:0};
		
		
	});

	
	return base_window;
};
