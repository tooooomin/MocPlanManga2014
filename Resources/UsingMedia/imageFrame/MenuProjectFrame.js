/**
 * @author nishi
 * @created 2012/04/24
 * renewal at 2012 07 22
 * 
 * renewal at 2012 1011
 */
function MenuProjectFrame() {
	var uiconfig = require('/uiconfig');
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var self = Titanium.UI.createImageView({
		width : 'auto',
		height :height * 0.2,
		image:uiconfig.IMAGEPICK_DEFAULT_IMGPATH,//'/images/icon/pallet_default.png',
	});

	//接触を検知したときの処理実装部分

	self.addEventListener('click', function() {
		
		self.setImage(uiconfig.IMAGEPICK_DEFAULT_PRESSED_IMGPATH);
		
		var dialog = Titanium.UI.createOptionDialog({
			title : 'マッチする画像を選びましょう',
			options : ['撮影する', 'ギャラリーから選択する', L('cancel')],
			cancel : 2
		});

		dialog.show();
		
		dialog.addEventListener('click', function(dialog_button) {

			if(dialog_button.index == 0) {
				//カメラを起動させる
				Titanium.Media.showCamera({
					success : function(event) {
						//取得成功時　start
						//成功時
						if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
						
							self.setImage(event.media);

							var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'data_images');
							//if(!f.exists()){f.createFile();}
							if(! dir.exists()) {
								dir.createDirectory();
							}
							var imageFile = Ti.Filesystem.getFile(dir.resolve(), require('/util/random').getRandom(10)+ '.jpg');

							if(imageFile.write(event.media)){
								self.imagePath = imageFile.getNativePath();
								self.media = event.media;
							}else{
								alert('カメラから画像を取得できませんでした');
							}
								

						}
						//取得成功時　end

					},

					cancel : function(event) {
							self.setImage('/images/icon/pallet_default.png');
							self.imagePath=null;
							self.media = null;
					},

					error : function(event) {
						alert('カメラから画像を取得できませんでした');
						self.imagePath=null;
						self.meida = null;
					},

					saveToPhotoGallery : true,
					allowEditing : true,
					mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]

				});

			}

			if(dialog_button.index == 1) {
				
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						//成功時
						if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
							self.setImage(event.media);
							var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'data_images');
							if(! dir.exists()) {
								dir.createDirectory();
							}
							
							var imageFile = Ti.Filesystem.getFile(dir.resolve(), require('/util/random').getRandom(10) + '.jpg');

							if(imageFile.write(event.media)){
								//alert('画像の保存に成功しました:' + imageFile.getNativePath());
								self.imagePath = imageFile.getNativePath();
								self.media = event.media;
								
							}else{
								alert('画像の保存に失敗しました:');
							}
						}

					},
					error : function(err) {
						alert('エラーが発生しました。画像を検出できませんでした');
						self.imagePath = null;
						self.media = null;
					},
					cancel : function() {
						self.setImage('/images/icon/pallet_default.png');
						self.imagePath = null;
						self.media = null;
						return;
					}
				});
				
			}
			if(dialog_button.cancel == true) {
				
				self.setImage('/images/icon/pallet_default.png');
				self.imagePath = null;
				return;
			}
			//addevent end

		});
		
	});

	return self;
}

module.exports = MenuProjectFrame;