/**
 * @author 佐々木 友弘
 */

exports.CreateNewMangaWindow = function() {
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : '#fff',
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
			text:'タイトルを入力して下さい',
			width:width *0.5,
			height:20,
			top:0,
			center:width/2,	
		});
	
	base_window.add(option_username_label);
	
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: false,
  		showHorizontalScrollIndicator: false,
  		height: '80%',
  		width: Ti.UI.FILL,
  		top:height *0.07,
	});
	
	base_window.add(scroll_view);
	
	/*
	var input_title = Ti.UI.createTextField({
		color: '#333333',
		hinttext: 'タイトルを入力してください',
		width:width *0.5,
		height:20,
		top:60,
		center:width/2,	
	});
	*/
			
	var selectphoto1 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo1.png',
			width:width *0.5,
			height:height *0.2,
			top:200,
			center:width/2,	
	});
	
	var selectphoto2 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo2.png',
			width:width *0.5,
			height:height *0.2,
			top:selectphoto1.height+200,
			center:width/2,	
	});
	
	var selectphoto3 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo3.png',
			width:width *0.5,
			height:height *0.2,
			top:selectphoto1.height*2+200,
			center:width/2,	
		
	});
	
	var selectphoto4 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo4.png',
			width:width *0.5,
			height:height *0.2,
			top:selectphoto1.height*3+200,
			center:width/2,
	});
	
	//base_window.add(input_title);
	
	var send_button = Ti.UI.createButton({
		title: '投稿',
		width:width *0.5,
		height:20,
		top:selectphoto1.height*3+100,
		center:width/2,	
	});
	
	base_window.add(send_button);

	selectphoto1.addEventListener("click",function(event){
		
			var dialog = Titanium.UI.createOptionDialog({
			title : 'マッチする画像を選びましょう',
			options : ['撮影する', 'ギャラリーから選択する', L('cancel')],
			cancel : 2
		});
	});
		
	base_window.add(selectphoto1);
	base_window.add(selectphoto2);
	base_window.add(selectphoto3);
	base_window.add(selectphoto4);
	
	return base_window;
};

