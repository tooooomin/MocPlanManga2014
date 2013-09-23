/*
 * Confirmation window
 * Created by Kounakis Ioannis on 23/9/2013
 */

exports.createConfrimWindow = function() {
	
	var baseWindow = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		orientationModes: [Titanium.UI.PORTRAIT]
	});
	
	var mainView = Ti.UI.createView({
		backgroundColor: 'white'
	});

	baseWindow.add(mainView);
	
	var mangaWebView = Ti.UI.createWebView({
		backgroundColor: 'blue',
		top: '5%',
		left: '5%',
		width: '90%',
		height: '45%'
	});
	
	mainView.add(mangaWebView);
	
	var tagLabel = Ti.UI.createLabel({
		color: 'black',
		font: { fontSize: '14dp' },
		text: 'Tags: ',
		top: '55%',
		left: '5%'
	});
	
	mainView.add(tagLabel);
	
	var tagTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: 'black',
		top: '60%',
		left: '5%',
		width: '45%',
		
	});
	
	mainView.add(tagTextField);
	
	var tagButton = Ti.UI.createButton({
		title: 'Add Tag',
		top: '60%',
		left: '55%'
	});
	
	tagButton.addEventListener('click', function() {
		var newTagString = tagTextField.getValue();
		var oldTagString = tagLabel.getText();
		
		if (newTagString.length > 0) {
			if (oldTagString.length > 6) {							// 6 is the size of the original text of the label -> 'Tags: '.
				tagLabel.setText(oldTagString + ', ' + newTagString);
			} else {
				tagLabel.setText(oldTagString + newTagString);		
			}
		}
		
		tagTextField.setValue('');
	});
	
	mainView.add(tagButton);
	
	var facebookButton = Ti.UI.createButton({
		title: 'Facebook',
		top: '70%',
		left: '5%'
	});
	
	mainView.add(facebookButton);
	
	var postButton = Ti.UI.createButton({
		title: 'Post',
		top: '70%',
		left: '30%'		
	});
	
	mainView.add(postButton);
	
	return baseWindow;
};
