/**
 * @author 佐々木 友弘
 */

exports.EditPicturewindow = function(imagePath,selectNumber) {
	//デバック用のアラート
	alert(selectNumber);
	
	//4コマの画面を保存する配列を初期
	var ArrayParameter = require("ArrayParameter");
	var mangaArray = ArrayParameter.return_array();
	
	//ベースの画面を作成
	var base_window = Titanium.UI.createWindow({
		backgroundColor : '#fff',
		exitOnClose : false,
		fullscreen : true,
		//navBarHidden : true,
		orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	/*
	 * ヘッダ作成、今はロゴのみ
	 */
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	base_window.add(upperRibbon);

	var title_label = require('/CreateCommonParts').createTitleLabel();
	base_window.add(title_label);

	/*
	 * ヘッダ作成ここまで
	 */
	
	/*
	 * フッタ作成、ホームボタン、作るボタン(list_button)、素材ボタン(people_button)
	 */
	var underRibbon = require('/CreateCommonParts').createUnderRibbon();
	base_window.add(underRibbon);
		
	var home_button = require('/CreateCommonParts').createHomeButton();
	base_window.add(home_button);
	
	var list_button = require('CreateCommonParts').createListButton();
	base_window.add(list_button);	
	
	var people_button = require('/CreateCommonParts').createPeopleButton();
	base_window.add(people_button);

	/*
	 * フッタ作成ここまで
	 */
	
	var editPicture = Ti.UI.createImageView({
			image:imagePath,
			width:400,
			height:400,
			top:150,
			center:width/2,	
	});
	
	base_window.add(editPicture);
	
	var send_button = Ti.UI.createButton({
		title: '完了',
		width:width *0.5,
		height:100,
		bottom:height * 99 / uiconfig.ACTUAL_HEIGHT,
		center:width/2,	
	});
	
	base_window.add(send_button);
	
	//編集した画像のパスを選択したコマに入れる
	var editImagePath = imagePath;
	mangaArray[selectNumber] = imagePath;
	
	//編集を完了して4コマ選択画面に移動
	send_button.addEventListener("click",function(event){
		require("/CreateNewMangaWindow").CreateNewMangaWindow().open();	
	});
	
	return base_window;
};

