/*
 * @author 神保直幸
 * サブヘッダのFollowerからの遷移
 * 
 */

exports.openFollowerWindow = function() {
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

	var label_tmp = Ti.UI.createLabel({
		text: 'Followerからの遷移です。',
					width:width *0.5,
			height:height *0.9,
			font : {
				fontSize : 28
			}
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
	
	base_view.add(label_tmp);
	base_window.add(base_view);

	return base_window;
};
