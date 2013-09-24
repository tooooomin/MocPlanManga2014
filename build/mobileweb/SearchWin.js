/*
 * SearchWin
 * 
 * 
 * 
 */

exports.openSearchWindow = function(option){
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '少しお待ちください',
		font:{fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});
	
	actInd.show();
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
		var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(51,73,96)',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
		win_touch_p:{x:0,y:0}
	});
	
	var search = Titanium.UI.createSearchBar({
		width:Ti.UI.FILL,
		height:height *0.1,
		top:0,
	});
	
	base_window.add(search);
	
	base_window.addEventListener('open',function(event){
		actInd.hide();
	});
	
	base_window.open();
};
