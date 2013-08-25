//FirstView Component Constructor
function FirstView() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var addImageButton= new require('/UsingMedia/imageFrame/MenuProjectFrame')();

	addImageButton.setTop(height * 0.7);

	self.add(addImageButton);
	
	return self;
}

module.exports = FirstView;
