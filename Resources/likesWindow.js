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
		backgroundColor : 'rgb(51,73,96)',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
	});

var view = Ti.UI.createView();

	var label_tmp = Ti.UI.createLabel({
		text: 'Likesからの遷移です。',
					width:width *0.5,
			height:height *0.9,
			font : {
				fontSize : 28
			}
	});
	view.add(label_tmp);
	base_window.add(view);

	return base_window;
};
