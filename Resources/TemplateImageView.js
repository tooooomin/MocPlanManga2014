/**
 * @author Shota Sujino
 */

exports.TemplateImageView = function() {
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(51,73,96)',
		//backgroundColor : 'rgb(0,0,0)',
		exitOnClose : true,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		//orientationModes : [Titanium.UI.PORTRAIT],
	});
	
	
	// ヘッダー、フッダー --------------------------------------------------------
	var base_view = Ti.UI.createView();

	/*
	 * ヘッダ作成、今はロゴのみ
	 */
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	base_window.add(upperRibbon);

	var title_label = require('/CreateCommonParts').createTitleLabel();
	base_view.add(title_label);

	
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
	
	//base_view.add(label_tmp);
	base_window.add(base_view);
	// -----------------------------------------------------------------------------
	
	// スクロールバー -----------------------------------------------------------------	
	var main_scroll_base_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:width *3,
		//backgroundColor:'rgb(255,235,205)',
		backgroundColor : 'rgb(0,0,0)',
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
	
	// 写真リスト
	var photo_list = new Array(48);
	
	/*
	 * 写真を横に並べる.
	 * 再帰呼び出しで繰り返し実行します.
	 * @param row 行数
	 * @param column 列数
	 */
	function create_photo_row(row, column) {
		// 4行を超えたら終了
		if(row > 3)
			return;
		// 写真設定
		photo_list[row + (column*4)] = Ti.UI.createImageView({
			image:'/images/photo/material_' + (row + (column*4)) + '.png',
			width:width *0.25 -5,
			height:width *0.25 -5,
			left: row*(width*0.25),
			top: column*(width*0.25)
		});
		main_scroll_base_view.add(photo_list[row + (column*4)]);
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