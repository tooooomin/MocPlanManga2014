/**
 * @author 佐々木 友弘
 */

exports.CreateNewMangaWindow = function() {
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(51,73,96)',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
	});
	/*
	 * ここから下に中身の実装を行う
	 * 
	 */
	
	var option_username_label = Ti.UI.createLabel({
			text:'スタブだよ',
			width:width *0.5,
			height:height *0.9,
			font : {
				fontSize : 28
			}
		});
		
	base_window.add(option_username_label);
	
	var selectphoto = Ti.UI.createImageView({
			image:'/images/testImage/select_photo1.png',
			width:width *0.5,
			height:height *0.2,
			//top:uiconfig.TEST_PHOTO_POSITION,
	});
	
	selectphoto.addEventListener("click",function(event){
		alert("stub");
	});
	var image_pic = new require('/UsingMedia/imageFrame/MenuProjectFrame')();
	image_pic.top = height * 0.8;
	base_window.add(image_pic);
	
	base_window.add(selectphoto);
	
	return base_window;
};

