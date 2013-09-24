/**
 * @author Shota Sujino
 */

exports.TemplateImageView = function() {
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(51,73,96)',
		exitOnClose : true,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		//orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	
	var base_view = Ti.UI.createView();

	/*
	 * ヘッダ作成、今はロゴのみ
	 */
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	base_window.add(upperRibbon);

	var title_label = require('/CreateCommonParts').createTitleLabel();
	base_view.add(title_label);
	/*
	 * ヘッダ作成ここまで
	 */
	
	/*
	 * フッタ作成、ホームボタン、作るボタン(list_button)、素材ボタン(people_button)
	 */
	var underRibbon = require('/CreateCommonParts').createUnderRibbon();
	base_view.add(underRibbon);
		
	var home_button = require('/CreateCommonParts').createHomeButton();
	base_view.add(home_button);
	
	var list_button = require('CreateCommonParts').createListButton();
	base_view.add(list_button);	
	
	var people_button = require('/CreateCommonParts').createPeopleButton();
	base_view.add(people_button);

	/*
	 * フッタ作成ここまで
	 */
	
	//base_view.add(label_tmp);
	base_window.add(base_view);
	
	// スクロールバー -----------------------------------------------------------------	
	var main_scroll_base_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:width *3,
		backgroundColor:'rgb(255,235,205)',
	});
	
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		width: Ti.UI.FILL,
  		top:height *0.07,
  		bottom:height *0.07,
	});
	
	scroll_view.add(main_scroll_base_view);
	base_window.add(scroll_view);
	// -----------------------------------------------------------------------------
	
	// 画像表示 ----------------------------------------------------------------------
	
	var list = new Array(48);
	
	function create_photo_list() {
		for (var i = 0; i < list.length; i++) {
			Ti.API.info(i);
			list[i] = Ti.UI.createImageView({
				image:'/images/photo/material_1.png',
				width:width *0.25,
				height:width *0.25,
				left: row*(width*0.25),
				top: column*(width*0.25)
			});
		}
	}
	create_photo_list();
	
	/*
	 * 写真を横に並べる.
	 * 再帰呼び出しで繰り返し実行します.
	 * 写真は後で配列を使って処理する予定です.
	 * @param row 行数
	 * @param column 列数
	 */
	function create_photo_row(row, column) {
		// 4行を超えたら終了
		if(row > 3)
			return;
		// 写真設定
		// var photo_list = Ti.UI.createImageView({
			// image:'/images/testImage/select_photo1.png',
			// width:width *0.25,
			// height:width *0.25,
			// left: row*(width*0.25),
			// top: column*(width*0.25)
		// });
		main_scroll_base_view.add(list(row + (column*4)));
		create_photo_row(row+1, column);
	}
	
	/*
	 * 写真を縦に並べる.
	 * 列指定の関数を呼び出し、自分を再帰呼び出しをします.
	 * @param column 列数
	 */
	function create_photo_column(column) {
		// 12列を超えたら終了
		if(column > 12)
			return;
		create_photo_row(0, column);
		create_photo_column(column+1);
	}
	
	create_photo_column(0);
	// -------------------------------------------------------------------------------
	
	return base_window;
};