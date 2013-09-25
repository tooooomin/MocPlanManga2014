/*
 * 
 * created by fvi@
 * 
 * created @20130924
 * 
 * 
 */

exports.showIndcator = function(win){
		height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
		var actInd = Titanium.UI.createActivityIndicator({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		message : '少々お待ちください',
		font:{fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});
	
	actInd.show();
	
	
	
	win.addEventListener('open',function(event){
		//actInd.hide();
	});
	
	return win;
	
};
