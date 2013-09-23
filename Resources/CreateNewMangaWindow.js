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
		height:1500,
		backgroundColor:'rgb(255,235,205)',
	});
	
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		//showVerticalScrollIndicator: false,
  		//showHorizontalScrollIndicator: false,
  		width: Ti.UI.FILL,
  		top:height *0.07,
  		bottom:height *0.07,
	});
	
	//スクロール用の画面をベースの画面にadd、main_scroll_base_viewにはパーツをaddする
	scroll_view.add(main_scroll_base_view);
	base_window.add(scroll_view);
	
	/*
	 * ここから下に中身の実装を行う
	 * 
	 */
	
	var option_username_label = Ti.UI.createLabel({
			text:'タイトルを入力して下さい',
			width:width *0.5,
			font:{fontSize:12, fontWeight:'bold'},
			height:20,
			top:20,
			center:width/2,	
		});
	
		
	//タイトルを作成する画面
	var input_title = Ti.UI.createTextField({
		color: '#333333',
		hinttext: 'タイトル',
		height:100,
		width:300,
		top:60,
		center:width/2,	
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});
	
			
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
		
	var send_button = Ti.UI.createButton({
		title: '投稿',
		width:width *0.5,
		height:100,
		top:selectphoto1.height*4+250,
		center:width/2,	
	});
	
	/*
	 * Event listener to open confirmation window
	 */
	
	send_button.addEventListener('click', function() {
		require('confirmWindow').createConfrimWindow().open();
	});
	
	function selectPicture(){
		
		var dialog = Titanium.UI.createOptionDialog({
			title : 'マッチする画像を選びましょう',
			options : ['撮影する', 'ギャラリーから選択する', L('cancel')],
			cancel : 2
		});
		
		dialog.show();
		
		dialog.addEventListener('click', function(dialog_button) {
			
			if(dialog_button.index == 0) {
				require('/EditPictureWindow').EditPicturewindow().open();
			} else if(dialog_button.index == 1) {
				require('/EditPictureWindow').EditPicturewindow().open();
			} else if(dialog_button.index == 2) {
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
		
	main_scroll_base_view.add(selectphoto1);
	main_scroll_base_view.add(selectphoto2);
	main_scroll_base_view.add(selectphoto3);
	main_scroll_base_view.add(selectphoto4);
	main_scroll_base_view.add(send_button);
	
	main_scroll_base_view.add(input_title);	
	main_scroll_base_view.add(option_username_label);
	
	/*
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
*/
	
	return base_window;
};

