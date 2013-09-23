/**
 * @author 佐々木 友弘
 */

exports.CreateNewMangaWindow = function() {
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
	
	//スクロール用の画面
	var main_scroll_base_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:uiconfig.ACTUAL_HEIGHT * 1.2,
		backgroundColor:'rgb(255,235,205)',
	});
	
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: false,
  		showHorizontalScrollIndicator: false,
  		width: Ti.UI.FILL,
  		top:uiconfig.HEADER_RIBBON_HEIGHT,
  		bottom:uiconfig.HEADER_RIBBON_HEIGHT,
	});
	
	//スクロール用の画面をベースの画面にadd、main_scroll_base_viewにはパーツをaddする
	scroll_view.add(main_scroll_base_view);
	base_window.add(scroll_view);
	
	/*
	 * ここから下に中身の実装を行う
	 * 
	 */
	
	var message_label = Ti.UI.createLabel({
			text:'４コマを選択して下さい',
			height:40,
			center:width/2,
			top:uiconfig.HEADER_RIBBON_HEIGHT,
			font : {
				fontSize : 28
			}
		});
				
	var selectphoto1 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo1.png',
			width:width *0.5,
			height:height *0.2,
			top:uiconfig.HEADER_RIBBON_HEIGHT + 60,
			center:width/2,	
	});
	
	var selectphoto2 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo2.png',
			width:width *0.5,
			height:height *0.2,
			top:uiconfig.HEADER_RIBBON_HEIGHT + selectphoto1.height + 60,
			center:width/2,	
	});
	
	var selectphoto3 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo3.png',
			width:width *0.5,
			height:height *0.2,
			top:uiconfig.HEADER_RIBBON_HEIGHT + selectphoto1.height*2 + 60,
			center:width/2,	
	});
	
	var selectphoto4 = Ti.UI.createImageView({
			image:'/images/testImage/select_photo4.png',
			width:width *0.5,
			height:height *0.2,
			top:uiconfig.HEADER_RIBBON_HEIGHT + selectphoto1.height*3 + 60,
			center:width/2,
	});
	
	//タイトルを作成する画面
	var input_title = Ti.UI.createTextField({
		color:'#336699',
		top:uiconfig.HEADER_RIBBON_HEIGHT + selectphoto1.height*4 + 90,
		center:width/2,	
		width:width * 4/5,
		height:100,
		hintText:'4コマのタイトルを入力してください',
		font:{fontSize:20, fontWeight:'bold'},
		navBarHidden:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
		
	var send_button = Ti.UI.createButton({
		title: '投稿',
		width:width *0.5,
		height:100,
		top:uiconfig.HEADER_RIBBON_HEIGHT + selectphoto1.height*4 + input_title.height + 120,
		center:width/2,	
	});
	
	//編集したい4コマの画像をクリックしたときの処理
	/*
	 * Event listener to open confirmation window
	 */
	
	send_button.addEventListener('click', function() {
		require('confirmWindow').createConfrimWindow().open();
	});
	
//>>>>>>> 17eac4271a4e1369b87bd8843634344fd74b2394
	function selectPicture(){
		
		var dialog = Titanium.UI.createOptionDialog({
			title : 'マッチする画像を選びましょう',
			options : ['撮影する', 'ギャラリーから選択する','素材を探す',L('cancel')],
			cancel : 3
		});
		
		dialog.show();
		
		dialog.addEventListener('click', function(dialog_button) {
			
			if(dialog_button.index == 0) {
				require('/EditPictureWindow').EditPicturewindow().open();
			} else if(dialog_button.index == 1) {
				require('/EditPictureWindow').EditPicturewindow().open();
			} else if(dialog_button.index == 2) {
				require('/EditPictureWindow').EditPicturewindow().open();
			} else if(dialog_button.index == 3) {
				alert('キャンセル');
			}		
		});	
	}

	selectphoto1.addEventListener("click",function(event){
		selectPicture();			
	});
		
	selectphoto2.addEventListener("click",function(event){
		selectPicture();
	});
	
	selectphoto3.addEventListener("click",function(event){
		selectPicture();
	});
	
	selectphoto4.addEventListener("click",function(event){
		selectPicture();
	});
		
	main_scroll_base_view.add(input_title);	

	main_scroll_base_view.add(selectphoto1);
	main_scroll_base_view.add(selectphoto2);
	main_scroll_base_view.add(selectphoto3);
	main_scroll_base_view.add(selectphoto4);
	main_scroll_base_view.add(send_button);
	
	main_scroll_base_view.add(message_label);
	
	return base_window;
};

