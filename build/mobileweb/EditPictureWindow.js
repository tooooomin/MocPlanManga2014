/**
 * @author 佐々木 友弘
 */

exports.EditPicturewindow = function() {
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	//ベースの画面を作成
	var base_window = Titanium.UI.createWindow({
		backgroundColor : '#fff',
		exitOnClose : false,
		fullscreen : true,
		//navBarHidden : true,
		orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	var testpicture = Ti.UI.createImageView({
			image:'/images/testImage/bobsap.png',
			width:400,
			height:400,
			top:150,
			center:width/2,	
	});
	
	base_window.add(testpicture);
	
	var send_button = Ti.UI.createButton({
		title: '投稿',
		width:width *0.5,
		height:100,
		bottom:height * 99 / uiconfig.ACTUAL_HEIGHT,
		center:width/2,	
	});
	
	base_window.add(send_button);
	
	send_button.addEventListener("click",function(event){
		require("/CreateNewMangaWindow").CreateNewMangaWindow().open();
	});

	
	var upperRibbon = Titanium.UI.createImageView({
			image:uiconfig.COMMON_UP_BAR_IMAGE_PATH,
			width: Ti.UI.FILL,
			height: uiconfig.HEADER_RIBBON_HEIGHT,
			top: 0,
	});
	
	base_window.add(upperRibbon);
	
	var underRibbon = Titanium.UI.createImageView({
			image: '/images/footer/footer_bg(720,99).png',
			width:Titanium.UI.FILL,
			//height: 99,
			height: height *(99/uiconfig.ACTUAL_HEIGHT),
			bottom: 0
	});
	
	var home_button = Ti.UI.createButton({
		backgroundImage: '/images/footer/footer_btn1(239,97).png',
		bottom: 0,
		left: 0,
		width: uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT
	});
	
	base_window.add(home_button);
	base_window.add(underRibbon);

	return base_window;
};

