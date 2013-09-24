/*
 * @author 神保直幸
 * サブヘッダのLikesからの遷移
 * 
 */

exports.LikesWindow = function() {
	var uiconfig = require("/uiconfig");
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'red',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
	});

	var view = Ti.UI.createView();

	var label_tmp = Ti.UI.createLabel({
		text: 'Likesからの遷移です!!!!!!!',
		color: 'blue',
			width:width *0.3,
			height:height *0.3,
			top: height *0.2,
			font : {
				fontSize : 28
			}
	});
	var testlabel = require('CreateCommonParts').createTestLabel();
	view.add(label_tmp);
	
	var upperRibbon = require('/CreateCommonParts').createUpperRibbon();
	view.add(testlabel);
	base_window.add(view);
	base_window.add(upperRibbon);
	base_window.upperRibbon = upperRibbon;

	return base_window;
};
