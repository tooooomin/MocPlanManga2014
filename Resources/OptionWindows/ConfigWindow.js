/*
 * @author 神保直幸
 * サブヘッダのConfigからの遷移
 * 
 */

exports.openConfigWindow = function() {
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
		text: 'Configからの遷移です。',
					width:width *0.5,
			height:height *0.9,
			font : {
				fontSize : 28
			}
	});
	base_window.add(label_tmp);

	return base_window;
};
